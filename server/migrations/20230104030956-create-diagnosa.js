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
    await queryInterface.createTable('diagnosa', {
      diagnosa_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      dokter_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: { tableName: 'dokter', schema: 'public' },
          key: 'dokter_id'
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
      keluhan: {
        type: Sequelize.TEXT,
        allowNull: false
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
      tableName: 'diagnosa',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "diagnosa_pkey",
          unique: true,
          fields: [
            { name: "diagnosa_id" },
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
    await queryInterface.dropTable({ tableName: 'diagnosa', schema: 'public' });
  }
};
