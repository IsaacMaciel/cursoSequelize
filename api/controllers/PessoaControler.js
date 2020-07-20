const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize();
const database = require("../models/pessoas")(sequelize, DataTypes);

class PessoaController {
    static async getAllPeople(req, res) {
        try {
            const getAllPeople = await database.findAll();
            return res.status(200).json(getAllPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;
