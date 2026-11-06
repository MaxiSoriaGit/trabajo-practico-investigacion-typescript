# Glosario de TypeScript

## Tipado estático
Los tipos de las variables se revisan antes de ejecutar el programa, mientras se escribe o se compila el código. Así los errores se detectan antes.
```ts
let edad: number = 25;
// si edad = "veinte"; // error de compilación
```

## Inferencia de tipos
TypeScript deduce solo el tipo de una variable a partir del valor que se le asigna, sin que haga falta escribirlo.
```ts
let ciudad = "Formosa"; // TypeScript infiere que es string
```

## Compilar
Convertir el código TypeScript (`.ts`) en JavaScript (`.js`), que es lo que realmente entienden Node y los navegadores.
```ts
// en la terminal: npx tsc
// src/archivo.ts  ->  dist/archivo.js
```

## Modo estricto (strict)
Opción del `tsconfig.json` que activa los chequeos más exigentes de tipos, para detectar más errores.
```ts
function saludar(nombre: string) {
  return `Hola ${nombre}`;
}
// saludar(); // con strict da error: falta el argumento
```

## Array tipado
Lista donde todos los elementos son del mismo tipo.
```ts
const notas: number[] = [7, 8, 9];
```

## Tipo unión
Permite que un valor sea de uno entre varios tipos, separados por `|`.
```ts
let id: string | number = 10;
id = "abc-123";
```
## Estrechamiento de tipos (narrowing)
Cuando un valor puede ser de varios tipos, se hace una comprobación (por ejemplo con `typeof`) para que TypeScript sepa cuál es y deje usarlo correctamente.
```ts
function mostrar(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // acá TypeScript sabe que es string
  }
  return valor.toFixed(2); // acá sabe que es number
}
```

## any
Tipo que apaga el chequeo: la variable acepta cualquier valor y TypeScript no avisa de errores. Se recomienda evitarlo.
```ts
let dato: any = 5;
dato = "texto"; // sin error, pero se pierde la seguridad
```

## unknown
Parecido a `any`, pero más seguro: antes de usar el valor hay que comprobar de qué tipo es.
```ts
let valor: unknown = "hola";
if (typeof valor === "string") {
  console.log(valor.length);
}
```
## void
Tipo de retorno de una función que no devuelve ningún valor.
```ts
function avisar(texto: string): void {
  console.log(texto);
}
```

## Parámetro opcional
Parámetro de una función que se puede no pasar. Se marca con `?` y, si falta, vale `undefined`.
```ts
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

## Parámetro por defecto
Parámetro que ya trae un valor asignado, que se usa si al llamar a la función no se pasa ese argumento.
```ts
function potencia(base: number, exponente: number = 2): number {
  return base ** exponente;
}
```

## Tipo de retorno
Tipo del valor que devuelve una función, se escribe después de los paréntesis.
```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

## Interface
Describe cómo tiene que ser un objeto: qué propiedades tiene y de qué tipo. Sirve como "molde" para chequear objetos.
```ts
interface Usuario {
  nombre: string;
  email: string;
}
```
## Propiedad opcional
Propiedad de una interface o type que el objeto puede tener o no. Se marca con `?`.
```ts
interface Usuario {
  nombre: string;
  edad?: number;
}
```

## Extender una interface (extends)
Crear una interface nueva que hereda todas las propiedades de otra y le suma más.
```ts
interface Administrador extends Usuario {
  permisos: string[];
}
```

## Type (alias de tipo)
Un nombre que se le pone a un tipo, para reutilizarlo. Puede nombrar objetos, uniones y más.
```ts
type Id = string | number;
```

## Enum
Conjunto de constantes con nombre. Existe también en el JavaScript compilado, como un objeto real.
```ts
enum Estado {
  Pendiente = "pendiente",
  Completada = "completada",
}
```

## Tipo literal
Tipo que solo acepta un valor exacto de una lista de opciones. A diferencia del enum, desaparece al compilar.
```ts
type Rol = "admin" | "user";
const rol: Rol = "admin";
```

## Superconjunto
TypeScript es un superconjunto de JavaScript: incluye todo lo de JavaScript y le suma el sistema de tipos.
```ts
// Este código JavaScript también es válido en TypeScript
const suma = (a: number, b: number) => a + b;
```

## tsc
Es el compilador de TypeScript. Revisa los tipos, muestra los errores y genera los archivos `.js`.
```ts
// en la terminal: npx tsc --version
```

## tsconfig.json
Archivo donde se configura cómo compila TypeScript: qué carpeta se compila, dónde se guarda el resultado y qué tan estricto es el chequeo.
```ts
// { "compilerOptions": { "outDir": "dist", "strict": true } }
```