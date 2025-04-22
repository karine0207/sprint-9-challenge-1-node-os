const os = require('os'); 

function obtenerInformacionDeRed() {

  return os.networkInterfaces();
}

module.exports = obtenerInformacionDeRed;
