const express = require('express');
const dataItem = require('../models/data')
const user = require('../models/user')
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Spotify

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
});
// Retrieve an access token
spotifyApi
    .clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(error => console.log('Something went wrong when retrieving an access token', error));

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
    res.render('pages/home', {name: req.user.firstName})
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


router.get('/med_player/:counter', ensureAuth, (req, res) => {
    spotifyApi.getPlaylist('37i9dQZF1DX9uKNf5jGX6m')
    .then(function (data) {
        console.log('Some information about this playlist', data.body);
        //res.json(data.body)
        res.render('pages/meditation_player', { data: data.body.tracks.items[req.params.counter], counter:  Number(req.params.counter) })
    }, function (err) {
        console.log('Something went wrong!', err);
    });
})

router.get('/music', ensureAuth, (req, res) => {
    spotifyApi.getPlaylist('37i9dQZF1DX9uKNf5jGX6m')
    .then(function (data) {

        res.render('pages/music', { data: data.body.tracks.items })
    }, function (err) {
        console.log('Something went wrong!', err);
    });
    
})

router.get('/reminders', ensureAuth, (req, res) => {
    res.render("pages/reminders");
})

router.get('/yoga_details', ensureAuth, (req, res) => {
    res.render("pages/yoga_details");
})

module.exports = router;