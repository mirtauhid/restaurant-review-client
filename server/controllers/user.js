const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.post('/', async (request, response, next) => {
  const { body } = request;
  const saltRounds = 10;
  if (body.password.length >= 8) {
    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const user = new User({
      name: body.name,
      email: body.email,
      passwordHash,
      restaurants: [],
    });
    try {
      const savedUser = await user.save();
      if (savedUser) {
        response.json(savedUser);
      } else {
        response.send(404).end();
      }
    } catch (exception) {
      next(exception);
    }
  } else {
    response.status(400).send('Password length should be minimum 8');
  }
});

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('restaurants', {
    title: 1,
    owner: 1,
  });

  response.json(users);
});

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const user = await User.find({ ObjectId: id }).populate('restaurants', {
    title: 1,
    owner: 1,
  });

  response.json(user);
});

module.exports = usersRouter;
