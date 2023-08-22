// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

// Listeners
cargarEventlisteners();
// Dispara cuando se presiona "Agregar Carrito"
function cargarEventlisteners() {
  listaCursos.addEventListener("click", agregarCurso);
  // Cuando se elimina un curso del carrito

  // Al Vaciar el carrito
}

// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
  e.preventDefault();
  // Delegation para agregar-carrito
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    // Enviamos el curso seleccionado para tomar sus datos
    leerDatosCurso(cursoSeleccionado);
    carritoHTML(articulosCarrito);
  }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisa si un elemento ya existe en el carrito.
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  // Agrega elementos al arreglo de carrito
  carritoHTML();
}

function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        <img src = "${imagen}" width="100">
    </td>
    <td>
        ${titulo}
    </td>
    <td>
        ${precio}
    </td>
    <td>
        ${cantidad}
    </td>
    <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
    </td>
    `;
    contenedorCarrito.appendChild(row);
  });
}

function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

function vaciarCursos() {}
