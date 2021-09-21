/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const express = require('express');
const restaurantsRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const Restaurant = require('../models/restaurant');
const Owner = require('../models/owner');
const User = require('../models/user');

restaurantsRouter.get('/', async (request, response) => {
  const restaurant = await Restaurant.find({}).populate(
    'Owner',
    { owner: 1 },
    'User',
    { user: 1 }
  );

  response.json(restaurant);
});

restaurantsRouter.get('/:id', async (request, response, next) => {
  try {
    const restaurant = await Blog.findById(request.params.id).populate(
      'Owner',
      { owner: 1 },
      'User',
      { user: 1 }
    );
    if (restaurant) {
      response.json(restaurant);
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

restaurantsRouter.put('/:id', async (request, response, next) => {
  const { body } = request;

  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      request.params.id,
      body
    );
    if (restaurant) {
      response.json(restaurant);
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

restaurantsRouter.delete('/:id', async (request, response, next) => {
  const { body, user } = request;

  const restaurant = await Restaurant.findById(request.params.id);

  const restaurantId = restaurant.id;

  if (restaurant.owner.toString() === restaurantId.toString()) {
    try {
      const deleteRestaurant = await Restaurant.findByIdAndDelete(
        request.params.id
      );
      if (deleteRestaurant) {
        response.json(restaurant);
      } else {
        response.status(404).end();
      }
    } catch (exception) {
      next(exception);
    }
  }
});

restaurantsRouter.post('/', async (request, response, next) => {
  const { body, token } = request;

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }

  const owner = await Owner.findById(decodedToken.id);

  try {
    const restaurant = new Restaurant({
      name: body.name,
      address1: body.address1,
      address2: body.address2,
      owner: body.owner,
      reviews: [],
    });

    const result = await restaurant.save();
    owner.restaurants = owner.restaurants.concat(result._id);
    await restaurant.save();

    response.status(201).json(result);
  } catch (exception) {
    next(exception);
  }
});

module.exports = blogsRouter;
