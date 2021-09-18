const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares');


const auth = require('./auth')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(cookieParser());

//Routes go here
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to community API! 🌈💚'
    });
});

app.use('/auth', auth);



app.use(notFound);
app.use(errorHandler);

module.exports = app;