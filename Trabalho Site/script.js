let pontuacao = 0;

function gerarPergunta() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operacao = Math.random() > 0.5 ? '+' : '-';
    let resultado;

    if (operacao === '+') {
        resultado = num1 + num2;
    } else {
        resultado = num1 - num2;
    }

    document.getElementById("pergunta").textContent = `${num1} ${operacao} ${num2} = ?`;
    document.getElementById("feedback").textContent = '';
    return resultado;
}

let respostaCorreta = gerarPergunta();

function verificar() {
    const respostaUsuario = parseInt(document.getElementById("resposta").value);
    const feedback = document.getElementById("feedback");

    console.log("Resposta do usuário:", respostaUsuario); // Verifique a resposta do usuário
    console.log("Resposta correta:", respostaCorreta); // Verifique a resposta correta

    if (isNaN(respostaUsuario)) {
        feedback.textContent = "Por favor, insira um número válido.";
        feedback.style.color = "orange";
    } else if (respostaUsuario === respostaCorreta) {
        pontuacao += 1; // Adiciona 1 pontos para cada resposta correta
        feedback.textContent = `Parabéns! Você acertou! 🎉 Pontuação: ${pontuacao}`;
        feedback.style.color = "black";
    } else {
        feedback.textContent = `Ops! A resposta está errada. Tente novamente! 😔 Pontuação: ${pontuacao}`;
        feedback.style.color = "red";
    }

    respostaCorreta = gerarPergunta();
    document.getElementById("resposta").value = '';
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
}

// Inicialize a primeira pergunta e a pontuação
document.addEventListener('DOMContentLoaded', () => {
    gerarPergunta();
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
});

 