const airlineIATAMapping = Object.freeze({
  '11': {
    'isLowCostCarrier': false,
    'name': 'TUIfly (X3)'
  },
  '12': {
    'isLowCostCarrier': false,
    'name': '12 North'
  },
  '20': {
    'isLowCostCarrier': false,
    'name': 'Air Salone'
  },
  '24': {
    'isLowCostCarrier': false,
    'name': 'Euro Jet'
  },
  '47': {
    'isLowCostCarrier': false,
    'name': '88'
  },
  '69': {
    'isLowCostCarrier': false,
    'name': 'Royal European Airlines'
  },
  '76': {
    'isLowCostCarrier': false,
    'name': 'Southjet'
  },
  '77': {
    'isLowCostCarrier': false,
    'name': 'Southjet connect'
  },
  '78': {
    'isLowCostCarrier': false,
    'name': 'Southjet cargo'
  },
  '99': {
    'isLowCostCarrier': false,
    'name': 'Ciao Air'
  },
  'Y4': {
    'isLowCostCarrier': true,
    'name': 'Volaris'
  },
  '2N': {
    'isLowCostCarrier': true,
    'name': 'NextJet'
  },
  'SE': {
    'isLowCostCarrier': true,
    'name': 'XL Airways France'
  },
  'QD': {
    'isLowCostCarrier': false,
    'name': 'JC International Airlines'
  },
  'X4': {
    'isLowCostCarrier': false,
    'name': 'Alaska Seaplanes X4'
  },
  'JU': {
    'isLowCostCarrier': false,
    'name': 'Air Serbia'
  },
  'V0': {
    'isLowCostCarrier': true,
    'name': 'Conviasa'
  },
  'AG': {
    'isLowCostCarrier': false,
    'name': 'Aruba Airlines'
  },
  'UJ': {
    'isLowCostCarrier': false,
    'name': 'AlMasria Universal Airlines'
  },
  '2A': {
    'isLowCostCarrier': false,
    'name': 'Deutsche Bahn'
  },
  'LP': {
    'isLowCostCarrier': false,
    'name': 'LATAM Peru'
  },
  'W3': {
    'isLowCostCarrier': false,
    'name': 'Arik Air'
  },
  'JI': {
    'isLowCostCarrier': false,
    'name': 'Meraj Air'
  },
  'DI': {
    'isLowCostCarrier': false,
    'name': 'Norwegian Air UK'
  },
  'VE': {
    'isLowCostCarrier': false,
    'name': 'EasyFly'
  },
  'NY': {
    'isLowCostCarrier': true,
    'name': 'Air Iceland Connect'
  },
  'ET': {
    'isLowCostCarrier': false,
    'name': 'Ethiopian Airlines'
  },
  '5T': {
    'isLowCostCarrier': false,
    'name': 'Canadian North'
  },
  'F3': {
    'isLowCostCarrier': false,
    'name': 'Flyadeal'
  },
  'NT': {
    'isLowCostCarrier': true,
    'name': 'Binter Canarias'
  },
  'CY': {
    'isLowCostCarrier': false,
    'name': 'Cyprus Airways'
  },
  '6I': {
    'isLowCostCarrier': false,
    'name': 'Alsie Express'
  },
  'PR': {
    'isLowCostCarrier': false,
    'name': 'Philippine Airlines'
  },
  '2P': {
    'isLowCostCarrier': true,
    'name': 'PAL Express'
  },
  '9J': {
    'isLowCostCarrier': false,
    'name': 'Dana Airlines Limited'
  },
  'SX': {
    'isLowCostCarrier': false,
    'name': 'SkyWork Airlines'
  },
  '8G': {
    'isLowCostCarrier': false,
    'name': 'Mid Africa Aviation'
  },
  'SF': {
    'isLowCostCarrier': false,
    'name': 'Tassili Airlines'
  },
  'RT': {
    'isLowCostCarrier': false,
    'name': 'JSC UVT Aero'
  },
  'BJ': {
    'isLowCostCarrier': false,
    'name': 'NouvelAir'
  },
  'MV': {
    'isLowCostCarrier': false,
    'name': 'Air Mediterranean'
  },
  'LH': {
    'isLowCostCarrier': false,
    'name': 'Lufthansa'
  },
  'D4': {
    'isLowCostCarrier': false,
    'name': 'Aerodart'
  },
  'OV': {
    'isLowCostCarrier': true,
    'name': 'SalamAir'
  },
  'LA': {
    'isLowCostCarrier': false,
    'name': 'LATAM Chile'
  },
  'LQ': {
    'isLowCostCarrier': true,
    'name': 'Lanmei Airlines'
  },
  'PE': {
    'isLowCostCarrier': false,
    'name': "People's Viennaline PE"
  },
  'S9': {
    'isLowCostCarrier': false,
    'name': 'Starbow Airlines'
  },
  '9P': {
    'isLowCostCarrier': true,
    'name': 'Air Arabia Jordan'
  },
  'SV': {
    'isLowCostCarrier': false,
    'name': 'Saudi Arabian Airlines'
  },
  'KS': {
    'isLowCostCarrier': false,
    'name': 'Peninsula Airways'
  },
  '6D': {
    'isLowCostCarrier': false,
    'name': 'Pelita'
  },
  'BA': {
    'isLowCostCarrier': false,
    'name': 'British Airways'
  },
  'J2': {
    'isLowCostCarrier': false,
    'name': 'Azerbaijan Airlines'
  },
  'Z7': {
    'isLowCostCarrier': true,
    'name': 'Amaszonas Uruguay'
  },
  'ZP': {
    'isLowCostCarrier': false,
    'name': 'Amaszonas del Paraguay S.A. Lineas Aereas'
  },
  'VT': {
    'isLowCostCarrier': false,
    'name': 'Air Tahiti'
  },
  'EK': {
    'isLowCostCarrier': false,
    'name': 'Emirates'
  },
  'XW': {
    'isLowCostCarrier': true,
    'name': 'NokScoot'
  },
  'WE': {
    'isLowCostCarrier': true,
    'name': 'Thai Smile'
  },
  'A1': {
    'isLowCostCarrier': false,
    'name': 'Atifly'
  },
  'VL': {
    'isLowCostCarrier': false,
    'name': 'Med-View Airline'
  },
  '9U': {
    'isLowCostCarrier': false,
    'name': 'Air Moldova'
  },
  'HM': {
    'isLowCostCarrier': false,
    'name': 'Air Seychelles'
  },
  'LI': {
    'isLowCostCarrier': false,
    'name': 'Leeward Islands Air Transport'
  },
  'TQ': {
    'isLowCostCarrier': false,
    'name': 'Tandem Aero'
  },
  '9I': {
    'isLowCostCarrier': false,
    'name': 'Thai Sky Airlines'
  },
  'XQ': {
    'isLowCostCarrier': true,
    'name': 'SunExpress'
  },
  'L7': {
    'isLowCostCarrier': false,
    'name': 'Lugansk Airlines'
  },
  'UG': {
    'isLowCostCarrier': false,
    'name': 'TunisAir Express'
  },
  'T0': {
    'isLowCostCarrier': false,
    'name': 'TACA Peru'
  },
  'J5': {
    'isLowCostCarrier': false,
    'name': 'Alaska Seaplane Service'
  },
  'E2': {
    'isLowCostCarrier': false,
    'name': 'Eagle Atlantic Airlines'
  },
  'NP': {
    'isLowCostCarrier': false,
    'name': 'Nile Air'
  },
  'CD': {
    'isLowCostCarrier': false,
    'name': 'Corendon Dutch Airlines B.V.'
  },
  'WF': {
    'isLowCostCarrier': false,
    'name': 'Widerøe'
  },
  '3I': {
    'isLowCostCarrier': false,
    'name': 'Air Comet Chile'
  },
  'HN': {
    'isLowCostCarrier': false,
    'name': 'Hankook Airline'
  },
  'II': {
    'isLowCostCarrier': false,
    'name': 'LSM International '
  },
  'W7': {
    'isLowCostCarrier': false,
    'name': 'Austral Brasil'
  },
  'FL': {
    'isLowCostCarrier': false,
    'name': 'AirTran Airways'
  },
  'OO': {
    'isLowCostCarrier': false,
    'name': 'SkyWest'
  },
  'ZM': {
    'isLowCostCarrier': false,
    'name': 'Air Manas'
  },
  '00': {
    'isLowCostCarrier': true,
    'name': 'Anadolujet'
  },
  'S1': {
    'isLowCostCarrier': false,
    'name': 'Serbian Airlines'
  },
  'MI': {
    'isLowCostCarrier': false,
    'name': 'SilkAir'
  },
  'B4': {
    'isLowCostCarrier': false,
    'name': 'ZanAir'
  },
  'HG': {
    'isLowCostCarrier': false,
    'name': 'Niki'
  },
  'M2': {
    'isLowCostCarrier': false,
    'name': 'MHS Aviation GmbH'
  },
  'M1': {
    'isLowCostCarrier': false,
    'name': 'Maryland Air'
  },
  'LT': {
    'isLowCostCarrier': false,
    'name': 'Air Lituanica'
  },
  'TE': {
    'isLowCostCarrier': false,
    'name': 'FlyLal'
  },
  '7C': {
    'isLowCostCarrier': true,
    'name': 'Jeju Air'
  },
  'AY': {
    'isLowCostCarrier': false,
    'name': 'Finnair'
  },
  'AV': {
    'isLowCostCarrier': false,
    'name': 'Avianca'
  },
  'Y7': {
    'isLowCostCarrier': true,
    'name': 'NordStar Airlines'
  },
  'PM': {
    'isLowCostCarrier': false,
    'name': 'Canary Fly'
  },
  'RJ': {
    'isLowCostCarrier': false,
    'name': 'Royal Jordanian'
  },
  'KK': {
    'isLowCostCarrier': true,
    'name': 'AtlasGlobal'
  },
  '7F': {
    'isLowCostCarrier': false,
    'name': 'First Air'
  },
  'A7': {
    'isLowCostCarrier': false,
    'name': 'Air Plus Comet'
  },
  'ZH': {
    'isLowCostCarrier': false,
    'name': 'Shenzhen Airlines'
  },
  'QR': {
    'isLowCostCarrier': false,
    'name': 'Qatar Airways'
  },
  'GG': {
    'isLowCostCarrier': false,
    'name': 'Air Guyane'
  },
  '2U': {
    'isLowCostCarrier': false,
    'name': 'Air Guinee Express'
  },
  'IN': {
    'isLowCostCarrier': false,
    'name': 'Nam Air'
  },
  '4C': {
    'isLowCostCarrier': false,
    'name': 'LATAM Colombia'
  },
  'FK': {
    'isLowCostCarrier': false,
    'name': 'Africa West'
  },
  'FZ': {
    'isLowCostCarrier': true,
    'name': 'Fly Dubai'
  },
  '4D': {
    'isLowCostCarrier': false,
    'name': 'Air Sinai'
  },
  'XM': {
    'isLowCostCarrier': false,
    'name': 'Alitalia Express'
  },
  'YW': {
    'isLowCostCarrier': false,
    'name': 'Air Nostrum'
  },
  '6S': {
    'isLowCostCarrier': false,
    'name': 'SaudiGulf Airlines'
  },
  'LG': {
    'isLowCostCarrier': false,
    'name': 'Luxair'
  },
  'N7': {
    'isLowCostCarrier': false,
    'name': 'Neptune Air Sdn Bhd'
  },
  'ZT': {
    'isLowCostCarrier': false,
    'name': 'Titan Airways'
  },
  'QT': {
    'isLowCostCarrier': false,
    'name': 'TAMPA'
  },
  '4Z': {
    'isLowCostCarrier': false,
    'name': 'Airlink (SAA)'
  },
  'VD': {
    'isLowCostCarrier': false,
    'name': 'Air Libert'
  },
  'ZW': {
    'isLowCostCarrier': false,
    'name': 'Air Wisconsin'
  },
  'HP': {
    'isLowCostCarrier': false,
    'name': 'America West Airlines'
  },
  '4A': {
    'isLowCostCarrier': false,
    'name': 'Air Kiribati'
  },
  'SQ': {
    'isLowCostCarrier': false,
    'name': 'Singapore Airlines'
  },
  'SZ': {
    'isLowCostCarrier': false,
    'name': 'Somon Air'
  },
  'NN': {
    'isLowCostCarrier': true,
    'name': 'VIM Airlines'
  },
  '7P': {
    'isLowCostCarrier': true,
    'name': 'AirPanama'
  },
  '5D': {
    'isLowCostCarrier': false,
    'name': 'Aerolitoral'
  },
  'SB': {
    'isLowCostCarrier': false,
    'name': 'Aircalin'
  },
  '2O': {
    'isLowCostCarrier': false,
    'name': 'Air Salone'
  },
  'QQ': {
    'isLowCostCarrier': false,
    'name': 'Alliance Airlines'
  },
  'I9': {
    'isLowCostCarrier': false,
    'name': 'Air Italy'
  },
  'WY': {
    'isLowCostCarrier': false,
    'name': 'Oman Air'
  },
  'U6': {
    'isLowCostCarrier': true,
    'name': 'Ural Airlines'
  },
  'K2': {
    'isLowCostCarrier': false,
    'name': 'EuroLot'
  },
  '4T': {
    'isLowCostCarrier': false,
    'name': 'Belair'
  },
  'AP': {
    'isLowCostCarrier': false,
    'name': 'AlbaStar'
  },
  'QH': {
    'isLowCostCarrier': false,
    'name': 'Air Kyrgyzstan'
  },
  'KO': {
    'isLowCostCarrier': false,
    'name': 'Komiaviatrans'
  },
  'WI': {
    'isLowCostCarrier': false,
    'name': 'White Airways'
  },
  'EI': {
    'isLowCostCarrier': true,
    'name': 'Aer Lingus'
  },
  'QF': {
    'isLowCostCarrier': false,
    'name': 'Qantas'
  },
  'KJ': {
    'isLowCostCarrier': false,
    'name': 'British Mediterranean Airways'
  },
  'I8': {
    'isLowCostCarrier': false,
    'name': 'Izhavia'
  },
  'GK': {
    'isLowCostCarrier': false,
    'name': 'Jetstar Japan'
  },
  'GL': {
    'isLowCostCarrier': false,
    'name': 'Air Greenland'
  },
  '2I': {
    'isLowCostCarrier': true,
    'name': 'Star Peru'
  },
  'A5': {
    'isLowCostCarrier': true,
    'name': 'HOP!'
  },
  'PX': {
    'isLowCostCarrier': false,
    'name': 'Air Niugini'
  },
  'UI': {
    'isLowCostCarrier': false,
    'name': 'Auric Air'
  },
  'H1': {
    'isLowCostCarrier': false,
    'name': 'Hahn Air'
  },
  'E5': {
    'isLowCostCarrier': false,
    'name': 'Air Arabia Egypt'
  },
  'HA': {
    'isLowCostCarrier': false,
    'name': 'Hawaiian Airlines'
  },
  'IQ': {
    'isLowCostCarrier': false,
    'name': 'Qazaq Air'
  },
  'WZ': {
    'isLowCostCarrier': true,
    'name': 'Red Wings'
  },
  'BN': {
    'isLowCostCarrier': false,
    'name': 'Horizon Airlines'
  },
  'W8': {
    'isLowCostCarrier': false,
    'name': 'Cargojet Airways'
  },
  'PT': {
    'isLowCostCarrier': false,
    'name': 'Red Jet Andes'
  },
  '6E': {
    'isLowCostCarrier': true,
    'name': 'IndiGo Airlines'
  },
  'PP': {
    'isLowCostCarrier': false,
    'name': 'Air Indus'
  },
  'TC': {
    'isLowCostCarrier': false,
    'name': 'Air Tanzania'
  },
  'PJ': {
    'isLowCostCarrier': false,
    'name': 'Air Saint Pierre'
  },
  'Z4': {
    'isLowCostCarrier': false,
    'name': 'Zoom Airlines'
  },
  'JY': {
    'isLowCostCarrier': false,
    'name': 'interCaribbean Airways'
  },
  'JM': {
    'isLowCostCarrier': false,
    'name': 'Air Jamaica'
  },
  'GQ': {
    'isLowCostCarrier': false,
    'name': 'Sky Express'
  },
  'NE': {
    'isLowCostCarrier': false,
    'name': 'Nesma Air'
  },
  'DF': {
    'isLowCostCarrier': false,
    'name': 'Michael Airlines'
  },
  'U1': {
    'isLowCostCarrier': false,
    'name': 'Aviabus'
  },
  '0X': {
    'isLowCostCarrier': false,
    'name': 'Copenhagen Express'
  },
  'CT': {
    'isLowCostCarrier': false,
    'name': 'Alitalia Cityliner'
  },
  'AC': {
    'isLowCostCarrier': false,
    'name': 'Air Canada'
  },
  '8Q': {
    'isLowCostCarrier': true,
    'name': 'Onur Air'
  },
  'LR': {
    'isLowCostCarrier': false,
    'name': 'LACSA'
  },
  'B9': {
    'isLowCostCarrier': false,
    'name': 'Air Bangladesh'
  },
  '7E': {
    'isLowCostCarrier': false,
    'name': 'Aeroline GmbH'
  },
  '6G': {
    'isLowCostCarrier': false,
    'name': 'Air Wales'
  },
  'LU': {
    'isLowCostCarrier': false,
    'name': 'LAN Express'
  },
  '5Y': {
    'isLowCostCarrier': false,
    'name': 'Atlas Air'
  },
  'R7': {
    'isLowCostCarrier': false,
    'name': 'Aserca Airlines'
  },
  'AS': {
    'isLowCostCarrier': false,
    'name': 'Alaska Airlines'
  },
  'VU': {
    'isLowCostCarrier': false,
    'name': 'Air Ivoire'
  },
  'WX': {
    'isLowCostCarrier': false,
    'name': 'CityJet'
  },
  'IT': {
    'isLowCostCarrier': false,
    'name': 'Tigerair Taiwan'
  },
  'EH': {
    'isLowCostCarrier': false,
    'name': 'ANA Wings'
  },
  '0B': {
    'isLowCostCarrier': true,
    'name': 'Blue Air'
  },
  'ZL': {
    'isLowCostCarrier': true,
    'name': 'Regional Express'
  },
  '3E': {
    'isLowCostCarrier': false,
    'name': 'Air Choice One'
  },
  'FN': {
    'isLowCostCarrier': true,
    'name': 'Fastjet'
  },
  'CV': {
    'isLowCostCarrier': false,
    'name': 'Air Chathams'
  },
  'MU': {
    'isLowCostCarrier': false,
    'name': 'China Eastern Airlines'
  },
  'SY': {
    'isLowCostCarrier': true,
    'name': 'Sun Country Airlines'
  },
  'MD': {
    'isLowCostCarrier': false,
    'name': 'Air Madagascar'
  },
  'U8': {
    'isLowCostCarrier': false,
    'name': 'TUS Airways'
  },
  'FV': {
    'isLowCostCarrier': false,
    'name': 'Rossiya-Russian Airlines'
  },
  'D9': {
    'isLowCostCarrier': false,
    'name': 'Aeroflot-Don'
  },
  'NM': {
    'isLowCostCarrier': false,
    'name': 'Air Madrid'
  },
  'OF': {
    'isLowCostCarrier': false,
    'name': 'Air Finland'
  },
  'W9': {
    'isLowCostCarrier': false,
    'name': 'Air Bagan'
  },
  'JS': {
    'isLowCostCarrier': false,
    'name': 'Air Koryo'
  },
  'P0': {
    'isLowCostCarrier': false,
    'name': 'Proflight Zambia'
  },
  'LK': {
    'isLowCostCarrier': false,
    'name': 'Air Luxor'
  },
  'MK': {
    'isLowCostCarrier': false,
    'name': 'Air Mauritius'
  },
  'XG': {
    'isLowCostCarrier': false,
    'name': 'SunExpress'
  },
  'RE': {
    'isLowCostCarrier': false,
    'name': 'Aer Arann'
  },
  'PD': {
    'isLowCostCarrier': true,
    'name': 'Porter Airlines'
  },
  'FJ': {
    'isLowCostCarrier': false,
    'name': 'Fiji Airways'
  },
  'BD': {
    'isLowCostCarrier': false,
    'name': 'Cambodia Bayon Airlines'
  },
  '8D': {
    'isLowCostCarrier': false,
    'name': 'Astair'
  },
  'OT': {
    'isLowCostCarrier': false,
    'name': 'Aeropelican Air Services'
  },
  '6K': {
    'isLowCostCarrier': false,
    'name': 'Asian Spirit'
  },
  'IO': {
    'isLowCostCarrier': true,
    'name': 'IrAero'
  },
  'UU': {
    'isLowCostCarrier': false,
    'name': 'Air Austral'
  },
  'PS': {
    'isLowCostCarrier': false,
    'name': 'Ukraine International Airlines'
  },
  'MS': {
    'isLowCostCarrier': false,
    'name': 'Egyptair'
  },
  '5L': {
    'isLowCostCarrier': false,
    'name': 'Aerosur'
  },
  'J8': {
    'isLowCostCarrier': false,
    'name': 'Berjaya Air'
  },
  'Z3': {
    'isLowCostCarrier': false,
    'name': 'Avient Aviation'
  },
  'EC': {
    'isLowCostCarrier': false,
    'name': 'Avialeasing Aviation Company'
  },
  '2K': {
    'isLowCostCarrier': false,
    'name': 'Aerolineas Galapagos (Aerogal)'
  },
  'TX': {
    'isLowCostCarrier': false,
    'name': 'Air Caraïbes'
  },
  'RC': {
    'isLowCostCarrier': false,
    'name': 'Atlantic Airways'
  },
  '7G': {
    'isLowCostCarrier': true,
    'name': 'Star Flyer'
  },
  '4R': {
    'isLowCostCarrier': false,
    'name': 'Renfe'
  },
  'LV': {
    'isLowCostCarrier': false,
    'name': 'MEGA Maledives Airline'
  },
  'P7': {
    'isLowCostCarrier': false,
    'name': 'Small Planet Airline'
  },
  'BS': {
    'isLowCostCarrier': false,
    'name': 'British International Helicopters'
  },
  'KF': {
    'isLowCostCarrier': false,
    'name': 'Blue1'
  },
  'JJ': {
    'isLowCostCarrier': false,
    'name': 'LATAM Brasil'
  },
  'CH': {
    'isLowCostCarrier': false,
    'name': 'Bemidji Airlines'
  },
  '8E': {
    'isLowCostCarrier': false,
    'name': 'Bering Air'
  },
  'B2': {
    'isLowCostCarrier': false,
    'name': 'Belavia Belarusian Airlines'
  },
  'FB': {
    'isLowCostCarrier': false,
    'name': 'Bulgaria Air'
  },
  'GS': {
    'isLowCostCarrier': false,
    'name': 'Tianjin Airlines'
  },
  'BF': {
    'isLowCostCarrier': false,
    'name': 'French Blue'
  },
  'KC': {
    'isLowCostCarrier': false,
    'name': 'Air Astana'
  },
  'OI': {
    'isLowCostCarrier': false,
    'name': 'Orchid Airlines'
  },
  'AJ': {
    'isLowCostCarrier': false,
    'name': 'Aero Contractors'
  },
  'EN': {
    'isLowCostCarrier': false,
    'name': 'Air Dolomiti'
  },
  'YK': {
    'isLowCostCarrier': false,
    'name': 'Avia Traffic Airline'
  },
  'TY': {
    'isLowCostCarrier': false,
    'name': 'Air Caledonie'
  },
  'VX': {
    'isLowCostCarrier': true,
    'name': 'Virgin America'
  },
  'NF': {
    'isLowCostCarrier': false,
    'name': 'Air Vanuatu'
  },
  'C9': {
    'isLowCostCarrier': true,
    'name': 'SkyWise'
  },
  '8N': {
    'isLowCostCarrier': false,
    'name': 'Regional Air Services'
  },
  'HR': {
    'isLowCostCarrier': false,
    'name': 'China United Airlines'
  },
  'QI': {
    'isLowCostCarrier': false,
    'name': 'Cimber Air'
  },
  'DQ': {
    'isLowCostCarrier': false,
    'name': 'Coastal Air'
  },
  'KR': {
    'isLowCostCarrier': false,
    'name': 'Comores Airlines'
  },
  '6A': {
    'isLowCostCarrier': false,
    'name': 'Consorcio Aviaxsa'
  },
  'OU': {
    'isLowCostCarrier': false,
    'name': 'Croatia Airlines'
  },
  'TA': {
    'isLowCostCarrier': false,
    'name': 'Grupo TACA'
  },
  '2L': {
    'isLowCostCarrier': false,
    'name': 'Helvetic Airways'
  },
  '2T': {
    'isLowCostCarrier': false,
    'name': 'TruJet'
  },
  'GF': {
    'isLowCostCarrier': false,
    'name': 'Gulf Air Bahrain'
  },
  'XK': {
    'isLowCostCarrier': false,
    'name': 'Air Corsica'
  },
  'KB': {
    'isLowCostCarrier': false,
    'name': 'Druk Air'
  },
  'HU': {
    'isLowCostCarrier': false,
    'name': 'Hainan Airlines'
  },
  'SS': {
    'isLowCostCarrier': false,
    'name': 'Corsairfly'
  },
  'CZ': {
    'isLowCostCarrier': false,
    'name': 'China Southern Airlines'
  },
  'ZK': {
    'isLowCostCarrier': false,
    'name': 'Great Lakes Airlines'
  },
  'DO': {
    'isLowCostCarrier': false,
    'name': 'Dominicana de Aviaci'
  },
  'E3': {
    'isLowCostCarrier': false,
    'name': 'Domodedovo Airlines'
  },
  'H7': {
    'isLowCostCarrier': false,
    'name': 'Eagle Air'
  },
  'QU': {
    'isLowCostCarrier': false,
    'name': 'East African'
  },
  'T3': {
    'isLowCostCarrier': false,
    'name': 'Eastern Airways'
  },
  'UZ': {
    'isLowCostCarrier': false,
    'name': 'El-Buraq Air Transport'
  },
  'EU': {
    'isLowCostCarrier': false,
    'name': 'Empresa Ecuatoriana De Aviacion'
  },
  'B8': {
    'isLowCostCarrier': false,
    'name': 'Eritrean Airlines'
  },
  'EA': {
    'isLowCostCarrier': false,
    'name': 'European Air Express'
  },
  'JN': {
    'isLowCostCarrier': false,
    'name': 'Excel Airways'
  },
  'EO': {
    'isLowCostCarrier': false,
    'name': 'Express One International'
  },
  'FP': {
    'isLowCostCarrier': false,
    'name': 'Freedom Air'
  },
  'CU': {
    'isLowCostCarrier': false,
    'name': 'Cubana de Aviación'
  },
  'CX': {
    'isLowCostCarrier': false,
    'name': 'Cathay Pacific'
  },
  'ZE': {
    'isLowCostCarrier': true,
    'name': 'Eastar Jet'
  },
  'PY': {
    'isLowCostCarrier': false,
    'name': 'Surinam Airways'
  },
  'OA': {
    'isLowCostCarrier': false,
    'name': 'Olympic Air'
  },
  'GP': {
    'isLowCostCarrier': false,
    'name': 'APG Airlines'
  },
  'I7': {
    'isLowCostCarrier': false,
    'name': 'Paramount Airways'
  },
  '4G': {
    'isLowCostCarrier': false,
    'name': 'Gazpromavia'
  },
  'A9': {
    'isLowCostCarrier': false,
    'name': 'Georgian Airways'
  },
  'QB': {
    'isLowCostCarrier': false,
    'name': 'Georgian National Airlines'
  },
  'G0': {
    'isLowCostCarrier': false,
    'name': 'Ghana International Airlines'
  },
  'G7': {
    'isLowCostCarrier': false,
    'name': 'GoJet Airlines'
  },
  'TS': {
    'isLowCostCarrier': false,
    'name': 'Air Transat'
  },
  'UD': {
    'isLowCostCarrier': false,
    'name': "Hex'Air"
  },
  'FW': {
    'isLowCostCarrier': false,
    'name': 'Ibex Airlines'
  },
  'EY': {
    'isLowCostCarrier': false,
    'name': 'Etihad Airways'
  },
  'RZ': {
    'isLowCostCarrier': false,
    'name': 'Sansa Air'
  },
  'D2': {
    'isLowCostCarrier': true,
    'name': 'Severstal Air Company'
  },
  'LO': {
    'isLowCostCarrier': false,
    'name': 'LOT Polish Airlines'
  },
  'IC': {
    'isLowCostCarrier': false,
    'name': 'Indian Airlines'
  },
  'D6': {
    'isLowCostCarrier': false,
    'name': 'Interair South Africa'
  },
  'IR': {
    'isLowCostCarrier': false,
    'name': 'Iran Air'
  },
  'EP': {
    'isLowCostCarrier': false,
    'name': 'Iran Aseman Airlines'
  },
  'H8': {
    'isLowCostCarrier': false,
    'name': 'Latin American Wings'
  },
  'ID': {
    'isLowCostCarrier': true,
    'name': 'Batik Air'
  },
  'WC': {
    'isLowCostCarrier': false,
    'name': 'Islena De Inversiones'
  },
  'GI': {
    'isLowCostCarrier': false,
    'name': 'Itek Air'
  },
  'JC': {
    'isLowCostCarrier': false,
    'name': 'JAL Express'
  },
  'JO': {
    'isLowCostCarrier': false,
    'name': 'JALways'
  },
  '6H': {
    'isLowCostCarrier': false,
    'name': 'Israir'
  },
  '2M': {
    'isLowCostCarrier': false,
    'name': 'Maya Island Air'
  },
  'RQ': {
    'isLowCostCarrier': false,
    'name': 'Kam Air'
  },
  'KV': {
    'isLowCostCarrier': false,
    'name': 'Kavminvodyavia'
  },
  'M5': {
    'isLowCostCarrier': false,
    'name': 'Kenmore Air'
  },
  'Y9': {
    'isLowCostCarrier': false,
    'name': 'Kish Air'
  },
  '7K': {
    'isLowCostCarrier': false,
    'name': 'Kogalymavia Air Company'
  },
  'GW': {
    'isLowCostCarrier': false,
    'name': 'Kuban Airlines'
  },
  'EG': {
    'isLowCostCarrier': false,
    'name': 'Ernest Airlines'
  },
  'NG': {
    'isLowCostCarrier': false,
    'name': 'Lauda Air'
  },
  'LN': {
    'isLowCostCarrier': false,
    'name': 'Libyan Arab Airlines'
  },
  'AT': {
    'isLowCostCarrier': false,
    'name': 'Royal Air Maroc'
  },
  'MP': {
    'isLowCostCarrier': false,
    'name': 'Martinair'
  },
  'MZ': {
    'isLowCostCarrier': false,
    'name': 'Merpati Nusantara Airlines'
  },
  'YV': {
    'isLowCostCarrier': false,
    'name': 'Mesa Airlines'
  },
  'MX': {
    'isLowCostCarrier': false,
    'name': 'Mexicana de Aviaci'
  },
  'YX': {
    'isLowCostCarrier': false,
    'name': 'Midwest Airlines'
  },
  'MY': {
    'isLowCostCarrier': false,
    'name': 'Midwest Airlines (Egypt)'
  },
  '8I': {
    'isLowCostCarrier': false,
    'name': 'Myway Airlines'
  },
  'YM': {
    'isLowCostCarrier': false,
    'name': 'Montenegro Airlines'
  },
  '3R': {
    'isLowCostCarrier': false,
    'name': 'Moskovia Airlines'
  },
  'M9': {
    'isLowCostCarrier': false,
    'name': 'Motor Sich'
  },
  '8P': {
    'isLowCostCarrier': false,
    'name': 'Pacific Coastal Airline'
  },
  'NC': {
    'isLowCostCarrier': false,
    'name': 'National Jet Systems'
  },
  'ON': {
    'isLowCostCarrier': false,
    'name': 'Nauru Air Corporation'
  },
  'MT': {
    'isLowCostCarrier': true,
    'name': 'Thomas Cook Airlines'
  },
  'V7': {
    'isLowCostCarrier': true,
    'name': 'Volotea'
  },
  'HK': {
    'isLowCostCarrier': false,
    'name': 'Yangon Airways'
  },
  'RA': {
    'isLowCostCarrier': false,
    'name': 'Nepal Airlines'
  },
  'EJ': {
    'isLowCostCarrier': false,
    'name': 'New England Airlines'
  },
  'U7': {
    'isLowCostCarrier': false,
    'name': 'Northern Dene Airways'
  },
  'J3': {
    'isLowCostCarrier': false,
    'name': 'Northwestern Air'
  },
  '9B': {
    'isLowCostCarrier': false,
    'name': 'AccesRail'
  },
  'NU': {
    'isLowCostCarrier': false,
    'name': 'Japan Transocean Air'
  },
  'KE': {
    'isLowCostCarrier': false,
    'name': 'Korean Air'
  },
  'O2': {
    'isLowCostCarrier': false,
    'name': 'Oceanic Airlines'
  },
  'OY': {
    'isLowCostCarrier': false,
    'name': 'Omni Air International'
  },
  'OL': {
    'isLowCostCarrier': false,
    'name': 'Ostfriesische Lufttransport'
  },
  'VR': {
    'isLowCostCarrier': false,
    'name': 'TACV'
  },
  'PV': {
    'isLowCostCarrier': false,
    'name': 'PAN Air'
  },
  'PI': {
    'isLowCostCarrier': false,
    'name': 'Polar Airlines'
  },
  'O6': {
    'isLowCostCarrier': false,
    'name': 'Avianca Brazil'
  },
  'PU': {
    'isLowCostCarrier': false,
    'name': 'Plus Ultra Lineas Aereas'
  },
  'QV': {
    'isLowCostCarrier': false,
    'name': 'Lao Airlines'
  },
  'U4': {
    'isLowCostCarrier': false,
    'name': 'Buddha Air'
  },
  '8J': {
    'isLowCostCarrier': false,
    'name': 'Eco Jet'
  },
  '9E': {
    'isLowCostCarrier': false,
    'name': 'Pinnacle Airlines'
  },
  'PH': {
    'isLowCostCarrier': false,
    'name': 'Polynesian Airlines'
  },
  'BK': {
    'isLowCostCarrier': false,
    'name': 'Potomac Air'
  },
  'IK': {
    'isLowCostCarrier': false,
    'name': 'Pegas Fly'
  },
  'O7': {
    'isLowCostCarrier': false,
    'name': 'Orenburzhye Airline'
  },
  '7B': {
    'isLowCostCarrier': false,
    'name': 'Fly Blue Crane'
  },
  'CG': {
    'isLowCostCarrier': false,
    'name': 'Airlines PNG'
  },
  'LM': {
    'isLowCostCarrier': false,
    'name': 'LoganAir LM'
  },
  'RH': {
    'isLowCostCarrier': false,
    'name': 'Republic Express Airlines'
  },
  'GZ': {
    'isLowCostCarrier': false,
    'name': 'Air Rarotonga'
  },
  'FQ': {
    'isLowCostCarrier': false,
    'name': 'Thomas Cook Airlines'
  },
  '6O': {
    'isLowCostCarrier': false,
    'name': 'Orbest'
  },
  'S4': {
    'isLowCostCarrier': false,
    'name': 'SATA International'
  },
  'MQ': {
    'isLowCostCarrier': false,
    'name': 'American Eagle Airlines'
  },
  '5M': {
    'isLowCostCarrier': false,
    'name': 'Sibaviatrans'
  },
  'ZS': {
    'isLowCostCarrier': false,
    'name': 'Sama Airlines'
  },
  'FT': {
    'isLowCostCarrier': false,
    'name': 'Siem Reap Airways'
  },
  '5G': {
    'isLowCostCarrier': false,
    'name': 'Skyservice Airlines'
  },
  'FS': {
    'isLowCostCarrier': false,
    'name': 'Servicios de Transportes A'
  },
  'SD': {
    'isLowCostCarrier': false,
    'name': 'Sudan Airways'
  },
  'SJ': {
    'isLowCostCarrier': false,
    'name': 'Sriwijaya Air'
  },
  'RB': {
    'isLowCostCarrier': false,
    'name': 'Syrian Arab Airlines'
  },
  'SC': {
    'isLowCostCarrier': false,
    'name': 'Shandong Airlines'
  },
  'S5': {
    'isLowCostCarrier': false,
    'name': 'Shuttle America'
  },
  'BU': {
    'isLowCostCarrier': false,
    'name': 'Baikotovitchestrian Airlines '
  },
  '3P': {
    'isLowCostCarrier': false,
    'name': 'Tiara Air'
  },
  'YB': {
    'isLowCostCarrier': true,
    'name': 'BoraJet'
  },
  'Q8': {
    'isLowCostCarrier': false,
    'name': 'Trans Air Congo'
  },
  'GE': {
    'isLowCostCarrier': false,
    'name': 'TransAsia Airways'
  },
  'RL': {
    'isLowCostCarrier': false,
    'name': 'Royal Falcon'
  },
  'T5': {
    'isLowCostCarrier': false,
    'name': 'Turkmenistan Airlines'
  },
  'LW': {
    'isLowCostCarrier': false,
    'name': 'Latin American Wings'
  },
  'NO': {
    'isLowCostCarrier': true,
    'name': 'Neos Air'
  },
  '5F': {
    'isLowCostCarrier': true,
    'name': 'Fly One'
  },
  'DT': {
    'isLowCostCarrier': false,
    'name': 'TAAG Angola Airlines'
  },
  'AX': {
    'isLowCostCarrier': false,
    'name': 'Trans States Airlines'
  },
  'JD': {
    'isLowCostCarrier': false,
    'name': 'Beijing Capital Airlines'
  },
  'A4': {
    'isLowCostCarrier': false,
    'name': 'Azimuth'
  },
  '3T': {
    'isLowCostCarrier': false,
    'name': 'Turan Air'
  },
  'U5': {
    'isLowCostCarrier': false,
    'name': 'USA3000 Airlines'
  },
  'UF': {
    'isLowCostCarrier': false,
    'name': 'UM Airlines'
  },
  'US': {
    'isLowCostCarrier': false,
    'name': 'US Airways'
  },
  '2W': {
    'isLowCostCarrier': false,
    'name': 'Welcome Air'
  },
  '8O': {
    'isLowCostCarrier': false,
    'name': 'West Coast Air'
  },
  'IV': {
    'isLowCostCarrier': false,
    'name': 'Wind Jet'
  },
  'MF': {
    'isLowCostCarrier': false,
    'name': 'Xiamen Airlines'
  },
  'IY': {
    'isLowCostCarrier': false,
    'name': 'Yemenia'
  },
  '9Y': {
    'isLowCostCarrier': false,
    'name': 'Air Kazakhstan'
  },
  'HZ': {
    'isLowCostCarrier': false,
    'name': 'Aurora Airlines'
  },
  'VS': {
    'isLowCostCarrier': false,
    'name': 'Virgin Atlantic Airways'
  },
  'S7': {
    'isLowCostCarrier': false,
    'name': 'S7 Airlines'
  },
  'KW': {
    'isLowCostCarrier': false,
    'name': 'Carnival Air Lines'
  },
  'B7': {
    'isLowCostCarrier': false,
    'name': 'Uni Air'
  },
  'YD': {
    'isLowCostCarrier': false,
    'name': 'Gomelavia'
  },
  'TM': {
    'isLowCostCarrier': false,
    'name': 'Air Mozambique'
  },
  'GM': {
    'isLowCostCarrier': false,
    'name': 'Germania Flug'
  },
  'VH': {
    'isLowCostCarrier': false,
    'name': 'Virgin Pacific'
  },
  'CN': {
    'isLowCostCarrier': false,
    'name': 'Canadian National Airways'
  },
  'L8': {
    'isLowCostCarrier': false,
    'name': 'Line Blue'
  },
  'DH': {
    'isLowCostCarrier': false,
    'name': 'Dennis Sky'
  },
  'ZZ': {
    'isLowCostCarrier': false,
    'name': 'Zz'
  },
  'PZ': {
    'isLowCostCarrier': false,
    'name': 'LATAM Paraguay'
  },
  'EQ': {
    'isLowCostCarrier': false,
    'name': 'TAME'
  },
  'J4': {
    'isLowCostCarrier': false,
    'name': 'ALAK'
  },
  'S6': {
    'isLowCostCarrier': false,
    'name': 'Salmon Air'
  },
  'WD': {
    'isLowCostCarrier': false,
    'name': 'Amsterdam Airlines'
  },
  '8F': {
    'isLowCostCarrier': false,
    'name': 'STP Airways'
  },
  '7Y': {
    'isLowCostCarrier': false,
    'name': 'Med Airways'
  },
  'UQ': {
    'isLowCostCarrier': false,
    'name': 'Skyjet Airlines'
  },
  'G6': {
    'isLowCostCarrier': false,
    'name': 'Air Volga'
  },
  '4L': {
    'isLowCostCarrier': false,
    'name': 'Euroline'
  },
  'ZF': {
    'isLowCostCarrier': false,
    'name': 'Athens Airways'
  },
  'DZ': {
    'isLowCostCarrier': false,
    'name': 'Starline.kz'
  },
  '6P': {
    'isLowCostCarrier': false,
    'name': 'Gryphon Airlines'
  },
  'JR': {
    'isLowCostCarrier': false,
    'name': 'Joy Air'
  },
  '9H': {
    'isLowCostCarrier': false,
    'name': 'MDLR Airlines'
  },
  'TI': {
    'isLowCostCarrier': false,
    'name': 'Tailwind Airlines'
  },
  'Q2': {
    'isLowCostCarrier': false,
    'name': 'Maldivian'
  },
  'JH': {
    'isLowCostCarrier': false,
    'name': 'Fuji Dream Airlines'
  },
  'LZ': {
    'isLowCostCarrier': false,
    'name': 'belleair'
  },
  'XZ': {
    'isLowCostCarrier': false,
    'name': 'Congo Express'
  },
  'HY': {
    'isLowCostCarrier': false,
    'name': 'Uzbekistan Airways'
  },
  'TV': {
    'isLowCostCarrier': false,
    'name': 'Tibet Airlines'
  },
  'UR': {
    'isLowCostCarrier': false,
    'name': 'UTair-Express'
  },
  'G4': {
    'isLowCostCarrier': true,
    'name': 'Allegiant Air'
  },
  'BB': {
    'isLowCostCarrier': false,
    'name': 'Seaborne Airlines'
  },
  'MN': {
    'isLowCostCarrier': true,
    'name': 'Kulula'
  },
  'H5': {
    'isLowCostCarrier': false,
    'name': 'I-Fly'
  },
  'R8': {
    'isLowCostCarrier': false,
    'name': 'AirRussia'
  },
  'D1': {
    'isLowCostCarrier': false,
    'name': 'Domenican Airlines'
  },
  'C4': {
    'isLowCostCarrier': false,
    'name': 'LionXpress'
  },
  'XO': {
    'isLowCostCarrier': false,
    'name': 'LTE International Airways'
  },
  'G5': {
    'isLowCostCarrier': false,
    'name': 'Huaxia'
  },
  '3B': {
    'isLowCostCarrier': false,
    'name': 'JobAir'
  },
  'P8': {
    'isLowCostCarrier': false,
    'name': 'Air Mekong'
  },
  'HH': {
    'isLowCostCarrier': false,
    'name': 'Air Hamburg (AHO)'
  },
  'NS': {
    'isLowCostCarrier': false,
    'name': 'Caucasus Airlines'
  },
  'VO': {
    'isLowCostCarrier': false,
    'name': 'FlyVLM'
  },
  'KT': {
    'isLowCostCarrier': false,
    'name': 'VickJet'
  },
  'XV': {
    'isLowCostCarrier': false,
    'name': 'BVI Airways'
  },
  'ZJ': {
    'isLowCostCarrier': false,
    'name': 'Zambezi Airlines (ZMA)'
  },
  'YQ': {
    'isLowCostCarrier': false,
    'name': 'Polet Airlines (Priv)'
  },
  'L6': {
    'isLowCostCarrier': false,
    'name': 'Mauritania Airlines International'
  },
  'GY': {
    'isLowCostCarrier': false,
    'name': 'Colorful Guizhou Airlines'
  },
  'CE': {
    'isLowCostCarrier': false,
    'name': 'Chalair'
  },
  '7L': {
    'isLowCostCarrier': false,
    'name': "Sun D'Or"
  },
  'U3': {
    'isLowCostCarrier': false,
    'name': 'Avies'
  },
  'ZA': {
    'isLowCostCarrier': false,
    'name': 'Access Air'
  },
  'TD': {
    'isLowCostCarrier': false,
    'name': 'Atlantis European Airways'
  },
  'VC': {
    'isLowCostCarrier': false,
    'name': 'Via Air'
  },
  'DX': {
    'isLowCostCarrier': false,
    'name': 'DAT Danish Air Transport'
  },
  'D3': {
    'isLowCostCarrier': false,
    'name': 'Daallo Airlines'
  },
  'IA': {
    'isLowCostCarrier': false,
    'name': 'Iraqi Airways'
  },
  '1T': {
    'isLowCostCarrier': false,
    'name': '1Time Airline'
  },
  'FM': {
    'isLowCostCarrier': false,
    'name': 'Shanghai Airlines'
  },
  'UH': {
    'isLowCostCarrier': false,
    'name': 'AtlasGlobal Ukraine'
  },
  'JK': {
    'isLowCostCarrier': false,
    'name': 'Spanair'
  },
  'S3': {
    'isLowCostCarrier': false,
    'name': 'Santa Barbara Airlines'
  },
  'JZ': {
    'isLowCostCarrier': false,
    'name': 'Skyways Express'
  },
  'K5': {
    'isLowCostCarrier': false,
    'name': 'SeaPort Airlines'
  },
  'NB': {
    'isLowCostCarrier': false,
    'name': 'Sterling Airlines'
  },
  'VI': {
    'isLowCostCarrier': false,
    'name': 'Volga-Dnepr Airlines'
  },
  'VK': {
    'isLowCostCarrier': false,
    'name': 'Virgin Nigeria Airways'
  },
  'VG': {
    'isLowCostCarrier': false,
    'name': 'VLM Airlines'
  },
  '2Q': {
    'isLowCostCarrier': false,
    'name': 'Air Cargo Carriers'
  },
  'OK': {
    'isLowCostCarrier': false,
    'name': 'Czech Airlines'
  },
  '5P': {
    'isLowCostCarrier': false,
    'name': 'Small Planet Airlines'
  },
  'IE': {
    'isLowCostCarrier': false,
    'name': 'Solomon Airlines'
  },
  '6J': {
    'isLowCostCarrier': false,
    'name': 'Solaseed Air'
  },
  '4Q': {
    'isLowCostCarrier': false,
    'name': 'Safi Airlines'
  },
  '7Q': {
    'isLowCostCarrier': false,
    'name': 'Pan Am World Airways Dominicana'
  },
  'V6': {
    'isLowCostCarrier': false,
    'name': 'VIP Ecuador'
  },
  'OC': {
    'isLowCostCarrier': false,
    'name': 'Catovair'
  },
  '7Z': {
    'isLowCostCarrier': false,
    'name': 'Halcyonair'
  },
  '4P': {
    'isLowCostCarrier': false,
    'name': 'Business Aviation'
  },
  'UM': {
    'isLowCostCarrier': false,
    'name': 'Air Zimbabwe'
  },
  '6Y': {
    'isLowCostCarrier': false,
    'name': 'SmartLynx Airlines'
  },
  'AH': {
    'isLowCostCarrier': false,
    'name': 'Air Algerie'
  },
  'E4': {
    'isLowCostCarrier': false,
    'name': 'Elysian Airlines'
  },
  '7T': {
    'isLowCostCarrier': false,
    'name': 'Trenitalia'
  },
  'M4': {
    'isLowCostCarrier': false,
    'name': 'Mistral Air'
  },
  'FI': {
    'isLowCostCarrier': false,
    'name': 'Icelandair'
  },
  'ZN': {
    'isLowCostCarrier': false,
    'name': 'Zenith International Airline'
  },
  'HT': {
    'isLowCostCarrier': false,
    'name': 'Hellenic Imperial Airways'
  },
  'Q9': {
    'isLowCostCarrier': false,
    'name': 'Arik Niger'
  },
  'YO': {
    'isLowCostCarrier': false,
    'name': 'TransHolding System'
  },
  '3F': {
    'isLowCostCarrier': false,
    'name': 'Fly Colombia ( Interliging Flights )'
  },
  'HC': {
    'isLowCostCarrier': false,
    'name': 'Himalayan Airlines'
  },
  'V9': {
    'isLowCostCarrier': false,
    'name': 'Star1 Airlines'
  },
  'ZG': {
    'isLowCostCarrier': false,
    'name': 'Grozny Avia'
  },
  'AU': {
    'isLowCostCarrier': false,
    'name': 'Austral Lineas Aereas'
  },
  'EV': {
    'isLowCostCarrier': false,
    'name': 'ExpressJet'
  },
  '2F': {
    'isLowCostCarrier': false,
    'name': 'Frontier Flying Service'
  },
  '9S': {
    'isLowCostCarrier': false,
    'name': 'Spring Airlines'
  },
  'K1': {
    'isLowCostCarrier': false,
    'name': 'Kostromskie avialinii'
  },
  'B1': {
    'isLowCostCarrier': false,
    'name': 'Baltic Air lines'
  },
  'XX': {
    'isLowCostCarrier': false,
    'name': 'Greenfly'
  },
  'FU': {
    'isLowCostCarrier': false,
    'name': 'Felix Airways'
  },
  'DS': {
    'isLowCostCarrier': false,
    'name': 'EasyJet (DS)'
  },
  'YL': {
    'isLowCostCarrier': false,
    'name': 'Yamal Airlines'
  },
  'WO': {
    'isLowCostCarrier': false,
    'name': 'World Airways'
  },
  '8Z': {
    'isLowCostCarrier': false,
    'name': 'Wizz Air Hungary'
  },
  'R5': {
    'isLowCostCarrier': false,
    'name': 'Jordan Aviation'
  },
  'HF': {
    'isLowCostCarrier': false,
    'name': "Air Cote d'Ivoire"
  },
  '6B': {
    'isLowCostCarrier': false,
    'name': 'TUIfly Nordic'
  },
  '9T': {
    'isLowCostCarrier': false,
    'name': 'Transwest Air'
  },
  'AL': {
    'isLowCostCarrier': false,
    'name': 'Skywalk Airlines'
  },
  'SR': {
    'isLowCostCarrier': false,
    'name': 'Swissair'
  },
  'SP': {
    'isLowCostCarrier': false,
    'name': 'SATA Air Acores'
  },
  'RD': {
    'isLowCostCarrier': false,
    'name': 'Ryan International Airlines'
  },
  'R4': {
    'isLowCostCarrier': false,
    'name': 'Rossiya'
  },
  'NI': {
    'isLowCostCarrier': false,
    'name': 'Portugalia'
  },
  '9Q': {
    'isLowCostCarrier': false,
    'name': 'PB Air'
  },
  'OJ': {
    'isLowCostCarrier': false,
    'name': 'Overland Airways'
  },
  'QO': {
    'isLowCostCarrier': false,
    'name': 'Origin Pacific Airways'
  },
  'NW': {
    'isLowCostCarrier': false,
    'name': 'Northwest Airlines'
  },
  '1I': {
    'isLowCostCarrier': false,
    'name': 'NetJets'
  },
  'DM': {
    'isLowCostCarrier': false,
    'name': 'Maersk'
  },
  'MB': {
    'isLowCostCarrier': false,
    'name': 'MNG Airlines'
  },
  'VV': {
    'isLowCostCarrier': false,
    'name': 'Viva Air Peru'
  },
  'CL': {
    'isLowCostCarrier': false,
    'name': 'Lufthansa CityLine'
  },
  'HE': {
    'isLowCostCarrier': false,
    'name': 'Luftfahrtgesellschaft Walter'
  },
  'L3': {
    'isLowCostCarrier': false,
    'name': 'LTU Austria'
  },
  'WJ': {
    'isLowCostCarrier': false,
    'name': 'Air Labrador'
  },
  '3O': {
    'isLowCostCarrier': false,
    'name': 'Air Arabia Maroc'
  },
  '1B': {
    'isLowCostCarrier': false,
    'name': 'Abacus International'
  },
  'H6': {
    'isLowCostCarrier': false,
    'name': 'Bulgarian Air Charter'
  },
  'WA': {
    'isLowCostCarrier': false,
    'name': 'KLM Cityhopper'
  },
  'JF': {
    'isLowCostCarrier': false,
    'name': 'Jetairfly'
  },
  'QJ': {
    'isLowCostCarrier': false,
    'name': 'Jet Airways'
  },
  'QX': {
    'isLowCostCarrier': false,
    'name': 'Horizon Air'
  },
  'YS': {
    'isLowCostCarrier': false,
    'name': 'Régional'
  },
  'GO': {
    'isLowCostCarrier': false,
    'name': 'Kuzu Airlines Cargo'
  },
  'GH': {
    'isLowCostCarrier': false,
    'name': 'Globus'
  },
  'PL': {
    'isLowCostCarrier': false,
    'name': 'Aeroper'
  },
  '8A': {
    'isLowCostCarrier': false,
    'name': 'Atlas Blue'
  },
  'NH': {
    'isLowCostCarrier': false,
    'name': 'All Nippon Airways'
  },
  'O8': {
    'isLowCostCarrier': false,
    'name': 'Siam Air'
  },
  'NQ': {
    'isLowCostCarrier': false,
    'name': 'Air Japan'
  },
  'XR': {
    'isLowCostCarrier': false,
    'name': 'Corendon Airlines Europe'
  },
  'U9': {
    'isLowCostCarrier': false,
    'name': 'Tatarstan Airlines'
  },
  'QM': {
    'isLowCostCarrier': false,
    'name': 'Air Malawi'
  },
  'NX': {
    'isLowCostCarrier': false,
    'name': 'Air Macau'
  },
  '4N': {
    'isLowCostCarrier': false,
    'name': 'Air North Charter - Canada'
  },
  '2B': {
    'isLowCostCarrier': false,
    'name': 'Aerocondor'
  },
  '3G': {
    'isLowCostCarrier': false,
    'name': 'Atlant-Soyuz Airlines'
  },
  'V3': {
    'isLowCostCarrier': false,
    'name': 'Carpatair'
  },
  'L5': {
    'isLowCostCarrier': false,
    'name': 'Atlas Atlantique Airlines'
  },
  'BW': {
    'isLowCostCarrier': false,
    'name': 'Caribbean Airlines'
  },
  'QC': {
    'isLowCostCarrier': false,
    'name': 'Camair-co'
  },
  '3U': {
    'isLowCostCarrier': false,
    'name': 'Sichuan Airlines'
  },
  'WU': {
    'isLowCostCarrier': false,
    'name': 'Wizz Air Ukraine'
  },
  'BQ': {
    'isLowCostCarrier': false,
    'name': 'Buquebus Líneas Aéreas'
  },
  'YY': {
    'isLowCostCarrier': false,
    'name': 'Virginwings'
  },
  'MR': {
    'isLowCostCarrier': false,
    'name': 'Homer Air'
  },
  '8U': {
    'isLowCostCarrier': false,
    'name': 'Afriqiyah Airways'
  },
  'LF': {
    'isLowCostCarrier': false,
    'name': 'FlyNordic'
  },
  'BH': {
    'isLowCostCarrier': false,
    'name': 'Hawkair'
  },
  '8H': {
    'isLowCostCarrier': false,
    'name': 'Heli France'
  },
  'JB': {
    'isLowCostCarrier': false,
    'name': 'Helijet'
  },
  'T4': {
    'isLowCostCarrier': false,
    'name': 'Hellas Jet'
  },
  'HW': {
    'isLowCostCarrier': false,
    'name': 'Hello'
  },
  'M7': {
    'isLowCostCarrier': false,
    'name': 'MasAir'
  },
  'OM': {
    'isLowCostCarrier': false,
    'name': 'MIAT Mongolian Airlines'
  },
  'PO': {
    'isLowCostCarrier': false,
    'name': 'Polar Airlines'
  },
  '4H': {
    'isLowCostCarrier': false,
    'name': 'United Airways'
  },
  'W2': {
    'isLowCostCarrier': false,
    'name': 'Flexflight'
  },
  'MA': {
    'isLowCostCarrier': false,
    'name': 'Malév'
  },
  'AE': {
    'isLowCostCarrier': false,
    'name': 'Mandarin Airlines'
  },
  'GV': {
    'isLowCostCarrier': false,
    'name': 'Grant Aviation'
  },
  'N5': {
    'isLowCostCarrier': false,
    'name': 'Skagway Air Service'
  },
  '5E': {
    'isLowCostCarrier': false,
    'name': 'SGA Airlines'
  },
  'AO': {
    'isLowCostCarrier': false,
    'name': 'Avianova (Russia)'
  },
  'P4': {
    'isLowCostCarrier': false,
    'name': 'Aerolineas Sosa'
  },
  'WQ': {
    'isLowCostCarrier': false,
    'name': 'PanAm World Airways'
  },
  'KY': {
    'isLowCostCarrier': false,
    'name': 'KSY'
  },
  'CQ': {
    'isLowCostCarrier': false,
    'name': 'SOCHI AIR'
  },
  'DN': {
    'isLowCostCarrier': false,
    'name': 'Senegal Airlines'
  },
  '8B': {
    'isLowCostCarrier': false,
    'name': 'BusinessAir'
  },
  'YR': {
    'isLowCostCarrier': false,
    'name': 'SENIC AIRLINES'
  },
  'W5': {
    'isLowCostCarrier': false,
    'name': 'Mahan Air'
  },
  'G8': {
    'isLowCostCarrier': true,
    'name': 'Go Air'
  },
  'OG': {
    'isLowCostCarrier': false,
    'name': 'AirOnix'
  },
  'WH': {
    'isLowCostCarrier': false,
    'name': 'China Northwest Airlines (WH)'
  },
  'JA': {
    'isLowCostCarrier': false,
    'name': 'JetSmart'
  },
  '5Q': {
    'isLowCostCarrier': false,
    'name': 'BQB Lineas Aereas'
  },
  'KG': {
    'isLowCostCarrier': false,
    'name': 'Royal Airways'
  },
  'YH': {
    'isLowCostCarrier': false,
    'name': 'Yangon Airways Ltd.'
  },
  'FG': {
    'isLowCostCarrier': false,
    'name': 'Ariana Afghan Airlines'
  },
  'LB': {
    'isLowCostCarrier': true,
    'name': 'Air Costa'
  },
  '4M': {
    'isLowCostCarrier': false,
    'name': 'LATAM Argentina'
  },
  'I2': {
    'isLowCostCarrier': false,
    'name': 'Iberia Express'
  },
  'ZC': {
    'isLowCostCarrier': false,
    'name': 'Korongo Airlines'
  },
  'Q3': {
    'isLowCostCarrier': false,
    'name': 'SOCHI AIR CHATER'
  },
  'AN': {
    'isLowCostCarrier': false,
    'name': 'Ansett Australia'
  },
  '4K': {
    'isLowCostCarrier': false,
    'name': 'Askari Aviation'
  },
  'ZX': {
    'isLowCostCarrier': false,
    'name': 'Japan Regio'
  },
  'L4': {
    'isLowCostCarrier': false,
    'name': 'Luchsh Airlines '
  },
  'HI': {
    'isLowCostCarrier': false,
    'name': 'Papillon Grand Canyon Helicopters'
  },
  'SO': {
    'isLowCostCarrier': false,
    'name': "Salsa d\\\\'Haiti"
  },
  'VP': {
    'isLowCostCarrier': false,
    'name': 'VASP'
  },
  'B5': {
    'isLowCostCarrier': false,
    'name': 'Fly-SAX'
  },
  'TJ': {
    'isLowCostCarrier': false,
    'name': 'Tradewind Aviation'
  },
  'SW': {
    'isLowCostCarrier': false,
    'name': 'Air Namibia'
  },
  'VA': {
    'isLowCostCarrier': true,
    'name': 'Virgin Australia Airlines'
  },
  'RG': {
    'isLowCostCarrier': false,
    'name': 'Rotana Jet'
  },
  'TU': {
    'isLowCostCarrier': false,
    'name': 'Tunisair'
  },
  'GB': {
    'isLowCostCarrier': false,
    'name': 'BRAZIL AIR'
  },
  'ES': {
    'isLowCostCarrier': false,
    'name': 'EuropeSky'
  },
  '1C': {
    'isLowCostCarrier': false,
    'name': 'OneChina'
  },
  'OQ': {
    'isLowCostCarrier': false,
    'name': 'Chongqing Airlines'
  },
  '1X': {
    'isLowCostCarrier': false,
    'name': 'Branson Air Express'
  },
  'ZY': {
    'isLowCostCarrier': false,
    'name': 'Ada Air'
  },
  'C5': {
    'isLowCostCarrier': false,
    'name': 'CommutAir'
  },
  'C3': {
    'isLowCostCarrier': false,
    'name': 'Contact Air'
  },
  'CS': {
    'isLowCostCarrier': false,
    'name': 'Continental Micronesia'
  },
  '0D': {
    'isLowCostCarrier': false,
    'name': 'Darwin Airline'
  },
  'SU': {
    'isLowCostCarrier': false,
    'name': 'Aeroflot Russian Airlines'
  },
  'DK': {
    'isLowCostCarrier': false,
    'name': 'Eastland Air'
  },
  'WK': {
    'isLowCostCarrier': false,
    'name': 'Edelweiss Air'
  },
  'GJ': {
    'isLowCostCarrier': false,
    'name': 'Eurofly Service'
  },
  'EZ': {
    'isLowCostCarrier': false,
    'name': 'Evergreen International Airlines'
  },
  'XE': {
    'isLowCostCarrier': false,
    'name': 'ExpressJet'
  },
  'M3': {
    'isLowCostCarrier': false,
    'name': 'Air Norway'
  },
  'RF': {
    'isLowCostCarrier': false,
    'name': 'Florida West International Airways'
  },
  'FH': {
    'isLowCostCarrier': false,
    'name': 'Freebird Airlines'
  },
  'C1': {
    'isLowCostCarrier': false,
    'name': 'CanXpress'
  },
  'QA': {
    'isLowCostCarrier': false,
    'name': 'Click (Mexicana)'
  },
  'W1': {
    'isLowCostCarrier': false,
    'name': 'World Experience Airline'
  },
  'ZQ': {
    'isLowCostCarrier': false,
    'name': 'Locair'
  },
  'PA': {
    'isLowCostCarrier': true,
    'name': 'Airblue'
  },
  'N1': {
    'isLowCostCarrier': false,
    'name': 'N1'
  },
  '3J': {
    'isLowCostCarrier': false,
    'name': 'Jubba Airways'
  },
  'H9': {
    'isLowCostCarrier': false,
    'name': 'Himalaya Airlines'
  },
  'EM': {
    'isLowCostCarrier': false,
    'name': 'Empire Airlines'
  },
  'Y8': {
    'isLowCostCarrier': false,
    'name': 'Marusya Airways'
  },
  '4X': {
    'isLowCostCarrier': false,
    'name': 'Red Jet Mexico'
  },
  'QY': {
    'isLowCostCarrier': false,
    'name': 'Red Jet Canada'
  },
  'E1': {
    'isLowCostCarrier': false,
    'name': 'Usa Sky Cargo'
  },
  'GN': {
    'isLowCostCarrier': false,
    'name': 'GNB Linhas Aereas'
  },
  'XB': {
    'isLowCostCarrier': false,
    'name': 'NEXT Brasil'
  },
  '6U': {
    'isLowCostCarrier': false,
    'name': 'Air Cargo Germany'
  },
  'N0': {
    'isLowCostCarrier': false,
    'name': 'Norte Lineas Aereas'
  },
  'G1': {
    'isLowCostCarrier': false,
    'name': 'Indya Airline Group'
  },
  'T6': {
    'isLowCostCarrier': false,
    'name': 'Trans Pas Air'
  },
  '1F': {
    'isLowCostCarrier': false,
    'name': 'CB Airways UK ( Interliging Flights )'
  },
  'F1': {
    'isLowCostCarrier': false,
    'name': 'Fly Brasil'
  },
  'CB': {
    'isLowCostCarrier': false,
    'name': 'CCML Airlines'
  },
  '2D': {
    'isLowCostCarrier': false,
    'name': 'Aero VIP (2D)'
  },
  'Y1': {
    'isLowCostCarrier': false,
    'name': 'Yellowstone Club Private Shuttle'
  },
  'H3': {
    'isLowCostCarrier': false,
    'name': 'Harbour Air (Priv)'
  },
  'TH': {
    'isLowCostCarrier': false,
    'name': 'TransBrasil Airlines'
  },
  'T7': {
    'isLowCostCarrier': false,
    'name': 'Twin Jet'
  },
  'A6': {
    'isLowCostCarrier': false,
    'name': 'Air Alps Aviation (A6)'
  },
  'BZ': {
    'isLowCostCarrier': false,
    'name': 'Black Stallion Airways'
  },
  'RI': {
    'isLowCostCarrier': false,
    'name': 'Mandala Airlines'
  },
  'HQ': {
    'isLowCostCarrier': false,
    'name': 'Thomas Cook Belgium'
  },
  'KN': {
    'isLowCostCarrier': false,
    'name': 'China United'
  },
  '4B': {
    'isLowCostCarrier': false,
    'name': 'BoutiqueAir'
  },
  'I6': {
    'isLowCostCarrier': false,
    'name': 'Air indus'
  },
  '__': {
    'isLowCostCarrier': false,
    'name': 'FakeAirline'
  },
  'NA': {
    'isLowCostCarrier': false,
    'name': 'Nesma Air'
  },
  'IZ': {
    'isLowCostCarrier': true,
    'name': 'Arkia'
  },
  'KA': {
    'isLowCostCarrier': false,
    'name': 'Cathay Dragon'
  },
  'QG': {
    'isLowCostCarrier': true,
    'name': 'Citilink'
  },
  'E9': {
    'isLowCostCarrier': false,
    'name': "Compagnie Africaine d\\\\'Aviation"
  },
  'RS': {
    'isLowCostCarrier': false,
    'name': 'Air Seoul'
  },
  'DG': {
    'isLowCostCarrier': false,
    'name': 'CebGo'
  },
  'Q6': {
    'isLowCostCarrier': false,
    'name': 'Volaris Costa Rica'
  },
  'IW': {
    'isLowCostCarrier': false,
    'name': 'Wings Air'
  },
  'HD': {
    'isLowCostCarrier': true,
    'name': 'Air Do'
  },
  'CI': {
    'isLowCostCarrier': false,
    'name': 'China Airlines'
  },
  'VB': {
    'isLowCostCarrier': true,
    'name': 'VivaAerobus'
  },
  '5H': {
    'isLowCostCarrier': true,
    'name': 'Fly540'
  },
  'F8': {
    'isLowCostCarrier': false,
    'name': 'Flair Airlines'
  },
  'K6': {
    'isLowCostCarrier': false,
    'name': 'Cambodia Angkor Air'
  },
  'DA': {
    'isLowCostCarrier': false,
    'name': 'Dana Air'
  },
  'JE': {
    'isLowCostCarrier': true,
    'name': 'Mango'
  },
  'YT': {
    'isLowCostCarrier': false,
    'name': 'Yeti Airways'
  },
  'OB': {
    'isLowCostCarrier': true,
    'name': 'Boliviana de Aviación'
  },
  'TG': {
    'isLowCostCarrier': false,
    'name': 'Thai Airways International'
  },
  'K8': {
    'isLowCostCarrier': false,
    'name': 'Kan Air'
  },
  'RO': {
    'isLowCostCarrier': false,
    'name': 'Tarom'
  },
  'WW': {
    'isLowCostCarrier': true,
    'name': 'WOW air'
  },
  '9X': {
    'isLowCostCarrier': true,
    'name': 'Southern Airways Express'
  },
  'CC': {
    'isLowCostCarrier': false,
    'name': 'CM Airlines'
  },
  'OH': {
    'isLowCostCarrier': false,
    'name': 'Comair'
  },
  '9L': {
    'isLowCostCarrier': false,
    'name': 'Colgan Air'
  },
  'CJ': {
    'isLowCostCarrier': false,
    'name': 'BA CityFlyer'
  },
  'O1': {
    'isLowCostCarrier': false,
    'name': 'Orbit Airlines Azerbaijan'
  },
  '5K': {
    'isLowCostCarrier': false,
    'name': 'Hi Fly (5K)'
  },
  'NJ': {
    'isLowCostCarrier': false,
    'name': 'Nordic Global Airlines'
  },
  'EE': {
    'isLowCostCarrier': false,
    'name': 'RegionalJet'
  },
  'QL': {
    'isLowCostCarrier': true,
    'name': 'Laser Air'
  },
  'RK': {
    'isLowCostCarrier': false,
    'name': 'Air Afrique'
  },
  'OS': {
    'isLowCostCarrier': false,
    'name': 'Austrian Airlines'
  },
  'FR': {
    'isLowCostCarrier': true,
    'name': 'Ryanair'
  },
  'SA': {
    'isLowCostCarrier': false,
    'name': 'South African Airways'
  },
  'GR': {
    'isLowCostCarrier': false,
    'name': 'Aurigny Air Services'
  },
  'UX': {
    'isLowCostCarrier': false,
    'name': 'Air Europa'
  },
  'VN': {
    'isLowCostCarrier': false,
    'name': 'Vietnam Airlines'
  },
  'WN': {
    'isLowCostCarrier': true,
    'name': 'Southwest Airlines'
  },
  'TK': {
    'isLowCostCarrier': false,
    'name': 'Turkish Airlines'
  },
  '9K': {
    'isLowCostCarrier': true,
    'name': 'Cape Air'
  },
  'KM': {
    'isLowCostCarrier': false,
    'name': 'Air Malta'
  },
  'AA': {
    'isLowCostCarrier': false,
    'name': 'American Airlines'
  },
  'YE': {
    'isLowCostCarrier': false,
    'name': 'Yan Air'
  },
  'Z9': {
    'isLowCostCarrier': false,
    'name': 'Bek Air'
  },
  'XC': {
    'isLowCostCarrier': true,
    'name': 'Corendon'
  },
  'P6': {
    'isLowCostCarrier': false,
    'name': 'Pascan Aviation'
  },
  'YU': {
    'isLowCostCarrier': false,
    'name': 'EuroAtlantic Airways'
  },
  '9M': {
    'isLowCostCarrier': false,
    'name': 'Central Mountain Air'
  },
  'EF': {
    'isLowCostCarrier': true,
    'name': 'EasyFly'
  },
  'KI': {
    'isLowCostCarrier': true,
    'name': 'KrasAvia'
  },
  '7N': {
    'isLowCostCarrier': false,
    'name': 'Pawa Dominicana'
  },
  '6T': {
    'isLowCostCarrier': true,
    'name': 'Air Mandalay'
  },
  'SM': {
    'isLowCostCarrier': true,
    'name': 'Air Cairo'
  },
  'XL': {
    'isLowCostCarrier': false,
    'name': 'LATAM Ecuador'
  },
  'P5': {
    'isLowCostCarrier': false,
    'name': 'Wingo airlines'
  },
  '2C': {
    'isLowCostCarrier': false,
    'name': 'SNCF'
  },
  'A3': {
    'isLowCostCarrier': true,
    'name': 'Aegean'
  },
  'NK': {
    'isLowCostCarrier': true,
    'name': 'Spirit Airlines'
  },
  '2J': {
    'isLowCostCarrier': false,
    'name': 'Air Burkina'
  },
  'BP': {
    'isLowCostCarrier': false,
    'name': 'Air Botswana'
  },
  'V8': {
    'isLowCostCarrier': false,
    'name': 'ATRAN Cargo Airlines'
  },
  '6F': {
    'isLowCostCarrier': true,
    'name': 'Primera Air Nordic'
  },
  'CW': {
    'isLowCostCarrier': false,
    'name': 'Air Marshall Islands'
  },
  'IG': {
    'isLowCostCarrier': true,
    'name': 'Meridiana'
  },
  'MW': {
    'isLowCostCarrier': false,
    'name': 'Mokulele Flight Service'
  },
  'DL': {
    'isLowCostCarrier': false,
    'name': 'Delta Air Lines'
  },
  'RV': {
    'isLowCostCarrier': false,
    'name': 'Caspian Airlines'
  },
  'C0': {
    'isLowCostCarrier': false,
    'name': 'Centralwings'
  },
  'VZ': {
    'isLowCostCarrier': false,
    'name': 'Thai Vietjet'
  },
  'IS': {
    'isLowCostCarrier': false,
    'name': 'Island Airlines'
  },
  'IF': {
    'isLowCostCarrier': false,
    'name': 'Islas Airways'
  },
  'R6': {
    'isLowCostCarrier': false,
    'name': 'RACSA'
  },
  'RW': {
    'isLowCostCarrier': false,
    'name': 'Republic Airlines'
  },
  'C2': {
    'isLowCostCarrier': false,
    'name': 'CanXplorer'
  },
  'T2': {
    'isLowCostCarrier': false,
    'name': 'Thai Air Cargo'
  },
  'Q5': {
    'isLowCostCarrier': false,
    'name': '40-Mile Air'
  },
  'V5': {
    'isLowCostCarrier': false,
    'name': 'Danube Wings (V5)'
  },
  'SH': {
    'isLowCostCarrier': false,
    'name': 'Sharp Airlines'
  },
  'LC': {
    'isLowCostCarrier': false,
    'name': 'Varig Log'
  },
  'XF': {
    'isLowCostCarrier': false,
    'name': 'Vladivostok Air'
  },
  '7W': {
    'isLowCostCarrier': false,
    'name': 'Wayraper'
  },
  'F7': {
    'isLowCostCarrier': false,
    'name': 'Etihad Regional'
  },
  'S2': {
    'isLowCostCarrier': false,
    'name': 'Air Sahara'
  },
  'V2': {
    'isLowCostCarrier': false,
    'name': 'Vision Airlines'
  },
  '8V': {
    'isLowCostCarrier': false,
    'name': 'Astral Aviation'
  },
  '8T': {
    'isLowCostCarrier': false,
    'name': 'Air Tindi'
  },
  'UB': {
    'isLowCostCarrier': false,
    'name': 'Myanmar National Airlines'
  },
  'YN': {
    'isLowCostCarrier': false,
    'name': 'Air Creebec'
  },
  'PB': {
    'isLowCostCarrier': false,
    'name': 'Provincial Airlines'
  },
  '7V': {
    'isLowCostCarrier': false,
    'name': 'Federai Airlines'
  },
  'V4': {
    'isLowCostCarrier': false,
    'name': 'Vieques Air Link'
  },
  'P1': {
    'isLowCostCarrier': false,
    'name': 'Publiccharters.com'
  },
  '0V': {
    'isLowCostCarrier': false,
    'name': 'VASCO'
  },
  'ZD': {
    'isLowCostCarrier': false,
    'name': 'EWA Air'
  },
  '4W': {
    'isLowCostCarrier': false,
    'name': 'Allied Air'
  },
  '7J': {
    'isLowCostCarrier': true,
    'name': 'Tajik Air'
  },
  'N6': {
    'isLowCostCarrier': false,
    'name': 'Nomad Aviation'
  },
  'F2': {
    'isLowCostCarrier': false,
    'name': 'Safarilink Aviation'
  },
  'WG': {
    'isLowCostCarrier': true,
    'name': 'Sunwing'
  },
  'WV': {
    'isLowCostCarrier': false,
    'name': 'Aero VIP'
  },
  'J1': {
    'isLowCostCarrier': false,
    'name': 'One Jet'
  },
  'ST': {
    'isLowCostCarrier': true,
    'name': 'Germania'
  },
  'UL': {
    'isLowCostCarrier': false,
    'name': 'SriLankan Airlines'
  },
  'ML': {
    'isLowCostCarrier': true,
    'name': 'Air Mediterranee'
  },
  'JT': {
    'isLowCostCarrier': true,
    'name': 'Lion Air'
  },
  'DB': {
    'isLowCostCarrier': false,
    'name': 'Brit Air'
  },
  'R3': {
    'isLowCostCarrier': true,
    'name': 'Yakutia Airlines'
  },
  'VJ': {
    'isLowCostCarrier': true,
    'name': 'VietJet Air'
  },
  'DR': {
    'isLowCostCarrier': true,
    'name': 'Ruili Airlines'
  },
  'DV': {
    'isLowCostCarrier': true,
    'name': 'Scat Air'
  },
  'FA': {
    'isLowCostCarrier': true,
    'name': 'Fly Safair'
  },
  'PN': {
    'isLowCostCarrier': true,
    'name': 'West Air China'
  },
  'JX': {
    'isLowCostCarrier': true,
    'name': 'Jambojet'
  },
  '8L': {
    'isLowCostCarrier': true,
    'name': 'Lucky air'
  },
  'LX': {
    'isLowCostCarrier': false,
    'name': 'Swiss International Air Lines'
  },
  'K9': {
    'isLowCostCarrier': true,
    'name': 'KrasAvia (old iata)'
  },
  '5U': {
    'isLowCostCarrier': false,
    'name': 'Transportes Aéreos Guatemaltecos'
  },
  'XY': {
    'isLowCostCarrier': true,
    'name': 'flynas'
  },
  'J7': {
    'isLowCostCarrier': true,
    'name': 'Greenland Express'
  },
  'SG': {
    'isLowCostCarrier': true,
    'name': 'Spicejet'
  },
  '5W': {
    'isLowCostCarrier': false,
    'name': 'WESTBahn'
  },
  '3K': {
    'isLowCostCarrier': false,
    'name': 'Jetstar Asia Airways'
  },
  'Z6': {
    'isLowCostCarrier': true,
    'name': 'Dniproavia'
  },
  'EL': {
    'isLowCostCarrier': true,
    'name': 'Ellinair'
  },
  'MJ': {
    'isLowCostCarrier': true,
    'name': 'Mihin Lanka'
  },
  '5C': {
    'isLowCostCarrier': true,
    'name': 'Nature Air'
  },
  '9N': {
    'isLowCostCarrier': false,
    'name': 'Tropic Air Limited'
  },
  'HX': {
    'isLowCostCarrier': true,
    'name': 'Hong Kong Airlines'
  },
  'AW': {
    'isLowCostCarrier': true,
    'name': 'RAVSA Venezolana'
  },
  '9C': {
    'isLowCostCarrier': true,
    'name': 'Spring Airlines'
  },
  'G9': {
    'isLowCostCarrier': true,
    'name': 'Air Arabia'
  },
  'YZ': {
    'isLowCostCarrier': false,
    'name': 'Alas Uruguay'
  },
  '5Z': {
    'isLowCostCarrier': true,
    'name': 'Cem Air'
  },
  'BR': {
    'isLowCostCarrier': true,
    'name': 'EVA Air'
  },
  'NL': {
    'isLowCostCarrier': true,
    'name': 'Shaheen Air International'
  },
  'ZB': {
    'isLowCostCarrier': true,
    'name': 'Monarch'
  },
  '6R': {
    'isLowCostCarrier': true,
    'name': 'Alrosa'
  },
  'AB': {
    'isLowCostCarrier': true,
    'name': 'Air Berlin'
  },
  '9V': {
    'isLowCostCarrier': false,
    'name': 'Avior Airlines'
  },
  '5O': {
    'isLowCostCarrier': false,
    'name': 'ASL Airlines France'
  },
  'EB': {
    'isLowCostCarrier': true,
    'name': 'Wamos Air'
  },
  'CA': {
    'isLowCostCarrier': false,
    'name': 'Air China'
  },
  'WS': {
    'isLowCostCarrier': true,
    'name': 'WestJet'
  },
  'OR': {
    'isLowCostCarrier': true,
    'name': 'TUI Airlines Netherlands'
  },
  'GT': {
    'isLowCostCarrier': true,
    'name': 'Flyvista'
  },
  '7I': {
    'isLowCostCarrier': true,
    'name': 'Insel Air'
  },
  'DP': {
    'isLowCostCarrier': true,
    'name': 'Pobeda'
  },
  'BC': {
    'isLowCostCarrier': true,
    'name': 'Skymark Airlines'
  },
  'BL': {
    'isLowCostCarrier': false,
    'name': 'Jetstar Pacific'
  },
  '5N': {
    'isLowCostCarrier': true,
    'name': 'NordAvia'
  },
  'S8': {
    'isLowCostCarrier': true,
    'name': 'SkyWise'
  },
  'VF': {
    'isLowCostCarrier': false,
    'name': 'Valuair'
  },
  'W4': {
    'isLowCostCarrier': true,
    'name': 'LC Perú'
  },
  'KL': {
    'isLowCostCarrier': false,
    'name': 'KLM Royal Dutch Airlines'
  },
  'JW': {
    'isLowCostCarrier': true,
    'name': 'Vanilla Air'
  },
  '2G': {
    'isLowCostCarrier': true,
    'name': 'Angara airlines'
  },
  'Y5': {
    'isLowCostCarrier': true,
    'name': 'Golden Myanmar Airlines'
  },
  '7R': {
    'isLowCostCarrier': true,
    'name': 'Rusline'
  },
  'LJ': {
    'isLowCostCarrier': true,
    'name': 'Jin Air'
  },
  'DC': {
    'isLowCostCarrier': true,
    'name': 'Sverigeflyg'
  },
  'WB': {
    'isLowCostCarrier': false,
    'name': 'Rwandair Express'
  },
  '8R': {
    'isLowCostCarrier': true,
    'name': 'Sol Líneas Aéreas'
  },
  'I4': {
    'isLowCostCarrier': false,
    'name': 'I-Fly'
  },
  '8M': {
    'isLowCostCarrier': false,
    'name': 'Myanmar Airways'
  },
  'G3': {
    'isLowCostCarrier': true,
    'name': 'Gol Transportes Aéreos'
  },
  'PG': {
    'isLowCostCarrier': true,
    'name': 'Bangkok Airways'
  },
  'OX': {
    'isLowCostCarrier': true,
    'name': 'Orient Thai Airlines'
  },
  'NZ': {
    'isLowCostCarrier': true,
    'name': 'Air New Zealand'
  },
  'VQ': {
    'isLowCostCarrier': true,
    'name': 'Novoair'
  },
  'X9': {
    'isLowCostCarrier': false,
    'name': 'Fake Airline'
  },
  'BI': {
    'isLowCostCarrier': false,
    'name': 'Royal Brunei Airlines'
  },
  'BT': {
    'isLowCostCarrier': true,
    'name': 'airBaltic'
  },
  'BE': {
    'isLowCostCarrier': true,
    'name': 'flybe'
  },
  'XN': {
    'isLowCostCarrier': false,
    'name': 'Xpressair'
  },
  'K7': {
    'isLowCostCarrier': false,
    'name': 'Air KBZ'
  },
  'MO': {
    'isLowCostCarrier': true,
    'name': 'Calm Air'
  },
  'SI': {
    'isLowCostCarrier': false,
    'name': 'Blue Islands'
  },
  'MM': {
    'isLowCostCarrier': true,
    'name': 'Peach Aviation'
  },
  'C7': {
    'isLowCostCarrier': true,
    'name': 'Cinnamon Air'
  },
  'YJ': {
    'isLowCostCarrier': true,
    'name': 'Asian Wings Air'
  },
  'OZ': {
    'isLowCostCarrier': false,
    'name': 'Asiana Airlines'
  },
  'OD': {
    'isLowCostCarrier': true,
    'name': 'Malindo Air'
  },
  'ED': {
    'isLowCostCarrier': true,
    'name': 'Airblue'
  },
  'KX': {
    'isLowCostCarrier': false,
    'name': 'Cayman Airways'
  },
  '7H': {
    'isLowCostCarrier': true,
    'name': 'Ravn Alaska'
  },
  'CO': {
    'isLowCostCarrier': false,
    'name': 'Cobalt Air'
  },
  'RX': {
    'isLowCostCarrier': true,
    'name': 'Regent Airways'
  },
  'BX': {
    'isLowCostCarrier': true,
    'name': 'Air Busan'
  },
  'KQ': {
    'isLowCostCarrier': false,
    'name': 'Kenya Airways'
  },
  'ME': {
    'isLowCostCarrier': false,
    'name': 'Middle East Airlines'
  },
  'CM': {
    'isLowCostCarrier': false,
    'name': 'Copa Airlines'
  },
  '9W': {
    'isLowCostCarrier': false,
    'name': 'Jet Airways'
  },
  'IX': {
    'isLowCostCarrier': true,
    'name': 'Air India Express'
  },
  'BY': {
    'isLowCostCarrier': true,
    'name': 'TUI Airways'
  },
  'Z8': {
    'isLowCostCarrier': true,
    'name': 'Amaszonas'
  },
  'KU': {
    'isLowCostCarrier': false,
    'name': 'Kuwait Airways'
  },
  '3S': {
    'isLowCostCarrier': false,
    'name': 'Air Antilles Express'
  },
  '6W': {
    'isLowCostCarrier': true,
    'name': 'Saratov Aviation Division'
  },
  'PW': {
    'isLowCostCarrier': false,
    'name': 'Precision Air'
  },
  'TP': {
    'isLowCostCarrier': false,
    'name': 'TAP Portugal'
  },
  'ZV': {
    'isLowCostCarrier': true,
    'name': 'V Air'
  },
  'YC': {
    'isLowCostCarrier': true,
    'name': 'Yamal Air'
  },
  'JL': {
    'isLowCostCarrier': false,
    'name': 'Japan Airlines'
  },
  'HO': {
    'isLowCostCarrier': true,
    'name': 'Juneyao Airlines'
  },
  'SN': {
    'isLowCostCarrier': false,
    'name': 'Brussels Airlines'
  },
  'PF': {
    'isLowCostCarrier': true,
    'name': 'Primera Air'
  },
  'QS': {
    'isLowCostCarrier': true,
    'name': 'SmartWings'
  },
  'IB': {
    'isLowCostCarrier': false,
    'name': 'Iberia Airlines'
  },
  'B0': {
    'isLowCostCarrier': false,
    'name': 'Aws express'
  },
  'TF': {
    'isLowCostCarrier': false,
    'name': 'Braathens Regional Airlines'
  },
  'BM': {
    'isLowCostCarrier': false,
    'name': 'BMI regional'
  },
  'SK': {
    'isLowCostCarrier': false,
    'name': 'SAS'
  },
  'AQ': {
    'isLowCostCarrier': true,
    'name': '9 Air'
  },
  'P9': {
    'isLowCostCarrier': true,
    'name': 'Peruvian Airlines'
  },
  'DD': {
    'isLowCostCarrier': true,
    'name': 'Nok Air'
  },
  'PK': {
    'isLowCostCarrier': false,
    'name': 'Pakistan International Airlines'
  },
  'TN': {
    'isLowCostCarrier': false,
    'name': 'Air Tahiti Nui'
  },
  'JP': {
    'isLowCostCarrier': false,
    'name': 'Adria Airways'
  },
  '9R': {
    'isLowCostCarrier': true,
    'name': 'SATENA'
  },
  'VW': {
    'isLowCostCarrier': false,
    'name': 'Aeromar'
  },
  'GA': {
    'isLowCostCarrier': false,
    'name': 'Garuda Indonesia'
  },
  'JV': {
    'isLowCostCarrier': false,
    'name': 'Bearskin Lake Air Service'
  },
  'A2': {
    'isLowCostCarrier': false,
    'name': 'Astra Airlines'
  },
  'AF': {
    'isLowCostCarrier': false,
    'name': 'Air France'
  },
  '7M': {
    'isLowCostCarrier': false,
    'name': 'MAYAir'
  },
  'WP': {
    'isLowCostCarrier': false,
    'name': 'Island Air'
  },
  '3M': {
    'isLowCostCarrier': true,
    'name': 'Silver Airways'
  },
  'KD': {
    'isLowCostCarrier': false,
    'name': 'Kalstar Aviation'
  },
  'CF': {
    'isLowCostCarrier': false,
    'name': 'City Airline'
  },
  '3Q': {
    'isLowCostCarrier': false,
    'name': 'Yunnan Airlines'
  },
  'CP': {
    'isLowCostCarrier': false,
    'name': 'Canadian Airlines'
  },
  'MH': {
    'isLowCostCarrier': true,
    'name': 'Malaysia Airlines'
  },
  'ZI': {
    'isLowCostCarrier': false,
    'name': 'Aigle Azur'
  },
  'TR': {
    'isLowCostCarrier': true,
    'name': 'Scoot'
  },
  'D8': {
    'isLowCostCarrier': false,
    'name': 'Norwegian International'
  },
  'QW': {
    'isLowCostCarrier': false,
    'name': 'Blue Wings'
  },
  'B3': {
    'isLowCostCarrier': false,
    'name': 'Bellview Airlines'
  },
  'TL': {
    'isLowCostCarrier': true,
    'name': 'Airnorth'
  },
  'B6': {
    'isLowCostCarrier': true,
    'name': 'JetBlue Airways'
  },
  'TO': {
    'isLowCostCarrier': false,
    'name': 'Transavia France'
  },
  'N4': {
    'isLowCostCarrier': false,
    'name': 'Nordwind Airlines'
  },
  'KP': {
    'isLowCostCarrier': false,
    'name': 'ASKY Airlines'
  },
  'QK': {
    'isLowCostCarrier': false,
    'name': 'Air Canada Jazz'
  },
  'Q7': {
    'isLowCostCarrier': false,
    'name': 'SkyBahamas Air'
  },
  'BG': {
    'isLowCostCarrier': true,
    'name': 'Biman Bangladesh Airlines'
  },
  'AI': {
    'isLowCostCarrier': false,
    'name': 'Air India Limited'
  },
  'HV': {
    'isLowCostCarrier': true,
    'name': 'Transavia'
  },
  'UE': {
    'isLowCostCarrier': false,
    'name': 'Nasair'
  },
  'AM': {
    'isLowCostCarrier': false,
    'name': 'AeroMéxico'
  },
  'UO': {
    'isLowCostCarrier': true,
    'name': 'Hong Kong Express Airways'
  },
  'RP': {
    'isLowCostCarrier': false,
    'name': 'Chautauqua Airlines'
  },
  'Z2': {
    'isLowCostCarrier': false,
    'name': 'Philippines AirAsia'
  },
  'AD': {
    'isLowCostCarrier': true,
    'name': 'Azul'
  },
  'IP': {
    'isLowCostCarrier': false,
    'name': 'Island Spirit'
  },
  'UK': {
    'isLowCostCarrier': false,
    'name': 'Air Vistara'
  },
  'LY': {
    'isLowCostCarrier': true,
    'name': 'El Al Israel Airlines'
  },
  '3H': {
    'isLowCostCarrier': true,
    'name': 'AirInuit'
  },
  'R2': {
    'isLowCostCarrier': true,
    'name': 'Orenburg Airlines'
  },
  'UA': {
    'isLowCostCarrier': false,
    'name': 'United Airlines'
  },
  '3L': {
    'isLowCostCarrier': true,
    'name': 'Intersky'
  },
  '2Z': {
    'isLowCostCarrier': true,
    'name': 'Passaredo'
  },
  'UT': {
    'isLowCostCarrier': true,
    'name': 'UTair'
  },
  'X3': {
    'isLowCostCarrier': true,
    'name': 'TUIfly'
  },
  'UP': {
    'isLowCostCarrier': true,
    'name': 'Bahamasair'
  },
  'J9': {
    'isLowCostCarrier': true,
    'name': 'Jazeera Airways'
  },
  'U2': {
    'isLowCostCarrier': true,
    'name': 'easyJet'
  },
  'UN': {
    'isLowCostCarrier': true,
    'name': 'Transaero Airlines'
  },
  'I5': {
    'isLowCostCarrier': false,
    'name': 'AirAsia India'
  },
  'TW': {
    'isLowCostCarrier': true,
    'name': 'Tway Airlines'
  },
  'FY': {
    'isLowCostCarrier': true,
    'name': 'Firefly'
  },
  'XJ': {
    'isLowCostCarrier': false,
    'name': 'Thai AirAsia X'
  },
  'XT': {
    'isLowCostCarrier': false,
    'name': 'Indonesia AirAsia X'
  },
  'AZ': {
    'isLowCostCarrier': false,
    'name': 'Alitalia'
  },
  'TZ': {
    'isLowCostCarrier': true,
    'name': 'Scoot - old'
  },
  'EW': {
    'isLowCostCarrier': true,
    'name': 'Eurowings'
  },
  'WM': {
    'isLowCostCarrier': false,
    'name': 'Windward Islands Airways'
  },
  '4U': {
    'isLowCostCarrier': true,
    'name': 'germanwings'
  },
  'JQ': {
    'isLowCostCarrier': true,
    'name': 'Jetstar Airways'
  },
  'SL': {
    'isLowCostCarrier': true,
    'name': 'Thai Lion Air'
  },
  'H2': {
    'isLowCostCarrier': true,
    'name': 'Sky Airline'
  },
  'TB': {
    'isLowCostCarrier': true,
    'name': 'tuifly.be'
  },
  'AR': {
    'isLowCostCarrier': false,
    'name': 'Aerolineas Argentinas'
  },
  'DE': {
    'isLowCostCarrier': true,
    'name': 'Condor'
  },
  'TT': {
    'isLowCostCarrier': true,
    'name': 'Tiger Airways Australia'
  },
  'W6': {
    'isLowCostCarrier': true,
    'name': 'Wizzair'
  },
  'FC': {
    'isLowCostCarrier': true,
    'name': 'VivaColombia'
  },
  '5J': {
    'isLowCostCarrier': true,
    'name': 'Cebu Pacific'
  },
  'PC': {
    'isLowCostCarrier': true,
    'name': 'Pegasus'
  },
  'F9': {
    'isLowCostCarrier': true,
    'name': 'Frontier Airlines'
  },
  'FD': {
    'isLowCostCarrier': false,
    'name': 'Thai AirAsia'
  },
  'QZ': {
    'isLowCostCarrier': false,
    'name': 'Indonesia AirAsia'
  },
  'D7': {
    'isLowCostCarrier': false,
    'name': 'AirAsia X'
  },
  'PQ': {
    'isLowCostCarrier': false,
    'name': 'Philippines AirAsia'
  },
  'VY': {
    'isLowCostCarrier': true,
    'name': 'Vueling'
  },
  'DY': {
    'isLowCostCarrier': true,
    'name': 'Norwegian'
  },
  'LS': {
    'isLowCostCarrier': true,
    'name': 'Jet2'
  },
  'BV': {
    'isLowCostCarrier': true,
    'name': 'Blue Panorama'
  },
  'AK': {
    'isLowCostCarrier': true,
    'name': 'AirAsia'
  },
  '4O': {
    'isLowCostCarrier': true,
    'name': 'Interjet (ABC Aerolineas)'
  },
  '1D': {
    'isLowCostCarrier': true,
    'name': 'Aerolinea de Antioquia'
  },
  'FO': {
    'isLowCostCarrier': true,
    'name': 'Flybondi'
  }
});

export default airlineIATAMapping;
