const boasVindas = document.querySelector(".boas-vindas");
const botaoIniciarTeste = document.querySelector(".botao-iniciar-teste");
const teste = document.querySelector(".teste");
const form = document.querySelector("form");
const resultadoDiv = document.querySelector("#resultado");

botaoIniciarTeste.addEventListener("click", function() {
    boasVindas.style.display= "none";
    teste.style.display = "flex";
    window.scrollTo(0, 0); //quando a página recarregar a tela volta para o topo

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


    form.style.display= "none";
    resultadoDiv.style.display = "flex";
    window.scrollTo(0, 0);


if (vencedores.length === 1) {
  resultadoDiv.textContent = "Parabéns você é " + vencedores[0];
} else {
  resultadoDiv.textContent = "Parabéns você é " + vencedores.join(" e ");
}

});