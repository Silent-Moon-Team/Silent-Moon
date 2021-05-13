const express = require('express');

const connectDB = require('./config/db')

require('dotenv').config()

// *  * * * * * * * *      connection DBRef
//!    connection error - connection working on other db - see  .env
//?   created new user   - admin, this solved the problem
connectDB()


const app = express()


const PORT = process.env.PORT || 5000
app.use(express.static('public'))
app.set('view engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())
app.get('/', (req, res) => {
    res.render("pages/main");

})

app.get('/login', (req, res) => {
    res.render("pages/login");
})

app.get('/register', (req, res) => {
    res.render("pages/register");
})

app.get('/home', (req, res) => {
    res.render("pages/home");
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
