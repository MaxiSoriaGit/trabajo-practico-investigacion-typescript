// TypeScript agrega tipos a JavaScript y los chequea antes de ejecutar
const lenguaje: string = 'TypeScript';
const desarrollador: string = 'Microsoft';
const anioCreacion: number = 2012;

console.log(`${lenguaje} lo desarrolla ${desarrollador} desde ${anioCreacion}`);

// Ventaja: el error se detecta al compilar, no al ejecutar
// En JS esto se ejecutaría igual; en TS da error:
// const edad: number = "veinte";

function duplicar(numero: number): number {
  return numero * 2;
}

console.log('Duplicar 21:', duplicar(21));
// duplicar("21"); // error de compilación: un string no es un number

export {};
