'use strict'
const express = require('express');
const connection = require('../db');
const upd = express.Router();

upd.put('books/:id ', function (req, res, next) {
    connection.execute('UPDATE books SET title=?,author=?,published_year=?,genre=?,available=? WHERE id=?',
            [req.body.title, req.body.author, req.body.published_year, req.body.genre, req.body.available, req.params.id])
        .then(() => {
            console.log("UPDATE Syccessfully");
        }).catch((err) => {
            console.log(err);
            res.end();
        })
})
module.exports = upd;