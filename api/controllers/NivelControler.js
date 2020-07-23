const database = require("../models");

class NivelControler {
    static async getAllNivel(req, res) {
        try {
            const allNivel = await database.Niveis.findAll();
            return res.status(200).json(allNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getOneNivel(req, res) {
        try {
            const { id } = req.params;
            const nivel = await database.Niveis.findByPk(id);
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async createNivel(req, res) {
        try {
            const infoNivel = req.body;
            const createNivel = await database.Niveis.create(infoNivel);
            return res.status(200).json(createNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateNivel(req, res) {
        try {
            const { id } = req.params;
            const updateNivel = req.body;
            await database.Niveis.update(updateNivel, { where: { id } });
            const updated = await database.Niveis.findByPk(id);
            return res.status(200).json(updated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteNivel(req, res) {
        const { id } = req.params;
        try {
            const nivelDeleted = await database.Niveis.findByPk(id);
            await database.Niveis.destroy(id);
            return res
                .status(200)
                .json(
                    `Nivel: ${nivelDeleted.dataValues.descr_nivel} deletado com sucesso`
                );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NivelControler;
