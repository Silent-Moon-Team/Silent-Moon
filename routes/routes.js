const express = require('express');
const dataItem = require('../models/data')
const user = require('../models/user')
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// ?desc  Main/ Landing page (MAIN)  -   no auth required
// ?route  GET /

router.get('/', ensureGuest, (req, res) => {
    res.render('pages/main')
    console.log("this is welcome page from routes");
})

// ?desc  Login  page   -  ! NO AUTH required - page is for logging in!!
// ?route  GET /

router.get('/login', ensureGuest, (req, res) => {
    res.render('pages/login')
    console.log("this is from LOGIN routes");

})
// ?desc  Yoga  page (general info)  -  ! NO AUTH required
// ?route  GET /

router.get('/yoga', (req, res) => {
    dataItem.find()
        .then(result => {
            console.log("this is from LOGIN routes");
            //console.log(result)
            res.render('pages/yoga', { result })
        })
        .catch(err => console.log(err))
})


//******************************** */
//  BELOW ROUTES WITH REQUIRED LOGIN
//******************************** */



// ?desc  Main page   -  ! WITH AUTH!!
// ?route  GET /

router.get('/home', ensureAuth, (req, res) => {
    res.render('pages/home')
    console.log("this is from home routes");

})


router.get('/profile', ensureAuth, (req, res) => {

    console.log(req.user.googleId);
    console.log(req.user.displayName);


    res.render('pages/profile', {name: req.user.firstName})
    console.log("this is from LOGIN routes");

})

router.get('/meditation', ensureAuth, (req, res) => {
    res.render("pages/meditation");
})


router.get('/med_player', ensureAuth,  (req, res) => {
    res.render("pages/meditation_player");
})

router.get('/music', ensureAuth,  (req, res) => {
    res.render("pages/music");
})

router.get('/reminders', ensureAuth,  (req, res) => {
    res.render("pages/reminders");
})

router.get('/yoga_details', ensureAuth, (req, res) => {
    res.render("pages/yoga_details");
})

module.exports = router;