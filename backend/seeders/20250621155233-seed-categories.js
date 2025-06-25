'use strict';

module.exports = {
async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Categories', [
  {
  id: 1,
  name: 'Portable Poker Mats',
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  id: 2,
  name: 'Dining Tops',
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  id: 3,
  name: 'Poker Chips',
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  id: 4,
  name: 'Poker Table Covers',
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  id: 5,
  name: 'Chairs',
  createdAt: new Date(),
  updatedAt: new Date()
  }
  ], {});
  },

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Categories', null, {});
  }
};