const input = document.querySelector("input");
const caja = document.querySelector(".caja");
const imagen = document.querySelector("img");
const texto = document.querySelector(".texto");
let nuevoTexto = "";
const encriptar = document
  .querySelector(".encriptar")
  .addEventListener("click", (evt) => {
    console.log(input.value);
    imagen.classList.add("hide");
    texto.classList.add("hide");
    mostrarTexto();
  });
const desencriptar = document
  .querySelector(".desencriptar")
  .addEventListener("click", () => {
    imagen.classList.add("hide");
    texto.classList.add("hide");
    mostrarTextoDes();
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
  const copiarBoton = texto.querySelector(".copiar");
  copiarBoton.addEventListener("click", (evt) => {
    console.log("click");
  });
  nuevoTexto = "";
};

let mostrarTextoDes = () => {
  eliminarTextoAnterior();
  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] === "a" && input.value[i + 1] === "i") {
      nuevoTexto += "a";
      i++;
    } else if (
      input.value[i] === "e" &&
      input.value[i + 1] === "n" &&
      input.value[i + 2] === "t" &&
      input.value[i + 3] === "e" &&
      input.value[i + 4] === "r"
    ) {
      nuevoTexto += "e";
      i += 4;
    } else if (
      input.value[i] === "i" &&
      input.value[i + 1] === "m" &&
      input.value[i + 2] === "e" &&
      input.value[i + 3] === "s"
    ) {
      nuevoTexto += "i";
      i += 3; 
    } else if (
      input.value[i] === "o" &&
      input.value[i + 1] === "b" &&
      input.value[i + 2] === "e" &&
      input.value[i + 3] === "r"
    ) {
      nuevoTexto += "o";
      i += 3;
    } else if (
      input.value[i] === "u" &&
      input.value[i + 1] === "f" &&
      input.value[i + 2] === "a" &&
      input.value[i + 3] === "t"
    ) {
      nuevoTexto += "u";
      i += 3;
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
  const copiarBoton = texto.querySelector(".copiar");
  copiarBoton.addEventListener("click", (evt) => {
    console.log("click");
  });
  nuevoTexto = "";
};

let eliminarTextoAnterior = () => {
  const resultadoAnterior = caja.querySelector("h3");
  if (resultadoAnterior) {
    caja.removeChild(resultadoAnterior);
  }
};
