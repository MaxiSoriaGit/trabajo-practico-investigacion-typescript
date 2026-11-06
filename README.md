# TP Practico: Investigación en TypeScript

**Autor:** Soria Maximiliano

---

## Tema 1: ¿Qué es TypeScript?

**¿Qué es TypeScript y quién lo desarrolla?**
Es un lenguaje que le agrega tipado estatico opcional a JavaScript. Se escribe en archivos `.ts` y después se convierte (compila) a JavaScript común, para que lo pueda ejecutar el navegador o Node. Lo desarrolla Microsoft y es de código abierto.

**¿Qué diferencias tiene con JavaScript?**
JavaScript tiene tipado dinámico: recién se entera de que una variable tiene el tipo equivocado cuando el programa ya está corriendo. TypeScript tiene tipado estático: se declaran los tipos y los errores aparecen antes de ejecutar, mientras se escribe o se compila. Además, TypeScript no lo entienden directamente los navegadores, así que hay que compilarlo a JavaScript. Es un superconjunto de JavaScript, o sea que el código JS se puede usar dentro de TS.

**¿Qué ventajas ofrece?**
Detecta errores antes de ejecutar, el editor autocompleta mejor, el código se entiende más fácil porque los tipos sirven como documentación, y es más seguro cambiar o refactorizar código en proyectos grandes.

**¿Cuál es su versión actual?**
La 7.0, publicada el 8 de julio de 2026. Su novedad principal es que el compilador pasó a estar escrito en Go, lo que lo hace entre 8 y 12 veces más rápido. La versión instalada en un proyecto se ve con `npx tsc --version`.

---

## Tema 2: Crear y ejecutar un proyecto

**¿Cómo se instala TypeScript en un proyecto?**
Dentro de la carpeta del proyecto se hace `npm init -y` y después `npm i -D typescript @types/node@24 tsx`. Se usa `-D` porque estos paquetes solo hacen falta durante el desarrollo y quedan guardados en `devDependencies`. Cada uno cumple una función:
- `typescript`: el compilador (`tsc`).
- `@types/node@24`: los tipos de Node (por ejemplo, para usar `process` sin errores). El `@24` fija la versión de los tipos.
- `tsx`: permite ejecutar archivos `.ts` directamente, sin compilar antes.

Con `npx tsc --init` se genera el archivo `tsconfig.json`.

**¿Para qué sirve el archivo tsconfig.json?**
Es el archivo de configuración del compilador. Ahí se indica qué archivos compilar (`include`), dónde se guardan los `.js` resultantes (`outDir`), a qué versión de JavaScript se compila (`target`), qué sistema de módulos se usa (`module`) y si el chequeo de tipos es estricto (`strict`).

**¿Qué hace el comando tsc?**
Es el compilador de TypeScript. Revisa que los tipos estén bien, muestra los errores si los hay y convierte los archivos `.ts` en archivos `.js`.

**¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**
- `tsc` no ejecuta nada: solo compila `.ts` a `.js` (y chequea los tipos).
- `node` ejecuta JavaScript. Para correr código TypeScript con `node` primero hay que compilarlo con `tsc` y ejecutar el `.js` resultante (`node dist/archivo.js`). Las versiones nuevas de Node pueden correr algunos `.ts` simples, pero solo les borran los tipos, no los chequean.
- `tsx` ejecuta el `.ts` directamente en un solo paso, sin generar archivos. Es cómodo para probar, pero no revisa los tipos, por eso conviene usar `tsc` para detectar errores.

---

## Tema 3: Tipos básicos

**¿Qué son los tipos string, number y boolean?**
Son los tipos primitivos más usados. `string` es para texto, `number` para números (enteros y decimales) y `boolean` para verdadero o falso (`true` / `false`).

**¿Cómo se declara un array con tipo?**
Se escribe el tipo de los elementos seguido de `[]`, por ejemplo `number[]`, o con la forma `Array<number>`. Así el array solo acepta elementos de ese tipo.

**¿Qué es un tipo unión?**
Es un tipo que permite que un valor sea de uno entre varios tipos. Se arma con el símbolo `|`, por ejemplo `string | number`.

**¿Por qué se recomienda evitar any?**
Porque `any` desactiva el chequeo de tipos: la variable acepta cualquier valor y TypeScript no avisa de ningún error. Se pierde la ventaja principal del lenguaje y los errores aparecen recién al ejecutar. Es mejor usar un tipo concreto, una unión o `unknown`.

---

## Tema 4: Funciones

**¿Cómo se indican los tipos de los parámetros?**
Después del nombre de cada parámetro, con dos puntos y el tipo: `function sumar(a: number, b: number)`.

**¿Cómo se indica el tipo de retorno?**
Después de los paréntesis, con dos puntos y el tipo: `function sumar(a: number, b: number): number`. Si la función no devuelve nada se usa `void`.

**¿Qué es un parámetro opcional?**
Es un parámetro que se puede no pasar al llamar a la función. Se marca con `?` después del nombre, por ejemplo `apellido?: string`. Si no se pasa, vale `undefined`, y tiene que ir después de los parámetros obligatorios.

**¿Qué es un parámetro por defecto?**
Es un parámetro que ya trae un valor asignado con `=`, por ejemplo `exponente: number = 2`. Si al llamar a la función no se pasa ese argumento, se usa ese valor.

---

## Tema 5: Interfaces y type

**¿Qué es una interfaz y para qué sirve?**
Una interfaz (`interface`) describe cómo tiene que ser un objeto: qué propiedades tiene y de qué tipo es cada una. Sirve para asegurar que los objetos y las clases cumplan con esa forma.

**¿Qué es un type?**
Es un alias, o sea un nombre que se le pone a un tipo. Puede nombrar un objeto, una unión, un tipo literal, etc. Por ejemplo: `type Id = string | number`.

**¿Cómo se declara una propiedad opcional?**
Con `?` después del nombre de la propiedad, tanto en `interface` como en `type`. Por ejemplo: `edad?: number`.

**¿Cuándo conviene usar cada uno?**
`interface` conviene para describir objetos y clases, porque se puede extender (`extends`) y ampliar. `type` conviene cuando hace falta algo que la interfaz no puede hacer, como uniones (`string | number`) o tipos literales. Para objetos simples funcionan casi igual.

---

## Tema 6: Enums y tipos literales

**¿Qué es un enum?**
Es un conjunto de constantes con nombre, agrupadas bajo un mismo nombre. Por ejemplo `Estado.Pendiente`, `Estado.Completada`. Sirve para no escribir valores sueltos que se pueden equivocar.

**¿Qué es un tipo literal?**
Es un tipo que acepta únicamente un valor exacto. Se suele combinar con `|` para armar una lista de opciones permitidas, por ejemplo `type Rol = "admin" | "user"`.

**¿En qué se parecen y en qué se diferencian?**
Se parecen en que los dos limitan los valores posibles y evitan errores de escritura. Se diferencian en que el enum es un objeto real que existe también en el JavaScript compilado y se usa como `Estado.Pendiente`, mientras que el tipo literal existe solo para el chequeo de tipos y desaparece al compilar; se escribe el valor directamente (`"admin"`).

**¿En qué situaciones se puede usar cada uno?**
El enum sirve para agrupar constantes con nombre que se usan en muchas partes del programa, como estados, roles o códigos. El tipo literal sirve para opciones simples de una variable, propiedad o parámetro, por ejemplo `"asc" | "desc"`.

---

## Fuentes consultadas

- Documentación oficial de TypeScript: https://www.typescriptlang.org/docs/
- TypeScript para programadores de JavaScript: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
- Tipos cotidianos (Everyday Types): https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- Funciones: https://www.typescriptlang.org/docs/handbook/2/functions.html
- Objetos, interfaces y type: https://www.typescriptlang.org/docs/handbook/2/objects.html
- Enums: https://www.typescriptlang.org/docs/handbook/enums.html
- Referencia de tsconfig: https://www.typescriptlang.org/tsconfig/
- InfoQ, "Microsoft Releases TypeScript 7.0 with a Native Go Compiler": https://www.infoq.com/news/2026/08/typescript-7-released/
- DEV Community, "TypeScript 7.0 Is Rewriting the Compiler in Go": https://dev.to/shresthapandey/typescript-70-is-rewriting-the-compiler-in-go-3ppj
- Material del Classroom 