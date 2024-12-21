console.log("welcome to Spotify Feel the music");
let songindex=1;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songitem'));


let songs=[
    {songName:"LET ME LOVE YOU DO" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName:"I LOVE YOU" , filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName:"ALBELA TANGE" , filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songName:"ALL BLACK" , filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songName:"SIDHU MOSSEWALA" , filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"},
    {songName:"LOVE DOSE" , filePath:"songs/6.mp3" , coverPath:"covers/6.jpg"},
    {songName:"BLUE EYES" , filePath:"songs/7.mp3" , coverPath:"covers/7.jpg"},
    {songName:"badal barsa" , filePath:"songs/8.mp3" , coverPath:"covers/8.jpg"},
    {songName:"dj snake" , filePath:"songs/9.mp3" , coverPath:"covers/9.jpg"},
    {songName:"MI AMOR" , filePath:"songs/10.mp3" , coverPath:"covers/10.jpg"},
]

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})
// audioelement.play();
masterplay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');    
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindex}.mp3`;
        mastersongname.innerHTML=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.opacity.play=1;
      
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=10){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    mastersongname.innerHTML=songs[songindex].songName;
    audioElement.currentTime=0;
  
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    mastersongname.innerHTML=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})