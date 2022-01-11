module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        typeChambre: {
        type: Sequelize.STRING
      },
      nbrplc: {
        type: Sequelize.INTEGER
      },
      taille: {
        type: Sequelize.INTEGER
      },
      breakfasts: {
        type: Sequelize.TINYINT(1)
      },
      petss: {
        type: Sequelize.TINYINT(1)
      },
      features: {
        type: Sequelize.TINYINT(1)
      },
      nom: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.INTEGER
      },
      startDates: {
        type: Sequelize.DATE
      },
      endDates: {
        type: Sequelize.DATE
      },
      nbrJ: {
        type: Sequelize.INTEGER
      },
      prixPj: {
        type: Sequelize.INTEGER
      },
      totalP: {
        type: Sequelize.INTEGER
      },
      paymentOption: {
        type: Sequelize.INTEGER
      },
      published: {
        type: Sequelize.TINYINT(1)
      }
    });
  
    return Book;
  };