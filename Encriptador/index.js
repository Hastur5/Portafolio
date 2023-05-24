const input = document.querySelector("input");
const caja = document.querySelector(".caja");
const imagen = document.querySelector("img");
const texto = document.querySelector(".texto");
let nuevoTexto = "";
let desencriptar = document
  .querySelector(".desencriptar")
  .addEventListener("click", () => {
    console.log("funciono");
  });
const encriptar = document
  .querySelector(".encriptar")
  .addEventListener("click", (evt) => {
    console.log(input.value);
    imagen.classList.add("hide");
    texto.classList.add("hide");
    mostrarTexto();
  });

let mostrarTexto = () => {
  eliminarTextoAnterior();
  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] === "a") {
      nuevoTexto += "ai";
    } else if (input.value[i] === "e") {
      nuevoTexto += "enter";
    } else if (input.value[i] === "i") {
      nuevoTexto += "imes";
    } else if (input.value[i] === "o") {
      nuevoTexto += "ober";
    } else if (input.value[i] === "u") {
      nuevoTexto += "ufat";
    } else {
      nuevoTexto += input.value[i];
    }
  }
  let texto = document.createElement("h3");
  texto.innerHTML = `<div class="card">
                        <p class="resultado"> ${nuevoTexto}</p>
                        <button class="copiar">Copiar texto<button/>
                      </div>`;
  caja.append(texto);
  nuevoTexto = "";
  const copiarBoton = texto.querySelector(".copiar");
  copiarBoton.addEventListener("click", (evt) => {
    
  });
};
let eliminarTextoAnterior = () => {
  const resultadoAnterior = caja.querySelector("h3");
  if (resultadoAnterior) {
    caja.removeChild(resultadoAnterior);
  }
};
