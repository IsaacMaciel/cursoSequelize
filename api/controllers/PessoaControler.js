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
}

module.exports = PessoaController;
