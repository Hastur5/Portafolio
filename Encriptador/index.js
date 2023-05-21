let input = document.querySelector("input");
let imagen = document.querySelector("img");
let texto = document.querySelector(".texto");
let encriptar = document.querySelector(".encriptar");
let desencriptar = document
  .querySelector(".desencriptar")
  .addEventListener("click", () => {
    console.log("funciono");
  });

encriptar.addEventListener("click", (evt) => {
  console.log(input.value);
  imagen.classList.add("hide");
  texto.classList.add("hide");
});
