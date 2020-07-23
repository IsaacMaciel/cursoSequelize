const database = require("../models");

class PessoaController {
    static async getAllPeople(req, res) {
        try {
            const getAllPeople = await database.Pessoas.findAll();
            return res.status(200).json(getAllPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPerson(req, res) {
        const { id } = req.params;
        try {
            const person = await database.Pessoas.findByPk(id);
            console.log(person.dataValues.nome);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPerson(req, res) {
        const person = req.body;
        try {
            const personCreate = await database.Pessoas.create(person);
            return res.status(200).json(personCreate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params;
        const updateInfo = req.body;

        try {
            await database.Pessoas.update(updateInfo, { where: { id } });
            const personUpdate = await database.Pessoas.findOne({
                where: { id },
            });

            return res.status(200).json(personUpdate);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async destroyPerson(req, res) {
        const { id } = req.params;

        try {
            const person = await database.Pessoas.findByPk(id);
            await database.Pessoas.destroy({ where: { id } });
            return res
                .status(200)
                .json(
                    `Usuário: ${person.dataValues.nome} deletado com sucesso`
                );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getOneMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const find = await database.Matriculas.findOne({
                where: {
                    id: matriculaId,
                    estudante_id: estudanteId,
                },
            });
            return res.status(200).json(find);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;
