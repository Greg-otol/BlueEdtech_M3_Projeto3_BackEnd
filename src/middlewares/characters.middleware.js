const mongoose = require("mongoose");
const RickAndMorty = require("../models/Characters");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(206).send({ message: "Personagem não encontrado!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;
  if (!character || !character.name || !character.imageUrl) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos do Personagem!" });
  }
  next();
};

const validAllCharacters = async (req, res, next) => {
  const character = await RickAndMorty.find();
  if (character.length == 0) {
    return res.status(400).send({ message: "Nenhum personagem cadastrado!" });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
  validAllCharacters,
};
