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
    await queryInterface.createTable('dokter', {
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
        type: Sequelize.CHAR(1),
        allowNull: true
      },
      keahlian_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {tableName: 'keahlian', schema: 'ref'},
          key: 'keahlian_id'
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
      tableName: 'dokter',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "dokter_pkey",
          unique: true,
          fields: [
            { name: "dokter_id" },
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
    await queryInterface.dropTable({tableName: 'dokter', schema: 'public'});
  }
};
