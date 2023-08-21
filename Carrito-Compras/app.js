const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventlisteners();
function cargarEventlisteners() {
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
    carritoHTML(articulosCarrito);
    console.log(cursoSeleccionado);
  }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  articulosCarrito = [...articulosCarrito, infoCurso];

  console.log(articulosCarrito);
}

function carritoHTML() {
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        ${curso.titulo}
    </td>
    `;
    contenedorCarrito.appendChild(row);
  });
}
