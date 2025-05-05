console.log("Welcome to AUDIFY");

// initialize the variables
let songIndex = 0;
let audioelement = new Audio('audio/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let song = [
    { songName: "Aaj Bhi Song- Vishal Mishra", filePath: "assets/audio/1.mp3", coverpath: "assets/cover/1.jpg" },
    { songName: "Chali Kahani Song- A R Rahman", filePath: "assets/audio/2.mp3", coverpath: "assets/cover/2.JPEG" },
    { songName: "Dil Meri Song- Atif Aslam", filePath: "assets/audio/3.mp3", coverpath: "assets/cover/3.jpg" },
    { songName: "Lo maan liya Song- Arjit Singh", filePath: "assets/audio/4.mp3", coverpath: "assets/cover/4.JPEG" },
    { songName: "GULL AINAA Song- Suriya", filePath: "assets/audio/5.mp3", coverpath: "assets/cover/5.jpg" },
    { songName: "Tu Hi Aashiqui Song- Arjit Singh", filePath: "assets/audio/6.mp3", coverpath: "assets/cover/6.jpg" },
    { songName: "Zara Sa Song- KK _ Pritam", filePath: "assets/audio/7.mp3", coverpath: "assets/cover/7.jpg" },
]

songitem.forEach((element, i)=> {
    console.log(element, i)
    element.getElementsByTagName('img')[0].src= audio[i].filePath;
})
// audioelement.play();

// handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')
        gif.style.opacity = 0;
    }
})

// listen to events
audioelement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=> {
    audioelement.currentTime = myProgressBar.value*audioelement.duration/100;
})