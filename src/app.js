const express = require('express');
const cors = require('cors');
const path = require('path');

const counterRouter = require('./routes/wordRouter');
const { handleErrors, handle404Error } = require('./utils/errorHandler');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(cors());

app.use('/api', counterRouter);

app.use(handle404Error);

app.use(handleErrors);

module.exports = app;
