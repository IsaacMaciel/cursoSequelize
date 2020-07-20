const bodyParser = require("body-parser");
const pessoas = require("./pessoasRouter");

const PessoaControler = require("../controllers/PessoaControler");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(pessoas);
};
