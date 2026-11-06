// Interface: describe la forma de un objeto
interface Usuario {
  nombre: string;
  email: string;
  edad?: number; // propiedad opcional
}

// Una interface se puede extender
interface Administrador extends Usuario {
  permisos: string[];
}

// Type: alias para un tipo (objeto, unión, etc.)
type Producto = {
  nombre: string;
  precio: number;
  descuento?: number; // propiedad opcional
};

// Algo que solo type puede hacer: alias de una unión
type Id = string | number;

const usuario: Usuario = { nombre: 'Laura', email: 'laura@gmail.com' };
const admin: Administrador = {
  nombre: 'Maxi',
  email: 'maxi@gmail.com',
  edad: 30,
  permisos: ['crear', 'borrar'],
};
const producto: Producto = { nombre: 'Teclado', precio: 15000 };
const id: Id = 101;

function describirUsuario(u: Usuario): string {
  return u.edad ? `${u.nombre} (${u.edad} años)` : u.nombre;
}

console.log('usuario:', describirUsuario(usuario));
console.log('admin:', describirUsuario(admin), admin.permisos);
console.log('producto:', producto);
console.log('id:', id);

export {};
