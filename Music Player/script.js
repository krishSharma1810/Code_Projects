
// initialize basics
let songIndex=0;
let mainplay=document.getElementById('MainPlay')
let mainpause=document.getElementById('MainPause')
let mainprevious=document.getElementById('mainPrevious')
let mainnext=document.getElementById('mainNext')
let gif=document.getElementById('SongGIF')
let progressBar=document.getElementById('progremm_bar')
let songitems=Array.from(document.getElementsByClassName('songItem'))
let songListPlay=document.getElementsByClassName('songplay');
let mainSongName=document.getElementById('mainSongName')


let audio=new Audio('song/1.m4a')

// list of songs
const songs=[
    {songName:"Tabla-Santoor Instrumental",filePath:"song/1.mp3",coverPath:"Cover/1.jpg"},
    {songName:"jab mila tu",filePath:"song/2.m4a",coverPath:"Cover/2.jpg"},
    {songName:"Dildara",filePath:"song/3.m4a",coverPath:"Cover/3.jpg"},
    {songName:"Main agar",filePath:"song/4.m4a",coverPath:"Cover/4.jpg"},
    {songName:"Suspicious Minds",filePath:"song/5.m4a",coverPath:"Cover/5.jpg"}
]


// initializing the songs lists
songitems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})


// to play song
mainplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime <= 0)
    {
        audio.play()
        mainplay.classList.add('hide');
        mainpause.classList.remove('hide');
        gif.style.opacity=1
    }
})
// to pause song
mainpause.addEventListener('click',()=>{
    audio.pause()
    mainpause.classList.add('hide');
    mainplay.classList.remove('hide');
    gif.style.opacity=0

})


// for progressBar
audio.addEventListener('timeupdate',()=>{
    let progress=parseInt((audio.currentTime/audio.duration)*100)
    progressBar.value=progress
})


// to update the seek bar
progressBar.addEventListener('change',()=>{
    audio.currentTime=(progressBar.value * audio.duration)/100;
})


const makeItPLay=()=>{
    Array.from(songListPlay).forEach((element)=>{
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')
    })
}

Array.from(songListPlay).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeItPLay()
        let songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audio.src=`song/${songIndex+1}.m4a`
        mainSongName.innerText=songs[songIndex].songName
        audio.currentTime=0
        audio.play()
        mainplay.classList.add('hide')
        mainpause.classList.remove('hide')
        gif.style.opacity=1
    })
})


mainnext.addEventListener('click',()=>{
    if(songIndex > 5){
        songIndex=0;
    }else{
        songIndex += 1;
    }
    audio.src=`song/${songIndex+1}.m4a`
    audio.currentTime=0
    audio.play()
    mainplay.classList.add('hide')
    mainpause.classList.remove('hide')
    mainSongName.innerText=songs[songIndex].songName
})
mainprevious.addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex=4;
    }else{
        songIndex -= 1;
    }
    audio.src=`song/${songIndex+1}.m4a`
    audio.currentTime=0
    audio.play()
    mainplay.classList.add('hide')
    mainpause.classList.remove('hide')
    mainSongName.innerText=songs[songIndex].songName
})