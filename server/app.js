const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');

const app = express();

const userLoginRouter = require('./controllers/userLogin');
const ownerLoginRouter = require('./controllers/ownerLogin');

const ownersRouter = require('./controllers/owner');
const usersRouter = require('./controllers/user');
const restaurantsRouter = require('./controllers/restaurant');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

const { DB_URI } = config;

logger.info('Connecting to Database...');

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    logger.info('Connected to Database');
  })
  .catch((error) => {
    logger.error(error);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use('/api/user_login', userLoginRouter);
app.use('/api/owner_login', ownerLoginRouter);
app.use('/api/users', usersRouter);
app.use('/api/owners', ownersRouter);
app.use('/api/restaurants', restaurantsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
