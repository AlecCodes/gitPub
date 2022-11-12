//GLOBALS!
const { application } = require('express')
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express();
const drinks = require('./models/drinks')
const foods = require('./models/foods')

////////////////////////
//MIDDLEWARE - We need this because express is looking for a static folder for our css files. huh. 
app.use("/static", express.static("public"));

////////////////////////

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

//SHOW Route show food page
app.get('/foods/:id',(req,res) =>{
    res.render('food_show.ejs',{
        food : foods[req.params.id]
    })
})

//Listeners
app.listen(PORT, () => console.log(`GO TIME! gitPub Listening on port ${PORT}`))
