const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/characters.routes');
const connectionDB = require('./src/database/database');

const port = 3000;
const application = express();

connectionDB();

application.use(express.json());
application.use(cors());
application.use('/characters', routes);
application.use(function(req, res, next) {
  res.status(404).send({ message: "Requerimento inválido! Informe o ID ou os campos requeridos!" })
});

application.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
