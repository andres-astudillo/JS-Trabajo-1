let inventario = [];

function agregarProductos() {
  let producto = prompt("Ingresa un producto para inventariar");
  inventario.push(producto);
}

function imprimirListado() {
  const tbody = document.getElementById("tbody-inventario");
  tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevos productos
  for (const producto of inventario) {
    const fila = `
      <tr>
        <td>${producto}</td>
      </tr>
    `;
    tbody.innerHTML += fila;
  }
}

let respuesta;
do {
  agregarProductos();
  respuesta = prompt("¿Desea agregar otro producto? (s/n)");
} while (respuesta.toLowerCase() === "s");

imprimirListado();
