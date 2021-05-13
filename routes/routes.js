const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest} = require('../middleware/auth')

// ?desc  Main/ Landing page (MAIN)  -   no auth required
// ?route  GET /

router.get('/', ensureGuest,  (req, res) => {
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
    res.render('pages/yoga')
    console.log("this is from LOGIN routes");
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


router.get('/profile', ensureAuth,  (req, res) => {
    res.render('pages/profile')
    console.log("this is from LOGIN routes");

})

router.get('/meditation', ensureAuth,  (req, res) => {
    res.render("pages/meditation");
})



module.exports = router;