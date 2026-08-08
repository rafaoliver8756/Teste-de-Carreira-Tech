const boasVindas = document.querySelector(".boas-vindas");
const botaoIniciarTeste = document.querySelector(".botao-iniciar-teste");
const teste = document.querySelector(".teste");
const form = document.querySelector("form");


botaoIniciarTeste.addEventListener("click", function() {
    boasVindas.style.display= "none";
    teste.style.display = "flex";

});
//lógica do teste
const pontuacao = {
    frontend: 0,
    backend: 0,
    dados: 0,
    "design/ux": 0
}

form.addEventListener("submit", function(evento) {
    evento.preventDefault();
    for (let i = 1; i <= 5; i++) {
        const resposta = document.querySelector(`input[name="pergunta${i}"]:checked`);
        pontuacao[resposta.value]++;
    }

    const valores = Object.values(pontuacao);
    const maiorPontuacao = Math.max(...valores);

    const vencedores = Object.keys(pontuacao).filter(function(area) {
        return pontuacao[area] === maiorPontuacao;
});
const resultadoDiv = document.querySelector("#resultado");

if (vencedores.length === 1) {
  resultadoDiv.textContent = "Seu perfil é: " + vencedores[0];
} else {
  resultadoDiv.textContent = "Empate entre: " + vencedores.join(" e ");
}

});