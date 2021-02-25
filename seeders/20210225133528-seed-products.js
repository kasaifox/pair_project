'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [{
      name: "ASUS PA32UC-K",
      price: 45789000,
      description: "32 INCH PROFESSIONAL MONITOR, 4K (3840 X 2160) X-RITE I1 DISPLAY PRO",
      image: "/image/1-ASUS-PA32UC-K.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "LG 34WK95U-W",
      price: 25699000,
      description: "34 INCH 5K2K MONITOR",
      image: "/image/2-LG-34WK95U-W.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "LG-27MD5KA-B",
      price: 21799000,
      description: "27 INCH 5K MONITOR",
      image: "/image/3-LG-27MD5KA-B.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "ASUS PA32UC-K",
      price: 11499000,
      description: "22 INCH 4K MONITOR",
      image: "/image/4-LG-22MD4KA-B.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {})
  }
};
