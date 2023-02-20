'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert({tableName: 'daftar_penyakit', schema: 'ref'}, [
      {
        nama: "Diare"
      },
      {
        nama: "Influenza"
      },
      {
        nama: "Anemia"
      },
      {
        nama: "Tumor"
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete({tableName: 'daftar_penyakit', schema: 'ref'}, null, {});
  }
};
