const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  restaurants: [
    {
      restaurant: { type: String, required: true },
      reviews: [
        {
          id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          reviewer: { type: String },
          rating: { type: Number },
          comment: { type: String },
          reply: { type: String },
        },
      ],
    },
  ],
});

ownerSchema.plugin(uniqueValidator);

ownerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
