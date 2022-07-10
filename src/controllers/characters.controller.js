const charactersServices = require('../services/characters.services');

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await charactersServices.createCharacterService(
    character,
  );
  res.status(201).send({
    message: `Personagem '${character.name.toUpperCase()}' criada com sucesso!`,
    newCharacter,
  });
};

const findAllCharactersController = async (req, res) => {
  const allCharacters = await charactersServices.findAllCharactersService();
  if (allCharacters.length === 1) {
    res.send({
      message: `Total de ${allCharacters.length} personagem encontrado.`,
      allCharacters
    });
  } else {
    res.send({
      message: `Total de ${allCharacters.length} personagens encontrados.`,
      allCharacters
    });
  }
};

const findOneCharacterControlle = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await charactersServices.findOneCharacterService(idParam);
  res.send({
    message: `Personagem ${chosenCharacter.name} encontrado.`,
    chosenCharacter
  });
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const chosenToDoList = await charactersServices.findOneCharacterService(
    idParam
  );
  const characterEdit = req.body;
  const updatedCharacter = await charactersServices.updateCharacterService(
    idParam,
    characterEdit
  );
  res.status(200).send({
    message: `O personagem '${chosenToDoList.name.toUpperCase()}' foi editada para '${characterEdit.name.toUpperCase()}'!`,
    updatedCharacter,
  });
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await charactersServices.findOneCharacterService(idParam);
  await charactersServices.deleteCharacterService(idParam);
  res.status(200).send({
    message: `Personagem '${chosenCharacter.name.toUpperCase()}' removido com sucesso!`,
  });
};

module.exports = {
  createCharacterController,
  findAllCharactersController,
  findOneCharacterControlle,
  updateCharacterController,
  deleteCharacterController
};
