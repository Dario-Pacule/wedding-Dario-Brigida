// script.js

// Capturando o botão de mapa
const mapsButton = document.getElementById("maps-button");

// Adicionando um ouvinte de clique ao botão
mapsButton.addEventListener("click", function () {
  // Substitua "[Link do Google Maps]" pelo link real do Google Maps
  window.location.href = "[Link do Google Maps]";
});

// Capturando os botões de doação
const donateButtons = document.querySelectorAll(".honeymoon a");

// Capturando a modal e o botão de fechar
const modal = document.getElementById("donateModal");
const closeBtn = document.querySelector(".close");

// Adicionando ouvintes de clique aos botões de doação
donateButtons.forEach((button) => {
  button.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

// Adicionando ouvinte de clique ao botão de fechar
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Fechar a modal quando o usuário clicar fora dela
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
