const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const statusMessage = document.getElementById('statusMessage');
const boxIcon = document.getElementById('boxIcon');
const musicPlayer = document.getElementById('musicPlayer');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    startMusic();
});

stopBtn.addEventListener('click', () => {
    stopMusic();
});

function startMusic() {
    // Para e reseta a música
    musicPlayer.currentTime = 0;
    
    // Toca a música do início
    musicPlayer.play().catch(err => {
        console.error('Erro ao tocar música:', err);
        statusMessage.textContent = '⚠️ Erro ao tocar música. Verifique o arquivo!';
        return;
    });

    isPlaying = true;
    playBtn.disabled = true;
    stopBtn.disabled = false;
    playBtn.classList.add('active');
    boxIcon.classList.add('playing');

    statusMessage.textContent = '🎵 Música tocando! Use STOP para parar. 🎶';
}

function stopMusic() {
    // Para a música e reseta
    musicPlayer.pause();
    musicPlayer.currentTime = 0;

    isPlaying = false;
    playBtn.disabled = false;
    stopBtn.disabled = true;
    playBtn.classList.remove('active');
    boxIcon.classList.remove('playing');

    statusMessage.textContent = '⏹️ Música parada! Aperte PLAY para tocar novamente. 🎵';
}

// Quando a música terminar naturalmente
musicPlayer.addEventListener('ended', () => {
    stopMusic();
    statusMessage.textContent = '✨ Música terminou! Aperte PLAY para tocar de novo. 🎵';
});