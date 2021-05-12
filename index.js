const express = require('express');
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000
app.use(express.static('public'))
app.set('view engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())
app.get('/', (req, res) => {
    res.send("main object");
})
app.listen(PORT, () => {
    console.log('listening at http:localhost:5000');
})

//Steffen war hier
//philipp auch 
//Houra hier
