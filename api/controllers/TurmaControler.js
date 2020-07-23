const database = require("../models");

class TurmaController {
    static async AllTurma(req, res) {
        try {
            const allTurma = await database.Turmas.findAll();
            return res.status(200).json(allTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async oneTurma(req, res) {
        try {
            const { id } = req.params;
            const oneTurma = await database.Turmas.findByPk(id);
            return res.status(200).json(oneTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createTurma(req, res) {
        try {
            const newTurma = req.body;
            const createTurma = await database.Turmas.create(newTurma);
            return res.status(200).json(createTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateTurma(req, res) {
        try {
            const { id } = req.params;
            const updateInfo = req.body;
            const updateTurma = await database.Turmas.update(updateInfo, {
                where: { id },
            });
            return res.status(200).json(updateTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteTurma(req, res) {
        try {
            const { id } = req.params;
            await database.Turmas.destroy({ where: { id } });
            return res.status(200).json(`Turma deletada com sucesso`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;
