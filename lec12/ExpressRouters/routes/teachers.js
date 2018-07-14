const express = require('express')
const route = express.Router()

let teachers = [
    'X','Y','Z'
]

route.get('/', (r,s)=>{s.send(teachers)})

route.get('/add',(r,s)=>{
    teachers.push(r.query.name)
    s.redirect('.')
})

exports.route=route;