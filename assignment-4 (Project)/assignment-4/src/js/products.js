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
    id: "P1",
    catalogNumber: "PC 81641",
    title: "Thriller",
    artist: "Michael Jackson",
    eraCreated: 1982,
    genre: "Pop",
    recordCompany: "Epic Records",
    discontinued: true,
    description:
      "For fans of Pop, 'Thriller' by Michael Jackson is a timeless classic that has stood the test of time since 1982. Produced by Epic Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P2",
    catalogNumber: "B0020520-01",
    title: "25",
    artist: "Adele",
    eraCreated: 2015,
    genre: "Pop",
    recordCompany: "XL Recordings",
    discontinued: false,
    description:
      "'25' by Adele is a landmark in Pop, first released in 2015. Crafted under XL Recordings, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P3",
    catalogNumber: "R1 547450",
    title: "21",
    artist: "Adele",
    eraCreated: 2011,
    genre: "Pop",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "For fans of Pop, '21' by Adele is a timeless classic that has stood the test of time since 2011. Produced by Columbia Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P4",
    catalogNumber: "B0019254-01",
    title: "Lemonade",
    artist: "Beyoncé",
    eraCreated: 2016,
    genre: "Pop",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "For fans of Pop, 'Lemonade' by Beyoncé is a timeless classic that has stood the test of time since 2016. Produced by Columbia Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P5",
    catalogNumber: "MOVLP 101",
    title: "1989",
    artist: "Taylor Swift",
    eraCreated: 2014,
    genre: "Pop",
    recordCompany: "Big Machine Records",
    discontinued: false,
    description:
      "As one of the most iconic Pop albums, '1989' by Taylor Swift has captivated audiences since its release in 2014. Released by Big Machine Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P6",
    catalogNumber: "B0017382-01",
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    eraCreated: 2020,
    genre: "Pop",
    recordCompany: "Warner Records",
    discontinued: false,
    description:
      "As one of the most iconic Pop albums, 'Future Nostalgia' by Dua Lipa has captivated audiences since its release in 2020. Released by Warner Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P7",
    catalogNumber: "MOVLP 725",
    title: "Back to Black",
    artist: "Amy Winehouse",
    eraCreated: 2006,
    genre: "Pop",
    recordCompany: "Island Records",
    discontinued: false,
    description:
      "Amy Winehouse's 'Back to Black' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 2006. Brought to the world by Island Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P8",
    catalogNumber: "MOVLP 1677",
    title: "ABBA Gold",
    artist: "ABBA",
    eraCreated: 1992,
    genre: "Pop",
    recordCompany: "Universal Music",
    discontinued: false,
    description:
      "'ABBA Gold' by ABBA is a landmark in Pop, first released in 1992. Crafted under Universal Music, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P9",
    catalogNumber: "MOVLP 2501",
    title: "Fine Line",
    artist: "Harry Styles",
    eraCreated: 2019,
    genre: "Pop",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "For fans of Pop, 'Fine Line' by Harry Styles is a timeless classic that has stood the test of time since 2019. Produced by Columbia Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P10",
    catalogNumber: "B0023738-01",
    title: "Born This Way",
    artist: "Lady Gaga",
    eraCreated: 2011,
    genre: "Pop",
    recordCompany: "Interscope Records",
    discontinued: false,
    description:
      "For fans of Pop, 'Born This Way' by Lady Gaga is a timeless classic that has stood the test of time since 2011. Produced by Interscope Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P11",
    catalogNumber: "MOVLP 169",
    title: "Dangerous",
    artist: "Michael Jackson",
    eraCreated: 1991,
    genre: "Pop",
    recordCompany: "Epic Records",
    discontinued: false,
    description:
      "Michael Jackson's 'Dangerous' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 1991. Brought to the world by Epic Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P12",
    catalogNumber: "R1 123456",
    title: "True Blue",
    artist: "Madonna",
    eraCreated: 1986,
    genre: "Pop",
    recordCompany: "Sire Records",
    discontinued: true,
    description:
      "As one of the most iconic Pop albums, 'True Blue' by Madonna has captivated audiences since its release in 1986. Released by Sire Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P13",
    catalogNumber: "PC 4748",
    title: "The Fame",
    artist: "Lady Gaga",
    eraCreated: 2008,
    genre: "Pop",
    recordCompany: "Interscope Records",
    discontinued: false,
    description:
      "For fans of Pop, 'The Fame' by Lady Gaga is a timeless classic that has stood the test of time since 2008. Produced by Interscope Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P14",
    catalogNumber: "MOVLP 2345",
    title: "Like a Virgin",
    artist: "Madonna",
    eraCreated: 1984,
    genre: "Pop",
    recordCompany: "Sire Records",
    discontinued: true,
    description:
      "Madonna's 'Like a Virgin' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 1984. Brought to the world by Sire Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P15",
    catalogNumber: "B0029859-01",
    title: "Chromatica",
    artist: "Lady Gaga",
    eraCreated: 2020,
    genre: "Pop",
    recordCompany: "Interscope Records",
    discontinued: false,
    description:
      "'Chromatica' by Lady Gaga is a landmark in Pop, first released in 2020. Crafted under Interscope Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P16",
    catalogNumber: "R1 789123",
    title: "FutureSex/LoveSounds",
    artist: "Justin Timberlake",
    eraCreated: 2006,
    genre: "Pop",
    recordCompany: "Jive Records",
    discontinued: false,
    description:
      "With its release in 2006, 'FutureSex/LoveSounds' by Justin Timberlake under Jive Records set the bar for Pop music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P17",
    catalogNumber: "MOVLP 2200",
    title: "Emotion",
    artist: "Carly Rae Jepsen",
    eraCreated: 2015,
    genre: "Pop",
    recordCompany: "604 Records",
    discontinued: false,
    description:
      "With its release in 2015, 'Emotion' by Carly Rae Jepsen under 604 Records set the bar for Pop music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P18",
    catalogNumber: "MOVLP 222",
    title: "Bad",
    artist: "Michael Jackson",
    eraCreated: 1987,
    genre: "Pop",
    recordCompany: "Epic Records",
    discontinued: true,
    description:
      "Michael Jackson's 'Bad' is celebrated as a defining moment in Pop, showcasing unparalleled artistry since 1987. Brought to the world by Epic Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P19",
    catalogNumber: "MOVLP 999",
    title: "Speak Now",
    artist: "Taylor Swift",
    eraCreated: 2010,
    genre: "Pop",
    recordCompany: "Big Machine Records",
    discontinued: false,
    description:
      "As one of the most iconic Pop albums, 'Speak Now' by Taylor Swift has captivated audiences since its release in 2010. Released by Big Machine Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P20",
    catalogNumber: "B0028815-01",
    title: "Sweetener",
    artist: "Ariana Grande",
    eraCreated: 2018,
    genre: "Pop",
    recordCompany: "Republic Records",
    discontinued: false,
    description:
      "For fans of Pop, 'Sweetener' by Ariana Grande is a timeless classic that has stood the test of time since 2018. Produced by Republic Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P21",
    catalogNumber: "B0023464-01",
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    eraCreated: 2015,
    genre: "Hip-Hop/Rap",
    recordCompany: "Interscope Records",
    discontinued: false,
    description:
      "As one of the most iconic Hip-Hop/Rap albums, 'To Pimp a Butterfly' by Kendrick Lamar has captivated audiences since its release in 2015. Released by Interscope Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P22",
    catalogNumber: "B0017695-01",
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    eraCreated: 2012,
    genre: "Hip-Hop/Rap",
    recordCompany: "Interscope Records",
    discontinued: false,
    description:
      "As one of the most iconic Hip-Hop/Rap albums, 'good kid, m.A.A.d city' by Kendrick Lamar has captivated audiences since its release in 2012. Released by Interscope Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P23",
    catalogNumber: "B0027047-01",
    title: "DAMN.",
    artist: "Kendrick Lamar",
    eraCreated: 2017,
    genre: "Hip-Hop/Rap",
    recordCompany: "Top Dawg Entertainment",
    discontinued: false,
    description:
      "For fans of Hip-Hop/Rap, 'DAMN.' by Kendrick Lamar is a timeless classic that has stood the test of time since 2017. Produced by Top Dawg Entertainment, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P24",
    catalogNumber: "B0000029",
    title: "The Chronic",
    artist: "Dr. Dre",
    eraCreated: 1992,
    genre: "Hip-Hop/Rap",
    recordCompany: "Death Row Records",
    discontinued: false,
    description:
      "'The Chronic' by Dr. Dre is a landmark in Hip-Hop/Rap, first released in 1992. Crafted under Death Row Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P25",
    catalogNumber: "MOVLP 450",
    title: "Illmatic",
    artist: "Nas",
    eraCreated: 1994,
    genre: "Hip-Hop/Rap",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "For fans of Hip-Hop/Rap, 'Illmatic' by Nas is a timeless classic that has stood the test of time since 1994. Produced by Columbia Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P26",
    catalogNumber: "R1 547457",
    title: "The Blueprint",
    artist: "Jay-Z",
    eraCreated: 2001,
    genre: "Hip-Hop/Rap",
    recordCompany: "Roc-A-Fella Records",
    discontinued: false,
    description:
      "As one of the most iconic Hip-Hop/Rap albums, 'The Blueprint' by Jay-Z has captivated audiences since its release in 2001. Released by Roc-A-Fella Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P27",
    catalogNumber: "B0029424-01",
    title: "Blonde",
    artist: "Frank Ocean",
    eraCreated: 2016,
    genre: "Hip-Hop/Rap",
    recordCompany: "Boys Don't Cry",
    discontinued: false,
    description:
      "'Blonde' by Frank Ocean is a landmark in Hip-Hop/Rap, first released in 2016. Crafted under Boys Don't Cry, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P28",
    catalogNumber: "PC 123456",
    title: "Graduation",
    artist: "Kanye West",
    eraCreated: 2007,
    genre: "Hip-Hop/Rap",
    recordCompany: "Def Jam Recordings",
    discontinued: false,
    description:
      "For fans of Hip-Hop/Rap, 'Graduation' by Kanye West is a timeless classic that has stood the test of time since 2007. Produced by Def Jam Recordings, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P29",
    catalogNumber: "B0032843-01",
    title: "Astroworld",
    artist: "Travis Scott",
    eraCreated: 2018,
    genre: "Hip-Hop/Rap",
    recordCompany: "Epic Records",
    discontinued: false,
    description:
      "As one of the most iconic Hip-Hop/Rap albums, 'Astroworld' by Travis Scott has captivated audiences since its release in 2018. Released by Epic Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P30",
    catalogNumber: "MOVLP 234",
    title: "Enter the Wu-Tang (36 Chambers)",
    artist: "Wu-Tang Clan",
    eraCreated: 1993,
    genre: "Hip-Hop/Rap",
    recordCompany: "Loud Records",
    discontinued: false,
    description:
      "For fans of Hip-Hop/Rap, 'Enter the Wu-Tang (36 Chambers)' by Wu-Tang Clan is a timeless classic that has stood the test of time since 1993. Produced by Loud Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P31",
    catalogNumber: "B0017382-02",
    title: "The Marshall Mathers LP",
    artist: "Eminem",
    eraCreated: 2000,
    genre: "Hip-Hop/Rap",
    recordCompany: "Interscope Records",
    discontinued: false,
    description:
      "With its release in 2000, 'The Marshall Mathers LP' by Eminem under Interscope Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P32",
    catalogNumber: "MOVLP 2345",
    title: "Ready to Die",
    artist: "The Notorious B.I.G.",
    eraCreated: 1994,
    genre: "Hip-Hop/Rap",
    recordCompany: "Bad Boy Records",
    discontinued: false,
    description:
      "The Notorious B.I.G.'s 'Ready to Die' is celebrated as a defining moment in Hip-Hop/Rap, showcasing unparalleled artistry since 1994. Brought to the world by Bad Boy Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P33",
    catalogNumber: "MOVLP 1350",
    title: "2001",
    artist: "Dr. Dre",
    eraCreated: 1999,
    genre: "Hip-Hop/Rap",
    recordCompany: "Aftermath Entertainment",
    discontinued: false,
    description:
      "With its release in 1999, '2001' by Dr. Dre under Aftermath Entertainment set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P34",
    catalogNumber: "R1 123467",
    title: "My Beautiful Dark Twisted Fantasy",
    artist: "Kanye West",
    eraCreated: 2010,
    genre: "Hip-Hop/Rap",
    recordCompany: "Roc-A-Fella Records",
    discontinued: false,
    description:
      "With its release in 2010, 'My Beautiful Dark Twisted Fantasy' by Kanye West under Roc-A-Fella Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P35",
    catalogNumber: "PC 4749",
    title: "Madvillainy",
    artist: "Madvillain (MF DOOM & Madlib)",
    eraCreated: 2004,
    genre: "Hip-Hop/Rap",
    recordCompany: "Stones Throw Records",
    discontinued: false,
    description:
      "'Madvillainy' by Madvillain (MF DOOM & Madlib) is a landmark in Hip-Hop/Rap, first released in 2004. Crafted under Stones Throw Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P36",
    catalogNumber: "B0027611-01",
    title: "Nothing Was the Same",
    artist: "Drake",
    eraCreated: 2013,
    genre: "Hip-Hop/Rap",
    recordCompany: "Young Money Entertainment",
    discontinued: false,
    description:
      "With its release in 2013, 'Nothing Was the Same' by Drake under Young Money Entertainment set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P37",
    catalogNumber: "R1 789124",
    title: "Stankonia",
    artist: "OutKast",
    eraCreated: 2000,
    genre: "Hip-Hop/Rap",
    recordCompany: "LaFace Records",
    discontinued: false,
    description:
      "For fans of Hip-Hop/Rap, 'Stankonia' by OutKast is a timeless classic that has stood the test of time since 2000. Produced by LaFace Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P38",
    catalogNumber: "MOVLP 2501",
    title: "Atrocity Exhibition",
    artist: "Danny Brown",
    eraCreated: 2016,
    genre: "Hip-Hop/Rap",
    recordCompany: "Warp Records",
    discontinued: false,
    description:
      "Danny Brown's 'Atrocity Exhibition' is celebrated as a defining moment in Hip-Hop/Rap, showcasing unparalleled artistry since 2016. Brought to the world by Warp Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P39",
    catalogNumber: "B0031550-01",
    title: "Flower Boy",
    artist: "Tyler, The Creator",
    eraCreated: 2017,
    genre: "Hip-Hop/Rap",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "With its release in 2017, 'Flower Boy' by Tyler, The Creator under Columbia Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P40",
    catalogNumber: "B0024290-01",
    title: "Man on the Moon: The End of Day",
    artist: "Kid Cudi",
    eraCreated: 2009,
    genre: "Hip-Hop/Rap",
    recordCompany: "Universal Motown",
    discontinued: false,
    description:
      "As one of the most iconic Hip-Hop/Rap albums, 'Man on the Moon: The End of Day' by Kid Cudi has captivated audiences since its release in 2009. Released by Universal Motown, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P41",
    catalogNumber: "MOVLP 123",
    title: "The Low End Theory",
    artist: "A Tribe Called Quest",
    eraCreated: 1991,
    genre: "Hip-Hop/Rap",
    recordCompany: "Jive Records",
    discontinued: false,
    description:
      "'The Low End Theory' by A Tribe Called Quest is a landmark in Hip-Hop/Rap, first released in 1991. Crafted under Jive Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P42",
    catalogNumber: "MOVLP 456",
    title: "Midnight Marauders",
    artist: "A Tribe Called Quest",
    eraCreated: 1993,
    genre: "Hip-Hop/Rap",
    recordCompany: "Jive Records",
    discontinued: false,
    description:
      "With its release in 1993, 'Midnight Marauders' by A Tribe Called Quest under Jive Records set the bar for Hip-Hop/Rap music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P43",
    catalogNumber: "MOVLP 789",
    title: "People's Instinctive Travels and the Paths of Rhythm",
    artist: "A Tribe Called Quest",
    eraCreated: 1990,
    genre: "Hip-Hop/Rap",
    recordCompany: "Jive Records",
    discontinued: false,
    description:
      "As one of the most iconic Hip-Hop/Rap albums, 'People's Instinctive Travels and the Paths of Rhythm' by A Tribe Called Quest has captivated audiences since its release in 1990. Released by Jive Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P44",
    catalogNumber: "B0028102-01",
    title: "We got it from Here... Thank You 4 Your service",
    artist: "A Tribe Called Quest",
    eraCreated: 2016,
    genre: "Hip-Hop/Rap",
    recordCompany: "Epic Records",
    discontinued: false,
    description:
      "For fans of Hip-Hop/Rap, 'We got it from Here... Thank You 4 Your service' by A Tribe Called Quest is a timeless classic that has stood the test of time since 2016. Produced by Epic Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P45",
    catalogNumber: "MOVLP 1011",
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    eraCreated: 1976,
    genre: "R&B",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "For fans of R&B, 'Songs in the Key of Life' by Stevie Wonder is a timeless classic that has stood the test of time since 1976. Produced by Tamla Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P46",
    catalogNumber: "B0023423-01",
    title: "Lemonade",
    artist: "Beyoncé",
    eraCreated: 2016,
    genre: "R&B",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "As one of the most iconic R&B albums, 'Lemonade' by Beyoncé has captivated audiences since its release in 2016. Released by Columbia Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P47",
    catalogNumber: "B0012341-01",
    title: "Channel Orange",
    artist: "Frank Ocean",
    eraCreated: 2012,
    genre: "R&B",
    recordCompany: "Def Jam Recordings",
    discontinued: false,
    description:
      "Frank Ocean's 'Channel Orange' is celebrated as a defining moment in R&B, showcasing unparalleled artistry since 2012. Brought to the world by Def Jam Recordings, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P48",
    catalogNumber: "MOVLP 201",
    title: "I Never Loved a Man the Way I Love You",
    artist: "Aretha Franklin",
    eraCreated: 1967,
    genre: "R&B",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "'I Never Loved a Man the Way I Love You' by Aretha Franklin is a landmark in R&B, first released in 1967. Crafted under Atlantic Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P49",
    catalogNumber: "R1 738234",
    title: "Confessions",
    artist: "Usher",
    eraCreated: 2004,
    genre: "R&B",
    recordCompany: "Arista Records",
    discontinued: false,
    description:
      "As one of the most iconic R&B albums, 'Confessions' by Usher has captivated audiences since its release in 2004. Released by Arista Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P50",
    catalogNumber: "MOVLP 2205",
    title: "A Seat at the Table",
    artist: "Solange",
    eraCreated: 2016,
    genre: "R&B",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "With its release in 2016, 'A Seat at the Table' by Solange under Columbia Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P51",
    catalogNumber: "B0019822-01",
    title: "The Miseducation of Lauryn Hill",
    artist: "Lauryn Hill",
    eraCreated: 1998,
    genre: "R&B",
    recordCompany: "Ruffhouse Records",
    discontinued: false,
    description:
      "'The Miseducation of Lauryn Hill' by Lauryn Hill is a landmark in R&B, first released in 1998. Crafted under Ruffhouse Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P52",
    catalogNumber: "MOVLP 1945",
    title: "Purple Rain",
    artist: "Prince",
    eraCreated: 1984,
    genre: "R&B",
    recordCompany: "Warner Bros. Records",
    discontinued: true,
    description:
      "With its release in 1984, 'Purple Rain' by Prince under Warner Bros. Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P53",
    catalogNumber: "R1 567123",
    title: "What's Going On",
    artist: "Marvin Gaye",
    eraCreated: 1971,
    genre: "R&B",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "With its release in 1971, 'What's Going On' by Marvin Gaye under Tamla Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P54",
    catalogNumber: "B0025214-01",
    title: "Black Messiah",
    artist: "D'Angelo and The Vanguard",
    eraCreated: 2014,
    genre: "R&B",
    recordCompany: "RCA Records",
    discontinued: false,
    description:
      "For fans of R&B, 'Black Messiah' by D'Angelo and The Vanguard is a timeless classic that has stood the test of time since 2014. Produced by RCA Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P55",
    catalogNumber: "MOVLP 3388",
    title: "The Emancipation of Mimi",
    artist: "Mariah Carey",
    eraCreated: 2005,
    genre: "R&B",
    recordCompany: "Island Records",
    discontinued: false,
    description:
      "As one of the most iconic R&B albums, 'The Emancipation of Mimi' by Mariah Carey has captivated audiences since its release in 2005. Released by Island Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P56",
    catalogNumber: "B0034567-01",
    title: "How to Be a Human Being",
    artist: "Glass Animals",
    eraCreated: 2016,
    genre: "R&B",
    recordCompany: "Wolf Tone Records",
    discontinued: false,
    description:
      "As one of the most iconic R&B albums, 'How to Be a Human Being' by Glass Animals has captivated audiences since its release in 2016. Released by Wolf Tone Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P57",
    catalogNumber: "MOVLP 1015",
    title: "Off the Wall",
    artist: "Michael Jackson",
    eraCreated: 1979,
    genre: "R&B",
    recordCompany: "Epic Records",
    discontinued: true,
    description:
      "'Off the Wall' by Michael Jackson is a landmark in R&B, first released in 1979. Crafted under Epic Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P58",
    catalogNumber: "MOVLP 7891",
    title: "Baduizm",
    artist: "Erykah Badu",
    eraCreated: 1997,
    genre: "R&B",
    recordCompany: "Universal Records",
    discontinued: false,
    description:
      "'Baduizm' by Erykah Badu is a landmark in R&B, first released in 1997. Crafted under Universal Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P59",
    catalogNumber: "B0027691-01",
    title: "CTRL",
    artist: "SZA",
    eraCreated: 2017,
    genre: "R&B",
    recordCompany: "Top Dawg Entertainment",
    discontinued: false,
    description:
      "As one of the most iconic R&B albums, 'CTRL' by SZA has captivated audiences since its release in 2017. Released by Top Dawg Entertainment, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P60",
    catalogNumber: "MOVLP 2023",
    title: "Voodoo",
    artist: "D'Angelo",
    eraCreated: 2000,
    genre: "R&B",
    recordCompany: "Virgin Records",
    discontinued: false,
    description:
      "With its release in 2000, 'Voodoo' by D'Angelo under Virgin Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P61",
    catalogNumber: "MOVLP 3990",
    title: "Back to Black",
    artist: "Amy Winehouse",
    eraCreated: 2006,
    genre: "R&B",
    recordCompany: "Island Records",
    discontinued: false,
    description:
      "As one of the most iconic R&B albums, 'Back to Black' by Amy Winehouse has captivated audiences since its release in 2006. Released by Island Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P62",
    catalogNumber: "B0032345-01",
    title: "Funk Wav Bounces Vol. 1",
    artist: "Calvin Harris",
    eraCreated: 2017,
    genre: "R&B",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "With its release in 2017, 'Funk Wav Bounces Vol. 1' by Calvin Harris under Columbia Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P63",
    catalogNumber: "MOVLP 1498",
    title: "Dangerously in Love",
    artist: "Beyoncé",
    eraCreated: 2003,
    genre: "R&B",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "With its release in 2003, 'Dangerously in Love' by Beyoncé under Columbia Records set the bar for R&B music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P64",
    catalogNumber: "B0017362-01",
    title: "Talking Book",
    artist: "Stevie Wonder",
    eraCreated: 1972,
    genre: "R&B",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "'Talking Book' by Stevie Wonder is a landmark in R&B, first released in 1972. Crafted under Tamla Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P65",
    catalogNumber: "SVLP 280",
    title: "Dark Side of the Moon",
    artist: "Pink Floyd",
    eraCreated: 1973,
    genre: "Rock",
    recordCompany: "Harvest Records",
    discontinued: true,
    description:
      "For fans of Rock, 'Dark Side of the Moon' by Pink Floyd is a timeless classic that has stood the test of time since 1973. Produced by Harvest Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P66",
    catalogNumber: "PC 33453",
    title: "The Wall",
    artist: "Pink Floyd",
    eraCreated: 1979,
    genre: "Rock",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "As one of the most iconic Rock albums, 'The Wall' by Pink Floyd has captivated audiences since its release in 1979. Released by Columbia Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P67",
    catalogNumber: "R1 61898",
    title: "Led Zeppelin IV",
    artist: "Led Zeppelin",
    eraCreated: 1971,
    genre: "Rock",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "For fans of Rock, 'Led Zeppelin IV' by Led Zeppelin is a timeless classic that has stood the test of time since 1971. Produced by Atlantic Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P68",
    catalogNumber: "MOVLP 991",
    title: "Rumours",
    artist: "Fleetwood Mac",
    eraCreated: 1977,
    genre: "Rock",
    recordCompany: "Warner Bros. Records",
    discontinued: true,
    description:
      "Fleetwood Mac's 'Rumours' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1977. Brought to the world by Warner Bros. Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P69",
    catalogNumber: "R1 789124",
    title: "Abbey Road",
    artist: "The Beatles",
    eraCreated: 1969,
    genre: "Rock",
    recordCompany: "Apple Records",
    discontinued: true,
    description:
      "For fans of Rock, 'Abbey Road' by The Beatles is a timeless classic that has stood the test of time since 1969. Produced by Apple Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P70",
    catalogNumber: "R1 9823",
    title: "Hotel California",
    artist: "Eagles",
    eraCreated: 1976,
    genre: "Rock",
    recordCompany: "Asylum Records",
    discontinued: true,
    description:
      "Eagles's 'Hotel California' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1976. Brought to the world by Asylum Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P71",
    catalogNumber: "SVLP 1234",
    title: "The Joshua Tree",
    artist: "U2",
    eraCreated: 1987,
    genre: "Rock",
    recordCompany: "Island Records",
    discontinued: true,
    description:
      "'The Joshua Tree' by U2 is a landmark in Rock, first released in 1987. Crafted under Island Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P72",
    catalogNumber: "MOVLP 321",
    title: "Back in Black",
    artist: "AC/DC",
    eraCreated: 1980,
    genre: "Rock",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "AC/DC's 'Back in Black' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1980. Brought to the world by Atlantic Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P73",
    catalogNumber: "MOVLP 501",
    title: "Hunky Dory",
    artist: "David Bowie",
    eraCreated: 1971,
    genre: "Rock",
    recordCompany: "RCA Victor",
    discontinued: true,
    description:
      "David Bowie's 'Hunky Dory' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1971. Brought to the world by RCA Victor, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P74",
    catalogNumber: "MOVLP 777",
    title: "Born to Run",
    artist: "Bruce Springsteen",
    eraCreated: 1975,
    genre: "Rock",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "For fans of Rock, 'Born to Run' by Bruce Springsteen is a timeless classic that has stood the test of time since 1975. Produced by Columbia Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P75",
    catalogNumber: "PC 4123",
    title: "Let It Bleed",
    artist: "The Rolling Stones",
    eraCreated: 1969,
    genre: "Rock",
    recordCompany: "Decca Records",
    discontinued: true,
    description:
      "The Rolling Stones's 'Let It Bleed' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1969. Brought to the world by Decca Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P76",
    catalogNumber: "MOVLP 1236",
    title: "Who's Next",
    artist: "The Who",
    eraCreated: 1971,
    genre: "Rock",
    recordCompany: "Decca Records",
    discontinued: true,
    description:
      "The Who's 'Who's Next' is celebrated as a defining moment in Rock, showcasing unparalleled artistry since 1971. Brought to the world by Decca Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P77",
    catalogNumber: "MOVLP 403",
    title: "Led Zeppelin II",
    artist: "Led Zeppelin",
    eraCreated: 1969,
    genre: "Rock",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "As one of the most iconic Rock albums, 'Led Zeppelin II' by Led Zeppelin has captivated audiences since its release in 1969. Released by Atlantic Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P78",
    catalogNumber: "MOVLP 2099",
    title: "Sticky Fingers",
    artist: "The Rolling Stones",
    eraCreated: 1971,
    genre: "Rock",
    recordCompany: "Rolling Stones Records",
    discontinued: true,
    description:
      "As one of the most iconic Rock albums, 'Sticky Fingers' by The Rolling Stones has captivated audiences since its release in 1971. Released by Rolling Stones Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P79",
    catalogNumber: "PC 9123",
    title: "A Night at the Opera",
    artist: "Queen",
    eraCreated: 1975,
    genre: "Rock",
    recordCompany: "EMI",
    discontinued: true,
    description:
      "With its release in 1975, 'A Night at the Opera' by Queen under EMI set the bar for Rock music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P80",
    catalogNumber: "MOVLP 155",
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    artist: "The Beatles",
    eraCreated: 1967,
    genre: "Rock",
    recordCompany: "Parlophone",
    discontinued: true,
    description:
      "For fans of Rock, 'Sgt. Pepper's Lonely Hearts Club Band' by The Beatles is a timeless classic that has stood the test of time since 1967. Produced by Parlophone, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P81",
    catalogNumber: "MOVLP 2010",
    title: "Physical Graffiti",
    artist: "Led Zeppelin",
    eraCreated: 1975,
    genre: "Rock",
    recordCompany: "Swan Song Records",
    discontinued: true,
    description:
      "As one of the most iconic Rock albums, 'Physical Graffiti' by Led Zeppelin has captivated audiences since its release in 1975. Released by Swan Song Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P82",
    catalogNumber: "MOVLP 405",
    title: "Highway to Hell",
    artist: "AC/DC",
    eraCreated: 1979,
    genre: "Rock",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "With its release in 1979, 'Highway to Hell' by AC/DC under Atlantic Records set the bar for Rock music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P83",
    catalogNumber: "MOVLP 600",
    title: "Exile on Main St.",
    artist: "The Rolling Stones",
    eraCreated: 1972,
    genre: "Rock",
    recordCompany: "Rolling Stones Records",
    discontinued: true,
    description:
      "'Exile on Main St.' by The Rolling Stones is a landmark in Rock, first released in 1972. Crafted under Rolling Stones Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P84",
    catalogNumber: "MOVLP 1234",
    title: "Machine Head",
    artist: "Deep Purple",
    eraCreated: 1972,
    genre: "Rock",
    recordCompany: "Warner Bros. Records",
    discontinued: true,
    description:
      "With its release in 1972, 'Machine Head' by Deep Purple under Warner Bros. Records set the bar for Rock music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P85",
    catalogNumber: "MOVLP 110",
    title: "OK Computer",
    artist: "Radiohead",
    eraCreated: 1997,
    genre: "Alternative",
    recordCompany: "Parlophone",
    discontinued: false,
    description:
      "With its release in 1997, 'OK Computer' by Radiohead under Parlophone set the bar for Alternative music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P86",
    catalogNumber: "MOVLP 345",
    title: "London Calling",
    artist: "The Clash",
    eraCreated: 1979,
    genre: "Alternative",
    recordCompany: "CBS Records",
    discontinued: true,
    description:
      "As one of the most iconic Alternative albums, 'London Calling' by The Clash has captivated audiences since its release in 1979. Released by CBS Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P87",
    catalogNumber: "MOVLP 2920",
    title: "In Rainbows",
    artist: "Radiohead",
    eraCreated: 2007,
    genre: "Alternative",
    recordCompany: "XL Recordings",
    discontinued: false,
    description:
      "As one of the most iconic Alternative albums, 'In Rainbows' by Radiohead has captivated audiences since its release in 2007. Released by XL Recordings, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P88",
    catalogNumber: "MOVLP 750",
    title: "Nevermind",
    artist: "Nirvana",
    eraCreated: 1991,
    genre: "Alternative",
    recordCompany: "DGC Records",
    discontinued: true,
    description:
      "With its release in 1991, 'Nevermind' by Nirvana under DGC Records set the bar for Alternative music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P89",
    catalogNumber: "MOVLP 475",
    title: "Murmur",
    artist: "R.E.M.",
    eraCreated: 1983,
    genre: "Alternative",
    recordCompany: "I.R.S. Records",
    discontinued: true,
    description:
      "As one of the most iconic Alternative albums, 'Murmur' by R.E.M. has captivated audiences since its release in 1983. Released by I.R.S. Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P90",
    catalogNumber: "MOVLP 560",
    title: "The Queen Is Dead",
    artist: "The Smiths",
    eraCreated: 1986,
    genre: "Alternative",
    recordCompany: "Rough Trade",
    discontinued: true,
    description:
      "'The Queen Is Dead' by The Smiths is a landmark in Alternative, first released in 1986. Crafted under Rough Trade, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P91",
    catalogNumber: "MOVLP 580",
    title: "Doolittle",
    artist: "Pixies",
    eraCreated: 1989,
    genre: "Alternative",
    recordCompany: "4AD",
    discontinued: true,
    description:
      "Pixies's 'Doolittle' is celebrated as a defining moment in Alternative, showcasing unparalleled artistry since 1989. Brought to the world by 4AD, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P92",
    catalogNumber: "MOVLP 651",
    title: "Is This It",
    artist: "The Strokes",
    eraCreated: 2001,
    genre: "Alternative",
    recordCompany: "RCA Records",
    discontinued: false,
    description:
      "'Is This It' by The Strokes is a landmark in Alternative, first released in 2001. Crafted under RCA Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P93",
    catalogNumber: "MOVLP 777",
    title: "Surfer Rosa",
    artist: "Pixies",
    eraCreated: 1988,
    genre: "Alternative",
    recordCompany: "4AD",
    discontinued: true,
    description:
      "'Surfer Rosa' by Pixies is a landmark in Alternative, first released in 1988. Crafted under 4AD, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P94",
    catalogNumber: "MOVLP 990",
    title: "Funeral",
    artist: "Arcade Fire",
    eraCreated: 2004,
    genre: "Alternative",
    recordCompany: "Merge Records",
    discontinued: false,
    description:
      "As one of the most iconic Alternative albums, 'Funeral' by Arcade Fire has captivated audiences since its release in 2004. Released by Merge Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P95",
    catalogNumber: "MOVLP 333",
    title: "The Bends",
    artist: "Radiohead",
    eraCreated: 1995,
    genre: "Alternative",
    recordCompany: "Parlophone",
    discontinued: false,
    description:
      "'The Bends' by Radiohead is a landmark in Alternative, first released in 1995. Crafted under Parlophone, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P96",
    catalogNumber: "MOVLP 889",
    title: "Elephant",
    artist: "The White Stripes",
    eraCreated: 2003,
    genre: "Alternative",
    recordCompany: "XL Recordings",
    discontinued: false,
    description:
      "'Elephant' by The White Stripes is a landmark in Alternative, first released in 2003. Crafted under XL Recordings, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P97",
    catalogNumber: "MOVLP 211",
    title: "Crooked Rain, Crooked Rain",
    artist: "Pavement",
    eraCreated: 1994,
    genre: "Alternative",
    recordCompany: "Matador Records",
    discontinued: false,
    description:
      "As one of the most iconic Alternative albums, 'Crooked Rain, Crooked Rain' by Pavement has captivated audiences since its release in 1994. Released by Matador Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P98",
    catalogNumber: "MOVLP 1200",
    title: "Whatever People Say I Am, That's What I'm Not",
    artist: "Arctic Monkeys",
    eraCreated: 2006,
    genre: "Alternative",
    recordCompany: "Domino Recording Co.",
    discontinued: false,
    description:
      "'Whatever People Say I Am, That's What I'm Not' by Arctic Monkeys is a landmark in Alternative, first released in 2006. Crafted under Domino Recording Co., this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P99",
    catalogNumber: "MOVLP 2346",
    title: "Bloodflowers",
    artist: "The Cure",
    eraCreated: 2000,
    genre: "Alternative",
    recordCompany: "Fiction Records",
    discontinued: false,
    description:
      "As one of the most iconic Alternative albums, 'Bloodflowers' by The Cure has captivated audiences since its release in 2000. Released by Fiction Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P100",
    catalogNumber: "MOVLP 880",
    title: "Automatic for the People",
    artist: "R.E.M.",
    eraCreated: 1992,
    genre: "Alternative",
    recordCompany: "Warner Bros. Records",
    discontinued: false,
    description:
      "For fans of Alternative, 'Automatic for the People' by R.E.M. is a timeless classic that has stood the test of time since 1992. Produced by Warner Bros. Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P101",
    catalogNumber: "MOVLP 1010",
    title: "Ten",
    artist: "Pearl Jam",
    eraCreated: 1991,
    genre: "Alternative",
    recordCompany: "Epic Records",
    discontinued: false,
    description:
      "Pearl Jam's 'Ten' is celebrated as a defining moment in Alternative, showcasing unparalleled artistry since 1991. Brought to the world by Epic Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P102",
    catalogNumber: "MOVLP 1990",
    title: "Mezzanine",
    artist: "Massive Attack",
    eraCreated: 1998,
    genre: "Alternative",
    recordCompany: "Virgin Records",
    discontinued: false,
    description:
      "'Mezzanine' by Massive Attack is a landmark in Alternative, first released in 1998. Crafted under Virgin Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P103",
    catalogNumber: "MOVLP 970",
    title: "The Soft Bulletin",
    artist: "The Flaming Lips",
    eraCreated: 1999,
    genre: "Alternative",
    recordCompany: "Warner Bros. Records",
    discontinued: false,
    description:
      "The Flaming Lips's 'The Soft Bulletin' is celebrated as a defining moment in Alternative, showcasing unparalleled artistry since 1999. Brought to the world by Warner Bros. Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P104",
    catalogNumber: "MOVLP 1500",
    title: "Yankee Hotel Foxtrot",
    artist: "Wilco",
    eraCreated: 2002,
    genre: "Alternative",
    recordCompany: "Nonesuch Records",
    discontinued: false,
    description:
      "'Yankee Hotel Foxtrot' by Wilco is a landmark in Alternative, first released in 2002. Crafted under Nonesuch Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P105",
    catalogNumber: "SXL 2306-7",
    title: "Cinderella Suites / Romeo & Juliet Suites",
    artist: "L'Orchestre de la Suisse Romande",
    eraCreated: 1962,
    genre: "Classical & Orchestral",
    recordCompany: "Decca Records",
    discontinued: true,
    description:
      "For fans of Classical & Orchestral, 'Cinderella Suites / Romeo & Juliet Suites' by L'Orchestre de la Suisse Romande is a timeless classic that has stood the test of time since 1962. Produced by Decca Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P106",
    catalogNumber: "2532 002",
    title: "Beethoven: Symphony No. 5",
    artist: "Berliner Philharmoniker",
    eraCreated: 1970,
    genre: "Classical & Orchestral",
    recordCompany: "Deutsche Grammophon",
    discontinued: true,
    description:
      "For fans of Classical & Orchestral, 'Beethoven: Symphony No. 5' by Berliner Philharmoniker is a timeless classic that has stood the test of time since 1970. Produced by Deutsche Grammophon, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P107",
    catalogNumber: "MOVLP 456",
    title: "The Four Seasons",
    artist: "Antonio Vivaldi",
    eraCreated: 1967,
    genre: "Classical & Orchestral",
    recordCompany: "Philips Records",
    discontinued: true,
    description:
      "For fans of Classical & Orchestral, 'The Four Seasons' by Antonio Vivaldi is a timeless classic that has stood the test of time since 1967. Produced by Philips Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P108",
    catalogNumber: "B0012345-01",
    title: "Mozart: Requiem",
    artist: "Vienna Philharmonic",
    eraCreated: 1973,
    genre: "Classical & Orchestral",
    recordCompany: "Deutsche Grammophon",
    discontinued: true,
    description:
      "For fans of Classical & Orchestral, 'Mozart: Requiem' by Vienna Philharmonic is a timeless classic that has stood the test of time since 1973. Produced by Deutsche Grammophon, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P109",
    catalogNumber: "MOVLP 987",
    title: "Swan Lake",
    artist: "London Symphony Orchestra",
    eraCreated: 1960,
    genre: "Classical & Orchestral",
    recordCompany: "EMI Classics",
    discontinued: true,
    description:
      "With its release in 1960, 'Swan Lake' by London Symphony Orchestra under EMI Classics set the bar for Classical & Orchestral music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P110",
    catalogNumber: "MOVLP 210",
    title: "The Planets",
    artist: "Boston Symphony Orchestra",
    eraCreated: 1971,
    genre: "Classical & Orchestral",
    recordCompany: "RCA Victor",
    discontinued: true,
    description:
      "Boston Symphony Orchestra's 'The Planets' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1971. Brought to the world by RCA Victor, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P111",
    catalogNumber: "MOVLP 129",
    title: "Bach: Brandenburg Concertos",
    artist: "Academy of St Martin in the Fields",
    eraCreated: 1982,
    genre: "Classical & Orchestral",
    recordCompany: "Philips Records",
    discontinued: true,
    description:
      "'Bach: Brandenburg Concertos' by Academy of St Martin in the Fields is a landmark in Classical & Orchestral, first released in 1982. Crafted under Philips Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P112",
    catalogNumber: "R1 123456",
    title: "Tchaikovsky: 1812 Overture",
    artist: "Chicago Symphony Orchestra",
    eraCreated: 1978,
    genre: "Classical & Orchestral",
    recordCompany: "Decca Records",
    discontinued: true,
    description:
      "For fans of Classical & Orchestral, 'Tchaikovsky: 1812 Overture' by Chicago Symphony Orchestra is a timeless classic that has stood the test of time since 1978. Produced by Decca Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P113",
    catalogNumber: "MOVLP 999",
    title: "Debussy: La Mer",
    artist: "Berlin Philharmonic",
    eraCreated: 1965,
    genre: "Classical & Orchestral",
    recordCompany: "Deutsche Grammophon",
    discontinued: true,
    description:
      "As one of the most iconic Classical & Orchestral albums, 'Debussy: La Mer' by Berlin Philharmonic has captivated audiences since its release in 1965. Released by Deutsche Grammophon, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P114",
    catalogNumber: "MOVLP 880",
    title: "Carmina Burana",
    artist: "London Philharmonic Choir & Orchestra",
    eraCreated: 1969,
    genre: "Classical & Orchestral",
    recordCompany: "EMI Classics",
    discontinued: true,
    description:
      "London Philharmonic Choir & Orchestra's 'Carmina Burana' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1969. Brought to the world by EMI Classics, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P115",
    catalogNumber: "B0027854-01",
    title: "Mahler: Symphony No. 2",
    artist: "New York Philharmonic",
    eraCreated: 1976,
    genre: "Classical & Orchestral",
    recordCompany: "Sony Classical",
    discontinued: true,
    description:
      "New York Philharmonic's 'Mahler: Symphony No. 2' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1976. Brought to the world by Sony Classical, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P116",
    catalogNumber: "B0019825-01",
    title: "Beethoven: Symphony No. 9",
    artist: "Vienna Philharmonic",
    eraCreated: 1970,
    genre: "Classical & Orchestral",
    recordCompany: "Deutsche Grammophon",
    discontinued: true,
    description:
      "As one of the most iconic Classical & Orchestral albums, 'Beethoven: Symphony No. 9' by Vienna Philharmonic has captivated audiences since its release in 1970. Released by Deutsche Grammophon, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P117",
    catalogNumber: "MOVLP 1023",
    title: "Handel: Messiah",
    artist: "Royal Philharmonic Orchestra",
    eraCreated: 1968,
    genre: "Classical & Orchestral",
    recordCompany: "RCA Victor",
    discontinued: true,
    description:
      "For fans of Classical & Orchestral, 'Handel: Messiah' by Royal Philharmonic Orchestra is a timeless classic that has stood the test of time since 1968. Produced by RCA Victor, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P118",
    catalogNumber: "MOVLP 1133",
    title: "Dvorak: Symphony No. 9",
    artist: "Czech Philharmonic Orchestra",
    eraCreated: 1975,
    genre: "Classical & Orchestral",
    recordCompany: "Supraphon",
    discontinued: true,
    description:
      "Czech Philharmonic Orchestra's 'Dvorak: Symphony No. 9' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1975. Brought to the world by Supraphon, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P119",
    catalogNumber: "MOVLP 1280",
    title: "Rachmaninoff: Piano Concerto No. 2",
    artist: "Philadelphia Orchestra",
    eraCreated: 1979,
    genre: "Classical & Orchestral",
    recordCompany: "RCA Red Seal",
    discontinued: true,
    description:
      "Philadelphia Orchestra's 'Rachmaninoff: Piano Concerto No. 2' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1979. Brought to the world by RCA Red Seal, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P120",
    catalogNumber: "B0011245-01",
    title: "Schubert: Symphony No. 8 'Unfinished'",
    artist: "Vienna Philharmonic",
    eraCreated: 1963,
    genre: "Classical & Orchestral",
    recordCompany: "Deutsche Grammophon",
    discontinued: true,
    description:
      "As one of the most iconic Classical & Orchestral albums, 'Schubert: Symphony No. 8 'Unfinished'' by Vienna Philharmonic has captivated audiences since its release in 1963. Released by Deutsche Grammophon, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P121",
    catalogNumber: "MOVLP 2356",
    title: "Holst: The Planets",
    artist: "Los Angeles Philharmonic",
    eraCreated: 1971,
    genre: "Classical & Orchestral",
    recordCompany: "Decca Records",
    discontinued: true,
    description:
      "Los Angeles Philharmonic's 'Holst: The Planets' is celebrated as a defining moment in Classical & Orchestral, showcasing unparalleled artistry since 1971. Brought to the world by Decca Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P122",
    catalogNumber: "MOVLP 3001",
    title: "Stravinsky: The Rite of Spring",
    artist: "Cleveland Orchestra",
    eraCreated: 1972,
    genre: "Classical & Orchestral",
    recordCompany: "London Records",
    discontinued: true,
    description:
      "For fans of Classical & Orchestral, 'Stravinsky: The Rite of Spring' by Cleveland Orchestra is a timeless classic that has stood the test of time since 1972. Produced by London Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P123",
    catalogNumber: "MOVLP 245",
    title: "Brahms: Symphony No. 1",
    artist: "Berlin Philharmonic",
    eraCreated: 1966,
    genre: "Classical & Orchestral",
    recordCompany: "Deutsche Grammophon",
    discontinued: true,
    description:
      "With its release in 1966, 'Brahms: Symphony No. 1' by Berlin Philharmonic under Deutsche Grammophon set the bar for Classical & Orchestral music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P124",
    catalogNumber: "B0031111-01",
    title: "Mendelssohn: Violin Concerto",
    artist: "Leipzig Gewandhaus Orchestra",
    eraCreated: 1978,
    genre: "Classical & Orchestral",
    recordCompany: "Philips Records",
    discontinued: true,
    description:
      "'Mendelssohn: Violin Concerto' by Leipzig Gewandhaus Orchestra is a landmark in Classical & Orchestral, first released in 1978. Crafted under Philips Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P125",
    catalogNumber: "CL 1355",
    title: "Kind of Blue",
    artist: "Miles Davis",
    eraCreated: 1959,
    genre: "Jazz",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "With its release in 1959, 'Kind of Blue' by Miles Davis under Columbia Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P126",
    catalogNumber: "MOVLP 191",
    title: "A Love Supreme",
    artist: "John Coltrane",
    eraCreated: 1965,
    genre: "Jazz",
    recordCompany: "Impulse! Records",
    discontinued: true,
    description:
      "'A Love Supreme' by John Coltrane is a landmark in Jazz, first released in 1965. Crafted under Impulse! Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P127",
    catalogNumber: "MOVLP 159",
    title: "Time Out",
    artist: "The Dave Brubeck Quartet",
    eraCreated: 1959,
    genre: "Jazz",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "With its release in 1959, 'Time Out' by The Dave Brubeck Quartet under Columbia Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P128",
    catalogNumber: "B0025214-01",
    title: "Mingus Ah Um",
    artist: "Charles Mingus",
    eraCreated: 1959,
    genre: "Jazz",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "For fans of Jazz, 'Mingus Ah Um' by Charles Mingus is a timeless classic that has stood the test of time since 1959. Produced by Columbia Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P129",
    catalogNumber: "MOVLP 3021",
    title: "Blue Train",
    artist: "John Coltrane",
    eraCreated: 1957,
    genre: "Jazz",
    recordCompany: "Blue Note Records",
    discontinued: true,
    description:
      "With its release in 1957, 'Blue Train' by John Coltrane under Blue Note Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P130",
    catalogNumber: "MOVLP 421",
    title: "The Shape of Jazz to Come",
    artist: "Ornette Coleman",
    eraCreated: 1959,
    genre: "Jazz",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "Ornette Coleman's 'The Shape of Jazz to Come' is celebrated as a defining moment in Jazz, showcasing unparalleled artistry since 1959. Brought to the world by Atlantic Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P131",
    catalogNumber: "R1 567123",
    title: "Getz/Gilberto",
    artist: "Stan Getz & João Gilberto",
    eraCreated: 1964,
    genre: "Jazz",
    recordCompany: "Verve Records",
    discontinued: true,
    description:
      "As one of the most iconic Jazz albums, 'Getz/Gilberto' by Stan Getz & João Gilberto has captivated audiences since its release in 1964. Released by Verve Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P132",
    catalogNumber: "MOVLP 1237",
    title: "Moanin'",
    artist: "Art Blakey & The Jazz Messengers",
    eraCreated: 1958,
    genre: "Jazz",
    recordCompany: "Blue Note Records",
    discontinued: true,
    description:
      "For fans of Jazz, 'Moanin'' by Art Blakey & The Jazz Messengers is a timeless classic that has stood the test of time since 1958. Produced by Blue Note Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P133",
    catalogNumber: "B0021421-01",
    title: "Misterioso",
    artist: "Thelonious Monk",
    eraCreated: 1958,
    genre: "Jazz",
    recordCompany: "Riverside Records",
    discontinued: true,
    description:
      "For fans of Jazz, 'Misterioso' by Thelonious Monk is a timeless classic that has stood the test of time since 1958. Produced by Riverside Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P134",
    catalogNumber: "MOVLP 2135",
    title: "Ellington at Newport",
    artist: "Duke Ellington",
    eraCreated: 1956,
    genre: "Jazz",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "As one of the most iconic Jazz albums, 'Ellington at Newport' by Duke Ellington has captivated audiences since its release in 1956. Released by Columbia Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P135",
    catalogNumber: "MOVLP 2567",
    title: "Somethin' Else",
    artist: "Cannonball Adderley",
    eraCreated: 1958,
    genre: "Jazz",
    recordCompany: "Blue Note Records",
    discontinued: true,
    description:
      "'Somethin' Else' by Cannonball Adderley is a landmark in Jazz, first released in 1958. Crafted under Blue Note Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P136",
    catalogNumber: "B0034567-01",
    title: "The Black Saint and the Sinner Lady",
    artist: "Charles Mingus",
    eraCreated: 1963,
    genre: "Jazz",
    recordCompany: "Impulse! Records",
    discontinued: true,
    description:
      "'The Black Saint and the Sinner Lady' by Charles Mingus is a landmark in Jazz, first released in 1963. Crafted under Impulse! Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P137",
    catalogNumber: "MOVLP 2023",
    title: "Brilliant Corners",
    artist: "Thelonious Monk",
    eraCreated: 1957,
    genre: "Jazz",
    recordCompany: "Riverside Records",
    discontinued: true,
    description:
      "With its release in 1957, 'Brilliant Corners' by Thelonious Monk under Riverside Records set the bar for Jazz music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P138",
    catalogNumber: "MOVLP 980",
    title: "Out to Lunch!",
    artist: "Eric Dolphy",
    eraCreated: 1964,
    genre: "Jazz",
    recordCompany: "Blue Note Records",
    discontinued: true,
    description:
      "As one of the most iconic Jazz albums, 'Out to Lunch!' by Eric Dolphy has captivated audiences since its release in 1964. Released by Blue Note Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P139",
    catalogNumber: "MOVLP 3555",
    title: "Mingus Mingus Mingus Mingus Mingus",
    artist: "Charles Mingus",
    eraCreated: 1964,
    genre: "Jazz",
    recordCompany: "Impulse! Records",
    discontinued: true,
    description:
      "For fans of Jazz, 'Mingus Mingus Mingus Mingus Mingus' by Charles Mingus is a timeless classic that has stood the test of time since 1964. Produced by Impulse! Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P140",
    catalogNumber: "MOVLP 987",
    title: "Jazz at Massey Hall",
    artist: "The Quintet",
    eraCreated: 1956,
    genre: "Jazz",
    recordCompany: "Debut Records",
    discontinued: true,
    description:
      "For fans of Jazz, 'Jazz at Massey Hall' by The Quintet is a timeless classic that has stood the test of time since 1956. Produced by Debut Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P141",
    catalogNumber: "R1 987654",
    title: "The Sidewinder",
    artist: "Lee Morgan",
    eraCreated: 1964,
    genre: "Jazz",
    recordCompany: "Blue Note Records",
    discontinued: true,
    description:
      "'The Sidewinder' by Lee Morgan is a landmark in Jazz, first released in 1964. Crafted under Blue Note Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P142",
    catalogNumber: "B0011245-01",
    title: "Ascension",
    artist: "John Coltrane",
    eraCreated: 1966,
    genre: "Jazz",
    recordCompany: "Impulse! Records",
    discontinued: true,
    description:
      "As one of the most iconic Jazz albums, 'Ascension' by John Coltrane has captivated audiences since its release in 1966. Released by Impulse! Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P143",
    catalogNumber: "MOVLP 4521",
    title: "Speak No Evil",
    artist: "Wayne Shorter",
    eraCreated: 1966,
    genre: "Jazz",
    recordCompany: "Blue Note Records",
    discontinued: true,
    description:
      "Wayne Shorter's 'Speak No Evil' is celebrated as a defining moment in Jazz, showcasing unparalleled artistry since 1966. Brought to the world by Blue Note Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P144",
    catalogNumber: "B0035678-01",
    title: "Soul Station",
    artist: "Hank Mobley",
    eraCreated: 1960,
    genre: "Jazz",
    recordCompany: "Blue Note Records",
    discontinued: true,
    description:
      "'Soul Station' by Hank Mobley is a landmark in Jazz, first released in 1960. Crafted under Blue Note Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P145",
    catalogNumber: "MOVLP 5011",
    title: "Red Headed Stranger",
    artist: "Willie Nelson",
    eraCreated: 1975,
    genre: "Country & Folk",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "Willie Nelson's 'Red Headed Stranger' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1975. Brought to the world by Columbia Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P146",
    catalogNumber: "B0019235-01",
    title: "Blue",
    artist: "Joni Mitchell",
    eraCreated: 1971,
    genre: "Country & Folk",
    recordCompany: "Reprise Records",
    discontinued: true,
    description:
      "As one of the most iconic Country & Folk albums, 'Blue' by Joni Mitchell has captivated audiences since its release in 1971. Released by Reprise Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P147",
    catalogNumber: "R1 1234567",
    title: "The Essential Johnny Cash",
    artist: "Johnny Cash",
    eraCreated: 2002,
    genre: "Country & Folk",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "With its release in 2002, 'The Essential Johnny Cash' by Johnny Cash under Columbia Records set the bar for Country & Folk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P148",
    catalogNumber: "MOVLP 1445",
    title: "Harvest",
    artist: "Neil Young",
    eraCreated: 1972,
    genre: "Country & Folk",
    recordCompany: "Reprise Records",
    discontinued: true,
    description:
      "For fans of Country & Folk, 'Harvest' by Neil Young is a timeless classic that has stood the test of time since 1972. Produced by Reprise Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P149",
    catalogNumber: "MOVLP 1311",
    title: "At Folsom Prison",
    artist: "Johnny Cash",
    eraCreated: 1968,
    genre: "Country & Folk",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "Johnny Cash's 'At Folsom Prison' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1968. Brought to the world by Columbia Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P150",
    catalogNumber: "MOVLP 2233",
    title: "Sweetheart of the Rodeo",
    artist: "The Byrds",
    eraCreated: 1968,
    genre: "Country & Folk",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "With its release in 1968, 'Sweetheart of the Rodeo' by The Byrds under Columbia Records set the bar for Country & Folk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P151",
    catalogNumber: "B0021243-01",
    title: "Come Away with Me",
    artist: "Norah Jones",
    eraCreated: 2002,
    genre: "Country & Folk",
    recordCompany: "Blue Note Records",
    discontinued: false,
    description:
      "Norah Jones's 'Come Away with Me' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 2002. Brought to the world by Blue Note Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P152",
    catalogNumber: "R1 654321",
    title: "The Freewheelin' Bob Dylan",
    artist: "Bob Dylan",
    eraCreated: 1963,
    genre: "Country & Folk",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "Bob Dylan's 'The Freewheelin' Bob Dylan' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1963. Brought to the world by Columbia Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P153",
    catalogNumber: "MOVLP 998",
    title: "Modern Sounds in Country and Western Music",
    artist: "Ray Charles",
    eraCreated: 1962,
    genre: "Country & Folk",
    recordCompany: "ABC-Paramount",
    discontinued: true,
    description:
      "'Modern Sounds in Country and Western Music' by Ray Charles is a landmark in Country & Folk, first released in 1962. Crafted under ABC-Paramount, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P154",
    catalogNumber: "MOVLP 1987",
    title: "Tapestry",
    artist: "Carole King",
    eraCreated: 1971,
    genre: "Country & Folk",
    recordCompany: "Ode Records",
    discontinued: true,
    description:
      "For fans of Country & Folk, 'Tapestry' by Carole King is a timeless classic that has stood the test of time since 1971. Produced by Ode Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P155",
    catalogNumber: "MOVLP 1033",
    title: "Music from Big Pink",
    artist: "The Band",
    eraCreated: 1968,
    genre: "Country & Folk",
    recordCompany: "Capitol Records",
    discontinued: true,
    description:
      "With its release in 1968, 'Music from Big Pink' by The Band under Capitol Records set the bar for Country & Folk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P156",
    catalogNumber: "MOVLP 1555",
    title: "John Prine",
    artist: "John Prine",
    eraCreated: 1971,
    genre: "Country & Folk",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "'John Prine' by John Prine is a landmark in Country & Folk, first released in 1971. Crafted under Atlantic Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P157",
    catalogNumber: "B0032487-01",
    title: "Raising Sand",
    artist: "Robert Plant & Alison Krauss",
    eraCreated: 2007,
    genre: "Country & Folk",
    recordCompany: "Rounder Records",
    discontinued: false,
    description:
      "As one of the most iconic Country & Folk albums, 'Raising Sand' by Robert Plant & Alison Krauss has captivated audiences since its release in 2007. Released by Rounder Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P158",
    catalogNumber: "MOVLP 1899",
    title: "Court and Spark",
    artist: "Joni Mitchell",
    eraCreated: 1974,
    genre: "Country & Folk",
    recordCompany: "Asylum Records",
    discontinued: true,
    description:
      "Joni Mitchell's 'Court and Spark' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1974. Brought to the world by Asylum Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P159",
    catalogNumber: "MOVLP 2015",
    title: "Will the Circle Be Unbroken",
    artist: "Nitty Gritty Dirt Band",
    eraCreated: 1972,
    genre: "Country & Folk",
    recordCompany: "United Artists Records",
    discontinued: true,
    description:
      "'Will the Circle Be Unbroken' by Nitty Gritty Dirt Band is a landmark in Country & Folk, first released in 1972. Crafted under United Artists Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P160",
    catalogNumber: "B0024563-01",
    title: "Gold",
    artist: "Emmylou Harris",
    eraCreated: 1975,
    genre: "Country & Folk",
    recordCompany: "Reprise Records",
    discontinued: true,
    description:
      "Emmylou Harris's 'Gold' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 1975. Brought to the world by Reprise Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P161",
    catalogNumber: "MOVLP 1452",
    title: "Heartbreaker",
    artist: "Ryan Adams",
    eraCreated: 2000,
    genre: "Country & Folk",
    recordCompany: "Bloodshot Records",
    discontinued: false,
    description:
      "Ryan Adams's 'Heartbreaker' is celebrated as a defining moment in Country & Folk, showcasing unparalleled artistry since 2000. Brought to the world by Bloodshot Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P162",
    catalogNumber: "MOVLP 1145",
    title: "Gram Parsons' Grievous Angel",
    artist: "Gram Parsons",
    eraCreated: 1974,
    genre: "Country & Folk",
    recordCompany: "Reprise Records",
    discontinued: true,
    description:
      "'Gram Parsons' Grievous Angel' by Gram Parsons is a landmark in Country & Folk, first released in 1974. Crafted under Reprise Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P163",
    catalogNumber: "B0029834-01",
    title: "The Last Waltz",
    artist: "The Band",
    eraCreated: 1978,
    genre: "Country & Folk",
    recordCompany: "Warner Bros. Records",
    discontinued: true,
    description:
      "'The Last Waltz' by The Band is a landmark in Country & Folk, first released in 1978. Crafted under Warner Bros. Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P164",
    catalogNumber: "MOVLP 500",
    title: "Ode to Billie Joe",
    artist: "Bobbie Gentry",
    eraCreated: 1967,
    genre: "Country & Folk",
    recordCompany: "Capitol Records",
    discontinued: true,
    description:
      "As one of the most iconic Country & Folk albums, 'Ode to Billie Joe' by Bobbie Gentry has captivated audiences since its release in 1967. Released by Capitol Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P165",
    catalogNumber: "MOVLP 1012",
    title: "What's Going On",
    artist: "Marvin Gaye",
    eraCreated: 1971,
    genre: "Soul",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "Marvin Gaye's 'What's Going On' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1971. Brought to the world by Tamla Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P166",
    catalogNumber: "B0012342-01",
    title: "I Never Loved a Man the Way I Love You",
    artist: "Aretha Franklin",
    eraCreated: 1967,
    genre: "Soul",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "For fans of Soul, 'I Never Loved a Man the Way I Love You' by Aretha Franklin is a timeless classic that has stood the test of time since 1967. Produced by Atlantic Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P167",
    catalogNumber: "R1 654789",
    title: "Let's Get It On",
    artist: "Marvin Gaye",
    eraCreated: 1973,
    genre: "Soul",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "For fans of Soul, 'Let's Get It On' by Marvin Gaye is a timeless classic that has stood the test of time since 1973. Produced by Tamla Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P168",
    catalogNumber: "MOVLP 1130",
    title: "Soulful",
    artist: "Diana Ross & The Supremes",
    eraCreated: 1968,
    genre: "Soul",
    recordCompany: "Motown Records",
    discontinued: true,
    description:
      "Diana Ross & The Supremes's 'Soulful' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1968. Brought to the world by Motown Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P169",
    catalogNumber: "MOVLP 2020",
    title: "Lady Soul",
    artist: "Aretha Franklin",
    eraCreated: 1968,
    genre: "Soul",
    recordCompany: "Atlantic Records",
    discontinued: true,
    description:
      "With its release in 1968, 'Lady Soul' by Aretha Franklin under Atlantic Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P170",
    catalogNumber: "MOVLP 2090",
    title: "Innervisions",
    artist: "Stevie Wonder",
    eraCreated: 1973,
    genre: "Soul",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "Stevie Wonder's 'Innervisions' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1973. Brought to the world by Tamla Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P171",
    catalogNumber: "B0024567-01",
    title: "Hot Buttered Soul",
    artist: "Isaac Hayes",
    eraCreated: 1969,
    genre: "Soul",
    recordCompany: "Enterprise Records",
    discontinued: true,
    description:
      "Isaac Hayes's 'Hot Buttered Soul' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1969. Brought to the world by Enterprise Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P172",
    catalogNumber: "MOVLP 2089",
    title: "Back to Black",
    artist: "Amy Winehouse",
    eraCreated: 2006,
    genre: "Soul",
    recordCompany: "Island Records",
    discontinued: false,
    description:
      "As one of the most iconic Soul albums, 'Back to Black' by Amy Winehouse has captivated audiences since its release in 2006. Released by Island Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P173",
    catalogNumber: "MOVLP 1400",
    title: "Otis Blue: Otis Redding Sings Soul",
    artist: "Otis Redding",
    eraCreated: 1965,
    genre: "Soul",
    recordCompany: "Volt Records",
    discontinued: true,
    description:
      "Otis Redding's 'Otis Blue: Otis Redding Sings Soul' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1965. Brought to the world by Volt Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P174",
    catalogNumber: "MOVLP 220",
    title: "Superfly",
    artist: "Curtis Mayfield",
    eraCreated: 1972,
    genre: "Soul",
    recordCompany: "Curtom Records",
    discontinued: true,
    description:
      "'Superfly' by Curtis Mayfield is a landmark in Soul, first released in 1972. Crafted under Curtom Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P175",
    catalogNumber: "R1 99999",
    title: "The Dock of the Bay",
    artist: "Otis Redding",
    eraCreated: 1968,
    genre: "Soul",
    recordCompany: "Volt Records",
    discontinued: true,
    description:
      "Otis Redding's 'The Dock of the Bay' is celebrated as a defining moment in Soul, showcasing unparalleled artistry since 1968. Brought to the world by Volt Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P176",
    catalogNumber: "B0034568-01",
    title: "The Miseducation of Lauryn Hill",
    artist: "Lauryn Hill",
    eraCreated: 1998,
    genre: "Soul",
    recordCompany: "Ruffhouse Records",
    discontinued: false,
    description:
      "With its release in 1998, 'The Miseducation of Lauryn Hill' by Lauryn Hill under Ruffhouse Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P177",
    catalogNumber: "MOVLP 888",
    title: "A Change Is Gonna Come",
    artist: "Sam Cooke",
    eraCreated: 1964,
    genre: "Soul",
    recordCompany: "RCA Victor",
    discontinued: true,
    description:
      "With its release in 1964, 'A Change Is Gonna Come' by Sam Cooke under RCA Victor set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P178",
    catalogNumber: "MOVLP 1345",
    title: "I'm Still in Love with You",
    artist: "Al Green",
    eraCreated: 1972,
    genre: "Soul",
    recordCompany: "Hi Records",
    discontinued: true,
    description:
      "'I'm Still in Love with You' by Al Green is a landmark in Soul, first released in 1972. Crafted under Hi Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P179",
    catalogNumber: "MOVLP 7777",
    title: "Here, My Dear",
    artist: "Marvin Gaye",
    eraCreated: 1978,
    genre: "Soul",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "For fans of Soul, 'Here, My Dear' by Marvin Gaye is a timeless classic that has stood the test of time since 1978. Produced by Tamla Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P180",
    catalogNumber: "MOVLP 909",
    title: "Live at the Apollo",
    artist: "James Brown",
    eraCreated: 1963,
    genre: "Soul",
    recordCompany: "King Records",
    discontinued: true,
    description:
      "As one of the most iconic Soul albums, 'Live at the Apollo' by James Brown has captivated audiences since its release in 1963. Released by King Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P181",
    catalogNumber: "MOVLP 302",
    title: "Curtis",
    artist: "Curtis Mayfield",
    eraCreated: 1970,
    genre: "Soul",
    recordCompany: "Curtom Records",
    discontinued: true,
    description:
      "'Curtis' by Curtis Mayfield is a landmark in Soul, first released in 1970. Crafted under Curtom Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P182",
    catalogNumber: "MOVLP 1300",
    title: "The Impressions",
    artist: "The Impressions",
    eraCreated: 1963,
    genre: "Soul",
    recordCompany: "ABC-Paramount",
    discontinued: true,
    description:
      "'The Impressions' by The Impressions is a landmark in Soul, first released in 1963. Crafted under ABC-Paramount, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P183",
    catalogNumber: "MOVLP 2022",
    title: "Street Songs",
    artist: "Rick James",
    eraCreated: 1981,
    genre: "Soul",
    recordCompany: "Gordy Records",
    discontinued: true,
    description:
      "With its release in 1981, 'Street Songs' by Rick James under Gordy Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P184",
    catalogNumber: "B0012450-01",
    title: "Simply Beautiful",
    artist: "Al Green",
    eraCreated: 1974,
    genre: "Soul",
    recordCompany: "Hi Records",
    discontinued: true,
    description:
      "With its release in 1974, 'Simply Beautiful' by Al Green under Hi Records set the bar for Soul music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P185",
    catalogNumber: "MOVLP 8001",
    title: "Maggot Brain",
    artist: "Funkadelic",
    eraCreated: 1971,
    genre: "Funk",
    recordCompany: "Westbound Records",
    discontinued: true,
    description:
      "With its release in 1971, 'Maggot Brain' by Funkadelic under Westbound Records set the bar for Funk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P186",
    catalogNumber: "R1 567890",
    title: "Superfly",
    artist: "Curtis Mayfield",
    eraCreated: 1972,
    genre: "Funk",
    recordCompany: "Curtom Records",
    discontinued: true,
    description:
      "Curtis Mayfield's 'Superfly' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1972. Brought to the world by Curtom Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P187",
    catalogNumber: "MOVLP 2221",
    title: "Stand!",
    artist: "Sly & The Family Stone",
    eraCreated: 1969,
    genre: "Funk",
    recordCompany: "Epic Records",
    discontinued: true,
    description:
      "'Stand!' by Sly & The Family Stone is a landmark in Funk, first released in 1969. Crafted under Epic Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P188",
    catalogNumber: "B0023421-01",
    title: "There's a Riot Goin' On",
    artist: "Sly & The Family Stone",
    eraCreated: 1971,
    genre: "Funk",
    recordCompany: "Epic Records",
    discontinued: true,
    description:
      "For fans of Funk, 'There's a Riot Goin' On' by Sly & The Family Stone is a timeless classic that has stood the test of time since 1971. Produced by Epic Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P189",
    catalogNumber: "MOVLP 1901",
    title: "One Nation Under a Groove",
    artist: "Funkadelic",
    eraCreated: 1978,
    genre: "Funk",
    recordCompany: "Warner Bros. Records",
    discontinued: true,
    description:
      "Funkadelic's 'One Nation Under a Groove' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1978. Brought to the world by Warner Bros. Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P190",
    catalogNumber: "MOVLP 1122",
    title: "Fresh",
    artist: "Sly & The Family Stone",
    eraCreated: 1973,
    genre: "Funk",
    recordCompany: "Epic Records",
    discontinued: true,
    description:
      "As one of the most iconic Funk albums, 'Fresh' by Sly & The Family Stone has captivated audiences since its release in 1973. Released by Epic Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P191",
    catalogNumber: "MOVLP 1800",
    title: "Cosmic Slop",
    artist: "Funkadelic",
    eraCreated: 1973,
    genre: "Funk",
    recordCompany: "Westbound Records",
    discontinued: true,
    description:
      "Funkadelic's 'Cosmic Slop' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1973. Brought to the world by Westbound Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P192",
    catalogNumber: "B0032456-01",
    title: "Street Songs",
    artist: "Rick James",
    eraCreated: 1981,
    genre: "Funk",
    recordCompany: "Gordy Records",
    discontinued: true,
    description:
      "For fans of Funk, 'Street Songs' by Rick James is a timeless classic that has stood the test of time since 1981. Produced by Gordy Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P193",
    catalogNumber: "MOVLP 9999",
    title: "James Brown's Greatest Hits",
    artist: "James Brown",
    eraCreated: 1970,
    genre: "Funk",
    recordCompany: "King Records",
    discontinued: true,
    description:
      "'James Brown's Greatest Hits' by James Brown is a landmark in Funk, first released in 1970. Crafted under King Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P194",
    catalogNumber: "MOVLP 711",
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    eraCreated: 1976,
    genre: "Funk",
    recordCompany: "Tamla Records",
    discontinued: true,
    description:
      "'Songs in the Key of Life' by Stevie Wonder is a landmark in Funk, first released in 1976. Crafted under Tamla Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P195",
    catalogNumber: "MOVLP 7110",
    title: "Hardcore Jollies",
    artist: "Funkadelic",
    eraCreated: 1976,
    genre: "Funk",
    recordCompany: "Warner Bros. Records",
    discontinued: true,
    description:
      "As one of the most iconic Funk albums, 'Hardcore Jollies' by Funkadelic has captivated audiences since its release in 1976. Released by Warner Bros. Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P196",
    catalogNumber: "R1 789101",
    title: "The Payback",
    artist: "James Brown",
    eraCreated: 1973,
    genre: "Funk",
    recordCompany: "Polydor Records",
    discontinued: true,
    description:
      "As one of the most iconic Funk albums, 'The Payback' by James Brown has captivated audiences since its release in 1973. Released by Polydor Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P197",
    catalogNumber: "MOVLP 2451",
    title: "Fire",
    artist: "Ohio Players",
    eraCreated: 1974,
    genre: "Funk",
    recordCompany: "Mercury Records",
    discontinued: true,
    description:
      "'Fire' by Ohio Players is a landmark in Funk, first released in 1974. Crafted under Mercury Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P198",
    catalogNumber: "MOVLP 1770",
    title: "A Funk Odyssey",
    artist: "Jamiroquai",
    eraCreated: 2001,
    genre: "Funk",
    recordCompany: "Sony Music",
    discontinued: false,
    description:
      "For fans of Funk, 'A Funk Odyssey' by Jamiroquai is a timeless classic that has stood the test of time since 2001. Produced by Sony Music, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P199",
    catalogNumber: "MOVLP 1990",
    title: "Mothership Connection",
    artist: "Parliament",
    eraCreated: 1975,
    genre: "Funk",
    recordCompany: "Casablanca Records",
    discontinued: true,
    description:
      "'Mothership Connection' by Parliament is a landmark in Funk, first released in 1975. Crafted under Casablanca Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P200",
    catalogNumber: "B0038888-01",
    title: "Motor Booty Affair",
    artist: "Parliament",
    eraCreated: 1978,
    genre: "Funk",
    recordCompany: "Casablanca Records",
    discontinued: true,
    description:
      "For fans of Funk, 'Motor Booty Affair' by Parliament is a timeless classic that has stood the test of time since 1978. Produced by Casablanca Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P201",
    catalogNumber: "MOVLP 1510",
    title: "The World Is a Ghetto",
    artist: "War",
    eraCreated: 1972,
    genre: "Funk",
    recordCompany: "United Artists Records",
    discontinued: true,
    description:
      "War's 'The World Is a Ghetto' is celebrated as a defining moment in Funk, showcasing unparalleled artistry since 1972. Brought to the world by United Artists Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P202",
    catalogNumber: "MOVLP 1401",
    title: "Funkentelechy vs. the Placebo Syndrome",
    artist: "Parliament",
    eraCreated: 1977,
    genre: "Funk",
    recordCompany: "Casablanca Records",
    discontinued: true,
    description:
      "'Funkentelechy vs. the Placebo Syndrome' by Parliament is a landmark in Funk, first released in 1977. Crafted under Casablanca Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P203",
    catalogNumber: "R1 222444",
    title: "Skin Tight",
    artist: "Ohio Players",
    eraCreated: 1974,
    genre: "Funk",
    recordCompany: "Mercury Records",
    discontinued: true,
    description:
      "For fans of Funk, 'Skin Tight' by Ohio Players is a timeless classic that has stood the test of time since 1974. Produced by Mercury Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P204",
    catalogNumber: "MOVLP 3234",
    title: "Roots",
    artist: "Curtis Mayfield",
    eraCreated: 1971,
    genre: "Funk",
    recordCompany: "Curtom Records",
    discontinued: true,
    description:
      "With its release in 1971, 'Roots' by Curtis Mayfield under Curtom Records set the bar for Funk music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P205",
    catalogNumber: "MOVLP 6661",
    title: "Master of Puppets",
    artist: "Metallica",
    eraCreated: 1986,
    genre: "Metal",
    recordCompany: "Elektra Records",
    discontinued: true,
    description:
      "As one of the most iconic Metal albums, 'Master of Puppets' by Metallica has captivated audiences since its release in 1986. Released by Elektra Records, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P206",
    catalogNumber: "MOVLP 3333",
    title: "The Number of the Beast",
    artist: "Iron Maiden",
    eraCreated: 1982,
    genre: "Metal",
    recordCompany: "EMI",
    discontinued: true,
    description:
      "With its release in 1982, 'The Number of the Beast' by Iron Maiden under EMI set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P207",
    catalogNumber: "B0021234-01",
    title: "Rust in Peace",
    artist: "Megadeth",
    eraCreated: 1990,
    genre: "Metal",
    recordCompany: "Capitol Records",
    discontinued: false,
    description:
      "With its release in 1990, 'Rust in Peace' by Megadeth under Capitol Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P208",
    catalogNumber: "R1 456789",
    title: "Paranoid",
    artist: "Black Sabbath",
    eraCreated: 1970,
    genre: "Metal",
    recordCompany: "Vertigo Records",
    discontinued: true,
    description:
      "For fans of Metal, 'Paranoid' by Black Sabbath is a timeless classic that has stood the test of time since 1970. Produced by Vertigo Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P209",
    catalogNumber: "MOVLP 5000",
    title: "Reign in Blood",
    artist: "Slayer",
    eraCreated: 1986,
    genre: "Metal",
    recordCompany: "Def Jam Recordings",
    discontinued: true,
    description:
      "As one of the most iconic Metal albums, 'Reign in Blood' by Slayer has captivated audiences since its release in 1986. Released by Def Jam Recordings, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P210",
    catalogNumber: "MOVLP 870",
    title: "Painkiller",
    artist: "Judas Priest",
    eraCreated: 1990,
    genre: "Metal",
    recordCompany: "Columbia Records",
    discontinued: false,
    description:
      "With its release in 1990, 'Painkiller' by Judas Priest under Columbia Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P211",
    catalogNumber: "MOVLP 4577",
    title: "Heaven and Hell",
    artist: "Black Sabbath",
    eraCreated: 1980,
    genre: "Metal",
    recordCompany: "Vertigo Records",
    discontinued: true,
    description:
      "Black Sabbath's 'Heaven and Hell' is celebrated as a defining moment in Metal, showcasing unparalleled artistry since 1980. Brought to the world by Vertigo Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P212",
    catalogNumber: "MOVLP 2321",
    title: "Ride the Lightning",
    artist: "Metallica",
    eraCreated: 1984,
    genre: "Metal",
    recordCompany: "Megaforce Records",
    discontinued: true,
    description:
      "With its release in 1984, 'Ride the Lightning' by Metallica under Megaforce Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P213",
    catalogNumber: "MOVLP 912",
    title: "British Steel",
    artist: "Judas Priest",
    eraCreated: 1980,
    genre: "Metal",
    recordCompany: "Columbia Records",
    discontinued: true,
    description:
      "With its release in 1980, 'British Steel' by Judas Priest under Columbia Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P214",
    catalogNumber: "MOVLP 1340",
    title: "Seventh Son of a Seventh Son",
    artist: "Iron Maiden",
    eraCreated: 1988,
    genre: "Metal",
    recordCompany: "EMI",
    discontinued: true,
    description:
      "'Seventh Son of a Seventh Son' by Iron Maiden is a landmark in Metal, first released in 1988. Crafted under EMI, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P215",
    catalogNumber: "R1 77777",
    title: "Ace of Spades",
    artist: "Motörhead",
    eraCreated: 1980,
    genre: "Metal",
    recordCompany: "Bronze Records",
    discontinued: true,
    description:
      "For fans of Metal, 'Ace of Spades' by Motörhead is a timeless classic that has stood the test of time since 1980. Produced by Bronze Records, it’s a piece that resonates with music lovers.",
    categories: ["c1"]
  },
  {
    id: "P216",
    catalogNumber: "MOVLP 1889",
    title: "Blackwater Park",
    artist: "Opeth",
    eraCreated: 2001,
    genre: "Metal",
    recordCompany: "Music for Nations",
    discontinued: false,
    description:
      "With its release in 2001, 'Blackwater Park' by Opeth under Music for Nations set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P217",
    catalogNumber: "B0034560-01",
    title: "Toxicity",
    artist: "System of a Down",
    eraCreated: 2001,
    genre: "Metal",
    recordCompany: "American Recordings",
    discontinued: false,
    description:
      "As one of the most iconic Metal albums, 'Toxicity' by System of a Down has captivated audiences since its release in 2001. Released by American Recordings, it holds a special place in any collector's library.",
    categories: ["c1"]
  },
  {
    id: "P218",
    catalogNumber: "MOVLP 1077",
    title: "Black Album",
    artist: "Metallica",
    eraCreated: 1991,
    genre: "Metal",
    recordCompany: "Elektra Records",
    discontinued: false,
    description:
      "'Black Album' by Metallica is a landmark in Metal, first released in 1991. Crafted under Elektra Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P219",
    catalogNumber: "MOVLP 2430",
    title: "Peace Sells... but Who's Buying?",
    artist: "Megadeth",
    eraCreated: 1986,
    genre: "Metal",
    recordCompany: "Capitol Records",
    discontinued: true,
    description:
      "Megadeth's 'Peace Sells... but Who's Buying?' is celebrated as a defining moment in Metal, showcasing unparalleled artistry since 1986. Brought to the world by Capitol Records, this record remains a must-have for true enthusiasts.",
    categories: ["c1"]
  },
  {
    id: "P220",
    catalogNumber: "MOVLP 780",
    title: "Vulgar Display of Power",
    artist: "Pantera",
    eraCreated: 1992,
    genre: "Metal",
    recordCompany: "Atco Records",
    discontinued: false,
    description:
      "With its release in 1992, 'Vulgar Display of Power' by Pantera under Atco Records set the bar for Metal music. Its influence can still be felt today, making it a cherished addition to any collection.",
    categories: ["c1"]
  },
  {
    id: "P221",
    catalogNumber: "MOVLP 2150",
    title: "Lateralus",
    artist: "Tool",
    eraCreated: 2001,
    genre: "Metal",
    recordCompany: "Volcano Entertainment",
    discontinued: false,
    description:
      "'Lateralus' by Tool is a landmark in Metal, first released in 2001. Crafted under Volcano Entertainment, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P222",
    catalogNumber: "MOVLP 992",
    title: "The Gallery",
    artist: "Dark Tranquillity",
    eraCreated: 1995,
    genre: "Metal",
    recordCompany: "Osmose Productions",
    discontinued: false,
    description:
      "'The Gallery' by Dark Tranquillity is a landmark in Metal, first released in 1995. Crafted under Osmose Productions, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P223",
    catalogNumber: "MOVLP 4560",
    title: "Brave New World",
    artist: "Iron Maiden",
    eraCreated: 2000,
    genre: "Metal",
    recordCompany: "EMI",
    discontinued: false,
    description:
      "'Brave New World' by Iron Maiden is a landmark in Metal, first released in 2000. Crafted under EMI, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  },
  {
    id: "P224",
    catalogNumber: "MOVLP 3410",
    title: "Holy Diver",
    artist: "Dio",
    eraCreated: 1983,
    genre: "Metal",
    recordCompany: "Warner Bros. Records",
    discontinued: true,
    description:
      "'Holy Diver' by Dio is a landmark in Metal, first released in 1983. Crafted under Warner Bros. Records, this album is renowned for its timeless sound that continues to inspire.",
    categories: ["c1"]
  }
];
