const Sequelize = require('sequelize');
const Dataypes = Sequelize.Datatypes;
const DB = require('../config.json').DB

const db = new Sequelize(
    DB.DATABASE,
    DB.USER,
    DB.PASSWORD
    {host:DB.HOST,
        dialect: 'mysql'
});

const Todo = db.define('todos', )