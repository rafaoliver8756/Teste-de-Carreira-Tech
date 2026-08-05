const boasVindas = document.querySelector(".boas-vindas");
const botaoIniciarTeste = document.querySelector(".botao-iniciar-teste");
const teste = document.querySelector(".teste");


botaoIniciarTeste.addEventListener("click", function() {
    boasVindas.style.display= "none";
    teste.style.display = "flex";

});
//lógica do teste
const pontuaçao = {
    frontend: 0,
    backend: 0,
    dados: 0,
    "design/Ux": 0
}
 