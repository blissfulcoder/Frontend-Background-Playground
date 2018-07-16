const express = require('express')
const path = require('path')
const app = express();

app.use('/',express.static(path.join(__dirname,'frontend')))

app.post('/todos/add',(req,res)=>{
    console.log(req)
})

app.listen(5454, ()=> console.log("Server started"));
