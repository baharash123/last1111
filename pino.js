document.addEventListener('keypress',(e)=>{
    // buttonPressed(e.key)
    // console.log(e.key)
    switch(e.key){
        case "a":
            var sound = new Audio('./pianoSound/key01.mp3');
            sound.play();
            break;
        case "b":
            var sound = new Audio('./pianoSound/key02.mp3');
            sound.play();
            break;
        case "c":
            var sound = new Audio('./pianoSound/key03.mp3');
            sound.play();
            break;
            case "d":
                var sound = new Audio('./pianoSound/key04.mp3');
                sound.play();
                break;
            case "e":
                var sound = new Audio('./pianoSound/key05.mp3');
                sound.play();
                break;
            case "f":
                var sound = new Audio('./pianoSound/key06.mp3');
                sound.play();
            break;
            case "g":
            var sound = new Audio('./pianoSound/key07.mp3');
            sound.play();
            break;
            case "h":
            var sound = new Audio('./pianoSound/key08.mp3');
            sound.play();
            break;
            case "i":
            var sound = new Audio('./pianoSound/key09.mp3');
            sound.play();
            break;
            case "j":
            var sound = new Audio('./pianoSound/key010.mp3');
            sound.play();
            break;
            case "k":
            var sound = new Audio('./pianoSound/key11.mp3');
            sound.play();
            break;
            case "l":
            var sound = new Audio('./pianoSound/key12.mp3');
            sound.play();
            break;
            case "m":
            var sound = new Audio('./pianoSound/key13.mp3');
            sound.play();
            break;
            case "n":
            var sound = new Audio('./pianoSound/key14.mp3');
            sound.play();
            break;
            case "o":
            var sound = new Audio('./pianoSound/key15.mp3');
            sound.play();
            break;
            case "p":
            var sound = new Audio('./pianoSound/key16.mp3');
            sound.play();
            break;
            case "q":
            var sound = new Audio('./pianoSound/key17.mp3');
            sound.play();
            break;
            case "r":
            var sound = new Audio('./pianoSound/key18.mp3');
            sound.play();
            break;
            case "s":
            var sound = new Audio('./pianoSound/key19.mp3');
            sound.play();
            break;
            case "t":
            var sound = new Audio('./pianoSound/key20.mp3');
            sound.play();}

    })


    
function  buttonPressed(currentKey){

    var activeBtn = document.querySelector('.' + currentKey)
    
    
    activeBtn.classList.add('pressed')

    setTimeout(()=>{
        activeBtn.classList.remove('pressed')
    },100)
}