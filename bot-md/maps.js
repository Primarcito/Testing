const MAPAS_POR_CIUDAD = {
  Lymhurst: [],
  Martlock: [],
  'Fort Sterling': [],
  Thetford: [],
  Bridgewatch: [],
  Roja: [],
};

function getMapsForCity(city) {
  return MAPAS_POR_CIUDAD[city] || [];
}

module.exports = {
  MAPAS_POR_CIUDAD,
  getMapsForCity,
};
