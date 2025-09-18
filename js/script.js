/* LocalStorage */
const nuevoInputProducto = document.getElementById("nuevoInputProducto");
const btnAgregarProducto = document.getElementById("btnAgregarProducto");
const tablaProductos = document
  .getElementById("tablaProductos")
  .getElementsByTagName("tbody")[0];

function cargarProductos() {
  const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
  productosGuardados.forEach((productoTexto) => {
    agregarProductoAlDOM(productoTexto);
  });
}

function guardarProductos() {
  const filas = tablaProductos.querySelectorAll("tr td:first-child");
  const productosActuales = [];
  filas.forEach((celda) => {
    productosActuales.push(celda.textContent);
  });
  localStorage.setItem("productos", JSON.stringify(productosActuales));
}

function agregarProductoAlDOM(productoTexto) {
  if (productoTexto == null || productoTexto.trim() === "") {
    alert("El producto no puede estar vacío.");
    return;
  }

  // Crear nueva fila
  const fila = tablaProductos.insertRow();

  // Columna: nombre del producto
  const celdaNombre = fila.insertCell(0);
  celdaNombre.textContent = productoTexto;

  // Columna: acciones
  const celdaAcciones = fila.insertCell(1);

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn btn-danger btn-sm";
  btnEliminar.addEventListener("click", () => {
    fila.remove();
    guardarProductos();
  });

  celdaAcciones.appendChild(btnEliminar);

  guardarProductos();
}

btnAgregarProducto.addEventListener("click", () => {
  const productoTexto = nuevoInputProducto.value;
  agregarProductoAlDOM(productoTexto);
  nuevoInputProducto.value = "";
});

nuevoInputProducto.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnAgregarProducto.click();
  }
});

cargarProductos();
