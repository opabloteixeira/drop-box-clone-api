const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://pablo:2236@cluster0-fvkql.mongodb.net/base?retryWrites=true',
    {
        useNewUrlParser: true,
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes')); 

app.listen(3333);