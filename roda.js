const playBtn = document.getElementById('playBtn');
const btnText = document.getElementById('btnText');
const timerDisplay = document.getElementById('timerDisplay');
const statusMessage = document.getElementById('statusMessage');
const wheelIcon = document.getElementById('wheelIcon');
const musicPlayer = document.getElementById('musicPlayer');

let isPlaying = false;
let countdownInterval = null;

playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        startGame();
    }
});

function startGame() {
    // Gera tempo aleatório entre 10 e 15 segundos
    const randomTime = Math.floor(Math.random() * 6) + 10; // 10 a 15 segundos
    let timeLeft = randomTime;

    isPlaying = true;
    playBtn.disabled = true;
    playBtn.classList.add('playing');
    wheelIcon.classList.add('spinning');

    // Toca a música
    musicPlayer.currentTime = 0;
    musicPlayer.play().catch(err => {
        console.error('Erro ao tocar música:', err);
        statusMessage.textContent = '⚠️ Erro ao tocar música. Verifique o arquivo!';
    });

    // Atualiza o status
    statusMessage.textContent = `🎵 A música vai tocar por ${randomTime} segundos!`;

    // Inicia contagem regressiva
    timerDisplay.innerHTML = `<span class="timer-countdown">${timeLeft}s</span>`;

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerHTML = `<span class="timer-countdown">${timeLeft}s</span>`;

        if (timeLeft <= 0) {
            stopGame();
        }
    }, 1000);
}

function stopGame() {
    clearInterval(countdownInterval);
    musicPlayer.pause();
    musicPlayer.currentTime = 0;

    isPlaying = false;
    playBtn.disabled = false;
    playBtn.classList.remove('playing');
    wheelIcon.classList.remove('spinning');
    btnText.textContent = '▶️ PLAY';

    timerDisplay.innerHTML = '<span class="timer-text">🎉 Tempo acabou! 🎉</span>';
    statusMessage.textContent = '✨ Aperte PLAY novamente para jogar outra vez!';
}