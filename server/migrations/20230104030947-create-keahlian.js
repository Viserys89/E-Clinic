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
    await queryInterface.createTable('keahlian', {
      keahlian_id: {
        autoIncrement: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      nama: {
        type: Sequelize.STRING(255),
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
      tableName: 'keahlian',
      schema: 'ref',
      timestamps: false,
      indexes: [
        {
          name: "keahlian_pkey",
          unique: true,
          fields: [
            { name: "keahlian_id" },
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
    await queryInterface.dropTable({tableName: 'keahlian', schema: 'ref'});
  }
};
