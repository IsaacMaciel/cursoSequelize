const { Router } = require("express");

const TurmaController = require("../controllers/TurmaControler");

const router = Router();

router.get("/turmas", TurmaController.AllTurma);
router.get("/turmas/:id", TurmaController.oneTurma);
router.post("/turmas", TurmaController.createTurma);
router.put("/turmas/:id", TurmaController.updateTurma);
router.delete("/turmas/:id", TurmaController.deleteTurma);

module.exports = router;
