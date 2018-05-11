const route = require('express').Router()

let students={
{name: "Raghav", course: "Launchpad"},
{name: "Deepak", course: "Pandora"}

}

route.get('/',(req,rSes) => res.send(students));

exports.route = route;