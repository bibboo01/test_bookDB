'use strict'
const express = require('express');
const connection = require('../db');
const del = express.Router();

del.delete('books/:id ', function (req, res, next) {
    connection.execute('DELETE FROM books WHERE id=?',
        [req.params.id])
    then(() => {
        console.log("DELETE Syccessfully");
    }).catch((err) => {
        console.log(err);
        res.end();
    })
})
module.exports = del;