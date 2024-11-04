/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    CatalogNumber: "PC 81641",
    Title: "Thriller",
    Artist: "Michael Jackson",
    EraCreated: 1982,
    RecordCompany: "Epic Records",
    Discontinued: true,
    Description:
      "For fans of Pop, 'Thriller' by Michael Jackson is a timeless classic that has stood the test of time since 1982. Produced by Epic Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 429.19,
    id: 1,
    category: "c1"
  },
  {
    CatalogNumber: "B0020520-01",
    Title: "25",
    Artist: "Adele",
    EraCreated: 2015,
    RecordCompany: "XL Recordings",
    Discontinued: false,
    Description:
      "'25' by Adele is a landmark in Pop, first released in 2015. Crafted under XL Recordings, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 64.72,
    id: 2,
    category: "c1"
  },
  {
    CatalogNumber: "R1 547450",
    Title: "21",
    Artist: "Adele",
    EraCreated: 2011,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "For fans of Pop, '21' by Adele is a timeless classic that has stood the test of time since 2011. Produced by Columbia Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 8,
    price: 78.08,
    id: 3,
    category: "c1"
  },
  {
    CatalogNumber: "B0019254-01",
    Title: "Lemonade",
    Artist: "Beyonc\u00e9",
    EraCreated: 2016,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "For fans of Pop, 'Lemonade' by Beyonc\u00e9 is a timeless classic that has stood the test of time since 2016. Produced by Columbia Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 2,
    price: 132.96,
    id: 4,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 101",
    Title: "1989",
    Artist: "Taylor Swift",
    EraCreated: 2014,
    RecordCompany: "Big Machine Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Pop albums, '1989' by Taylor Swift has captivated audiences since its release in 2014. Released by Big Machine Records, it holds a special place in any collector's library.",
    quantity: 6,
    price: 105.93,
    id: 5,
    category: "c1"
  },
  {
    CatalogNumber: "B0017382-01",
    Title: "Future Nostalgia",
    Artist: "Dua Lipa",
    EraCreated: 2020,
    RecordCompany: "Warner Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Pop albums, 'Future Nostalgia' by Dua Lipa has captivated audiences since its release in 2020. Released by Warner Records, it holds a special place in any collector's library.",
    quantity: 6,
    price: 53.17,
    id: 6,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 725",
    Title: "Back to Black",
    Artist: "Amy Winehouse",
    EraCreated: 2006,
    RecordCompany: "Island Records",
    Discontinued: false,
    Description:
      "Amy Winehouse's 'Back to Black' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 2006. Brought to the world by Island Records, this record remains a must-have for true enthusiasts.",
    quantity: 2,
    price: 93.33,
    id: 7,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 1677",
    Title: "ABBA Gold",
    Artist: "ABBA",
    EraCreated: 1992,
    RecordCompany: "Universal Music",
    Discontinued: false,
    Description:
      "'ABBA Gold' by ABBA is a landmark in Pop, first released in 1992. Crafted under Universal Music, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 5,
    price: 82.45,
    id: 8,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 2501",
    Title: "Fine Line",
    Artist: "Harry Styles",
    EraCreated: 2019,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "For fans of Pop, 'Fine Line' by Harry Styles is a timeless classic that has stood the test of time since 2019. Produced by Columbia Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 2,
    price: 103.98,
    id: 9,
    category: "c1"
  },
  {
    CatalogNumber: "B0023738-01",
    Title: "Born This Way",
    Artist: "Lady Gaga",
    EraCreated: 2011,
    RecordCompany: "Interscope Records",
    Discontinued: false,
    Description:
      "For fans of Pop, 'Born This Way' by Lady Gaga is a timeless classic that has stood the test of time since 2011. Produced by Interscope Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 1,
    price: 79.13,
    id: 10,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 169",
    Title: "Dangerous",
    Artist: "Michael Jackson",
    EraCreated: 1991,
    RecordCompany: "Epic Records",
    Discontinued: false,
    Description:
      "Michael Jackson's 'Dangerous' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 1991. Brought to the world by Epic Records, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 135.86,
    id: 11,
    category: "c1"
  },
  {
    CatalogNumber: "R1 123456",
    Title: "True Blue",
    Artist: "Madonna",
    EraCreated: 1986,
    RecordCompany: "Sire Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Pop albums, 'True Blue' by Madonna has captivated audiences since its release in 1986. Released by Sire Records, it holds a special place in any collector's library.",
    quantity: 1,
    price: 55.65,
    id: 12,
    category: "c1"
  },
  {
    CatalogNumber: "PC 4748",
    Title: "The Fame",
    Artist: "Lady Gaga",
    EraCreated: 2008,
    RecordCompany: "Interscope Records",
    Discontinued: false,
    Description:
      "For fans of Pop, 'The Fame' by Lady Gaga is a timeless classic that has stood the test of time since 2008. Produced by Interscope Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 7,
    price: 113.9,
    id: 13,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 2345",
    Title: "Like a Virgin",
    Artist: "Madonna",
    EraCreated: 1984,
    RecordCompany: "Sire Records",
    Discontinued: true,
    Description:
      "Madonna's 'Like a Virgin' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 1984. Brought to the world by Sire Records, this record remains a must-have for true enthusiasts.",
    quantity: 1,
    price: 80.76,
    id: 14,
    category: "c1"
  },
  {
    CatalogNumber: "B0029859-01",
    Title: "Chromatica",
    Artist: "Lady Gaga",
    EraCreated: 2020,
    RecordCompany: "Interscope Records",
    Discontinued: false,
    Description:
      "'Chromatica' by Lady Gaga is a landmark in Pop, first released in 2020. Crafted under Interscope Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 3,
    price: 48.0,
    id: 15,
    category: "c1"
  },
  {
    CatalogNumber: "R1 789123",
    Title: "FutureSex/LoveSounds",
    Artist: "Justin Timberlake",
    EraCreated: 2006,
    RecordCompany: "Jive Records",
    Discontinued: false,
    Description:
      "With its release in 2006, 'FutureSex/LoveSounds' by Justin Timberlake under Jive Records set the bar for Pop music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 9,
    price: 66.29,
    id: 16,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 2200",
    Title: "Emotion",
    Artist: "Carly Rae Jepsen",
    EraCreated: 2015,
    RecordCompany: "604 Records",
    Discontinued: false,
    Description:
      "With its release in 2015, 'Emotion' by Carly Rae Jepsen under 604 Records set the bar for Pop music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 6,
    price: 64.12,
    id: 17,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 222",
    Title: "Bad",
    Artist: "Michael Jackson",
    EraCreated: 1987,
    RecordCompany: "Epic Records",
    Discontinued: true,
    Description:
      "Michael Jackson's 'Bad' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 1987. Brought to the world by Epic Records, this record remains a must-have for true enthusiasts.",
    quantity: 2,
    price: 163.21,
    id: 18,
    category: "c1"
  },
  {
    CatalogNumber: "MOVLP 999",
    Title: "Speak Now",
    Artist: "Taylor Swift",
    EraCreated: 2010,
    RecordCompany: "Big Machine Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Pop albums, 'Speak Now' by Taylor Swift has captivated audiences since its release in 2010. Released by Big Machine Records, it holds a special place in any collector's library.",
    quantity: 5,
    price: 94.32,
    id: 19,
    category: "c1"
  },
  {
    CatalogNumber: "B0028815-01",
    Title: "Sweetener",
    Artist: "Ariana Grande",
    EraCreated: 2018,
    RecordCompany: "Republic Records",
    Discontinued: false,
    Description:
      "For fans of Pop, 'Sweetener' by Ariana Grande is a timeless classic that has stood the test of time since 2018. Produced by Republic Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 68.88,
    id: 20,
    category: "c1"
  },
  {
    CatalogNumber: "B0023464-01",
    Title: "To Pimp a Butterfly",
    Artist: "Kendrick Lamar",
    EraCreated: 2015,
    RecordCompany: "Interscope Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Hip-Hop/Rap albums, 'To Pimp a Butterfly' by Kendrick Lamar has captivated audiences since its release in 2015. Released by Interscope Records, it holds a special place in any collector's library.",
    quantity: 6,
    price: 46.8,
    id: 21,
    category: "c2"
  },
  {
    CatalogNumber: "B0017695-01",
    Title: "good kid, m.A.A.d city",
    Artist: "Kendrick Lamar",
    EraCreated: 2012,
    RecordCompany: "Interscope Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Hip-Hop/Rap albums, 'good kid, m.A.A.d city' by Kendrick Lamar has captivated audiences since its release in 2012. Released by Interscope Records, it holds a special place in any collector's library.",
    quantity: 4,
    price: 49.36,
    id: 22,
    category: "c2"
  },
  {
    CatalogNumber: "B0027047-01",
    Title: "DAMN.",
    Artist: "Kendrick Lamar",
    EraCreated: 2017,
    RecordCompany: "Top Dawg Entertainment",
    Discontinued: false,
    Description:
      "For fans of Hip-Hop/Rap, 'DAMN.' by Kendrick Lamar is a timeless classic that has stood the test of time since 2017. Produced by Top Dawg Entertainment, it\u2019s a piece that resonates with music lovers.",
    quantity: 1,
    price: 26.11,
    id: 23,
    category: "c2"
  },
  {
    CatalogNumber: "B0000029",
    Title: "The Chronic",
    Artist: "Dr. Dre",
    EraCreated: 1992,
    RecordCompany: "Death Row Records",
    Discontinued: false,
    Description:
      "'The Chronic' by Dr. Dre is a landmark in Hip-Hop/Rap, first released in 1992. Crafted under Death Row Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 109.24,
    id: 24,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 450",
    Title: "Illmatic",
    Artist: "Nas",
    EraCreated: 1994,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "For fans of Hip-Hop/Rap, 'Illmatic' by Nas is a timeless classic that has stood the test of time since 1994. Produced by Columbia Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 1,
    price: 174.25,
    id: 25,
    category: "c2"
  },
  {
    CatalogNumber: "R1 547457",
    Title: "The Blueprint",
    Artist: "Jay-Z",
    EraCreated: 2001,
    RecordCompany: "Roc-A-Fella Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Hip-Hop/Rap albums, 'The Blueprint' by Jay-Z has captivated audiences since its release in 2001. Released by Roc-A-Fella Records, it holds a special place in any collector's library.",
    quantity: 9,
    price: 95.22,
    id: 26,
    category: "c2"
  },
  {
    CatalogNumber: "B0029424-01",
    Title: "Blonde",
    Artist: "Frank Ocean",
    EraCreated: 2016,
    RecordCompany: "Boys Don't Cry",
    Discontinued: false,
    Description:
      "'Blonde' by Frank Ocean is a landmark in Hip-Hop/Rap, first released in 2016. Crafted under Boys Don't Cry, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 399.16,
    id: 27,
    category: "c2"
  },
  {
    CatalogNumber: "PC 123456",
    Title: "Graduation",
    Artist: "Kanye West",
    EraCreated: 2007,
    RecordCompany: "Def Jam Recordings",
    Discontinued: false,
    Description:
      "For fans of Hip-Hop/Rap, 'Graduation' by Kanye West is a timeless classic that has stood the test of time since 2007. Produced by Def Jam Recordings, it\u2019s a piece that resonates with music lovers.",
    quantity: 8,
    price: 116.24,
    id: 28,
    category: "c2"
  },
  {
    CatalogNumber: "B0032843-01",
    Title: "Astroworld",
    Artist: "Travis Scott",
    EraCreated: 2018,
    RecordCompany: "Epic Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Hip-Hop/Rap albums, 'Astroworld' by Travis Scott has captivated audiences since its release in 2018. Released by Epic Records, it holds a special place in any collector's library.",
    quantity: 4,
    price: 77.04,
    id: 29,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 234",
    Title: "Enter the Wu-Tang (36 Chambers)",
    Artist: "Wu-Tang Clan",
    EraCreated: 1993,
    RecordCompany: "Loud Records",
    Discontinued: false,
    Description:
      "For fans of Hip-Hop/Rap, 'Enter the Wu-Tang (36 Chambers)' by Wu-Tang Clan is a timeless classic that has stood the test of time since 1993. Produced by Loud Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 5,
    price: 162.16,
    id: 30,
    category: "c2"
  },
  {
    CatalogNumber: "B0017382-02",
    Title: "The Marshall Mathers LP",
    Artist: "Eminem",
    EraCreated: 2000,
    RecordCompany: "Interscope Records",
    Discontinued: false,
    Description:
      "With its release in 2000, 'The Marshall Mathers LP' by Eminem under Interscope Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 6,
    price: 66.38,
    id: 31,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 2345",
    Title: "Ready to Die",
    Artist: "The Notorious B.I.G.",
    EraCreated: 1994,
    RecordCompany: "Bad Boy Records",
    Discontinued: false,
    Description:
      "The Notorious B.I.G.'s 'Ready to Die' is celebrated as a defining moment in Hip-Hop/Rap, showcasing unparalleled artistry since 1994. Brought to the world by Bad Boy Records, this record remains a must-have for true enthusiasts.",
    quantity: 5,
    price: 198.16,
    id: 32,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 1350",
    Title: "2001",
    Artist: "Dr. Dre",
    EraCreated: 1999,
    RecordCompany: "Aftermath Entertainment",
    Discontinued: false,
    Description:
      "With its release in 1999, '2001' by Dr. Dre under Aftermath Entertainment set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 7,
    price: 110.17,
    id: 33,
    category: "c2"
  },
  {
    CatalogNumber: "R1 123467",
    Title: "My Beautiful Dark Twisted Fantasy",
    Artist: "Kanye West",
    EraCreated: 2010,
    RecordCompany: "Roc-A-Fella Records",
    Discontinued: false,
    Description:
      "With its release in 2010, 'My Beautiful Dark Twisted Fantasy' by Kanye West under Roc-A-Fella Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 9,
    price: 165.67,
    id: 34,
    category: "c2"
  },
  {
    CatalogNumber: "PC 4749",
    Title: "Madvillainy",
    Artist: "Madvillain (MF DOOM & Madlib)",
    EraCreated: 2004,
    RecordCompany: "Stones Throw Records",
    Discontinued: false,
    Description:
      "'Madvillainy' by Madvillain (MF DOOM & Madlib) is a landmark in Hip-Hop/Rap, first released in 2004. Crafted under Stones Throw Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 98.96,
    id: 35,
    category: "c2"
  },
  {
    CatalogNumber: "B0027611-01",
    Title: "Nothing Was the Same",
    Artist: "Drake",
    EraCreated: 2013,
    RecordCompany: "Young Money Entertainment",
    Discontinued: false,
    Description:
      "With its release in 2013, 'Nothing Was the Same' by Drake under Young Money Entertainment set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 1,
    price: 46.93,
    id: 36,
    category: "c2"
  },
  {
    CatalogNumber: "R1 789124",
    Title: "Stankonia",
    Artist: "OutKast",
    EraCreated: 2000,
    RecordCompany: "LaFace Records",
    Discontinued: false,
    Description:
      "For fans of Hip-Hop/Rap, 'Stankonia' by OutKast is a timeless classic that has stood the test of time since 2000. Produced by LaFace Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 69.92,
    id: 37,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 2501",
    Title: "Atrocity Exhibition",
    Artist: "Danny Brown",
    EraCreated: 2016,
    RecordCompany: "Warp Records",
    Discontinued: false,
    Description:
      "Danny Brown's 'Atrocity Exhibition' is celebrated as a defining moment in Hip-Hop/Rap, showcasing unparalleled artistry since 2016. Brought to the world by Warp Records, this record remains a must-have for true enthusiasts.",
    quantity: 10,
    price: 57.53,
    id: 38,
    category: "c2"
  },
  {
    CatalogNumber: "B0031550-01",
    Title: "Flower Boy",
    Artist: "Tyler, The Creator",
    EraCreated: 2017,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "With its release in 2017, 'Flower Boy' by Tyler, The Creator under Columbia Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 2,
    price: 61.39,
    id: 39,
    category: "c2"
  },
  {
    CatalogNumber: "B0024290-01",
    Title: "Man on the Moon: The End of Day",
    Artist: "Kid Cudi",
    EraCreated: 2009,
    RecordCompany: "Universal Motown",
    Discontinued: false,
    Description:
      "As one of the most iconic Hip-Hop/Rap albums, 'Man on the Moon: The End of Day' by Kid Cudi has captivated audiences since its release in 2009. Released by Universal Motown, it holds a special place in any collector's library.",
    quantity: 1,
    price: 94.84,
    id: 40,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 123",
    Title: "The Low End Theory",
    Artist: "A Tribe Called Quest",
    EraCreated: 1991,
    RecordCompany: "Jive Records",
    Discontinued: false,
    Description:
      "'The Low End Theory' by A Tribe Called Quest is a landmark in Hip-Hop/Rap, first released in 1991. Crafted under Jive Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 132.45,
    id: 41,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 456",
    Title: "Midnight Marauders",
    Artist: "A Tribe Called Quest",
    EraCreated: 1993,
    RecordCompany: "Jive Records",
    Discontinued: false,
    Description:
      "With its release in 1993, 'Midnight Marauders' by A Tribe Called Quest under Jive Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 8,
    price: 90.4,
    id: 42,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 789",
    Title: "People's Instinctive Travels and the Paths of Rhythm",
    Artist: "A Tribe Called Quest",
    EraCreated: 1990,
    RecordCompany: "Jive Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Hip-Hop/Rap albums, 'People's Instinctive Travels and the Paths of Rhythm' by A Tribe Called Quest has captivated audiences since its release in 1990. Released by Jive Records, it holds a special place in any collector's library.",
    quantity: 7,
    price: 110.84,
    id: 43,
    category: "c2"
  },
  {
    CatalogNumber: "B0028102-01",
    Title: "We got it from Here... Thank You 4 Your service",
    Artist: "A Tribe Called Quest",
    EraCreated: 2016,
    RecordCompany: "Epic Records",
    Discontinued: false,
    Description:
      "For fans of Hip-Hop/Rap, 'We got it from Here... Thank You 4 Your service' by A Tribe Called Quest is a timeless classic that has stood the test of time since 2016. Produced by Epic Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 6,
    price: 84.77,
    id: 44,
    category: "c2"
  },
  {
    CatalogNumber: "MOVLP 1011",
    Title: "Songs in the Key of Life",
    Artist: "Stevie Wonder",
    EraCreated: 1976,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "For fans of R&B, 'Songs in the Key of Life' by Stevie Wonder is a timeless classic that has stood the test of time since 1976. Produced by Tamla Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 8,
    price: 150.05,
    id: 45,
    category: "c3"
  },
  {
    CatalogNumber: "B0023423-01",
    Title: "Lemonade",
    Artist: "Beyonc\u00e9",
    EraCreated: 2016,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "As one of the most iconic R&B albums, 'Lemonade' by Beyonc\u00e9 has captivated audiences since its release in 2016. Released by Columbia Records, it holds a special place in any collector's library.",
    quantity: 5,
    price: 175.73,
    id: 46,
    category: "c3"
  },
  {
    CatalogNumber: "B0012341-01",
    Title: "Channel Orange",
    Artist: "Frank Ocean",
    EraCreated: 2012,
    RecordCompany: "Def Jam Recordings",
    Discontinued: false,
    Description:
      "Frank Ocean's 'Channel Orange' is celebrated as a defining moment in R&B, showcasing unparalleled artistry since 2012. Brought to the world by Def Jam Recordings, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 128.7,
    id: 47,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 201",
    Title: "I Never Loved a Man the Way I Love You",
    Artist: "Aretha Franklin",
    EraCreated: 1967,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "'I Never Loved a Man the Way I Love You' by Aretha Franklin is a landmark in R&B, first released in 1967. Crafted under Atlantic Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 8,
    price: 186.36,
    id: 48,
    category: "c3"
  },
  {
    CatalogNumber: "R1 738234",
    Title: "Confessions",
    Artist: "Usher",
    EraCreated: 2004,
    RecordCompany: "Arista Records",
    Discontinued: false,
    Description:
      "As one of the most iconic R&B albums, 'Confessions' by Usher has captivated audiences since its release in 2004. Released by Arista Records, it holds a special place in any collector's library.",
    quantity: 3,
    price: 91.16,
    id: 49,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 2205",
    Title: "A Seat at the Table",
    Artist: "Solange",
    EraCreated: 2016,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "With its release in 2016, 'A Seat at the Table' by Solange under Columbia Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 7,
    price: 95.71,
    id: 50,
    category: "c3"
  },
  {
    CatalogNumber: "B0019822-01",
    Title: "The Miseducation of Lauryn Hill",
    Artist: "Lauryn Hill",
    EraCreated: 1998,
    RecordCompany: "Ruffhouse Records",
    Discontinued: false,
    Description:
      "'The Miseducation of Lauryn Hill' by Lauryn Hill is a landmark in R&B, first released in 1998. Crafted under Ruffhouse Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 8,
    price: 161.84,
    id: 51,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 1945",
    Title: "Purple Rain",
    Artist: "Prince",
    EraCreated: 1984,
    RecordCompany: "Warner Bros. Records",
    Discontinued: true,
    Description:
      "With its release in 1984, 'Purple Rain' by Prince under Warner Bros. Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 3,
    price: 263.38,
    id: 52,
    category: "c3"
  },
  {
    CatalogNumber: "R1 567123",
    Title: "What's Going On",
    Artist: "Marvin Gaye",
    EraCreated: 1971,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "With its release in 1971, 'What's Going On' by Marvin Gaye under Tamla Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 2,
    price: 236.59,
    id: 53,
    category: "c3"
  },
  {
    CatalogNumber: "B0025214-01",
    Title: "Black Messiah",
    Artist: "D'Angelo and The Vanguard",
    EraCreated: 2014,
    RecordCompany: "RCA Records",
    Discontinued: false,
    Description:
      "For fans of R&B, 'Black Messiah' by D'Angelo and The Vanguard is a timeless classic that has stood the test of time since 2014. Produced by RCA Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 2,
    price: 72.3,
    id: 54,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 3388",
    Title: "The Emancipation of Mimi",
    Artist: "Mariah Carey",
    EraCreated: 2005,
    RecordCompany: "Island Records",
    Discontinued: false,
    Description:
      "As one of the most iconic R&B albums, 'The Emancipation of Mimi' by Mariah Carey has captivated audiences since its release in 2005. Released by Island Records, it holds a special place in any collector's library.",
    quantity: 4,
    price: 66.71,
    id: 55,
    category: "c3"
  },
  {
    CatalogNumber: "B0034567-01",
    Title: "How to Be a Human Being",
    Artist: "Glass Animals",
    EraCreated: 2016,
    RecordCompany: "Wolf Tone Records",
    Discontinued: false,
    Description:
      "As one of the most iconic R&B albums, 'How to Be a Human Being' by Glass Animals has captivated audiences since its release in 2016. Released by Wolf Tone Records, it holds a special place in any collector's library.",
    quantity: 6,
    price: 56.1,
    id: 56,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 1015",
    Title: "Off the Wall",
    Artist: "Michael Jackson",
    EraCreated: 1979,
    RecordCompany: "Epic Records",
    Discontinued: true,
    Description:
      "'Off the Wall' by Michael Jackson is a landmark in R&B, first released in 1979. Crafted under Epic Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 3,
    price: 157.33,
    id: 57,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 7891",
    Title: "Baduizm",
    Artist: "Erykah Badu",
    EraCreated: 1997,
    RecordCompany: "Universal Records",
    Discontinued: false,
    Description:
      "'Baduizm' by Erykah Badu is a landmark in R&B, first released in 1997. Crafted under Universal Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 2,
    price: 120.35,
    id: 58,
    category: "c3"
  },
  {
    CatalogNumber: "B0027691-01",
    Title: "CTRL",
    Artist: "SZA",
    EraCreated: 2017,
    RecordCompany: "Top Dawg Entertainment",
    Discontinued: false,
    Description:
      "As one of the most iconic R&B albums, 'CTRL' by SZA has captivated audiences since its release in 2017. Released by Top Dawg Entertainment, it holds a special place in any collector's library.",
    quantity: 10,
    price: 84.53,
    id: 59,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 2023",
    Title: "Voodoo",
    Artist: "D'Angelo",
    EraCreated: 2000,
    RecordCompany: "Virgin Records",
    Discontinued: false,
    Description:
      "With its release in 2000, 'Voodoo' by D'Angelo under Virgin Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 8,
    price: 178.49,
    id: 60,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 3990",
    Title: "Back to Black",
    Artist: "Amy Winehouse",
    EraCreated: 2006,
    RecordCompany: "Island Records",
    Discontinued: false,
    Description:
      "As one of the most iconic R&B albums, 'Back to Black' by Amy Winehouse has captivated audiences since its release in 2006. Released by Island Records, it holds a special place in any collector's library.",
    quantity: 7,
    price: 95.47,
    id: 61,
    category: "c3"
  },
  {
    CatalogNumber: "B0032345-01",
    Title: "Funk Wav Bounces Vol. 1",
    Artist: "Calvin Harris",
    EraCreated: 2017,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "With its release in 2017, 'Funk Wav Bounces Vol. 1' by Calvin Harris under Columbia Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 6,
    price: 49.27,
    id: 62,
    category: "c3"
  },
  {
    CatalogNumber: "MOVLP 1498",
    Title: "Dangerously in Love",
    Artist: "Beyonc\u00e9",
    EraCreated: 2003,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "With its release in 2003, 'Dangerously in Love' by Beyonc\u00e9 under Columbia Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 5,
    price: 80.9,
    id: 63,
    category: "c3"
  },
  {
    CatalogNumber: "B0017362-01",
    Title: "Talking Book",
    Artist: "Stevie Wonder",
    EraCreated: 1972,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "'Talking Book' by Stevie Wonder is a landmark in R&B, first released in 1972. Crafted under Tamla Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 7,
    price: 137.97,
    id: 64,
    category: "c3"
  },
  {
    CatalogNumber: "SVLP 280",
    Title: "Dark Side of the Moon",
    Artist: "Pink Floyd",
    EraCreated: 1973,
    RecordCompany: "Harvest Records",
    Discontinued: true,
    Description:
      "For fans of Rock, 'Dark Side of the Moon' by Pink Floyd is a timeless classic that has stood the test of time since 1973. Produced by Harvest Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 341.6,
    id: 65,
    category: "c4"
  },
  {
    CatalogNumber: "PC 33453",
    Title: "The Wall",
    Artist: "Pink Floyd",
    EraCreated: 1979,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Rock albums, 'The Wall' by Pink Floyd has captivated audiences since its release in 1979. Released by Columbia Records, it holds a special place in any collector's library.",
    quantity: 6,
    price: 187.84,
    id: 66,
    category: "c4"
  },
  {
    CatalogNumber: "R1 61898",
    Title: "Led Zeppelin IV",
    Artist: "Led Zeppelin",
    EraCreated: 1971,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "For fans of Rock, 'Led Zeppelin IV' by Led Zeppelin is a timeless classic that has stood the test of time since 1971. Produced by Atlantic Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 10,
    price: 340.78,
    id: 67,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 991",
    Title: "Rumours",
    Artist: "Fleetwood Mac",
    EraCreated: 1977,
    RecordCompany: "Warner Bros. Records",
    Discontinued: true,
    Description:
      "Fleetwood Mac's 'Rumours' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1977. Brought to the world by Warner Bros. Records, this record remains a must-have for true enthusiasts.",
    quantity: 6,
    price: 261.77,
    id: 68,
    category: "c4"
  },
  {
    CatalogNumber: "R1 789124",
    Title: "Abbey Road",
    Artist: "The Beatles",
    EraCreated: 1969,
    RecordCompany: "Apple Records",
    Discontinued: true,
    Description:
      "For fans of Rock, 'Abbey Road' by The Beatles is a timeless classic that has stood the test of time since 1969. Produced by Apple Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 418.31,
    id: 69,
    category: "c4"
  },
  {
    CatalogNumber: "R1 9823",
    Title: "Hotel California",
    Artist: "Eagles",
    EraCreated: 1976,
    RecordCompany: "Asylum Records",
    Discontinued: true,
    Description:
      "Eagles's 'Hotel California' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1976. Brought to the world by Asylum Records, this record remains a must-have for true enthusiasts.",
    quantity: 2,
    price: 258.85,
    id: 70,
    category: "c4"
  },
  {
    CatalogNumber: "SVLP 1234",
    Title: "The Joshua Tree",
    Artist: "U2",
    EraCreated: 1987,
    RecordCompany: "Island Records",
    Discontinued: true,
    Description:
      "'The Joshua Tree' by U2 is a landmark in Rock, first released in 1987. Crafted under Island Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 5,
    price: 332.38,
    id: 71,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 321",
    Title: "Back in Black",
    Artist: "AC/DC",
    EraCreated: 1980,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "AC/DC's 'Back in Black' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1980. Brought to the world by Atlantic Records, this record remains a must-have for true enthusiasts.",
    quantity: 3,
    price: 167.45,
    id: 72,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 501",
    Title: "Hunky Dory",
    Artist: "David Bowie",
    EraCreated: 1971,
    RecordCompany: "RCA Victor",
    Discontinued: true,
    Description:
      "David Bowie's 'Hunky Dory' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1971. Brought to the world by RCA Victor, this record remains a must-have for true enthusiasts.",
    quantity: 2,
    price: 325.89,
    id: 73,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 777",
    Title: "Born to Run",
    Artist: "Bruce Springsteen",
    EraCreated: 1975,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "For fans of Rock, 'Born to Run' by Bruce Springsteen is a timeless classic that has stood the test of time since 1975. Produced by Columbia Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 210.73,
    id: 74,
    category: "c4"
  },
  {
    CatalogNumber: "PC 4123",
    Title: "Let It Bleed",
    Artist: "The Rolling Stones",
    EraCreated: 1969,
    RecordCompany: "Decca Records",
    Discontinued: true,
    Description:
      "The Rolling Stones's 'Let It Bleed' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1969. Brought to the world by Decca Records, this record remains a must-have for true enthusiasts.",
    quantity: 4,
    price: 185.37,
    id: 75,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 1236",
    Title: "Who's Next",
    Artist: "The Who",
    EraCreated: 1971,
    RecordCompany: "Decca Records",
    Discontinued: true,
    Description:
      "The Who's 'Who's Next' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1971. Brought to the world by Decca Records, this record remains a must-have for true enthusiasts.",
    quantity: 10,
    price: 201.25,
    id: 76,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 403",
    Title: "Led Zeppelin II",
    Artist: "Led Zeppelin",
    EraCreated: 1969,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Rock albums, 'Led Zeppelin II' by Led Zeppelin has captivated audiences since its release in 1969. Released by Atlantic Records, it holds a special place in any collector's library.",
    quantity: 1,
    price: 261.23,
    id: 77,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 2099",
    Title: "Sticky Fingers",
    Artist: "The Rolling Stones",
    EraCreated: 1971,
    RecordCompany: "Rolling Stones Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Rock albums, 'Sticky Fingers' by The Rolling Stones has captivated audiences since its release in 1971. Released by Rolling Stones Records, it holds a special place in any collector's library.",
    quantity: 8,
    price: 185.01,
    id: 78,
    category: "c4"
  },
  {
    CatalogNumber: "PC 9123",
    Title: "A Night at the Opera",
    Artist: "Queen",
    EraCreated: 1975,
    RecordCompany: "EMI",
    Discontinued: true,
    Description:
      "With its release in 1975, 'A Night at the Opera' by Queen under EMI set the bar for Rock music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 4,
    price: 313.02,
    id: 79,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 155",
    Title: "Sgt. Pepper's Lonely Hearts Club Band",
    Artist: "The Beatles",
    EraCreated: 1967,
    RecordCompany: "Parlophone",
    Discontinued: true,
    Description:
      "For fans of Rock, 'Sgt. Pepper's Lonely Hearts Club Band' by The Beatles is a timeless classic that has stood the test of time since 1967. Produced by Parlophone, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 475.69,
    id: 80,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 2010",
    Title: "Physical Graffiti",
    Artist: "Led Zeppelin",
    EraCreated: 1975,
    RecordCompany: "Swan Song Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Rock albums, 'Physical Graffiti' by Led Zeppelin has captivated audiences since its release in 1975. Released by Swan Song Records, it holds a special place in any collector's library.",
    quantity: 1,
    price: 229.61,
    id: 81,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 405",
    Title: "Highway to Hell",
    Artist: "AC/DC",
    EraCreated: 1979,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "With its release in 1979, 'Highway to Hell' by AC/DC under Atlantic Records set the bar for Rock music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 5,
    price: 180.12,
    id: 82,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 600",
    Title: "Exile on Main St.",
    Artist: "The Rolling Stones",
    EraCreated: 1972,
    RecordCompany: "Rolling Stones Records",
    Discontinued: true,
    Description:
      "'Exile on Main St.' by The Rolling Stones is a landmark in Rock, first released in 1972. Crafted under Rolling Stones Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 9,
    price: 190.62,
    id: 83,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 1234",
    Title: "Machine Head",
    Artist: "Deep Purple",
    EraCreated: 1972,
    RecordCompany: "Warner Bros. Records",
    Discontinued: true,
    Description:
      "With its release in 1972, 'Machine Head' by Deep Purple under Warner Bros. Records set the bar for Rock music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 3,
    price: 177.44,
    id: 84,
    category: "c4"
  },
  {
    CatalogNumber: "MOVLP 110",
    Title: "OK Computer",
    Artist: "Radiohead",
    EraCreated: 1997,
    RecordCompany: "Parlophone",
    Discontinued: false,
    Description:
      "With its release in 1997, 'OK Computer' by Radiohead under Parlophone set the bar for Alternative music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 3,
    price: 135.92,
    id: 85,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 345",
    Title: "London Calling",
    Artist: "The Clash",
    EraCreated: 1979,
    RecordCompany: "CBS Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Alternative albums, 'London Calling' by The Clash has captivated audiences since its release in 1979. Released by CBS Records, it holds a special place in any collector's library.",
    quantity: 3,
    price: 345.92,
    id: 86,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 2920",
    Title: "In Rainbows",
    Artist: "Radiohead",
    EraCreated: 2007,
    RecordCompany: "XL Recordings",
    Discontinued: false,
    Description:
      "As one of the most iconic Alternative albums, 'In Rainbows' by Radiohead has captivated audiences since its release in 2007. Released by XL Recordings, it holds a special place in any collector's library.",
    quantity: 8,
    price: 70.99,
    id: 87,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 750",
    Title: "Nevermind",
    Artist: "Nirvana",
    EraCreated: 1991,
    RecordCompany: "DGC Records",
    Discontinued: true,
    Description:
      "With its release in 1991, 'Nevermind' by Nirvana under DGC Records set the bar for Alternative music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 4,
    price: 130.8,
    id: 88,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 475",
    Title: "Murmur",
    Artist: "R.E.M.",
    EraCreated: 1983,
    RecordCompany: "I.R.S. Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Alternative albums, 'Murmur' by R.E.M. has captivated audiences since its release in 1983. Released by I.R.S. Records, it holds a special place in any collector's library.",
    quantity: 3,
    price: 137.88,
    id: 89,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 560",
    Title: "The Queen Is Dead",
    Artist: "The Smiths",
    EraCreated: 1986,
    RecordCompany: "Rough Trade",
    Discontinued: true,
    Description:
      "'The Queen Is Dead' by The Smiths is a landmark in Alternative, first released in 1986. Crafted under Rough Trade, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 1,
    price: 160.42,
    id: 90,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 580",
    Title: "Doolittle",
    Artist: "Pixies",
    EraCreated: 1989,
    RecordCompany: "4AD",
    Discontinued: true,
    Description:
      "Pixies's 'Doolittle' is celebrated as a defining moment in Alternative, showcasing unparalleled artistry since 1989. Brought to the world by 4AD, this record remains a must-have for true enthusiasts.",
    quantity: 2,
    price: 181.72,
    id: 91,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 651",
    Title: "Is This It",
    Artist: "The Strokes",
    EraCreated: 2001,
    RecordCompany: "RCA Records",
    Discontinued: false,
    Description:
      "'Is This It' by The Strokes is a landmark in Alternative, first released in 2001. Crafted under RCA Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 1,
    price: 125.39,
    id: 92,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 777",
    Title: "Surfer Rosa",
    Artist: "Pixies",
    EraCreated: 1988,
    RecordCompany: "4AD",
    Discontinued: true,
    Description:
      "'Surfer Rosa' by Pixies is a landmark in Alternative, first released in 1988. Crafted under 4AD, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 4,
    price: 115.86,
    id: 93,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 990",
    Title: "Funeral",
    Artist: "Arcade Fire",
    EraCreated: 2004,
    RecordCompany: "Merge Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Alternative albums, 'Funeral' by Arcade Fire has captivated audiences since its release in 2004. Released by Merge Records, it holds a special place in any collector's library.",
    quantity: 4,
    price: 109.93,
    id: 94,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 333",
    Title: "The Bends",
    Artist: "Radiohead",
    EraCreated: 1995,
    RecordCompany: "Parlophone",
    Discontinued: false,
    Description:
      "'The Bends' by Radiohead is a landmark in Alternative, first released in 1995. Crafted under Parlophone, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 9,
    price: 116.37,
    id: 95,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 889",
    Title: "Elephant",
    Artist: "The White Stripes",
    EraCreated: 2003,
    RecordCompany: "XL Recordings",
    Discontinued: false,
    Description:
      "'Elephant' by The White Stripes is a landmark in Alternative, first released in 2003. Crafted under XL Recordings, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 7,
    price: 123.05,
    id: 96,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 211",
    Title: "Crooked Rain, Crooked Rain",
    Artist: "Pavement",
    EraCreated: 1994,
    RecordCompany: "Matador Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Alternative albums, 'Crooked Rain, Crooked Rain' by Pavement has captivated audiences since its release in 1994. Released by Matador Records, it holds a special place in any collector's library.",
    quantity: 3,
    price: 88.55,
    id: 97,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 1200",
    Title: "Whatever People Say I Am, That's What I'm Not",
    Artist: "Arctic Monkeys",
    EraCreated: 2006,
    RecordCompany: "Domino Recording Co.",
    Discontinued: false,
    Description:
      "'Whatever People Say I Am, That's What I'm Not' by Arctic Monkeys is a landmark in Alternative, first released in 2006. Crafted under Domino Recording Co., this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 116.3,
    id: 98,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 2346",
    Title: "Bloodflowers",
    Artist: "The Cure",
    EraCreated: 2000,
    RecordCompany: "Fiction Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Alternative albums, 'Bloodflowers' by The Cure has captivated audiences since its release in 2000. Released by Fiction Records, it holds a special place in any collector's library.",
    quantity: 5,
    price: 92.65,
    id: 99,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 880",
    Title: "Automatic for the People",
    Artist: "R.E.M.",
    EraCreated: 1992,
    RecordCompany: "Warner Bros. Records",
    Discontinued: false,
    Description:
      "For fans of Alternative, 'Automatic for the People' by R.E.M. is a timeless classic that has stood the test of time since 1992. Produced by Warner Bros. Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 1,
    price: 82.72,
    id: 100,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 1010",
    Title: "Ten",
    Artist: "Pearl Jam",
    EraCreated: 1991,
    RecordCompany: "Epic Records",
    Discontinued: false,
    Description:
      "Pearl Jam's 'Ten' is celebrated as a defining moment in Alternative, showcasing unparalleled artistry since 1991. Brought to the world by Epic Records, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 166.53,
    id: 101,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 1990",
    Title: "Mezzanine",
    Artist: "Massive Attack",
    EraCreated: 1998,
    RecordCompany: "Virgin Records",
    Discontinued: false,
    Description:
      "'Mezzanine' by Massive Attack is a landmark in Alternative, first released in 1998. Crafted under Virgin Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 1,
    price: 147.34,
    id: 102,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 970",
    Title: "The Soft Bulletin",
    Artist: "The Flaming Lips",
    EraCreated: 1999,
    RecordCompany: "Warner Bros. Records",
    Discontinued: false,
    Description:
      "The Flaming Lips's 'The Soft Bulletin' is celebrated as a defining moment in Alternative, showcasing unparalleled artistry since 1999. Brought to the world by Warner Bros. Records, this record remains a must-have for true enthusiasts.",
    quantity: 4,
    price: 109.81,
    id: 103,
    category: "c5"
  },
  {
    CatalogNumber: "MOVLP 1500",
    Title: "Yankee Hotel Foxtrot",
    Artist: "Wilco",
    EraCreated: 2002,
    RecordCompany: "Nonesuch Records",
    Discontinued: false,
    Description:
      "'Yankee Hotel Foxtrot' by Wilco is a landmark in Alternative, first released in 2002. Crafted under Nonesuch Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 119.92,
    id: 104,
    category: "c5"
  },
  {
    CatalogNumber: "SXL 2306-7",
    Title: "Cinderella Suites / Romeo & Juliet Suites",
    Artist: "L'Orchestre de la Suisse Romande",
    EraCreated: 1962,
    RecordCompany: "Decca Records",
    Discontinued: true,
    Description:
      "For fans of Classical & Orchestral, 'Cinderella Suites / Romeo & Juliet Suites' by L'Orchestre de la Suisse Romande is a timeless classic that has stood the test of time since 1962. Produced by Decca Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 5,
    price: 481.3,
    id: 105,
    category: "c6"
  },
  {
    CatalogNumber: "2532 002",
    Title: "Beethoven: Symphony No. 5",
    Artist: "Berliner Philharmoniker",
    EraCreated: 1970,
    RecordCompany: "Deutsche Grammophon",
    Discontinued: true,
    Description:
      "For fans of Classical & Orchestral, 'Beethoven: Symphony No. 5' by Berliner Philharmoniker is a timeless classic that has stood the test of time since 1970. Produced by Deutsche Grammophon, it\u2019s a piece that resonates with music lovers.",
    quantity: 10,
    price: 164.9,
    id: 106,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 456",
    Title: "The Four Seasons",
    Artist: "Antonio Vivaldi",
    EraCreated: 1967,
    RecordCompany: "Philips Records",
    Discontinued: true,
    Description:
      "For fans of Classical & Orchestral, 'The Four Seasons' by Antonio Vivaldi is a timeless classic that has stood the test of time since 1967. Produced by Philips Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 5,
    price: 121.94,
    id: 107,
    category: "c6"
  },
  {
    CatalogNumber: "B0012345-01",
    Title: "Mozart: Requiem",
    Artist: "Vienna Philharmonic",
    EraCreated: 1973,
    RecordCompany: "Deutsche Grammophon",
    Discontinued: true,
    Description:
      "For fans of Classical & Orchestral, 'Mozart: Requiem' by Vienna Philharmonic is a timeless classic that has stood the test of time since 1973. Produced by Deutsche Grammophon, it\u2019s a piece that resonates with music lovers.",
    quantity: 5,
    price: 175.47,
    id: 108,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 987",
    Title: "Swan Lake",
    Artist: "London Symphony Orchestra",
    EraCreated: 1960,
    RecordCompany: "EMI Classics",
    Discontinued: true,
    Description:
      "With its release in 1960, 'Swan Lake' by London Symphony Orchestra under EMI Classics set the bar for Classical & Orchestral music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 2,
    price: 132.3,
    id: 109,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 210",
    Title: "The Planets",
    Artist: "Boston Symphony Orchestra",
    EraCreated: 1971,
    RecordCompany: "RCA Victor",
    Discontinued: true,
    Description:
      "Boston Symphony Orchestra's 'The Planets' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1971. Brought to the world by RCA Victor, this record remains a must-have for true enthusiasts.",
    quantity: 10,
    price: 123.62,
    id: 110,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 129",
    Title: "Bach: Brandenburg Concertos",
    Artist: "Academy of St Martin in the Fields",
    EraCreated: 1982,
    RecordCompany: "Philips Records",
    Discontinued: true,
    Description:
      "'Bach: Brandenburg Concertos' by Academy of St Martin in the Fields is a landmark in Classical & Orchestral, first released in 1982. Crafted under Philips Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 9,
    price: 91.83,
    id: 111,
    category: "c6"
  },
  {
    CatalogNumber: "R1 123456",
    Title: "Tchaikovsky: 1812 Overture",
    Artist: "Chicago Symphony Orchestra",
    EraCreated: 1978,
    RecordCompany: "Decca Records",
    Discontinued: true,
    Description:
      "For fans of Classical & Orchestral, 'Tchaikovsky: 1812 Overture' by Chicago Symphony Orchestra is a timeless classic that has stood the test of time since 1978. Produced by Decca Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 7,
    price: 80.15,
    id: 112,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 999",
    Title: "Debussy: La Mer",
    Artist: "Berlin Philharmonic",
    EraCreated: 1965,
    RecordCompany: "Deutsche Grammophon",
    Discontinued: true,
    Description:
      "As one of the most iconic Classical & Orchestral albums, 'Debussy: La Mer' by Berlin Philharmonic has captivated audiences since its release in 1965. Released by Deutsche Grammophon, it holds a special place in any collector's library.",
    quantity: 6,
    price: 99.58,
    id: 113,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 880",
    Title: "Carmina Burana",
    Artist: "London Philharmonic Choir & Orchestra",
    EraCreated: 1969,
    RecordCompany: "EMI Classics",
    Discontinued: true,
    Description:
      "London Philharmonic Choir & Orchestra's 'Carmina Burana' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1969. Brought to the world by EMI Classics, this record remains a must-have for true enthusiasts.",
    quantity: 3,
    price: 164.3,
    id: 114,
    category: "c6"
  },
  {
    CatalogNumber: "B0027854-01",
    Title: "Mahler: Symphony No. 2",
    Artist: "New York Philharmonic",
    EraCreated: 1976,
    RecordCompany: "Sony Classical",
    Discontinued: true,
    Description:
      "New York Philharmonic's 'Mahler: Symphony No. 2' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1976. Brought to the world by Sony Classical, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 175.22,
    id: 115,
    category: "c6"
  },
  {
    CatalogNumber: "B0019825-01",
    Title: "Beethoven: Symphony No. 9",
    Artist: "Vienna Philharmonic",
    EraCreated: 1970,
    RecordCompany: "Deutsche Grammophon",
    Discontinued: true,
    Description:
      "As one of the most iconic Classical & Orchestral albums, 'Beethoven: Symphony No. 9' by Vienna Philharmonic has captivated audiences since its release in 1970. Released by Deutsche Grammophon, it holds a special place in any collector's library.",
    quantity: 8,
    price: 192.4,
    id: 116,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 1023",
    Title: "Handel: Messiah",
    Artist: "Royal Philharmonic Orchestra",
    EraCreated: 1968,
    RecordCompany: "RCA Victor",
    Discontinued: true,
    Description:
      "For fans of Classical & Orchestral, 'Handel: Messiah' by Royal Philharmonic Orchestra is a timeless classic that has stood the test of time since 1968. Produced by RCA Victor, it\u2019s a piece that resonates with music lovers.",
    quantity: 10,
    price: 122.7,
    id: 117,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 1133",
    Title: "Dvorak: Symphony No. 9",
    Artist: "Czech Philharmonic Orchestra",
    EraCreated: 1975,
    RecordCompany: "Supraphon",
    Discontinued: true,
    Description:
      "Czech Philharmonic Orchestra's 'Dvorak: Symphony No. 9' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1975. Brought to the world by Supraphon, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 100.63,
    id: 118,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 1280",
    Title: "Rachmaninoff: Piano Concerto No. 2",
    Artist: "Philadelphia Orchestra",
    EraCreated: 1979,
    RecordCompany: "RCA Red Seal",
    Discontinued: true,
    Description:
      "Philadelphia Orchestra's 'Rachmaninoff: Piano Concerto No. 2' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1979. Brought to the world by RCA Red Seal, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 139.56,
    id: 119,
    category: "c6"
  },
  {
    CatalogNumber: "B0011245-01",
    Title: "Schubert: Symphony No. 8 'Unfinished'",
    Artist: "Vienna Philharmonic",
    EraCreated: 1963,
    RecordCompany: "Deutsche Grammophon",
    Discontinued: true,
    Description:
      "As one of the most iconic Classical & Orchestral albums, 'Schubert: Symphony No. 8 'Unfinished'' by Vienna Philharmonic has captivated audiences since its release in 1963. Released by Deutsche Grammophon, it holds a special place in any collector's library.",
    quantity: 4,
    price: 75.01,
    id: 120,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 2356",
    Title: "Holst: The Planets",
    Artist: "Los Angeles Philharmonic",
    EraCreated: 1971,
    RecordCompany: "Decca Records",
    Discontinued: true,
    Description:
      "Los Angeles Philharmonic's 'Holst: The Planets' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1971. Brought to the world by Decca Records, this record remains a must-have for true enthusiasts.",
    quantity: 8,
    price: 134.53,
    id: 121,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 3001",
    Title: "Stravinsky: The Rite of Spring",
    Artist: "Cleveland Orchestra",
    EraCreated: 1972,
    RecordCompany: "London Records",
    Discontinued: true,
    Description:
      "For fans of Classical & Orchestral, 'Stravinsky: The Rite of Spring' by Cleveland Orchestra is a timeless classic that has stood the test of time since 1972. Produced by London Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 6,
    price: 138.43,
    id: 122,
    category: "c6"
  },
  {
    CatalogNumber: "MOVLP 245",
    Title: "Brahms: Symphony No. 1",
    Artist: "Berlin Philharmonic",
    EraCreated: 1966,
    RecordCompany: "Deutsche Grammophon",
    Discontinued: true,
    Description:
      "With its release in 1966, 'Brahms: Symphony No. 1' by Berlin Philharmonic under Deutsche Grammophon set the bar for Classical & Orchestral music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 6,
    price: 106.45,
    id: 123,
    category: "c6"
  },
  {
    CatalogNumber: "B0031111-01",
    Title: "Mendelssohn: Violin Concerto",
    Artist: "Leipzig Gewandhaus Orchestra",
    EraCreated: 1978,
    RecordCompany: "Philips Records",
    Discontinued: true,
    Description:
      "'Mendelssohn: Violin Concerto' by Leipzig Gewandhaus Orchestra is a landmark in Classical & Orchestral, first released in 1978. Crafted under Philips Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 1,
    price: 111.97,
    id: 124,
    category: "c6"
  },
  {
    CatalogNumber: "CL 1355",
    Title: "Kind of Blue",
    Artist: "Miles Davis",
    EraCreated: 1959,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "With its release in 1959, 'Kind of Blue' by Miles Davis under Columbia Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 1,
    price: 250.19,
    id: 125,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 191",
    Title: "A Love Supreme",
    Artist: "John Coltrane",
    EraCreated: 1965,
    RecordCompany: "Impulse! Records",
    Discontinued: true,
    Description:
      "'A Love Supreme' by John Coltrane is a landmark in Jazz, first released in 1965. Crafted under Impulse! Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 333.92,
    id: 126,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 159",
    Title: "Time Out",
    Artist: "The Dave Brubeck Quartet",
    EraCreated: 1959,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "With its release in 1959, 'Time Out' by The Dave Brubeck Quartet under Columbia Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 3,
    price: 132.08,
    id: 127,
    category: "c7"
  },
  {
    CatalogNumber: "B0025214-01",
    Title: "Mingus Ah Um",
    Artist: "Charles Mingus",
    EraCreated: 1959,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "For fans of Jazz, 'Mingus Ah Um' by Charles Mingus is a timeless classic that has stood the test of time since 1959. Produced by Columbia Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 8,
    price: 250.02,
    id: 128,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 3021",
    Title: "Blue Train",
    Artist: "John Coltrane",
    EraCreated: 1957,
    RecordCompany: "Blue Note Records",
    Discontinued: true,
    Description:
      "With its release in 1957, 'Blue Train' by John Coltrane under Blue Note Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 4,
    price: 145.12,
    id: 129,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 421",
    Title: "The Shape of Jazz to Come",
    Artist: "Ornette Coleman",
    EraCreated: 1959,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "Ornette Coleman's 'The Shape of Jazz to Come' is celebrated as a defining moment in Jazz, showcasing unparalleled artistry since 1959. Brought to the world by Atlantic Records, this record remains a must-have for true enthusiasts.",
    quantity: 1,
    price: 143.18,
    id: 130,
    category: "c7"
  },
  {
    CatalogNumber: "R1 567123",
    Title: "Getz/Gilberto",
    Artist: "Stan Getz & Jo\u00e3o Gilberto",
    EraCreated: 1964,
    RecordCompany: "Verve Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Jazz albums, 'Getz/Gilberto' by Stan Getz & Jo\u00e3o Gilberto has captivated audiences since its release in 1964. Released by Verve Records, it holds a special place in any collector's library.",
    quantity: 6,
    price: 191.64,
    id: 131,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 1237",
    Title: "Moanin'",
    Artist: "Art Blakey & The Jazz Messengers",
    EraCreated: 1958,
    RecordCompany: "Blue Note Records",
    Discontinued: true,
    Description:
      "For fans of Jazz, 'Moanin'' by Art Blakey & The Jazz Messengers is a timeless classic that has stood the test of time since 1958. Produced by Blue Note Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 4,
    price: 129.73,
    id: 132,
    category: "c7"
  },
  {
    CatalogNumber: "B0021421-01",
    Title: "Misterioso",
    Artist: "Thelonious Monk",
    EraCreated: 1958,
    RecordCompany: "Riverside Records",
    Discontinued: true,
    Description:
      "For fans of Jazz, 'Misterioso' by Thelonious Monk is a timeless classic that has stood the test of time since 1958. Produced by Riverside Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 6,
    price: 134.29,
    id: 133,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 2135",
    Title: "Ellington at Newport",
    Artist: "Duke Ellington",
    EraCreated: 1956,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Jazz albums, 'Ellington at Newport' by Duke Ellington has captivated audiences since its release in 1956. Released by Columbia Records, it holds a special place in any collector's library.",
    quantity: 7,
    price: 192.75,
    id: 134,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 2567",
    Title: "Somethin' Else",
    Artist: "Cannonball Adderley",
    EraCreated: 1958,
    RecordCompany: "Blue Note Records",
    Discontinued: true,
    Description:
      "'Somethin' Else' by Cannonball Adderley is a landmark in Jazz, first released in 1958. Crafted under Blue Note Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 2,
    price: 141.51,
    id: 135,
    category: "c7"
  },
  {
    CatalogNumber: "B0034567-01",
    Title: "The Black Saint and the Sinner Lady",
    Artist: "Charles Mingus",
    EraCreated: 1963,
    RecordCompany: "Impulse! Records",
    Discontinued: true,
    Description:
      "'The Black Saint and the Sinner Lady' by Charles Mingus is a landmark in Jazz, first released in 1963. Crafted under Impulse! Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 9,
    price: 169.43,
    id: 136,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 2023",
    Title: "Brilliant Corners",
    Artist: "Thelonious Monk",
    EraCreated: 1957,
    RecordCompany: "Riverside Records",
    Discontinued: true,
    Description:
      "With its release in 1957, 'Brilliant Corners' by Thelonious Monk under Riverside Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 1,
    price: 148.31,
    id: 137,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 980",
    Title: "Out to Lunch!",
    Artist: "Eric Dolphy",
    EraCreated: 1964,
    RecordCompany: "Blue Note Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Jazz albums, 'Out to Lunch!' by Eric Dolphy has captivated audiences since its release in 1964. Released by Blue Note Records, it holds a special place in any collector's library.",
    quantity: 10,
    price: 151.49,
    id: 138,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 3555",
    Title: "Mingus Mingus Mingus Mingus Mingus",
    Artist: "Charles Mingus",
    EraCreated: 1964,
    RecordCompany: "Impulse! Records",
    Discontinued: true,
    Description:
      "For fans of Jazz, 'Mingus Mingus Mingus Mingus Mingus' by Charles Mingus is a timeless classic that has stood the test of time since 1964. Produced by Impulse! Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 122.9,
    id: 139,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 987",
    Title: "Jazz at Massey Hall",
    Artist: "The Quintet",
    EraCreated: 1956,
    RecordCompany: "Debut Records",
    Discontinued: true,
    Description:
      "For fans of Jazz, 'Jazz at Massey Hall' by The Quintet is a timeless classic that has stood the test of time since 1956. Produced by Debut Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 5,
    price: 143.61,
    id: 140,
    category: "c7"
  },
  {
    CatalogNumber: "R1 987654",
    Title: "The Sidewinder",
    Artist: "Lee Morgan",
    EraCreated: 1964,
    RecordCompany: "Blue Note Records",
    Discontinued: true,
    Description:
      "'The Sidewinder' by Lee Morgan is a landmark in Jazz, first released in 1964. Crafted under Blue Note Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 5,
    price: 115.32,
    id: 141,
    category: "c7"
  },
  {
    CatalogNumber: "B0011245-01",
    Title: "Ascension",
    Artist: "John Coltrane",
    EraCreated: 1966,
    RecordCompany: "Impulse! Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Jazz albums, 'Ascension' by John Coltrane has captivated audiences since its release in 1966. Released by Impulse! Records, it holds a special place in any collector's library.",
    quantity: 5,
    price: 175.39,
    id: 142,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 4521",
    Title: "Speak No Evil",
    Artist: "Wayne Shorter",
    EraCreated: 1966,
    RecordCompany: "Blue Note Records",
    Discontinued: true,
    Description:
      "Wayne Shorter's 'Speak No Evil' is celebrated as a defining moment in Jazz, showcasing unparalleled artistry since 1966. Brought to the world by Blue Note Records, this record remains a must-have for true enthusiasts.",
    quantity: 6,
    price: 182.01,
    id: 143,
    category: "c7"
  },
  {
    CatalogNumber: "B0035678-01",
    Title: "Soul Station",
    Artist: "Hank Mobley",
    EraCreated: 1960,
    RecordCompany: "Blue Note Records",
    Discontinued: true,
    Description:
      "'Soul Station' by Hank Mobley is a landmark in Jazz, first released in 1960. Crafted under Blue Note Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 7,
    price: 170.23,
    id: 144,
    category: "c7"
  },
  {
    CatalogNumber: "MOVLP 5011",
    Title: "Red Headed Stranger",
    Artist: "Willie Nelson",
    EraCreated: 1975,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "Willie Nelson's 'Red Headed Stranger' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1975. Brought to the world by Columbia Records, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 82.59,
    id: 145,
    category: "c8"
  },
  {
    CatalogNumber: "B0019235-01",
    Title: "Blue",
    Artist: "Joni Mitchell",
    EraCreated: 1971,
    RecordCompany: "Reprise Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Country & Folk albums, 'Blue' by Joni Mitchell has captivated audiences since its release in 1971. Released by Reprise Records, it holds a special place in any collector's library.",
    quantity: 8,
    price: 251.24,
    id: 146,
    category: "c8"
  },
  {
    CatalogNumber: "R1 1234567",
    Title: "The Essential Johnny Cash",
    Artist: "Johnny Cash",
    EraCreated: 2002,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "With its release in 2002, 'The Essential Johnny Cash' by Johnny Cash under Columbia Records set the bar for Country & Folk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 1,
    price: 111.62,
    id: 147,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1445",
    Title: "Harvest",
    Artist: "Neil Young",
    EraCreated: 1972,
    RecordCompany: "Reprise Records",
    Discontinued: true,
    Description:
      "For fans of Country & Folk, 'Harvest' by Neil Young is a timeless classic that has stood the test of time since 1972. Produced by Reprise Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 6,
    price: 214.97,
    id: 148,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1311",
    Title: "At Folsom Prison",
    Artist: "Johnny Cash",
    EraCreated: 1968,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "Johnny Cash's 'At Folsom Prison' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1968. Brought to the world by Columbia Records, this record remains a must-have for true enthusiasts.",
    quantity: 5,
    price: 132.62,
    id: 149,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 2233",
    Title: "Sweetheart of the Rodeo",
    Artist: "The Byrds",
    EraCreated: 1968,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "With its release in 1968, 'Sweetheart of the Rodeo' by The Byrds under Columbia Records set the bar for Country & Folk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 8,
    price: 146.18,
    id: 150,
    category: "c8"
  },
  {
    CatalogNumber: "B0021243-01",
    Title: "Come Away with Me",
    Artist: "Norah Jones",
    EraCreated: 2002,
    RecordCompany: "Blue Note Records",
    Discontinued: false,
    Description:
      "Norah Jones's 'Come Away with Me' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 2002. Brought to the world by Blue Note Records, this record remains a must-have for true enthusiasts.",
    quantity: 9,
    price: 84.11,
    id: 151,
    category: "c8"
  },
  {
    CatalogNumber: "R1 654321",
    Title: "The Freewheelin' Bob Dylan",
    Artist: "Bob Dylan",
    EraCreated: 1963,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "Bob Dylan's 'The Freewheelin' Bob Dylan' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1963. Brought to the world by Columbia Records, this record remains a must-have for true enthusiasts.",
    quantity: 3,
    price: 174.44,
    id: 152,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 998",
    Title: "Modern Sounds in Country and Western Music",
    Artist: "Ray Charles",
    EraCreated: 1962,
    RecordCompany: "ABC-Paramount",
    Discontinued: true,
    Description:
      "'Modern Sounds in Country and Western Music' by Ray Charles is a landmark in Country & Folk, first released in 1962. Crafted under ABC-Paramount, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 5,
    price: 135.17,
    id: 153,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1987",
    Title: "Tapestry",
    Artist: "Carole King",
    EraCreated: 1971,
    RecordCompany: "Ode Records",
    Discontinued: true,
    Description:
      "For fans of Country & Folk, 'Tapestry' by Carole King is a timeless classic that has stood the test of time since 1971. Produced by Ode Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 9,
    price: 171.63,
    id: 154,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1033",
    Title: "Music from Big Pink",
    Artist: "The Band",
    EraCreated: 1968,
    RecordCompany: "Capitol Records",
    Discontinued: true,
    Description:
      "With its release in 1968, 'Music from Big Pink' by The Band under Capitol Records set the bar for Country & Folk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 6,
    price: 144.09,
    id: 155,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1555",
    Title: "John Prine",
    Artist: "John Prine",
    EraCreated: 1971,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "'John Prine' by John Prine is a landmark in Country & Folk, first released in 1971. Crafted under Atlantic Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 95.87,
    id: 156,
    category: "c8"
  },
  {
    CatalogNumber: "B0032487-01",
    Title: "Raising Sand",
    Artist: "Robert Plant & Alison Krauss",
    EraCreated: 2007,
    RecordCompany: "Rounder Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Country & Folk albums, 'Raising Sand' by Robert Plant & Alison Krauss has captivated audiences since its release in 2007. Released by Rounder Records, it holds a special place in any collector's library.",
    quantity: 2,
    price: 106.01,
    id: 157,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1899",
    Title: "Court and Spark",
    Artist: "Joni Mitchell",
    EraCreated: 1974,
    RecordCompany: "Asylum Records",
    Discontinued: true,
    Description:
      "Joni Mitchell's 'Court and Spark' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1974. Brought to the world by Asylum Records, this record remains a must-have for true enthusiasts.",
    quantity: 5,
    price: 125.69,
    id: 158,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 2015",
    Title: "Will the Circle Be Unbroken",
    Artist: "Nitty Gritty Dirt Band",
    EraCreated: 1972,
    RecordCompany: "United Artists Records",
    Discontinued: true,
    Description:
      "'Will the Circle Be Unbroken' by Nitty Gritty Dirt Band is a landmark in Country & Folk, first released in 1972. Crafted under United Artists Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 147.26,
    id: 159,
    category: "c8"
  },
  {
    CatalogNumber: "B0024563-01",
    Title: "Gold",
    Artist: "Emmylou Harris",
    EraCreated: 1975,
    RecordCompany: "Reprise Records",
    Discontinued: true,
    Description:
      "Emmylou Harris's 'Gold' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1975. Brought to the world by Reprise Records, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 80.67,
    id: 160,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1452",
    Title: "Heartbreaker",
    Artist: "Ryan Adams",
    EraCreated: 2000,
    RecordCompany: "Bloodshot Records",
    Discontinued: false,
    Description:
      "Ryan Adams's 'Heartbreaker' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 2000. Brought to the world by Bloodshot Records, this record remains a must-have for true enthusiasts.",
    quantity: 8,
    price: 124.59,
    id: 161,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1145",
    Title: "Gram Parsons' Grievous Angel",
    Artist: "Gram Parsons",
    EraCreated: 1974,
    RecordCompany: "Reprise Records",
    Discontinued: true,
    Description:
      "'Gram Parsons' Grievous Angel' by Gram Parsons is a landmark in Country & Folk, first released in 1974. Crafted under Reprise Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 118.24,
    id: 162,
    category: "c8"
  },
  {
    CatalogNumber: "B0029834-01",
    Title: "The Last Waltz",
    Artist: "The Band",
    EraCreated: 1978,
    RecordCompany: "Warner Bros. Records",
    Discontinued: true,
    Description:
      "'The Last Waltz' by The Band is a landmark in Country & Folk, first released in 1978. Crafted under Warner Bros. Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 126.44,
    id: 163,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 500",
    Title: "Ode to Billie Joe",
    Artist: "Bobbie Gentry",
    EraCreated: 1967,
    RecordCompany: "Capitol Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Country & Folk albums, 'Ode to Billie Joe' by Bobbie Gentry has captivated audiences since its release in 1967. Released by Capitol Records, it holds a special place in any collector's library.",
    quantity: 10,
    price: 115.78,
    id: 164,
    category: "c8"
  },
  {
    CatalogNumber: "MOVLP 1012",
    Title: "What's Going On",
    Artist: "Marvin Gaye",
    EraCreated: 1971,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "Marvin Gaye's 'What's Going On' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1971. Brought to the world by Tamla Records, this record remains a must-have for true enthusiasts.",
    quantity: 1,
    price: 251.7,
    id: 165,
    category: "c9"
  },
  {
    CatalogNumber: "B0012342-01",
    Title: "I Never Loved a Man the Way I Love You",
    Artist: "Aretha Franklin",
    EraCreated: 1967,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "For fans of Soul, 'I Never Loved a Man the Way I Love You' by Aretha Franklin is a timeless classic that has stood the test of time since 1967. Produced by Atlantic Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 2,
    price: 158.14,
    id: 166,
    category: "c9"
  },
  {
    CatalogNumber: "R1 654789",
    Title: "Let's Get It On",
    Artist: "Marvin Gaye",
    EraCreated: 1973,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "For fans of Soul, 'Let's Get It On' by Marvin Gaye is a timeless classic that has stood the test of time since 1973. Produced by Tamla Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 121.95,
    id: 167,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 1130",
    Title: "Soulful",
    Artist: "Diana Ross & The Supremes",
    EraCreated: 1968,
    RecordCompany: "Motown Records",
    Discontinued: true,
    Description:
      "Diana Ross & The Supremes's 'Soulful' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1968. Brought to the world by Motown Records, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 143.4,
    id: 168,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 2020",
    Title: "Lady Soul",
    Artist: "Aretha Franklin",
    EraCreated: 1968,
    RecordCompany: "Atlantic Records",
    Discontinued: true,
    Description:
      "With its release in 1968, 'Lady Soul' by Aretha Franklin under Atlantic Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 5,
    price: 141.06,
    id: 169,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 2090",
    Title: "Innervisions",
    Artist: "Stevie Wonder",
    EraCreated: 1973,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "Stevie Wonder's 'Innervisions' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1973. Brought to the world by Tamla Records, this record remains a must-have for true enthusiasts.",
    quantity: 6,
    price: 178.97,
    id: 170,
    category: "c9"
  },
  {
    CatalogNumber: "B0024567-01",
    Title: "Hot Buttered Soul",
    Artist: "Isaac Hayes",
    EraCreated: 1969,
    RecordCompany: "Enterprise Records",
    Discontinued: true,
    Description:
      "Isaac Hayes's 'Hot Buttered Soul' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1969. Brought to the world by Enterprise Records, this record remains a must-have for true enthusiasts.",
    quantity: 10,
    price: 141.54,
    id: 171,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 2089",
    Title: "Back to Black",
    Artist: "Amy Winehouse",
    EraCreated: 2006,
    RecordCompany: "Island Records",
    Discontinued: false,
    Description:
      "As one of the most iconic Soul albums, 'Back to Black' by Amy Winehouse has captivated audiences since its release in 2006. Released by Island Records, it holds a special place in any collector's library.",
    quantity: 1,
    price: 83.25,
    id: 172,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 1400",
    Title: "Otis Blue: Otis Redding Sings Soul",
    Artist: "Otis Redding",
    EraCreated: 1965,
    RecordCompany: "Volt Records",
    Discontinued: true,
    Description:
      "Otis Redding's 'Otis Blue: Otis Redding Sings Soul' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1965. Brought to the world by Volt Records, this record remains a must-have for true enthusiasts.",
    quantity: 5,
    price: 226.91,
    id: 173,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 220",
    Title: "Superfly",
    Artist: "Curtis Mayfield",
    EraCreated: 1972,
    RecordCompany: "Curtom Records",
    Discontinued: true,
    Description:
      "'Superfly' by Curtis Mayfield is a landmark in Soul, first released in 1972. Crafted under Curtom Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 8,
    price: 167.82,
    id: 174,
    category: "c9"
  },
  {
    CatalogNumber: "R1 99999",
    Title: "The Dock of the Bay",
    Artist: "Otis Redding",
    EraCreated: 1968,
    RecordCompany: "Volt Records",
    Discontinued: true,
    Description:
      "Otis Redding's 'The Dock of the Bay' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1968. Brought to the world by Volt Records, this record remains a must-have for true enthusiasts.",
    quantity: 6,
    price: 141.14,
    id: 175,
    category: "c9"
  },
  {
    CatalogNumber: "B0034568-01",
    Title: "The Miseducation of Lauryn Hill",
    Artist: "Lauryn Hill",
    EraCreated: 1998,
    RecordCompany: "Ruffhouse Records",
    Discontinued: false,
    Description:
      "With its release in 1998, 'The Miseducation of Lauryn Hill' by Lauryn Hill under Ruffhouse Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 7,
    price: 176.1,
    id: 176,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 888",
    Title: "A Change Is Gonna Come",
    Artist: "Sam Cooke",
    EraCreated: 1964,
    RecordCompany: "RCA Victor",
    Discontinued: true,
    Description:
      "With its release in 1964, 'A Change Is Gonna Come' by Sam Cooke under RCA Victor set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 3,
    price: 137.08,
    id: 177,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 1345",
    Title: "I'm Still in Love with You",
    Artist: "Al Green",
    EraCreated: 1972,
    RecordCompany: "Hi Records",
    Discontinued: true,
    Description:
      "'I'm Still in Love with You' by Al Green is a landmark in Soul, first released in 1972. Crafted under Hi Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 3,
    price: 152.74,
    id: 178,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 7777",
    Title: "Here, My Dear",
    Artist: "Marvin Gaye",
    EraCreated: 1978,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "For fans of Soul, 'Here, My Dear' by Marvin Gaye is a timeless classic that has stood the test of time since 1978. Produced by Tamla Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 8,
    price: 128.37,
    id: 179,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 909",
    Title: "Live at the Apollo",
    Artist: "James Brown",
    EraCreated: 1963,
    RecordCompany: "King Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Soul albums, 'Live at the Apollo' by James Brown has captivated audiences since its release in 1963. Released by King Records, it holds a special place in any collector's library.",
    quantity: 2,
    price: 128.55,
    id: 180,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 302",
    Title: "Curtis",
    Artist: "Curtis Mayfield",
    EraCreated: 1970,
    RecordCompany: "Curtom Records",
    Discontinued: true,
    Description:
      "'Curtis' by Curtis Mayfield is a landmark in Soul, first released in 1970. Crafted under Curtom Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 8,
    price: 120.92,
    id: 181,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 1300",
    Title: "The Impressions",
    Artist: "The Impressions",
    EraCreated: 1963,
    RecordCompany: "ABC-Paramount",
    Discontinued: true,
    Description:
      "'The Impressions' by The Impressions is a landmark in Soul, first released in 1963. Crafted under ABC-Paramount, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 84.19,
    id: 182,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 2022",
    Title: "Street Songs",
    Artist: "Rick James",
    EraCreated: 1981,
    RecordCompany: "Gordy Records",
    Discontinued: true,
    Description:
      "With its release in 1981, 'Street Songs' by Rick James under Gordy Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 7,
    price: 106.81,
    id: 183,
    category: "c9"
  },
  {
    CatalogNumber: "B0012450-01",
    Title: "Simply Beautiful",
    Artist: "Al Green",
    EraCreated: 1974,
    RecordCompany: "Hi Records",
    Discontinued: true,
    Description:
      "With its release in 1974, 'Simply Beautiful' by Al Green under Hi Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 7,
    price: 125.65,
    id: 184,
    category: "c9"
  },
  {
    CatalogNumber: "MOVLP 8001",
    Title: "Maggot Brain",
    Artist: "Funkadelic",
    EraCreated: 1971,
    RecordCompany: "Westbound Records",
    Discontinued: true,
    Description:
      "With its release in 1971, 'Maggot Brain' by Funkadelic under Westbound Records set the bar for Funk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 2,
    price: 192.97,
    id: 185,
    category: "c10"
  },
  {
    CatalogNumber: "R1 567890",
    Title: "Superfly",
    Artist: "Curtis Mayfield",
    EraCreated: 1972,
    RecordCompany: "Curtom Records",
    Discontinued: true,
    Description:
      "Curtis Mayfield's 'Superfly' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1972. Brought to the world by Curtom Records, this record remains a must-have for true enthusiasts.",
    quantity: 1,
    price: 184.94,
    id: 186,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 2221",
    Title: "Stand!",
    Artist: "Sly & The Family Stone",
    EraCreated: 1969,
    RecordCompany: "Epic Records",
    Discontinued: true,
    Description:
      "'Stand!' by Sly & The Family Stone is a landmark in Funk, first released in 1969. Crafted under Epic Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 3,
    price: 171.82,
    id: 187,
    category: "c10"
  },
  {
    CatalogNumber: "B0023421-01",
    Title: "There's a Riot Goin' On",
    Artist: "Sly & The Family Stone",
    EraCreated: 1971,
    RecordCompany: "Epic Records",
    Discontinued: true,
    Description:
      "For fans of Funk, 'There's a Riot Goin' On' by Sly & The Family Stone is a timeless classic that has stood the test of time since 1971. Produced by Epic Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 3,
    price: 196.72,
    id: 188,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 1901",
    Title: "One Nation Under a Groove",
    Artist: "Funkadelic",
    EraCreated: 1978,
    RecordCompany: "Warner Bros. Records",
    Discontinued: true,
    Description:
      "Funkadelic's 'One Nation Under a Groove' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1978. Brought to the world by Warner Bros. Records, this record remains a must-have for true enthusiasts.",
    quantity: 1,
    price: 175.2,
    id: 189,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 1122",
    Title: "Fresh",
    Artist: "Sly & The Family Stone",
    EraCreated: 1973,
    RecordCompany: "Epic Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Funk albums, 'Fresh' by Sly & The Family Stone has captivated audiences since its release in 1973. Released by Epic Records, it holds a special place in any collector's library.",
    quantity: 2,
    price: 167.97,
    id: 190,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 1800",
    Title: "Cosmic Slop",
    Artist: "Funkadelic",
    EraCreated: 1973,
    RecordCompany: "Westbound Records",
    Discontinued: true,
    Description:
      "Funkadelic's 'Cosmic Slop' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1973. Brought to the world by Westbound Records, this record remains a must-have for true enthusiasts.",
    quantity: 1,
    price: 146.42,
    id: 191,
    category: "c10"
  },
  {
    CatalogNumber: "B0032456-01",
    Title: "Street Songs",
    Artist: "Rick James",
    EraCreated: 1981,
    RecordCompany: "Gordy Records",
    Discontinued: true,
    Description:
      "For fans of Funk, 'Street Songs' by Rick James is a timeless classic that has stood the test of time since 1981. Produced by Gordy Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 9,
    price: 117.03,
    id: 192,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 9999",
    Title: "James Brown's Greatest Hits",
    Artist: "James Brown",
    EraCreated: 1970,
    RecordCompany: "King Records",
    Discontinued: true,
    Description:
      "'James Brown's Greatest Hits' by James Brown is a landmark in Funk, first released in 1970. Crafted under King Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 8,
    price: 212.99,
    id: 193,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 711",
    Title: "Songs in the Key of Life",
    Artist: "Stevie Wonder",
    EraCreated: 1976,
    RecordCompany: "Tamla Records",
    Discontinued: true,
    Description:
      "'Songs in the Key of Life' by Stevie Wonder is a landmark in Funk, first released in 1976. Crafted under Tamla Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 2,
    price: 160.79,
    id: 194,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 7110",
    Title: "Hardcore Jollies",
    Artist: "Funkadelic",
    EraCreated: 1976,
    RecordCompany: "Warner Bros. Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Funk albums, 'Hardcore Jollies' by Funkadelic has captivated audiences since its release in 1976. Released by Warner Bros. Records, it holds a special place in any collector's library.",
    quantity: 1,
    price: 131.46,
    id: 195,
    category: "c10"
  },
  {
    CatalogNumber: "R1 789101",
    Title: "The Payback",
    Artist: "James Brown",
    EraCreated: 1973,
    RecordCompany: "Polydor Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Funk albums, 'The Payback' by James Brown has captivated audiences since its release in 1973. Released by Polydor Records, it holds a special place in any collector's library.",
    quantity: 7,
    price: 145.21,
    id: 196,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 2451",
    Title: "Fire",
    Artist: "Ohio Players",
    EraCreated: 1974,
    RecordCompany: "Mercury Records",
    Discontinued: true,
    Description:
      "'Fire' by Ohio Players is a landmark in Funk, first released in 1974. Crafted under Mercury Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 7,
    price: 110.18,
    id: 197,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 1770",
    Title: "A Funk Odyssey",
    Artist: "Jamiroquai",
    EraCreated: 2001,
    RecordCompany: "Sony Music",
    Discontinued: false,
    Description:
      "For fans of Funk, 'A Funk Odyssey' by Jamiroquai is a timeless classic that has stood the test of time since 2001. Produced by Sony Music, it\u2019s a piece that resonates with music lovers.",
    quantity: 10,
    price: 106.47,
    id: 198,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 1990",
    Title: "Mothership Connection",
    Artist: "Parliament",
    EraCreated: 1975,
    RecordCompany: "Casablanca Records",
    Discontinued: true,
    Description:
      "'Mothership Connection' by Parliament is a landmark in Funk, first released in 1975. Crafted under Casablanca Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 9,
    price: 189.26,
    id: 199,
    category: "c10"
  },
  {
    CatalogNumber: "B0038888-01",
    Title: "Motor Booty Affair",
    Artist: "Parliament",
    EraCreated: 1978,
    RecordCompany: "Casablanca Records",
    Discontinued: true,
    Description:
      "For fans of Funk, 'Motor Booty Affair' by Parliament is a timeless classic that has stood the test of time since 1978. Produced by Casablanca Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 4,
    price: 122.45,
    id: 200,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 1510",
    Title: "The World Is a Ghetto",
    Artist: "War",
    EraCreated: 1972,
    RecordCompany: "United Artists Records",
    Discontinued: true,
    Description:
      "War's 'The World Is a Ghetto' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1972. Brought to the world by United Artists Records, this record remains a must-have for true enthusiasts.",
    quantity: 7,
    price: 101.86,
    id: 201,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 1401",
    Title: "Funkentelechy vs. the Placebo Syndrome",
    Artist: "Parliament",
    EraCreated: 1977,
    RecordCompany: "Casablanca Records",
    Discontinued: true,
    Description:
      "'Funkentelechy vs. the Placebo Syndrome' by Parliament is a landmark in Funk, first released in 1977. Crafted under Casablanca Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 112.9,
    id: 202,
    category: "c10"
  },
  {
    CatalogNumber: "R1 222444",
    Title: "Skin Tight",
    Artist: "Ohio Players",
    EraCreated: 1974,
    RecordCompany: "Mercury Records",
    Discontinued: true,
    Description:
      "For fans of Funk, 'Skin Tight' by Ohio Players is a timeless classic that has stood the test of time since 1974. Produced by Mercury Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 4,
    price: 167.75,
    id: 203,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 3234",
    Title: "Roots",
    Artist: "Curtis Mayfield",
    EraCreated: 1971,
    RecordCompany: "Curtom Records",
    Discontinued: true,
    Description:
      "With its release in 1971, 'Roots' by Curtis Mayfield under Curtom Records set the bar for Funk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 5,
    price: 126.23,
    id: 204,
    category: "c10"
  },
  {
    CatalogNumber: "MOVLP 6661",
    Title: "Master of Puppets",
    Artist: "Metallica",
    EraCreated: 1986,
    RecordCompany: "Elektra Records",
    Discontinued: true,
    Description:
      "As one of the most iconic Metal albums, 'Master of Puppets' by Metallica has captivated audiences since its release in 1986. Released by Elektra Records, it holds a special place in any collector's library.",
    quantity: 5,
    price: 235.79,
    id: 205,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 3333",
    Title: "The Number of the Beast",
    Artist: "Iron Maiden",
    EraCreated: 1982,
    RecordCompany: "EMI",
    Discontinued: true,
    Description:
      "With its release in 1982, 'The Number of the Beast' by Iron Maiden under EMI set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 9,
    price: 159.3,
    id: 206,
    category: "c11"
  },
  {
    CatalogNumber: "B0021234-01",
    Title: "Rust in Peace",
    Artist: "Megadeth",
    EraCreated: 1990,
    RecordCompany: "Capitol Records",
    Discontinued: false,
    Description:
      "With its release in 1990, 'Rust in Peace' by Megadeth under Capitol Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 5,
    price: 170.82,
    id: 207,
    category: "c11"
  },
  {
    CatalogNumber: "R1 456789",
    Title: "Paranoid",
    Artist: "Black Sabbath",
    EraCreated: 1970,
    RecordCompany: "Vertigo Records",
    Discontinued: true,
    Description:
      "For fans of Metal, 'Paranoid' by Black Sabbath is a timeless classic that has stood the test of time since 1970. Produced by Vertigo Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 10,
    price: 206.3,
    id: 208,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 5000",
    Title: "Reign in Blood",
    Artist: "Slayer",
    EraCreated: 1986,
    RecordCompany: "Def Jam Recordings",
    Discontinued: true,
    Description:
      "As one of the most iconic Metal albums, 'Reign in Blood' by Slayer has captivated audiences since its release in 1986. Released by Def Jam Recordings, it holds a special place in any collector's library.",
    quantity: 10,
    price: 136.15,
    id: 209,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 870",
    Title: "Painkiller",
    Artist: "Judas Priest",
    EraCreated: 1990,
    RecordCompany: "Columbia Records",
    Discontinued: false,
    Description:
      "With its release in 1990, 'Painkiller' by Judas Priest under Columbia Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 10,
    price: 117.17,
    id: 210,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 4577",
    Title: "Heaven and Hell",
    Artist: "Black Sabbath",
    EraCreated: 1980,
    RecordCompany: "Vertigo Records",
    Discontinued: true,
    Description:
      "Black Sabbath's 'Heaven and Hell' is celebrated as a defining moment in Metal, showcasing unparalleled artistry since 1980. Brought to the world by Vertigo Records, this record remains a must-have for true enthusiasts.",
    quantity: 8,
    price: 141.78,
    id: 211,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 2321",
    Title: "Ride the Lightning",
    Artist: "Metallica",
    EraCreated: 1984,
    RecordCompany: "Megaforce Records",
    Discontinued: true,
    Description:
      "With its release in 1984, 'Ride the Lightning' by Metallica under Megaforce Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 6,
    price: 245.81,
    id: 212,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 912",
    Title: "British Steel",
    Artist: "Judas Priest",
    EraCreated: 1980,
    RecordCompany: "Columbia Records",
    Discontinued: true,
    Description:
      "With its release in 1980, 'British Steel' by Judas Priest under Columbia Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 8,
    price: 122.62,
    id: 213,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 1340",
    Title: "Seventh Son of a Seventh Son",
    Artist: "Iron Maiden",
    EraCreated: 1988,
    RecordCompany: "EMI",
    Discontinued: true,
    Description:
      "'Seventh Son of a Seventh Son' by Iron Maiden is a landmark in Metal, first released in 1988. Crafted under EMI, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 8,
    price: 158.9,
    id: 214,
    category: "c11"
  },
  {
    CatalogNumber: "R1 77777",
    Title: "Ace of Spades",
    Artist: "Mot\u00f6rhead",
    EraCreated: 1980,
    RecordCompany: "Bronze Records",
    Discontinued: true,
    Description:
      "For fans of Metal, 'Ace of Spades' by Mot\u00f6rhead is a timeless classic that has stood the test of time since 1980. Produced by Bronze Records, it\u2019s a piece that resonates with music lovers.",
    quantity: 5,
    price: 125.28,
    id: 215,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 1889",
    Title: "Blackwater Park",
    Artist: "Opeth",
    EraCreated: 2001,
    RecordCompany: "Music for Nations",
    Discontinued: false,
    Description:
      "With its release in 2001, 'Blackwater Park' by Opeth under Music for Nations set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 8,
    price: 141.78,
    id: 216,
    category: "c11"
  },
  {
    CatalogNumber: "B0034560-01",
    Title: "Toxicity",
    Artist: "System of a Down",
    EraCreated: 2001,
    RecordCompany: "American Recordings",
    Discontinued: false,
    Description:
      "As one of the most iconic Metal albums, 'Toxicity' by System of a Down has captivated audiences since its release in 2001. Released by American Recordings, it holds a special place in any collector's library.",
    quantity: 7,
    price: 107.79,
    id: 217,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 1077",
    Title: "Black Album",
    Artist: "Metallica",
    EraCreated: 1991,
    RecordCompany: "Elektra Records",
    Discontinued: false,
    Description:
      "'Black Album' by Metallica is a landmark in Metal, first released in 1991. Crafted under Elektra Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 6,
    price: 157.75,
    id: 218,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 2430",
    Title: "Peace Sells... but Who's Buying?",
    Artist: "Megadeth",
    EraCreated: 1986,
    RecordCompany: "Capitol Records",
    Discontinued: true,
    Description:
      "Megadeth's 'Peace Sells... but Who's Buying?' is celebrated as a defining moment in Metal, showcasing unparalleled artistry since 1986. Brought to the world by Capitol Records, this record remains a must-have for true enthusiasts.",
    quantity: 1,
    price: 123.32,
    id: 219,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 780",
    Title: "Vulgar Display of Power",
    Artist: "Pantera",
    EraCreated: 1992,
    RecordCompany: "Atco Records",
    Discontinued: false,
    Description:
      "With its release in 1992, 'Vulgar Display of Power' by Pantera under Atco Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    quantity: 5,
    price: 106.06,
    id: 220,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 2150",
    Title: "Lateralus",
    Artist: "Tool",
    EraCreated: 2001,
    RecordCompany: "Volcano Entertainment",
    Discontinued: false,
    Description:
      "'Lateralus' by Tool is a landmark in Metal, first released in 2001. Crafted under Volcano Entertainment, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 8,
    price: 156.94,
    id: 221,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 992",
    Title: "The Gallery",
    Artist: "Dark Tranquillity",
    EraCreated: 1995,
    RecordCompany: "Osmose Productions",
    Discontinued: false,
    Description:
      "'The Gallery' by Dark Tranquillity is a landmark in Metal, first released in 1995. Crafted under Osmose Productions, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 10,
    price: 101.67,
    id: 222,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 4560",
    Title: "Brave New World",
    Artist: "Iron Maiden",
    EraCreated: 2000,
    RecordCompany: "EMI",
    Discontinued: false,
    Description:
      "'Brave New World' by Iron Maiden is a landmark in Metal, first released in 2000. Crafted under EMI, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 7,
    price: 109.38,
    id: 223,
    category: "c11"
  },
  {
    CatalogNumber: "MOVLP 3410",
    Title: "Holy Diver",
    Artist: "Dio",
    EraCreated: 1983,
    RecordCompany: "Warner Bros. Records",
    Discontinued: true,
    Description:
      "'Holy Diver' by Dio is a landmark in Metal, first released in 1983. Crafted under Warner Bros. Records, this album is renowned for its timeless sound that continues to inspire.",
    quantity: 5,
    price: 161.81,
    id: 224,
    category: "c11"
  }
];
