const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ownerLoginRouter = require('express').Router();
const Owner = require('../models/owner');

ownerLoginRouter.post('/', async (request, response) => {
  const { body } = request;
  const owner = await Owner.findOne({ username: body.username });
  const passwordCorrect =
    owner === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(owner && passwordCorrect)) {
    return response.status(401).json({ error: 'wrong username or password' });
  }

  const ownerForToken = {
    name: owner.owner,
    id: owner._id,
  };

  const token = jwt.sign(ownerForToken, process.env.SECRET);

  response.status(200).send({ token, name: owner.owner });
});

module.exports = ownerLoginRouter;
