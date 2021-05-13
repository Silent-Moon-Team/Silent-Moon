//! all routes going from here

const express = require('express');

const router = express.Router();

// ?desc  Login/ Landing page   -   no auth required
// ?route  GET /

router.get('/', (req, res) => {
    res.render('pages/main')
    console.log("this is welcome page from routes");
})

// !desc  Main page   -  ! NO AUTH YET!!
// ?route  GET /

router.get('/home', (req, res) => {
    res.render('pages/home')
    console.log("this is from home routes");

})

// !desc  Login  page   -  ! NO AUTH YET!!
// ?route  GET /

router.get('/login', (req, res) => {
    res.render('pages/login')
    console.log("this is from LOGIN routes");

})




// router.post('/signup', (req, res) => {
//     res.send('send')
// })

module.exports = router;