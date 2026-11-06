// Tipos en parámetros y en el retorno
function sumar(a: number, b: number): number {
  return a + b;
}
console.log('sumar(2, 3):', sumar(2, 3));

// Función que no devuelve nada: void
function mostrarMensaje(texto: string): void {
  console.log('Mensaje:', texto);
}
mostrarMensaje('Hola desde TypeScript');

// Parámetro opcional (?)
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
console.log(saludar('Maxi'));
console.log(saludar('Maxi', 'Soria'));

// Parámetro por defecto
function potencia(base: number, exponente: number = 2): number {
  return base ** exponente;
}
console.log('potencia(4):', potencia(4));
console.log('potencia(2, 3):', potencia(2, 3));

// Función flecha con tipos
const restar = (a: number, b: number): number => a - b;
console.log('restar(10, 4):', restar(10, 4));

export {};
