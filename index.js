const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const dataItem = require('./models/data');

// const cookieSession = require('cookie-session')
const session = require('express-session');

const router = require('./routes/routes')

const connectDB = require('./config/db')

require('dotenv').config()

// google passport config
require('./config/passport')(passport)

const app = express()

// *  * * * * * * * *      connection DB
//!    connection error - connection working on other db - see  .env
//?   created new user   - admin, this solved the problem
connectDB()


const PORT = process.env.PORT || 5000

// static foldees -   css...
app.use(express.static('public'))

// ejs on:
app.set('view engine', 'ejs')

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,

}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())


// * ********************************
// ******      ROUTINGS  *************
// * ********************************


// ?    AUTH

app.use('/auth', require('./routes/auth'))


// *****    Route to HOME - welcome page (no auth needed)

app.use('/', router)

// ******* created - commented direct route below:
// app.get('/', (req, res) => {
//     res.render("pages/main"); 
// })

// ----------------------------------------------------------------

// ! *****    Route to HOME - welcome page (no auth yet)

app.use('/home', router)

// ******* created - commented direct route below:
// app.get('/home', (req, res) => {
//     res.render("pages/home");
// })

// ----------------------------------------------------------------

// *****    Route to LOGIN PAGE - welcome page (no auth yet)
app.use('/login', router)

// ******* created - commented direct route below:
// app.get('/login', (req, res) => {
//     res.render("pages/login");
// })

// ----------------------------------------------------------------

// *****    Route to LOGIN PAGE - welcome page (no auth yet)
app.use('/profile', router)

// ******* created - commented direct route below:

// app.get('/profile', (req, res) => {
//     res.render("pages/profile");
// })

// ----------------------------------------------------------------

//  yoga - general infos/ no auth required
app.use('/yoga', router)


// meditation   bla bla kA was hier sein soll, aber muss eingeloggt sein
app.use('/meditation', router)


app.use('/med_player', router)

app.get('/music', router)

app.get('/reminders', router)


app.get('/yoga_details', router)

app.get('/main', router)

// !   NICHT BEARBEITETE ROUTES BELOW

//  NEEDED?
app.get('/register', (req, res) => {
    res.render("pages/register");
})



app.listen(PORT, () => {
    console.log(`listening at http:localhost:${PORT}`);
})

//Steffen war hier
//philipp auch 
//Houra hier
