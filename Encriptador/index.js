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

let desencriptar = document
  .querySelector(".desencriptar")
  .addEventListener("click", () => {
    console.log("funciono");
  });

let mostrarTexto = () => {
  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] === "a") {
      nuevoTexto += "ai";
    } else {
      nuevoTexto += input.value[i];
    }
  }
  let texto = document.createElement("h3");
  texto.innerHTML = `<div class="card">
                        <p class="resultado"> ${nuevoTexto}</p>
                        <button class="button-copiar">Copiar texto<button/>
                      </div>`;
  caja.append(texto);
};
