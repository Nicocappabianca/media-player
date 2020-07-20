function MediaPlayer(config) {
    this.media = config.el;
    this.btnPlay = config.btnPlay; 
    this.btnMute = config.btnMute; 
    this.plugins = config.plugins || []; 

    this._initPlugins(); 
}

MediaPlayer.prototype._initPlugins = function(){
    const player = {
        play: () => this.play(), 
        pause: () => this.pause(), 
        media: this.media,
        get muted() {
            return this.media.muted;  
        }, 
        set muted(value) {
            this.media.muted = value; 
        } 
    };

    this.plugins.forEach(plugin => {
        plugin.run(player); 
    });
}

MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused){
        this.play();
    }else{
        this.pause(); 
    }
}

MediaPlayer.prototype.play = function() {
    this.media.play(); 
    this.btnPlay.innerHTML = '⏸'
}

MediaPlayer.prototype.pause = function() {
    this.media.pause(); 
    this.btnPlay.innerHTML = '▶️'
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true; 
    this.btnMute.innerHTML = '🔇'; 
}
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false; 
    this.btnMute.innerHTML = '🔊'; 
}
MediaPlayer.prototype.toggleMute = function() {
    if(this.media.muted){
        this.unmute();
    }else{
        this.mute(); 
    }
}

export  default MediaPlayer;  
