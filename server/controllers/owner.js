const bcrypt = require('bcrypt');
const OwnersRouter = require('express').Router();
const Owner = require('../models/owner');

OwnersRouter.post('/', async (request, response, next) => {
  const { body } = request;
  const saltRounds = 10;
  if (body.password.length >= 8) {
    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const owner = new Owner({
      name: body.name,
      email: body.email,
      username: body.username,
      passwordHash,
      restaurants: [],
    });
    try {
      const savedOwner = await owner.save();
      if (savedOwner) {
        response.json(savedOwner);
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

OwnersRouter.get('/', async (request, response) => {
  const owners = await Owner.find({}).populate('restaurants');

  response.json(owners);
});

OwnersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const owner = await Owner.findById(id).populate('restaurants', {
    name: 1,
    reviews: 1,
  });

  response.json(owner);
});

module.exports = OwnersRouter;
