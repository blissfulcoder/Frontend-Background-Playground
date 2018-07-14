const express = require('express')
const path = require('path')

const app = express()

const routes = {
    students: require('./routes/students').route,
    teachers: require('./routes/teachers').route
}

app.get('/',(req,res)=>{
    res.send("HI")
})
app.use('/students',routes.students)
app.use('/teachers',routes.teachers)


app.listen(2424,()=>{
    console.log("Server started at http://localhost:2424/")
})