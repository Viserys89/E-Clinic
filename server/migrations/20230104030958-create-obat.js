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
    await queryInterface.createTable('obat', {
      obat_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      pasien_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: { tableName: 'pasien', schema: 'public' },
          key: 'pasien_id'
        }
      },
      nama_obat: {
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
      tableName: 'obat',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "obat_pkey",
          unique: true,
          fields: [
            { name: "obat_id" },
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
    await queryInterface.dropTable({ tableName: 'obat', schema: 'public' });
  }
};
