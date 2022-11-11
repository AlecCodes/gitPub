//GLOBALS!
const { application } = require('express')
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express();
const drinks = require('./models/drinks')

//GET ROUTE
app.get('/drinks', (req, res) =>{
    res.send(drinks)
})


//Listeners
app.listen(PORT, () => console.log(`GO TIME! gitPub Listening on port ${PORT}`))
