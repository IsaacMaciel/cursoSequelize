const { Router } = require("express");
const PessoaController = require("../controllers/PessoaControler");

const router = Router();

router.get("/pessoas", PessoaController.getAllPeople);

module.exports = router;
