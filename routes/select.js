'use strict'
const express = require('express');
const connection = require('../db');
const Red = express.Router();

Red.get('/books', function (req, res) {
    connection.execute('SELECT * FROM books')
        .then((result) => {
            var rawData = result[0];
            res.send(rawData);
            console.log("SHOW Syccessfully");
        }).catch((err) => {
            console.log(err);
            res.end();
        })
});
Red.get('/books/:id ', function (req, res) {
    connection.execute('SELECT * FROM books WHERE id=?',
            [req.params.id])
        .then((result) => {
            var rawData = result[0];
            res.send(rawData);
            console.log("SHOW Syccessfully");
        }).catch((err) => {
            console.log(err);
            res.end();
        })
});
module.exports = Red;