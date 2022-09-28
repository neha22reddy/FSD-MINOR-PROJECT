const express=require('express')

const mongoose=require('mongoose')

const url='mongodb://localhost/adi'

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

const app=express();
app.use(express.json())
const r= require('./controller/control')
app.use('/student',r)

con.on('open', ()=>{
console.log("welcome");

})

app.listen(9000,()=>{
    console.log('server connected')
})