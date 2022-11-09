//GLOBALS!
const { application } = require('express')
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express();



//Listeners
app.listen(PORT, () => console.log(`GO TIME! gitPub Listening on port ${PORT}`))
