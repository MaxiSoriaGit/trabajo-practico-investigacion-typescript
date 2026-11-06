// Enum: conjunto de constantes con nombre
enum Estado {
  Pendiente = 'pendiente',
  EnProgreso = 'en_progreso',
  Completada = 'completada',
}

// Tipo literal: solo acepta valores exactos
type Rol = 'admin' | 'user' | 'invitado';
type Orden = 'asc' | 'desc';

const estado: Estado = Estado.EnProgreso;
const rol: Rol = 'admin';
// const mal: Rol = "otro"; // error de compilación

function describirEstado(e: Estado): string {
  return `La tarea está ${e}`;
}

function ordenar(numeros: number[], orden: Orden): number[] {
  const copia = [...numeros];
  return orden === 'asc'
    ? copia.sort((a, b) => a - b)
    : copia.sort((a, b) => b - a);
}

console.log('enum:', estado);
console.log('literal:', rol);
console.log(describirEstado(Estado.Completada));
console.log('asc:', ordenar([3, 1, 2], 'asc'));
console.log('desc:', ordenar([3, 1, 2], 'desc'));

// Diferencia: el enum existe en tiempo de ejecución, el literal no
console.log('valores del enum:', Object.values(Estado));

export {};
