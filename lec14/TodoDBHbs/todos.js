const route = require('express').Router()

route.get('/',(req,res)=>{
    res.send('All todos')
})

route.post('/add',(req,res)=>{
    res.redirect('..')
})

exports.route = route;