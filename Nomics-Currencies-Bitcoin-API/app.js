const express=require('express')
const axios=require('axios')
const dotenv=require('dotenv').config()
const port = process.env.port

const app=express()  
app.use(express.json())


var my_data=require('./Database/T_meta')

var T_M_data=express.Router()
app.use('/',T_M_data)
require('./routes/T_meta_data')(T_M_data,axios,my_data)




app.listen(port,function(){
    console.log('your server is working on port no.. ',port)
})