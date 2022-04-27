'use strict'

const express = require('express');
const morgan = require('morgan');
const path = require('path')
const { engine } = require('express-handlebars');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api', require('../src/routes/tasks.routes'));

// Template
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views/hbs'))
app.engine('hbs', 
    engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    partialDir: __dirname + 'views/hbs/partials'
}))

module.exports = app;