const { Sequelize } = require("sequelize");
const database = require("../database");

const dokter = database.define("dokter", {
    dokter_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      nama: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      nik: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      jenis_kelamin: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      keahlian_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      }
})

module.exports = dokter;