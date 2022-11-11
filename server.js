//GLOBALS!
const { application } = require('express')
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express();
const drinks = require('./models/drinks')

//SHOW ROUTE
app.get('/drinks', (req, res) =>{
    res.render('drinks_index.ejs', {drinks})
})

app.get('/drinks/:id',(req,res) =>{
    res.send(req.params.id)
})

//Listeners
app.listen(PORT, () => console.log(`GO TIME! gitPub Listening on port ${PORT}`))
