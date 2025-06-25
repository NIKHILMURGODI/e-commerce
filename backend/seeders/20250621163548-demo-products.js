module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Portable Poker Party Mat - World Traveler',
        // image: 'https://dummyimage.com/300x300/cccccc/000000&text=Poker+Mat',
        image:'https://cdn.bbopokertables.com/upload/file/2015/11/20151101213830443044.jpg',
        price: 1599,
        discountPrice: 1299,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black Round Dining Top (Nighthawk/Ginza)',
        // image: 'https://dummyimage.com/300x300/cccccc/000000&text=Dining+Top',
        image:'https://cdn.bbopokertables.com/upload/file/temp/thumbnail_quality/75/600_400/_upload_file_2015_10_20151016140530233023.jpg',
        price: 3999,
        discountPrice: 3499,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classic Casino Poker Chips',
        // image: 'https://dummyimage.com/300x300/cccccc/000000&text=Poker+Chips',
        image:'https://cdn.bbopokertables.com/template/asset/2021/09/chip/4.jpg',
        price: 1999,
        discountPrice: 1699,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Heavy Duty Poker Table Travel Bag - Fits UPT, UPT Jr., Aces Pro',
        // image: 'https://dummyimage.com/300x300/cccccc/000000&text=Travel+Bag',
        image:'https://cdn.bbopokertables.com/upload/file/2016/10/table_bag5.jpg',
        price: 999,
        discountPrice: 849,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Helmsley Chair - Black - Version 2',
        // image: 'https://dummyimage.com/300x300/cccccc/000000&text=Chair',
        image:'https://cdn.bbopokertables.com/template/asset/2020/08/03/2.jpg',
        price: 5499,
        discountPrice: 4999,
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
