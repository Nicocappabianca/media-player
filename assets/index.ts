import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads';

const video: HTMLMediaElement = document.querySelector('video'); 
const btnPlay: HTMLElement = document.getElementById('btnPlay');
const btnMute: HTMLElement = document.getElementById('btnMute'); 

const player = new MediaPlayer({ 
    el: video, 
    btnPlay: btnPlay, 
    btnMute: btnMute, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()], 
}); 
btnPlay.onclick = () => player.togglePlay(); 
btnMute.onclick = () => player.toggleMute();     

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message); 
    }); 
}