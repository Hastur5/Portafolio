const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

cargarEventlisteners();
function cargarEventlisteners() {
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  console.log(e.target);
}
