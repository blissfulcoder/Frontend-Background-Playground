const express = require('express')
const route = express.Router()

let students = [
    'A','B','C'
]

route.get('/', (r,s)=>{s.send(students)})

route.get('/add',(r,s)=>{
    students.push(r.query.name)
    s.redirect('.')
})

exports.route=route;