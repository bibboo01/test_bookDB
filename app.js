const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const Read = require('./routes/select');
const Insert = require('./routes/insert');
const Update = require('./routes/update');
const Delete = require('./routes/delete');

app.use('/api', Read);
app.use('/api', Insert);
app.use('/api', Update);
app.use('/api', Delete);

app.use('/', function (req, res) {
    res.sendStatus(404);
})


app.listen(
    PORT,
    () => console.log('localhost:' + PORT)
);