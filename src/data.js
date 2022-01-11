import room1 from "./images/details-1.jpeg";
import room2 from "./images/toilette.PNG";
import room3 from "./images/angle.PNG";
import room4 from "./images/couloir.PNG";
import room5 from "./images/suite j1.PNG";
import img1 from "./images/ss1.PNG";
import img2 from "./images/s3.PNG";
import img3 from "./images/s2.PNG";
import img4 from "./images/ss2.PNG";
import img5 from "./images/j2.PNG";
import img6 from "./images/room-11.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-6.jpeg";
import img12 from "./images/room-12.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Chambre reguliere simple",
      slug: "single-economy",
      type: "reguliere",
      price: 10000,
      size: 15,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "plus spacieuse, vous permet de vous installer en toute tranquillité pour un séjour placé sous le signe du confort",
      extras: [
        "1 lit", "une à 2 personnes ", "Climatiseur avec contrôle numérique ", "Internet haute vitesse et wi-fi gratuit"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Chambre reguliere basique",
      slug: "single-basic",
      type: "reguliere",
      price: 11000,
      size: 20,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        " Nos chambres régulières ont tout ce qu’un voyageur peut attendre : confortables et fonctionnelles.Elles sont toutes équipées d’une cuisinette et d’un espace pour les repas. Parfait pour un petit séjour ou un voyage d’affaires a un prix de 10000 FCFA la nuit.",
      extras: [
        "1 lit", "une à 2 personnes ", "Climatiseur avec contrôle numérique ", "Internet haute vitesse et wi-fi gratuit"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Chambre reguliere standard",
      slug: "single-standard",
      type: "reguliere",
      price: 12000,
      size: 30,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
      " Nos chambres régulières ont tout ce qu’un voyageur peut attendre : confortables et fonctionnelles.Elles sont toutes équipées d’une cuisinette et d’un espace pour les repas. Parfait pour un petit séjour ou un voyage d’affaires a un prix de 10000 FCFA la nuit.",
      extras: [
        "1 lit", "une à 2 personnes ", "Climatiseur avec contrôle numérique ", "Internet haute vitesse et wi-fi gratuit","lit confortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Chambre reguliere deluxe",
      slug: "single-deluxe",
      type: "reguliere",
      price: 15000,
      size: 40,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: false,
      description:
      " Nos chambres régulières ont tout ce qu’un voyageur peut attendre : confortables et fonctionnelles.Elles sont toutes équipées d’une cuisinette et d’un espace pour les repas. Parfait pour un petit séjour ou un voyage d’affaires a un prix de 10000 FCFA la nuit.",
      extras: [
        "Oreillers moelleux et linge de lit respirant",
        "Soft, oversized bath towels",
        "1 lit", "une à 2 personnes ", "Climatiseur avec contrôle numérique ", "Internet haute vitesse et wi-fi gratuit","lit confortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Chambre familiale economique",
      slug: "double-economy",
      type: "familiale",
      price: 20000,
      size: 35,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Idéales pour un week-end en famille ou un plus long séjour, nos chambres familiales 2 personnes vous assurent un excellent rapport qualité-prix",
      extras: [
        "Une chambre avec deux lits séparés", "Climatisation ", "Superficie moyenne: 27m²", "Balcon", "Deux télévisions écran plat", "Deux salles de douche"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room5
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Chambre familiale basique",
      slug: "double-basic",
      type: "familiale",
      price: 22000,
      size: 40,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
      "Idéales pour un week-end en famille ou un plus long séjour, nos chambres familiales 2 personnes vous assurent un excellent rapport qualité-prix",
      extras: [
        "Une chambre avec deux lits séparés", "Climatisation ", "Superficie moyenne: 27m²", "Balcon", "Deux télévisions écran plat", "Deux salles de douche"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Chambre familiale standard",
      slug: "double-standard",
      type: "familiale",
      price: 25000,
      size: 45,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
      "Idéales pour un week-end en famille ou un plus long séjour, nos chambres familiales 2 personnes vous assurent un excellent rapport qualité-prix",
      extras: [
        "Une chambre avec deux lits séparés", "Climatisation ", "Superficie moyenne: 27m²", "Balcon", "Deux télévisions écran plat", "Deux salles de douche"

      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Chambre familiale deluxe",
      slug: "double-deluxe",
      type: "familiale",
      price: 27000,
      size: 60,
      capacity: 3,
      pets: true,
      breakfast: true,
      featured: true,
      description:
      "Idéales pour un week-end en famille ou un plus long séjour, nos chambres familiales 2 personnes vous assurent un excellent rapport qualité-prix",
      extras: [
        "Une chambre avec deux lits séparés", "Climatisation ", "Superficie moyenne: 27m²", "Balcon", "Deux télévisions écran plat", "Deux salles de douche",
        "Oreillers moelleux et linge de lit respirant"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "Suite junior economique",
      slug: "family-economy",
      type: "suite junior",
      price: 30000,
      size: 70,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
      "La Suite Junior dispose d’un lit double (Queen size), un coin salon doté d’un canapé confortable, 2 chaises et une table basse.",
      extras: [
        "Smart TV 40'", "Wi-Fi haut débit gratuit", "Coffre-fort", "Réfrigérateur", "Climatisation", "Café et thé gratuits dans la chambre", "Matériel de repassage", "Miroir de maquillage éclairé"
      , "Oreillers moelleux et linge de lit respirant"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Suite junior basique",
      slug: "family-basic",
      type: "suite junior",
      price: 32000,
      size: 75,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
      "La Suite Junior dispose d’un lit double (Queen size), un coin salon doté d’un canapé confortable, 2 chaises et une table basse.",
      extras: [
        "Smart TV 40'", "Wi-Fi haut débit gratuit", "Coffre-fort", "Réfrigérateur", "Climatisation", "Café et thé gratuits dans la chambre", "Matériel de repassage", "Miroir de maquillage éclairé"
      , "Oreillers moelleux et linge de lit respirant"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "Suite junior standard",
      slug: "family-standard",
      type: "suite junior",
      price: 35000,
      size: 80,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
      "La Suite Junior dispose d’un lit double (Queen size), un coin salon doté d’un canapé confortable, 2 chaises et une table basse.",
      extras: [
        "Smart TV 40'", "Wi-Fi haut débit gratuit", "Coffre-fort", "Réfrigérateur", "Climatisation", "Café et thé gratuits dans la chambre", "Matériel de repassage", "Miroir de maquillage éclairé"
        , "Oreillers moelleux et linge de lit respirant"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "Suite junior deluxe",
      slug: "family-deluxe",
      type: "suite junior",
      price: 37000,
      size: 85,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
      "La Suite Junior dispose d’un lit double (Queen size), un coin salon doté d’un canapé confortable, 2 chaises et une table basse.",
      extras: [
        "Smart TV 40'", "Wi-Fi haut débit gratuit", "Coffre-fort", "Réfrigérateur", "Climatisation", "Café et thé gratuits dans la chambre", "Matériel de repassage", "Miroir de maquillage éclairé"
        , "Oreillers moelleux et linge de lit respirant"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Suite Senior",
      slug: "presidential-room",
      type: "suite senior",
      price: 60000,
      size: 100,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
      "La Suite Junior dispose d’un lit double (Queen size), un coin salon doté d’un canapé confortable, 2 chaises et une table basse.",
      extras: [
        "Smart TV 40'", "Wi-Fi haut débit gratuit", "Coffre-fort", "Réfrigérateur", "Climatisation", "Café et thé gratuits dans la chambre", "Matériel de repassage", "Miroir de maquillage éclairé"
        , "Oreillers moelleux et linge de lit respirant"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];
