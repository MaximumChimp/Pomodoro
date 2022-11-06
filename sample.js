
const progress = document.querySelector(".outerRing"),
    min = document.querySelector("#minutes"),
    sec = document.querySelector("#seconds"),
    startStop = document.querySelector("#start"),
    setting = document.querySelector(".setting"); 

let mins = document.querySelector("#minutes").innerHTML,
    secs = document.querySelector("#seconds").innerHTML,
    progr = null,
    progressStart = 0,
    progressEnd = parseInt(mins)*60 + parseInt(secs),
    speed = 1000,
    degTravel = 360/progressEnd,
    toggleSettings = false,
    secRem = 0,
    minRem = 0;

function progressTrack(){
    progressStart++;
    secRem = Math.floor((progressEnd - progressStart) % 60);
    minRem = Math.floor((progressEnd - progressStart) / 60);

    sec.innerHTML = secRem.toString().length == 2? secRem :`0${secRem}`.innerHTML = minRem.toString().length == 2 ? minRem :`0${minRem}`;

    progress.style.background = `conic-gradient(#00aa51 360deg,#00aa51 360deg)`;

    if(progressStart == progressEnd){
        progress.style.background = `conic-gradient(
            #00aa51 360deg, #00aa51 360deg
        )`;
        
        clearInterval(progr);
        startStop.innerHTML = "START";
        progr = null;
        progressStart = 0
    }
    
}
function startStopProgress(){
    if(!progr){
        progr = setInterval(progressTrack,speed);
    }
    else{
        clearInterval(progr);
        progr = null;
        progressStart = 0;
        progress.style.background = `conic-gradient(
            #17171a 360deg, #17171a 360deg
        )`;
    }
}
function resetValue(){
    if(progr){
        clearInterval(progr);
    }
    mins = document.querySelector("#minutes").innerHTML;
    secs = document.querySelector("#seconds").innerHTML;
    toggleSettings = false;
    min.contentEditable = false;
    min.style.borderBottom = 'none';
    sec.contentEditable = false;
    sec.style.borderBottom = 'none';
    progr = null;
    progressStart = 0;
    progressEnd = parseInt(mins)*60 + parseInt(sec);
    degTravel = 360 / progressEnd;
    progress.style.background = `conic-gradient(
        #17171a 360deg, #17171a 360deg
    )`;
}
startStop.onclick = function(){
    if(startStop.innerHTML == "START"){
        if(!(parseInt(mins) ==0 && parseInt(secs) === 0)){
            startStop.innerHTML = "STOP";
            startStopProgress();
        }
        else{
            alert("Enter the time value in your timer!");
        }

    }else{
        startStop.innerHTML = "START";
        startStopProgress();
    }
};
min.onclick = function(){
    if(!toggleSettings){
        toggleSettings = true;
        min.contentEditable = true;
        min.style.borderBottom = '1px dashed #ffffff50';
        sec.contentEditable = true;
        sec.style.borderBottom = '1px dashed #ffffff50';
    }
    else{
        resetValue();
    }
};
min.onblur = function (){
    resetValue();
};
sec.onblur = function(){
    resetValue();
};
