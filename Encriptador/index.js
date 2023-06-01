const input = document.querySelector("input");
const caja = document.querySelector(".caja");
const imagen = document.querySelector("img");
const texto = document.querySelector(".texto");
const frase = input.value.trim();
const palabras = frase.split(" ");
let mayusculas = /[A - Z]/;
let acentos = / [áéíóúÁÉÍÓÚ]/;
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
    const palabra = palabras[i];
    if (/[A-ZáéíóúÁÉÍÓÚ ]/.test(palabra)) {
      let texto = document.createElement("h3");
      texto.innerHTML = `
      <div class="card">
        <p class="resultado"> Ingresa un texto válido para encriptar </p>
      </div>
      `;
      caja.append(texto);
      return; // cancela el for
    } else if (input.value[i] === "a") {
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

  const copiar = document
    .querySelector(".copiar")
    .addEventListener("click", () => {
      const resultadoElemento = document.querySelector(".resultado");
      const textoCopiado = resultadoElemento.textContent.trim();
      const elemento = document.createElement("textarea");
      elemento.value = textoCopiado;
      document.body.appendChild(elemento);
      elemento.select();
      document.execCommand("copy");
      document.body.removeChild(elemento);
      console.log(textoCopiado);
    });
  nuevoTexto = "";
};

let mostrarTextoDes = () => {
  eliminarTextoAnterior();
  for (let i = 0; i < input.value.length; i++) {
    const palabra = palabras[i];
    if (/[A-ZáéíóúÁÉÍÓÚ ]/.test(palabra)) {
      let texto = document.createElement("h3");
      texto.innerHTML = `
      <div class="card">
        <p class="resultado"> Ingresa un texto válido para encriptar </p>
      </div>
      `;
      caja.append(texto);
      return;
    } else if (input.value[i] === "a" && input.value[i + 1] === "i") {
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
  const copiar = document
    .querySelector(".copiar")
    .addEventListener("click", () => {
      const resultado = document.querySelector(".resultado");
      const textoCopiado = resultado.textContent;
      const elemento = document.createElement("textarea");
      elemento.value = textoCopiado;
      document.body.appendChild(elemento);
      elemento.select();
      document.execCommand("copy");
      document.body.removeChild(elemento);
      console.log(textoCopiado);
    });
  nuevoTexto = "";
};

let eliminarTextoAnterior = () => {
  const resultadoAnterior = caja.querySelector("h3");
  if (resultadoAnterior) {
    caja.removeChild(resultadoAnterior);
  }
};
