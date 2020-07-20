import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video'); 
const btnPlay = document.getElementById('btnPlay');
const btnMute = document.getElementById('btnMute'); 

const player = new MediaPlayer({ 
    el: video, 
    btnPlay: btnPlay, 
    btnMute: btnMute, 
    plugins: [new AutoPlay(), new AutoPause()], 
}); 
btnPlay.onclick = () => player.togglePlay(); 
btnMute.onclick = () => player.toggleMute();     

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message); 
    }); 
}