const { Router } = require("express");

const NivelController = require("../controllers/NivelControler");

const router = Router();

router.get("/niveis", NivelController.getAllNivel);
router.get("/niveis/:id", NivelController.getOneNivel);
router.post("/niveis", NivelController.createNivel);
router.put("/niveis/:id", NivelController.updateNivel);
router.delete("/niveis/:id", NivelController.deleteNivel);

module.exports = router;
