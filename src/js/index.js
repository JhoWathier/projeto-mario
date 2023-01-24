//Objetivo 1
//Passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
const buttonTrailer = document.querySelector(".button-trailer");
const video = document.getElementById("video");
//Passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");
const linkVideo = video.src;
//Objetivo 2 - quando o usuario clicar no X devemos fechar a modal
//Passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const buttonCloseModal = document.querySelector(".close-modal");

function alternarModal(){
    modal.classList.toggle("open");
}

//Passo 2 obj1 - dar um jeito de identificar quando o usuário clicar no botão
buttonTrailer.addEventListener("click", () => {
    //Passo 4 obj1 - abrir a modal na tela
    alternarModal();
    video.setAttribute("src", linkVideo)
});

//passo 2 - dar um jeito de identificar quando o usuario clicar no X
buttonCloseModal.addEventListener("click", () => {
    //Passo 3 - fechar a modal
    alternarModal();
    video.setAttribute("src", "");
});

