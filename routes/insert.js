'use strict'
const express = require('express');
const connection = require('../db');
const ins = express.Router();

ins.post('/books', function (req, res, next) {
    connection.execute('INSERT INTO books( title, author, published_year, genre, available) VALUES (?,?,?,?,?)',
            [req.body.title, req.body.author, req.body.published_year, req.body.genre, req.body.available])
        .then(() => {
            console.log("INSERT Syccessfully");
        }).catch((err) => {
            console.log(err);
            res.end();
        })
})
module.exports = ins;