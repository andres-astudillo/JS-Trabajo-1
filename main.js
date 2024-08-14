function agregarProductos() {
  const inventario = [];
  let producto = prompt("Ingresa un producto para inventariar");
  inventario.push(producto);
}

function imprimirListado() {
  for (const producto of inventario) {
    console.log(producto);
  }
}

do {
  agregarProductos();
  let respuesta = prompt("¿Desea agregar otro producto? (s/n)");
} while (respuesta.toLowerCase() === "s");

imprimirListado();
