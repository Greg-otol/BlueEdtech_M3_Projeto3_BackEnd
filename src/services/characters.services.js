const RickAndMorty = require("../models/Characters");

const createCharacterService = async (newCharacter) => {
  const character = await RickAndMorty.create(newCharacter);
  return character;
};

const findAllCharactersService = async () => RickAndMorty.find();

const findOneCharacterService = async (idParam) => RickAndMorty.findById(idParam);

const updateCharacterService = async (idParam, characterEdited) => {
  const updateCharacter = await RickAndMorty.findByIdAndUpdate(idParam, characterEdited)
  .setOptions({ returnOriginal: false });
  return updateCharacter;
};

const deleteCharacterService = async (idParam) => {
  return await RickAndMorty.findByIdAndDelete(idParam);
};

module.exports = {
  createCharacterService,
  findAllCharactersService,
  findOneCharacterService,
  updateCharacterService,
  deleteCharacterService
};
