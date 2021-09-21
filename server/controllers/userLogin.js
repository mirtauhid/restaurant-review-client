const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userLoginRouter = require('express').Router();
const User = require('../models/user');

userLoginRouter.post('/', async (request, response) => {
  const { body } = request;
  const user = await User.findOne({ username: body.username });
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({ error: 'wrong username or password' });
  }

  const userForToken = {
    name: user.user,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  response.status(200).send({ token, name: user.user });
});

module.exports = userLoginRouter;
