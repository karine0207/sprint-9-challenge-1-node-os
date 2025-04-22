const os = require('os'); 

function obtenerInformacionDelSistema() {
  
  const nombreSistema = os.platform(); 
  const tipoSistema = os.type();      
  const versionSistema = os.version();
  const arquitectura = os.arch();      
  const cantidadCPUs = os.cpus().length;
  const memoriaTotal = os.totalmem();     
  const memoriaLibre = os.freemem();      

 
  const memoriaTotalMB = (memoriaTotal / 1024 / 1024).toFixed(2);
  const memoriaLibreMB = (memoriaLibre / 1024 / 1024).toFixed(2);

 
  return {
    nombreSistema,
    tipoSistema,
    versionSistema,
    arquitectura,
    cantidadCPUs,
    memoriaTotalMB,
    memoriaLibreMB
  };
}

module.exports = obtenerInformacionDelSistema;
