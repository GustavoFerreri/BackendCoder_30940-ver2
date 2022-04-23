'use strict'

const express = require('express');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('../src/routes/tasks.routes'));

// Template


module.exports = app;