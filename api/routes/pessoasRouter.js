const { Router } = require("express");
const PessoaController = require("../controllers/PessoaControler");

const router = Router();

router.get("/pessoas", PessoaController.getAllPeople);
router.get("/pessoas/:id", PessoaController.getPerson);
router.post("/pessoas", PessoaController.createPerson);
router.put("/pessoas/:id", PessoaController.updatePerson);
router.delete("/pessoas/:id", PessoaController.destroyPerson);

router.get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.getOneMatricula
);

module.exports = router;
