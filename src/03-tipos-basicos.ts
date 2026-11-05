// string, number y boolean
const titulo: string = 'TypeScript';
const version: number = 7;
const aprobado: boolean = true;
console.log('string:', titulo);
console.log('number:', version);
console.log('boolean:', aprobado);

// Arrays con tipo
const notas: number[] = [7, 8, 9];
const nombres: Array<string> = ['Ana', 'Luis'];
notas.push(10);
// notas.push("diez"); // error: solo acepta números
console.log('notas:', notas);
console.log('nombres:', nombres);

// Tipo unión
function mostrarId(valor: string | number): string {
  if (typeof valor === 'string') {
    return valor.toUpperCase();
  }
  return valor.toFixed(2);
}
console.log('id string:', mostrarId('abc-123'));
console.log('id number:', mostrarId(10));

// any: desactiva el chequeo de tipos (evitarlo)
let cualquiera: any = 5;
cualquiera = 'ahora soy texto';
// cualquiera.toFixed(2); // TS no avisa, pero fallaría al ejecutar
console.log('any:', cualquiera);

// Alternativa más segura: unknown obliga a verificar el tipo
let seguro: unknown = 'hola';
if (typeof seguro === 'string') {
  console.log('unknown (verificado):', seguro.length);
}

export {};
