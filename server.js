require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const clientRouter = require('./routes/client');
const messageRouter = require('./routes/message');


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env['DATABASE_URL']);
}

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/client', clientRouter);
app.use('/message', messageRouter);


app.listen(3000)      