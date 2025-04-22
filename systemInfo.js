const obtenerInformacionDelSistema = require('./osModule');
const obtenerInformacionDeRed = require('./networkModule');


const infoSistema = obtenerInformacionDelSistema();
console.log('Información del Sistema Operativo:');
console.log('Nombre del sistema:', infoSistema.nombreSistema);
console.log('Tipo del sistema:', infoSistema.tipoSistema);
console.log('Versión del sistema:', infoSistema.versionSistema);
console.log('Arquitectura del sistema:', infoSistema.arquitectura);
console.log('Número de CPUs:', infoSistema.cantidadCPUs);
console.log('Memoria Total (MB):', infoSistema.memoriaTotalMB);
console.log('Memoria Libre (MB):', infoSistema.memoriaLibreMB);


const infoRed = obtenerInformacionDeRed();
console.log('\nInformación de las Interfaces de Red:');
for (const interfaz in infoRed) {
  console.log(`\nInterfaz ${interfaz}:`);
  infoRed[interfaz].forEach(detalle => {
    console.log('  Familia:', detalle.family);
    console.log('  Dirección:', detalle.address);
    console.log('  Interno:', detalle.internal);
  });
}
