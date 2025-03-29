const artists = [
  // (G)I-DLE
  {
    artistName: "(G)I-DLE",
    groupType: "female",
    members: 6,
    generation: 4,
    debutYear: 2018,
    popularity: 85,
    albums: 5
  },
  // 2NE1
  {
    artistName: "2NE1",
    groupType: "female",
    members: 4,
    generation: 2,
    debutYear: 2009,
    popularity: 80,
    albums: 5
  },
  // 2PM
  {
    artistName: "2PM",
    groupType: "male",
    members: 6,
    generation: 2,
    debutYear: 2008,
    popularity: 78,
    albums: 7
  },
  // 3YE
  {
    artistName: "3YE",
    groupType: "female",
    members: 3,
    generation: 4,
    debutYear: 2019,
    popularity: 65,
    albums: 2
  },
  // 4Minute
  {
    artistName: "4Minute",
    groupType: "female",
    members: 5,
    generation: 2,
    debutYear: 2009,
    popularity: 75,
    albums: 6
  },
  // A.C.E
  {
    artistName: "A.C.E",
    groupType: "male",
    members: 5,
    generation: 3,
    debutYear: 2017,
    popularity: 70,
    albums: 4
  },
  // aespa
  {
    artistName: "aespa",
    groupType: "female",
    members: 4,
    generation: 4,
    debutYear: 2020,
    popularity: 88,
    albums: 3
  },
  // Agust D (BTS)
  {
    artistName: "Agust D (BTS)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2016,
    popularity: 90,
    albums: 2
  },
  // Ailee
  {
    artistName: "Ailee",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2012,
    popularity: 75,
    albums: 5
  },
  // AOA
  {
    artistName: "AOA",
    groupType: "female",
    members: 7,
    generation: 3,
    debutYear: 2012,
    popularity: 70,
    albums: 6
  },
  // Apink
  {
    artistName: "Apink",
    groupType: "female",
    members: 6,
    generation: 2,
    debutYear: 2011,
    popularity: 80,
    albums: 8
  },
  // APRIL
  {
    artistName: "APRIL",
    groupType: "female",
    members: 6,
    generation: 3,
    debutYear: 2015,
    popularity: 65,
    albums: 4
  },
  // ARTMS
  {
    artistName: "ARTMS",
    groupType: "female",
    members: 5,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1
  },
  // ASTRO
  {
    artistName: "ASTRO",
    groupType: "male",
    members: 6,
    generation: 3,
    debutYear: 2016,
    popularity: 75,
    albums: 5
  },
  // ATEEZ
  {
    artistName: "ATEEZ",
    groupType: "male",
    members: 8,
    generation: 4,
    debutYear: 2018,
    popularity: 85,
    albums: 6
  },
  // B1A4
  {
    artistName: "B1A4",
    groupType: "male",
    members: 5,
    generation: 2,
    debutYear: 2011,
    popularity: 83,
    albums: 6
  },
  // B.A.P
  {
    artistName: "B.A.P",
    groupType: "male",
    members: 6,
    generation: 3,
    debutYear: 2012,
    popularity: 70,
    albums: 5
  },
  // BABYMONSTER
  {
    artistName: "BABYMONSTER",
    groupType: "female",
    members: 7,
    generation: 5,
    debutYear: 2023,
    popularity: 80,
    albums: 1
  },
  {
    artistName: "Baby V.O.X",
    groupType: "female",
    members: 5,
    generation: 1,
    debutYear: 1997,
    popularity: 88,
    albums: 7
  },
  // BADVILLAIN
  {
    artistName: "BADVILLAIN",
    groupType: "female",
    members: 5,
    generation: 5,
    debutYear: 2023,
    popularity: 60,
    albums: 1
  },
  // Baekhyun (EXO)
  {
    artistName: "Baekhyun (EXO)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2019,
    popularity: 85,
    albums: 3
  },
  // BEAST
  {
    artistName: "BEAST",
    groupType: "male",
    members: 6,
    generation: 2,
    debutYear: 2009,
    popularity: 75,
    albums: 6
  },
  // BIGBANG
  {
    artistName: "BIGBANG",
    groupType: "male",
    members: 4,
    generation: 2,
    debutYear: 2006,
    popularity: 90,
    albums: 9
  },
  // Billie
  {
    artistName: "Billie",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2021,
    popularity: 70,
    albums: 2
  },
  // Blackpink
  {
    artistName: "Blackpink",
    groupType: "female",
    members: 4,
    generation: 3,
    debutYear: 2016,
    popularity: 95,
    albums: 5
  },
  // Block B
  {
    artistName: "Block B",
    groupType: "male",
    members: 7,
    generation: 3,
    debutYear: 2011,
    popularity: 70,
    albums: 6
  },
  // BoA
  {
    artistName: "BoA",
    groupType: "female",
    members: 1,
    generation: 1,
    debutYear: 2000,
    popularity: 85,
    albums: 10
  },
  // BOYNEXTDOOR
  {
    artistName: "BOYNEXTDOOR",
    groupType: "male",
    members: 6,
    generation: 5,
    debutYear: 2023,
    popularity: 75,
    albums: 1
  },
  // Brave Girls
  {
    artistName: "Brave Girls",
    groupType: "female",
    members: 4,
    generation: 3,
    debutYear: 2011,
    popularity: 70,
    albums: 5
  },
  // Brown Eyed Girls
  {
    artistName: "Brown Eyed Girls",
    groupType: "female",
    members: 4,
    generation: 2,
    debutYear: 2006,
    popularity: 75,
    albums: 7
  },
  // BTS
  {
    artistName: "BTS",
    groupType: "male",
    members: 7,
    generation: 3,
    debutYear: 2013,
    popularity: 100,
    albums: 9
  },
  // Cherry Bullet
  {
    artistName: "Cherry Bullet",
    groupType: "female",
    members: 7,
    generation: 4,
    debutYear: 2019,
    popularity: 70,
    albums: 3
  },
  // CHUNG HA (I.O.I)
  {
    artistName: "CHUNG HA (I.O.I)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2017,
    popularity: 80,
    albums: 4
  },
  // CIX
  {
    artistName: "CIX",
    groupType: "male",
    members: 5,
    generation: 4,
    debutYear: 2019,
    popularity: 75,
    albums: 4
  },
  // CL (2NE1)
  {
    artistName: "CL (2NE1)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2009,
    popularity: 80,
    albums: 3
  },
  // CLC
  {
    artistName: "CLC",
    groupType: "female",
    members: 5,
    generation: 3,
    debutYear: 2015,
    popularity: 70,
    albums: 5
  },
  // CRAVITY
  {
    artistName: "CRAVITY",
    groupType: "male",
    members: 9,
    generation: 4,
    debutYear: 2020,
    popularity: 75,
    albums: 4
  },
  // Crayon Pop
  {
    artistName: "Crayon Pop",
    groupType: "female",
    members: 5,
    generation: 3,
    debutYear: 2012,
    popularity: 65,
    albums: 3
  },
  // DAWN
  {
    artistName: "DAWN",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2017,
    popularity: 70,
    albums: 2
  },
  // DKB
  {
    artistName: "DKB",
    groupType: "male",
    members: 9,
    generation: 4,
    debutYear: 2020,
    popularity: 65,
    albums: 3
  },
  // Dreamcatcher
  {
    artistName: "Dreamcatcher",
    groupType: "female",
    members: 7,
    generation: 3,
    debutYear: 2017,
    popularity: 80,
    albums: 6
  },
  // ENHYPEN
  {
    artistName: "ENHYPEN",
    groupType: "male",
    members: 7,
    generation: 4,
    debutYear: 2020,
    popularity: 85,
    albums: 4
  },
  // EVERGLOW
  {
    artistName: "EVERGLOW",
    groupType: "female",
    members: 6,
    generation: 4,
    debutYear: 2019,
    popularity: 80,
    albums: 3
  },
  // EXID
  {
    artistName: "EXID",
    groupType: "female",
    members: 5,
    generation: 3,
    debutYear: 2012,
    popularity: 75,
    albums: 6
  },
  // EXO-K
  {
    artistName: "EXO-K",
    groupType: "male",
    members: 6,
    generation: 3,
    debutYear: 2012,
    popularity: 85,
    albums: 7
  },
  // EXO
  {
    artistName: "EXO",
    groupType: "male",
    members: 9,
    generation: 3,
    debutYear: 2012,
    popularity: 90,
    albums: 8
  },
  // f(x)
  {
    artistName: "f(x)",
    groupType: "female",
    members: 5,
    generation: 2,
    debutYear: 2009,
    popularity: 80,
    albums: 6
  },
  // FIFTY FIFTY
  {
    artistName: "FIFTY FIFTY",
    groupType: "female",
    members: 4,
    generation: 4,
    debutYear: 2022,
    popularity: 75,
    albums: 2
  },
  // Fin.K.L.
  {
    artistName: "Fin.K.L.",
    groupType: "female",
    members: 4,
    generation: 1,
    debutYear: 1998,
    popularity: 70,
    albums: 5
  },
  // fromis_9
  {
    artistName: "fromis_9",
    groupType: "female",
    members: 9,
    generation: 3,
    debutYear: 2018,
    popularity: 75,
    albums: 4
  },
  // G.o.d
  {
    artistName: "g.o.d",
    groupType: "male",
    members: 5,
    generation: 1,
    debutYear: 1999,
    popularity: 89,
    albums: 8
  },
  // G-DRAGON (BIGBANG)
  {
    artistName: "G-DRAGON (BIGBANG)",
    groupType: "male",
    members: 1,
    generation: 2,
    debutYear: 2009,
    popularity: 90,
    albums: 4
  },
  // GD X Taeyang (BIGBANG)
  {
    artistName: "GD X Taeyang (BIGBANG)",
    groupType: "male",
    members: 2,
    generation: 2,
    debutYear: 2013,
    popularity: 85,
    albums: 1
  },
  // GFRIEND
  {
    artistName: "GFRIEND",
    groupType: "female",
    members: 6,
    generation: 3,
    debutYear: 2015,
    popularity: 80,
    albums: 6
  },
  // Girls Day
  {
    artistName: "Girls Day",
    groupType: "female",
    members: 4,
    generation: 2,
    debutYear: 2010,
    popularity: 75,
    albums: 5
  },
  // Girls Generation (SNSD)
  {
    artistName: "Girls Generation (SNSD)",
    groupType: "female",
    members: 8,
    generation: 2,
    debutYear: 2007,
    popularity: 90,
    albums: 10
  },
  // Golden Child
  {
    artistName: "Golden Child",
    groupType: "male",
    members: 10,
    generation: 3,
    debutYear: 2017,
    popularity: 75,
    albums: 5
  },
  // GOT The Beat
  {
    artistName: "GOT The Beat",
    groupType: "female",
    members: 7,
    generation: 4,
    debutYear: 2022,
    popularity: 80,
    albums: 1
  },
  // GOT7
  {
    artistName: "GOT7",
    groupType: "male",
    members: 7,
    generation: 3,
    debutYear: 2014,
    popularity: 85,
    albums: 7
  },
  // GYUBIN
  {
    artistName: "GYUBIN",
    groupType: "female",
    members: 1,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1
  },
  // Heart2Hearts
  {
    artistName: "Heart2Hearts",
    groupType: "female",
    members: 8,
    generation: 5,
    debutYear: 2025,
    popularity: 60,
    albums: 1
  },
  // Highlight
  {
    artistName: "Highlight",
    groupType: "male",
    members: 4,
    generation: 2,
    debutYear: 2009,
    popularity: 75,
    albums: 6
  },
  // HINAPIA
  {
    artistName: "HINAPIA",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2019,
    popularity: 65,
    albums: 2
  },
  // HWASA (Mamamoo)
  {
    artistName: "HWASA (Mamamoo)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2019,
    popularity: 80,
    albums: 2
  },
  // HYOLYN (SISTAR)
  {
    artistName: "HYOLYN (SISTAR)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2013,
    popularity: 75,
    albums: 4
  },
  // HYOYEON (SNSD)
  {
    artistName: "HYOYEON (SNSD)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2016,
    popularity: 70,
    albums: 2
  },
  // HyunA & Dawn
  {
    artistName: "HyunA & Dawn",
    groupType: "mixed",
    members: 2,
    generation: 3,
    debutYear: 2018,
    popularity: 75,
    albums: 2
  },
  // HyunA (4Minute)
  {
    artistName: "HyunA (4Minute)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2009,
    popularity: 80,
    albums: 5
  },
  // I.O.I
  {
    artistName: "I.O.I",
    groupType: "female",
    members: 11,
    generation: 3,
    debutYear: 2016,
    popularity: 85,
    albums: 2
  },
  // iKON
  {
    artistName: "iKON",
    groupType: "male",
    members: 6,
    generation: 3,
    debutYear: 2015,
    popularity: 80,
    albums: 6
  },
  // ILLIT
  {
    artistName: "ILLIT",
    groupType: "female",
    members: 5,
    generation: 5,
    debutYear: 2023,
    popularity: 75,
    albums: 1
  },
  // Infinite
  {
    artistName: "Infinite",
    groupType: "male",
    members: 6,
    generation: 2,
    debutYear: 2010,
    popularity: 75,
    albums: 7
  },
  // Irene & Seulgi (Red Velvet)
  {
    artistName: "Irene & Seulgi (Red Velvet)",
    groupType: "female",
    members: 2,
    generation: 3,
    debutYear: 2020,
    popularity: 80,
    albums: 1
  },
  // Irene (Red Velvet)
  {
    artistName: "Irene (Red Velvet)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2014,
    popularity: 85,
    albums: 1
  },
  // ITZY
  {
    artistName: "ITZY",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2019,
    popularity: 85,
    albums: 4
  },
  // IU
  {
    artistName: "IU",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2008,
    popularity: 90,
    albums: 10
  },
  // IVE
  {
    artistName: "IVE",
    groupType: "female",
    members: 6,
    generation: 4,
    debutYear: 2021,
    popularity: 90,
    albums: 3
  },
  // IZ ONE
  {
    artistName: "IZ ONE",
    groupType: "female",
    members: 12,
    generation: 3,
    debutYear: 2018,
    popularity: 85,
    albums: 4
  },
  // J-Hope (BTS)
  {
    artistName: "J-Hope (BTS)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2018,
    popularity: 90,
    albums: 2
  },
  // J.Y. Park
  {
    artistName: "J.Y. Park",
    groupType: "male",
    members: 1,
    generation: 1,
    debutYear: 1994,
    popularity: 75,
    albums: 8
  },
  // Jackson Wang (GOT7)
  {
    artistName: "Jackson Wang (GOT7)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2017,
    popularity: 80,
    albums: 3
  },
  // JENNIE (Blackpink)
  {
    artistName: "JENNIE (Blackpink)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2018,
    popularity: 90,
    albums: 1
  },
  // JEON SOMI (I.O.I)
  {
    artistName: "JEON SOMI (I.O.I)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2019,
    popularity: 85,
    albums: 2
  },
  // Jessi
  {
    artistName: "Jessi",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2005,
    popularity: 80,
    albums: 4
  },
  // JIHYO (Twice)
  {
    artistName: "JIHYO (Twice)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2015,
    popularity: 85,
    albums: 1
  },
  // Jimin (BTS)
  {
    artistName: "Jimin (BTS)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2018,
    popularity: 95,
    albums: 1
  },
  // JISOO (Blackpink)
  {
    artistName: "JISOO (Blackpink)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2023,
    popularity: 90,
    albums: 1
  },
  // Jo Yuri (IZ ONE)
  {
    artistName: "Jo Yuri (IZ ONE)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2021,
    popularity: 80,
    albums: 2
  },
  // Joy (Red Velvet)
  {
    artistName: "Joy (Red Velvet)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2016,
    popularity: 85,
    albums: 1
  },
  // Jungkook (BTS)
  {
    artistName: "Jungkook (BTS)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2017,
    popularity: 95,
    albums: 1
  },
  // JUST B
  {
    artistName: "JUST B",
    groupType: "male",
    members: 6,
    generation: 4,
    debutYear: 2021,
    popularity: 75,
    albums: 3
  },
  // KAI (EXO)
  {
    artistName: "KAI (EXO)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2020,
    popularity: 85,
    albums: 2
  },
  // KARA
  {
    artistName: "KARA",
    groupType: "female",
    members: 5,
    generation: 2,
    debutYear: 2007,
    popularity: 75,
    albums: 8
  },
  // KARD
  {
    artistName: "KARD",
    groupType: "mixed",
    members: 4,
    generation: 3,
    debutYear: 2016,
    popularity: 75,
    albums: 5
  },
  // Kep1er
  {
    artistName: "Kep1er",
    groupType: "female",
    members: 9,
    generation: 4,
    debutYear: 2022,
    popularity: 85,
    albums: 3
  },
  // Key (SHINee)
  {
    artistName: "Key (SHINee)",
    groupType: "male",
    members: 1,
    generation: 2,
    debutYear: 2018,
    popularity: 80,
    albums: 2
  },
  // Kim Lip (LOONA)
  {
    artistName: "Kim Lip (LOONA)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2017,
    popularity: 75,
    albums: 1
  },
  // KISS OF LIFE
  {
    artistName: "KISS OF LIFE",
    groupType: "female",
    members: 4,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1
  },
  {
    artistName: "LE SSERAFIM",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2022,
    popularity: 90,
    albums: 3,
  },
  {
    artistName: "Lee Chae Yeon (IZ ONE)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2021,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "Lee Hyori",
    groupType: "female",
    members: 1,
    generation: 1,
    debutYear: 2003,
    popularity: 94,
    albums: 5,
  },
  {
    artistName: "Lee Jinhyuk (UP10TION)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2019,
    popularity: 75,
    albums: 2,
  },
  {
    artistName: "LISA (Blackpink)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2021,
    popularity: 95,
    albums: 1,
  },
  {
    artistName: "LOONA",
    groupType: "female",
    members: 12,
    generation: 3,
    debutYear: 2018,
    popularity: 80,
    albums: 5,
  },
  {
    artistName: "Loossemble",
    groupType: "female",
    members: 5,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "LUCAS (NCT)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2018,
    popularity: 80,
    albums: 1,
  },
  {
    artistName: "Mamamoo+",
    groupType: "female",
    members: 2,
    generation: 3,
    debutYear: 2022,
    popularity: 75,
    albums: 1,
  },
  {
    artistName: "Mamamoo",
    groupType: "female",
    members: 4,
    generation: 3,
    debutYear: 2014,
    popularity: 85,
    albums: 8,
  },
  {
    artistName: "MAVE",
    groupType: "female",
    members: 4,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "MCND",
    groupType: "male",
    members: 5,
    generation: 4,
    debutYear: 2020,
    popularity: 75,
    albums: 4,
  },
  {
    artistName: "MEOVV",
    groupType: "female",
    members: 5,
    generation: 5,
    debutYear: 2023,
    popularity: 65,
    albums: 1,
  },
  {
    artistName: "MOMOLAND",
    groupType: "female",
    members: 6,
    generation: 3,
    debutYear: 2016,
    popularity: 75,
    albums: 5,
  },
  {
    artistName: "MONSTA X",
    groupType: "male",
    members: 6,
    generation: 3,
    debutYear: 2015,
    popularity: 85,
    albums: 7,
  },
  {
    artistName: "Moonbyul (Mamamoo)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2018,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "NATTY (Kiss of Life)",
    groupType: "female",
    members: 1,
    generation: 4,
    debutYear: 2020,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "NAYEON (Twice)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2022,
    popularity: 85,
    albums: 1,
  },
  {
    artistName: "NCT 127",
    groupType: "male",
    members: 9,
    generation: 3,
    debutYear: 2016,
    popularity: 90,
    albums: 7,
  },
  {
    artistName: "NCT DOJAEJUNG",
    groupType: "male",
    members: 3,
    generation: 3,
    debutYear: 2023,
    popularity: 80,
    albums: 1,
  },
  {
    artistName: "NCT Dream",
    groupType: "male",
    members: 7,
    generation: 3,
    debutYear: 2016,
    popularity: 85,
    albums: 6,
  },
  {
    artistName: "NCT U",
    groupType: "male",
    members: 23,
    generation: 3,
    debutYear: 2016,
    popularity: 85,
    albums: 5,
  },
  {
    artistName: "NewJeans",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2022,
    popularity: 95,
    albums: 2,
  },
  {
    artistName: "NMIXX",
    groupType: "female",
    members: 6,
    generation: 4,
    debutYear: 2022,
    popularity: 85,
    albums: 2,
  },
  {
    artistName: "NU EST",
    groupType: "male",
    members: 5,
    generation: 3,
    debutYear: 2012,
    popularity: 75,
    albums: 7,
  },
  {
    artistName: "ODD EYE CIRCLE",
    groupType: "female",
    members: 3,
    generation: 3,
    debutYear: 2017,
    popularity: 75,
    albums: 2,
  },
  {
    artistName: "OH MY GIRL",
    groupType: "female",
    members: 7,
    generation: 3,
    debutYear: 2015,
    popularity: 80,
    albums: 6,
  },
  {
    artistName: "Oh!GG",
    groupType: "female",
    members: 5,
    generation: 2,
    debutYear: 2018,
    popularity: 75,
    albums: 1,
  },
  {
    artistName: "OMEGA X",
    groupType: "male",
    members: 11,
    generation: 4,
    debutYear: 2021,
    popularity: 75,
    albums: 3,
  },
  {
    artistName: "ONEUS",
    groupType: "male",
    members: 6,
    generation: 4,
    debutYear: 2019,
    popularity: 75,
    albums: 5,
  },
  {
    artistName: "OnlyOneOf",
    groupType: "male",
    members: 7,
    generation: 4,
    debutYear: 2019,
    popularity: 70,
    albums: 4,
  },
  {
    artistName: "Orange Caramel",
    groupType: "female",
    members: 3,
    generation: 2,
    debutYear: 2010,
    popularity: 70,
    albums: 3,
  },
  {
    artistName: "P1Harmony",
    groupType: "male",
    members: 6,
    generation: 4,
    debutYear: 2020,
    popularity: 75,
    albums: 4,
  },
  {
    artistName: "PENTAGON",
    groupType: "male",
    members: 9,
    generation: 3,
    debutYear: 2016,
    popularity: 75,
    albums: 7,
  },
  {
    artistName: "PIXY",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2021,
    popularity: 70,
    albums: 3,
  },
  {
    artistName: "PLAYBACK",
    groupType: "female",
    members: 5,
    generation: 3,
    debutYear: 2015,
    popularity: 65,
    albums: 2,
  },
  {
    artistName: "PLEDIS Girlz",
    groupType: "female",
    members: 10,
    generation: 3,
    debutYear: 2016,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "PRISTIN V",
    groupType: "female",
    members: 5,
    generation: 3,
    debutYear: 2018,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "PRISTIN",
    groupType: "female",
    members: 10,
    generation: 3,
    debutYear: 2017,
    popularity: 70,
    albums: 2,
  },
  {
    artistName: "PSY",
    groupType: "male",
    members: 1,
    generation: 2,
    debutYear: 2001,
    popularity: 85,
    albums: 8,
  },
  {
    artistName: "PURPLE K!SS",
    groupType: "female",
    members: 7,
    generation: 4,
    debutYear: 2021,
    popularity: 75,
    albums: 3,
  },
  {
    artistName: "Rain",
    groupType: "male",
    members: 1,
    generation: 1,
    debutYear: 2002,
    popularity: 93,
    albums: 7,
  },
  {
    artistName: "Red Velvet",
    groupType: "female",
    members: 5,
    generation: 3,
    debutYear: 2014,
    popularity: 90,
    albums: 8,
  },
  {
    artistName: "RIIZE",
    groupType: "male",
    members: 7,
    generation: 5,
    debutYear: 2023,
    popularity: 85,
    albums: 1,
  },
  {
    artistName: "Rose (Blackpink)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2021,
    popularity: 90,
    albums: 1,
  },
  {
    artistName: "S.E.S.",
    groupType: "female",
    members: 3,
    generation: 1,
    debutYear: 1997,
    popularity: 70,
    albums: 6,
  },
  {
    artistName: "Se7en",
    groupType: "male",
    members: 1,
    generation: 1,
    debutYear: 2003,
    popularity: 88,
    albums: 6,
  },
  {
    artistName: "SECRET NUMBER",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2020,
    popularity: 75,
    albums: 3,
  },
  {
    artistName: "SEO SOOJIN",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2021,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "Seohyun (SNSD)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2017,
    popularity: 75,
    albums: 1,
  },
  {
    artistName: "Seulgi (Red Velvet)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2022,
    popularity: 85,
    albums: 1,
  },
  {
    artistName: "Seventeen",
    groupType: "male",
    members: 13,
    generation: 3,
    debutYear: 2015,
    popularity: 90,
    albums: 8,
  },
  {
    artistName: "SF9",
    groupType: "male",
    members: 9,
    generation: 3,
    debutYear: 2016,
    popularity: 75,
    albums: 6,
  },
  {
    artistName: "SHINee",
    groupType: "male",
    members: 5,
    generation: 2,
    debutYear: 2008,
    popularity: 85,
    albums: 10,
  },
  {
    artistName: "SHINHWA",
    groupType: "male",
    members: 6,
    generation: 1,
    debutYear: 1998,
    popularity: 75,
    albums: 12,
  },
  {
    artistName: "SISTAR",
    groupType: "female",
    members: 4,
    generation: 2,
    debutYear: 2010,
    popularity: 80,
    albums: 6,
  },
  {
    artistName: "Solar (Mamamoo)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2020,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "STAYC",
    groupType: "female",
    members: 6,
    generation: 4,
    debutYear: 2020,
    popularity: 85,
    albums: 4,
  },
  {
    artistName: "Stray Kids",
    groupType: "male",
    members: 8,
    generation: 4,
    debutYear: 2018,
    popularity: 90,
    albums: 7,
  },
  {
    artistName: "SUNMI (Wonder Girls)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2013,
    popularity: 80,
    albums: 4,
  },
  {
    artistName: "Super Junior",
    groupType: "male",
    members: 9,
    generation: 2,
    debutYear: 2005,
    popularity: 85,
    albums: 12,
  },
  {
    artistName: "SuperM",
    groupType: "male",
    members: 7,
    generation: 3,
    debutYear: 2019,
    popularity: 85,
    albums: 2,
  },
  {
    artistName: "T-ARA",
    groupType: "female",
    members: 6,
    generation: 2,
    debutYear: 2009,
    popularity: 75,
    albums: 8,
  },
  {
    artistName: "TAEMIN (SHINee)",
    groupType: "male",
    members: 1,
    generation: 2,
    debutYear: 2014,
    popularity: 85,
    albums: 4,
  },
  {
    artistName: "Taeyang (BIGBANG)",
    groupType: "male",
    members: 1,
    generation: 2,
    debutYear: 2008,
    popularity: 85,
    albums: 4,
  },
  {
    artistName: "Taeyeon (SNSD)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2015,
    popularity: 90,
    albums: 5,
  },
  {
    artistName: "TAEYONG (NCT 127)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2019,
    popularity: 85,
    albums: 1,
  },
  {
    artistName: "Teen Top",
    groupType: "male",
    members: 6,
    generation: 2,
    debutYear: 2010,
    popularity: 75,
    albums: 7,
  },
  {
    artistName: "TEN & YANGYANG (WayV)",
    groupType: "male",
    members: 2,
    generation: 3,
    debutYear: 2020,
    popularity: 80,
    albums: 1,
  },
  {
    artistName: "TEN (NCT)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2016,
    popularity: 85,
    albums: 1,
  },
  {
    artistName: "The Boyz",
    groupType: "male",
    members: 11,
    generation: 3,
    debutYear: 2017,
    popularity: 85,
    albums: 6,
  },
  {
    artistName: "Tiffany (SNSD)",
    groupType: "female",
    members: 1,
    generation: 2,
    debutYear: 2016,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "TREASURE",
    groupType: "male",
    members: 12,
    generation: 4,
    debutYear: 2020,
    popularity: 85,
    albums: 4,
  },
  {
    artistName: "TRI.BE",
    groupType: "female",
    members: 7,
    generation: 4,
    debutYear: 2021,
    popularity: 75,
    albums: 3,
  },
  {
    artistName: "Triple H",
    groupType: "mixed",
    members: 3,
    generation: 3,
    debutYear: 2017,
    popularity: 75,
    albums: 2,
  },
  {
    artistName: "tripleS",
    groupType: "female",
    members: 24,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "Trouble Maker",
    groupType: "mixed",
    members: 2,
    generation: 2,
    debutYear: 2011,
    popularity: 75,
    albums: 1,
  },
  {
    artistName: "TTS (Girls Generation)",
    groupType: "female",
    members: 3,
    generation: 2,
    debutYear: 2012,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "Turbo",
    groupType: "male",
    members: 2,
    generation: 1,
    debutYear: 1995,
    popularity: 87,
    albums: 6,
  },
  {
    artistName: "TVXQ",
    groupType: "male",
    members: 2,
    generation: 2,
    debutYear: 2003,
    popularity: 85,
    albums: 10,
  },
  {
    artistName: "Twice",
    groupType: "female",
    members: 9,
    generation: 3,
    debutYear: 2015,
    popularity: 95,
    albums: 9,
  },
  {
    artistName: "TWS",
    groupType: "male",
    members: 6,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "TXT",
    groupType: "male",
    members: 5,
    generation: 4,
    debutYear: 2019,
    popularity: 90,
    albums: 5,
  },
  {
    artistName: "VICTON",
    groupType: "male",
    members: 6,
    generation: 3,
    debutYear: 2016,
    popularity: 75,
    albums: 5,
  },
  {
    artistName: "VIVIZ",
    groupType: "female",
    members: 3,
    generation: 4,
    debutYear: 2022,
    popularity: 75,
    albums: 2,
  },
  {
    artistName: "VIXX",
    groupType: "male",
    members: 6,
    generation: 3,
    debutYear: 2012,
    popularity: 75,
    albums: 7,
  },
  {
    artistName: "Wanna One",
    groupType: "male",
    members: 11,
    generation: 3,
    debutYear: 2017,
    popularity: 85,
    albums: 3,
  },
  {
    artistName: "Weeekly",
    groupType: "female",
    members: 7,
    generation: 4,
    debutYear: 2020,
    popularity: 75,
    albums: 3,
  },
  {
    artistName: "WEi",
    groupType: "male",
    members: 6,
    generation: 4,
    debutYear: 2020,
    popularity: 75,
    albums: 4,
  },
  {
    artistName: "Weki Meki",
    groupType: "female",
    members: 8,
    generation: 3,
    debutYear: 2017,
    popularity: 75,
    albums: 5,
  },
  {
    artistName: "Wheein (Mamamoo)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2018,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "WINNER",
    groupType: "male",
    members: 4,
    generation: 3,
    debutYear: 2014,
    popularity: 80,
    albums: 6,
  },
  {
    artistName: "WJSN CHOCOME",
    groupType: "female",
    members: 4,
    generation: 3,
    debutYear: 2020,
    popularity: 75,
    albums: 1,
  },
  {
    artistName: "WJSN THE BLACK",
    groupType: "female",
    members: 4,
    generation: 3,
    debutYear: 2021,
    popularity: 75,
    albums: 1,
  },
  {
    artistName: "WJSN",
    groupType: "female",
    members: 10,
    generation: 3,
    debutYear: 2016,
    popularity: 80,
    albums: 7,
  },
  {
    artistName: "Wonder Girls",
    groupType: "female",
    members: 5,
    generation: 2,
    debutYear: 2007,
    popularity: 80,
    albums: 6,
  },
  {
    artistName: "Wonho (MONSTA X)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2020,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "WOOAH",
    groupType: "female",
    members: 5,
    generation: 4,
    debutYear: 2020,
    popularity: 70,
    albums: 3,
  },
  {
    artistName: "X1",
    groupType: "male",
    members: 11,
    generation: 4,
    debutYear: 2019,
    popularity: 80,
    albums: 1,
  },
  {
    artistName: "xikers",
    groupType: "male",
    members: 10,
    generation: 5,
    debutYear: 2023,
    popularity: 70,
    albums: 1,
  },
  {
    artistName: "YENA (IZ ONE)",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2022,
    popularity: 80,
    albums: 2,
  },
  {
    artistName: "Yeonjun (TXT)",
    groupType: "male",
    members: 1,
    generation: 4,
    debutYear: 2019,
    popularity: 85,
    albums: 1,
  },
  {
    artistName: "YOUNG POSSE",
    groupType: "female",
    members: 5,
    generation: 5,
    debutYear: 2023,
    popularity: 65,
    albums: 1,
  },
  {
    artistName: "Yuju",
    groupType: "female",
    members: 1,
    generation: 3,
    debutYear: 2022,
    popularity: 75,
    albums: 1,
  },
  {
    artistName: "YUQI ((G)I-DLE)",
    groupType: "female",
    members: 1,
    generation: 4,
    debutYear: 2018,
    popularity: 80,
    albums: 1,
  },
  {
    artistName: "ZEROBASEONE",
    groupType: "male",
    members: 9,
    generation: 5,
    debutYear: 2023,
    popularity: 85,
    albums: 1,
  },
  {
    artistName: "ZICO (Block B)",
    groupType: "male",
    members: 1,
    generation: 3,
    debutYear: 2014,
    popularity: 85,
    albums: 4,
  }
];

class Leaderboard {
    constructor() {
        this.leaderboardKey = 'kpopGameLeaderboard';
        this.maxLeaderboardEntries = 10;
    }

    // Add a new score to the leaderboard
    addScore(playerName, guessCount) {
        // Prompt for player name if not provided
        if (!playerName) {
            playerName = prompt('Enter your name for the leaderboard:') || 'Anonymous';
        }

        // Get current leaderboard
        let leaderboard = this.getLeaderboard();

        // Create new entry
        const newEntry = {
            name: playerName,
            guesses: guessCount,
            date: new Date().toLocaleDateString()
        };

        // Add new entry and sort
        leaderboard.push(newEntry);
        leaderboard.sort((a, b) => a.guesses - b.guesses);

        // Trim to max entries
        leaderboard = leaderboard.slice(0, this.maxLeaderboardEntries);

        // Save to localStorage
        localStorage.setItem(this.leaderboardKey, JSON.stringify(leaderboard));

        // Update display
        this.displayLeaderboard();
    }

    // Retrieve leaderboard from localStorage
    getLeaderboard() {
        const savedLeaderboard = localStorage.getItem(this.leaderboardKey);
        return savedLeaderboard ? JSON.parse(savedLeaderboard) : [];
    }

    // Display leaderboard in the UI
    displayLeaderboard() {
        // Create or get leaderboard container
        let leaderboardContainer = document.getElementById('leaderboard-container');
        if (!leaderboardContainer) {
            leaderboardContainer = document.createElement('div');
            leaderboardContainer.id = 'leaderboard-container';
            leaderboardContainer.innerHTML = '<h2>Leaderboard (Lowest Guesses)</h2>';
            document.querySelector('.container').appendChild(leaderboardContainer);
        }

        // Clear previous entries
        const leaderboard = this.getLeaderboard();
        
        // Create table for leaderboard
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Guesses</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                ${leaderboard.map((entry, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${entry.name}</td>
                        <td>${entry.guesses}</td>
                        <td>${entry.date}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;

        // Clear previous table and add new one
        leaderboardContainer.innerHTML = '<h2>Leaderboard (Lowest Guesses)</h2>';
        leaderboardContainer.appendChild(table);
    }

    // Clear the entire leaderboard
    clearLeaderboard() {
        localStorage.removeItem(this.leaderboardKey);
        this.displayLeaderboard();
    }
}

class KpopArtistGame {
    constructor() {
        this.targetArtist = null;
        this.guessHistory = [];
        this.winningStreak = 0;
        this.totalGamesPlayed = 0;
        this.totalGuesses = 0;
        this.guessesInCurrentGame = 0;
        this.isGameWon = false;
        this.isGiveUp = false;
        this.leaderboard = new Leaderboard();
        
        this.initializeElements();
        this.bindEvents();
        this.startNewGame();
    }

    initializeElements() {
        this.artistInput = document.getElementById('artist-input');
        this.submitButton = document.getElementById('submit-guess');
        this.newGameButton = document.getElementById('new-game');
        this.giveUpButton = document.getElementById('give-up');
        this.gameMessage = document.getElementById('game-message');
        this.guessHistory = document.getElementById('guess-history');
        this.winningStreakElement = document.getElementById('winning-streak');
        this.averageGuessesElement = document.getElementById('avg-guesses');

        // Add a clear leaderboard button
        const clearLeaderboardButton = document.createElement('button');
        clearLeaderboardButton.textContent = 'Clear Leaderboard';
        clearLeaderboardButton.addEventListener('click', () => {
            this.leaderboard.clearLeaderboard();
        });
        document.getElementById('input-section').appendChild(clearLeaderboardButton);

        // Display initial leaderboard
        this.leaderboard.displayLeaderboard();
    }

    bindEvents() {
        this.submitButton.addEventListener('click', () => this.makeGuess());
        this.newGameButton.addEventListener('click', () => this.startNewGame());
        this.giveUpButton.addEventListener('click', () => this.giveUp());
        this.artistInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.makeGuess();
        });
    }

    startNewGame() {
        this.targetArtist = this.getRandomArtist();
        this.guessHistory.innerHTML = '';
        this.guessesInCurrentGame = 0;
        this.isGameWon = false;
        this.isGiveUp = false;
        this.artistInput.value = '';
        this.gameMessage.textContent = 'Start guessing!';
        this.giveUpButton.style.display = 'inline-block';
        this.submitButton.style.display = 'inline-block';
    }

    getRandomArtist() {
        return artists[Math.floor(Math.random() * artists.length)];
    }

    makeGuess() {
        const guessedArtistName = this.artistInput.value.trim();
        const guessedArtist = artists.find(a => a.artistName.toLowerCase() === guessedArtistName.toLowerCase());

        if (!guessedArtist) {
            alert('Artist not found. Please try again.');
            return;
        }

        this.guessesInCurrentGame++;
        const feedback = this.checkGuess(guessedArtist, this.targetArtist);
        this.displayGuess(guessedArtist, feedback);

        if (feedback.isArtistNameCorrect) {
            this.handleCorrectGuess();
        }

        this.artistInput.value = '';
    }

    checkGuess(guessedArtist, targetArtist) {
        return {
            artistName: guessedArtist.artistName,
            groupType: this.compareProperty(guessedArtist.groupType, targetArtist.groupType),
            members: this.compareNumericProperty(guessedArtist.members, targetArtist.members),
            generation: this.compareNumericProperty(guessedArtist.generation, targetArtist.generation),
            debutYear: this.compareNumericProperty(guessedArtist.debutYear, targetArtist.debutYear),
            popularity: this.compareNumericProperty(guessedArtist.popularity, targetArtist.popularity),
            albums: this.compareNumericProperty(guessedArtist.albums, targetArtist.albums),
            isArtistNameCorrect: guessedArtist.artistName === targetArtist.artistName,
            isGroupTypeCorrect: guessedArtist.groupType === targetArtist.groupType
        };
    }

    compareProperty(guessedValue, targetValue) {
        return guessedValue === targetValue ? guessedValue : `${guessedValue} ❌`;
    }

    compareNumericProperty(guessedValue, targetValue) {
        if (guessedValue === targetValue) return `${guessedValue} ✅`;
        if (Math.abs(guessedValue - targetValue) === 1) return `${guessedValue} ⚠️`;
        return guessedValue > targetValue ? `${guessedValue} ↓` : `${guessedValue} ↑`;
    }

    displayGuess(guessedArtist, feedback) {
        const guessElement = document.createElement('div');
        guessElement.classList.add('guess-item');
        
        guessElement.innerHTML = `
            <h3>${feedback.artistName}</h3>
            <div>
                <span class="property-chip ${feedback.groupType === guessedArtist.groupType ? 'correct' : 'incorrect'}">Group Type: ${feedback.groupType}</span>
                <span class="property-chip ${feedback.members.includes('✅') ? 'correct' : feedback.members.includes('⚠️') ? 'close' : 'incorrect'}">Members: ${feedback.members}</span>
                <span class="property-chip ${feedback.generation.includes('✅') ? 'correct' : feedback.generation.includes('⚠️') ? 'close' : 'incorrect'}">Generation: ${feedback.generation}</span>
                <span class="property-chip ${feedback.debutYear.includes('✅') ? 'correct' : feedback.debutYear.includes('⚠️') ? 'close' : 'incorrect'}">Debut Year: ${feedback.debutYear}</span>
                <span class="property-chip ${feedback.popularity.includes('✅') ? 'correct' : feedback.popularity.includes('⚠️') ? 'close' : 'incorrect'}">Popularity: ${feedback.popularity}</span>
                <span class="property-chip ${feedback.albums.includes('✅') ? 'correct' : feedback.albums.includes('⚠️') ? 'close' : 'incorrect'}">Albums: ${feedback.albums}</span>
            </div>
        `;

        this.guessHistory.prepend(guessElement);
    }

    handleCorrectGuess() {
        this.isGameWon = true;
        this.winningStreak++;
        this.totalGamesPlayed++;
        this.totalGuesses += this.guessesInCurrentGame;

        this.gameMessage.textContent = `Congratulations! You guessed ${this.targetArtist.artistName} correctly!`;
        this.winningStreakElement.textContent = this.winningStreak;
        this.averageGuessesElement.textContent = (this.totalGuesses / this.totalGamesPlayed).toFixed(1);

        this.giveUpButton.style.display = 'none';
        this.submitButton.style.display = 'none';

              // Add to leaderboard
        this.leaderboard.addScore(null, this.guessesInCurrentGame);
    }

    giveUp() {
        this.isGiveUp = true;
        this.totalGamesPlayed++;
        this.totalGuesses += this.guessesInCurrentGame;

        this.gameMessage.textContent = `You gave up! The correct artist was ${this.targetArtist.artistName}.`;
        this.winningStreakElement.textContent = this.winningStreak;
        this.averageGuessesElement.textContent = (this.totalGuesses / this.totalGamesPlayed).toFixed(1);

        this.giveUpButton.style.display = 'none';
        this.submitButton.style.display = 'none';
    }
}
// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KpopArtistGame();
});
