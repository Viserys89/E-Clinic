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
    await queryInterface.bulkInsert({tableName: 'pekerjaan', schema: 'ref'}, [
      {
        nama: "Tidak bekerja"
      },
      {
        nama: "Nelayan"
      },
      {
        nama: "Petani"
      },
      {
        nama: "PNS/TNI/Polri"
      },
      {
        nama: "Karyawan Swasta"
      },
      {
        nama: "Pedagang Kecil"
      },
      {
        nama: "Pedagang Besar"
      },
      {
        nama: "Wiraswasta"
      },
      {
        nama: "Wirausaha"
      },
      {
        nama: "Buruh"
      },
      {
        nama: "Pensiunan"
      },
      {
        nama: "Tenaga Kerja Indonesia"
      },
      {
        nama: "Tidak dapat diterapkan"
      },
      {
        nama: "Sudah Meninggal"
      },
      {
        nama: "Lainnya"
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
    await queryInterface.bulkDelete({tableName: 'pekerjaan', schema: 'ref'}, null, {});
  }
};
