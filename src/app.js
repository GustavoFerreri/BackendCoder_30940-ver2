'use strict'

// Declaramos express
const express = require('express');
const app = express();

// Declaramos midleware
const morgan = require('morgan');
const path = require('path');

// Declaramos handlebars
const { engine } = require('express-handlebars');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api', require('../src/routes/tasks.routes'));

app.use(express.static(path.join(__dirname, 'src')));

// Template
app.set('view engine', 'hbs');
app.set('views', path.join( __dirname, './views'));
app.engine('hbs', 
    engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
}))

module.exports = app;