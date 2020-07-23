const bodyParser = require("body-parser");
const pessoas = require("./pessoasRouter");
const turma = require("./turmaRouter");
const nivel = require("./nivelRouter");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(pessoas);
    app.use(turma);
    app.use(nivel);
};
