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
    await queryInterface.createTable('penyakit', {
      kode_penyakit: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      penyakit_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: { tableName: 'daftar_penyakit', schema: 'ref' },
          key: 'penyakit_id'
        }
      },
      pasien_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: { tableName: 'pasien', schema: 'public' },
          key: 'pasien_id'
        }
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
      tableName: 'penyakit',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "penyakit_pkey",
          unique: true,
          fields: [
            { name: "kode_penyakit" },
          ]
        },
      ]
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable({ tableName: 'penyakit', schema: 'public' });
  }
};
