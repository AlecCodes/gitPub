//GLOBALS!
const { application } = require('express')
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express();
const drinks = require('./models/drinks')
const foods = require('./models/foods')
//SHOW ROUTE
app.get('/drinks', (req, res) =>{
    res.render('drinks_index.ejs', {drinks,foods})
})

//SHOW Route - show drink page
app.get('/drinks/:id',(req,res) =>{
    res.render('show.ejs',{
        drink:drinks[req.params.id]
    })
})

//Listeners
app.listen(PORT, () => console.log(`GO TIME! gitPub Listening on port ${PORT}`))
