const route = require('express').Router()

let students=[
{name: "Raghav", course: "Launchpad"},
{name: "Deepak", course: "Pandora"}

]

route.get('/',(req,res) => res.render('students',{title: "List of students", heading: "Students",students:students}));

exports.route = route;