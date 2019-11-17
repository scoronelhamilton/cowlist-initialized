const express = require('express');
const db = require('./db');
const router = require('./routes');
var morgan = require('morgan');
var parser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('./client/dist'));
app.use(morgan('dev'));
app.use(parser.json());

// Routes
app.use('/', router);

app.listen(port, () => console.log(`Cow app listening on port ${port}!`))