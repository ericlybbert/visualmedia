var timeset = 10;
document.getElementById('counter').innerHTML = timeset;
var timelength = timeset;
var myinterval = "";

function interfunction(){
    timelength--;
    if(timelength == 0){
        var sound = document.getElementById("audio");
        sound.play();
    }
    if(timelength == -1){
        timelength = timeset;
    }
    
    document.getElementById('counter').innerHTML = timelength;
}


function timertoggle(){
    var current = document.getElementById('timertoggle').innerHTML;
    if(current == 'Start Timer'){
        document.getElementById('timertoggle').innerHTML = 'Stop Timer';
        myinterval = window.setInterval(interfunction, 1000);
        interfunction();
    }else{
        document.getElementById('timertoggle').innerHTML = 'Start Timer';
        window.clearInterval(myinterval);
        return false; 
    }
}

function timerstart(){
    myinterval = window.setInterval(interfunction, 1000);
    interfunction();
}


function timerstop(){
    //alert('stop');
    window.clearInterval(myinterval);
    return false; 
}

function timerup(){
    timeset++;
    timelength = timeset;
    document.getElementById('counter').innerHTML = timeset;  
}

function timerdown(){
    timeset--;
    timelength = timeset;
    document.getElementById('counter').innerHTML = timeset;  
}

function timerreset(){
    var current = document.getElementById('timertoggle').innerHTML;
    if(current !== 'Start Timer'){
        timertoggle();
    }
    timelength = timeset;
    document.getElementById('counter').innerHTML = timeset;  
}

