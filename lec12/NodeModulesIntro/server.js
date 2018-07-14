const express = require('express')
const path = require('path')

app = express()

app.get('/',function (req,res) {
    res.send("Hello")
})

app.get('/show/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'files','form.html'))
})

app.get('/show/greet',(req,res)=> {
  res.send(`Hello ${req.query.username}`)
})

app.listen(1212,() => {
    console.log("Server started at http://localhost:1212/ ")
})