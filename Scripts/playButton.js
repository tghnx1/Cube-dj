// playButton.js
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('vimeo-player');
    const player = new Vimeo.Player(iframe);
    const playButton = document.getElementById('play-button');

    // Play video on button click
    playButton.addEventListener('click', () => {
        player.play().then(() => {
            player.setVolume(1);
        }).catch(error => {
            console.error('Error playing the video:', error);
        });
    });
});