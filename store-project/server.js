//load express
const express = require('express')
const methodOverride = require('method-override')

// Bring in mongoConfig function
const mongoConfig = require('./config')




//bring in mongoConfig funtion and port
require('dotenv').config()
const app = express()
//brinng in our packagesd routes
const sneakerRoutes = require('./routes/sneakerRoutes')


// Identify our port
const PORT = process.env.PORT


//setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/sneakers', sneakerRoutes)


// middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())
app.use(methodOverride("_method"))





// Listen to port
app.listen(PORT, () => { console.log('Listening on port: ', PORT) })




mongoConfig()