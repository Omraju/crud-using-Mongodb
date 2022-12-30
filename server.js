const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/employee')

mongoose.connect('mongodb://0.0.0.0:27017/testdb')
const db = mongoose.connection
mongodb://localhost:27017

// mongoose.connect("mongodb://0.0.0.0:27017/testdb",{ useNewUrlParser: true, useUnifiedTopology: true, },function(err){
//     if(!err){
//         console.log("DATBASE CONNECTED")
//     }
//     else{
//         console.log(err);
//     }
// })

db.on('error' , (err) => {
    console.log(err)
})

db.on('open' , () => {
    console.log('Databse Connection Established !')
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`)
})

app.use('/api/employee', EmployeeRoute)