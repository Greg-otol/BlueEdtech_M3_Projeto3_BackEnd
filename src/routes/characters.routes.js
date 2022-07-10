const routes = require('express').Router();
const charactersController = require('../controllers/characters.controller');
const {validId, validObjectBody, validAllCharacters} = require("../middlewares/characters.middleware");

routes.post("/create", validObjectBody, charactersController.createCharacterController);
routes.get("/all-characters", validAllCharacters, charactersController.findAllCharactersController);
routes.get("/character/:id", validId, charactersController.findOneCharacterControlle);
routes.put("/update/:id", validId, validObjectBody, charactersController.updateCharacterController);
routes.delete("/delete/:id", validId, charactersController.deleteCharacterController);

module.exports = routes;
