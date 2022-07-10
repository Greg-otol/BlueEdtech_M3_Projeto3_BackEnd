const mongoose = require('mongoose');

const RickAndMortySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const RickAndMorty = mongoose.model('rickandmorty', RickAndMortySchema);

module.exports = RickAndMorty;
