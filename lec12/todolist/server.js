const express = require('express')
const path = require('path')
const app = express();

let todos = []

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/addtodo', (req,res)=>{
    todos.push(req.query.newtodo)
    res.redirect('/showtodos')
})

app.get('/showtodos', (req,res)=>{
    res.send(
        `<form action ="/addtodo" method ="get">
        <input name ="newtodo" type="text">
        <input type="submit">
        </form>` + "<ul><li>"+todos.join("</li><li>")+
        "</li></ul>"

    )
})

global.x=20;
require('./public_html/lib.js')

app.listen(2212,()=>{
    console.info("Server started on http://localhost:2212/")
})