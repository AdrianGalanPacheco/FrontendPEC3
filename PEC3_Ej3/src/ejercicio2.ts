// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.

interface Plane {
  model: string;
  npassengers: number;
}

// Interfaz para el hangar, guardará la llave del Hangar y el avión
interface HangarHash {
  [key: string]: Plane;
}

// Crea el hangar
let myHangar: HangarHash = {};

// Agrega los aviones
myHangar["123Z"] = {
  model: "airbus",
  npassengers: 200,
};

myHangar["H789"] = {
  model: "boeing",
  npassengers: 151,
};

// Por cada objeto, mostrar la información
for (const key in myHangar) {
  console.log(`${key}:${myHangar[key].model}(${myHangar[key].npassengers})`);
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
