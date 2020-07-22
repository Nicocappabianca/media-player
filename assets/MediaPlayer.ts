class MediaPlayer {
    media: HTMLMediaElement; 
    btnPlay: HTMLButtonElement;
    btnMute: HTMLButtonElement;
    plugins: Array<any>;  
    private container: HTMLElement; 

    constructor(config) {
        this.media = config.el;
        this.btnPlay = config.btnPlay;
        this.btnMute = config.btnMute;
        this.plugins = config.plugins || [];
        this.initPlayer(); 
        this.initPlugins();
    }
    initPlayer(){
        this.container = document.createElement('div'); 
        this.container.style.position = 'relative'; 
        this.media.parentNode.insertBefore(this.container, this.media); 
        this.container.appendChild(this.media); 
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    play() {
        this.media.play();
        this.btnPlay.innerHTML = '⏸';
        document.title = `Media Player | Playing`;
    }
    pause() {
        this.media.pause();
        this.btnPlay.innerHTML = '▶️';
        document.title = 'Media Player | Paused';
    }
    mute() {
        this.media.muted = true;
        this.btnMute.innerHTML = '🔇';
    }
    unmute() {
        this.media.muted = false;
        this.btnMute.innerHTML = '🔊';
    }
    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
}

export  default MediaPlayer;  
