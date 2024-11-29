// Lista de palavras possíveis para o jogo
const palavras = ['python', 'desenvolvimento', 'javascript', 'programacao', 'forca'];

// Variáveis do jogo
let palavraEscolhida = '';
let letrasCorretas = [];
let tentativas = 6;
let letrasErradas = [];

// Função para escolher uma palavra aleatória
function escolherPalavra() {
    return palavras[Math.floor(Math.random() * palavras.length)];
}

// Função para inicializar o jogo
function iniciarJogo() {
    palavraEscolhida = escolherPalavra();
    letrasCorretas = Array(palavraEscolhida.length).fill('_');
    tentativas = 6;
    letrasErradas = [];

    document.getElementById('word-display').textContent = letrasCorretas.join(' ');
    document.getElementById('attempts').textContent = tentativas;
    document.getElementById('wrong-letters').textContent = letrasErradas.join(', ');
    document.getElementById('game-message').textContent = '';
    document.getElementById('letter-input').value = '';
}

// Função para verificar a letra digitada pelo jogador
function adivinharLetra() {
    const letra = document.getElementById('letter-input').value.toLowerCase();

    // Se o jogador não digitou nada ou digitou mais de uma letra
    if (!letra || letra.length !== 1) {
        return;
    }

    if (letrasErradas.includes(letra) || letrasCorretas.includes(letra)) {
        alert('Você já tentou essa letra!');
        return;
    }

    // Verificar se a letra está na palavra
    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                letrasCorretas[i] = letra;
            }
        }
        document.getElementById('word-display').textContent = letrasCorretas.join(' ');

        // Verificar se o jogador venceu
        if (!letrasCorretas.includes('_')) {
            document.getElementById('game-message').textContent = 'Você ganhou! Parabéns!';
            setTimeout(iniciarJogo, 3000); // Reinicia o jogo após 3 segundos
        }
    } else {
        tentativas--;
        letrasErradas.push(letra);
        document.getElementById('attempts').textContent = tentativas;
        document.getElementById('wrong-letters').textContent = letrasErradas.join(', ');

        // Verificar se o jogador perdeu
        if (tentativas === 0) {
            document.getElementById('game-message').textContent = `Você perdeu! A palavra era: ${palavraEscolhida}`;
            setTimeout(iniciarJogo, 3000); // Reinicia o jogo após 3 segundos
        }
    }

    // Limpa o campo de entrada
    document.getElementById('letter-input').value = '';
}

// Inicializa o jogo assim que a página for carregada
window.onload = iniciarJogo;

// Evento para o botão de adivinhar
document.getElementById('guess-btn').addEventListener('click', adivinharLetra);

// Iniciar um novo jogo ao pressionar a tecla "Enter" no campo de entrada
document.getElementById('letter-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adivinharLetra();
    }
});
