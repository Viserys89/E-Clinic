'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable(
      'userdata',
      {
        pasen_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull:true
        },
        kode_pasen: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING(30),
        },
        password: {
          type: Sequelize.STRING,
        },
        nik: {
          type: Sequelize.NUMERIC(16),
        },
        namalengkap: {
          type: Sequelize.STRING(50),
        },
        golongandarah: {
          type: Sequelize.STRING,
        },
        tempatlahir: {
          type: Sequelize.STRING,
        },
        tanggallahir: {
          type: Sequelize.DATEONLY,
        },
        alamat: {
          type: Sequelize.STRING,
        },
        rw: {
          type: Sequelize.NUMERIC(5, 0),
        },
        rt: {
          type: Sequelize.NUMERIC(5, 0),
        },
        kodepos: {
          type: Sequelize.NUMERIC,
        },
        kodewilayah: {
          type: Sequelize.STRING(10),
        },
        jeniskelamin: {
          type: Sequelize.STRING,
        },
        pekerjaan: {
          type: Sequelize.STRING,
        },
        accesstoken: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
      },
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('userdata');
  }
};
