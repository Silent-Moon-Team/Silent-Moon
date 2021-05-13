const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
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







app.get('/register', (req, res) => {
    res.render("pages/register");
})


app.get('/meditation', (req, res) => {
    res.render("pages/meditation");
})

app.get('/med_player', (req, res) => {
    res.render("pages/meditation_player");
})

app.get('/music', (req, res) => {
    res.render("pages/music");
})

app.get('/profile', (req, res) => {
    res.render("pages/profile");
})
app.get('/reminders', (req, res) => {
    res.render("pages/reminders");
})

app.get('/yoga_details', (req, res) => {
    res.render("pages/yoga_details");
})

app.get('/yoga', (req, res) => {
    res.render("pages/yoga");
})




app.listen(PORT, () => {
    console.log('listening at http:localhost:5000');
})

//Steffen war hier
//philipp auch 
//Houra hier