'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('klinik', {
      id_klinik: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      nama_klinik: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      rt: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      rw: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      kode_wilayah: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      kode_pos: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      no_kontak: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      no_wa: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      instagram: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      twitter: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      facebook: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      create_date: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn('now')
      },
      last_update: {
        type: Sequelize.DATE,
        allowNull: true
      },
      soft_delete: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        defaultValue: 0
      }
    }, {
      tableName: 'klinik',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "klinik_pkey",
          unique: true,
          fields: [
            { name: "id_klinik" },
          ]
        },
        {
          name: "email_klinik_ukey",
          unique: true,
          fields: [
            { name: "email" },
          ]
        },
      ]
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('klinik');
  }
};
