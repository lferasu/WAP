"use strict";

(function(){
    var timeInterval = 250;
    var loopVariable = 0;
    var timerID = null;
    var frames = null;
    var animationStarted = false;

    window.onload = function(){
        var startElem = document.getElementById("start");
        var stopElem = document.getElementById("stop");
        var animationElem = document.getElementById("animation");
        var fontElem = document.getElementById("size");
        var turboElem = document.getElementById("speed");
        startElem.onclick = start;
        stopElem.onclick = stop;
        stopElem.disabled = true;
        fontElem.onchange = changeFont;
        turboElem.onclick = changeSpeed;
        animationElem.onchange = setAnimation;
    };

    function start(){
        var animationElem = document.getElementById("animation");
        var textElem = document.getElementById("text");
        var startElem = document.getElementById("start");
        var stopElem = document.getElementById("stop");
        frames = textElem.value.split("=====\n");
        timerID = setInterval(display, timeInterval);
        startElem.disabled = true;
        stopElem.disabled = false;
        animationElem.disabled = true;
    }

    function display(){
        var textElem = document.getElementById("text");
        textElem.value = frames[loopVariable];
        loopVariable = (loopVariable+1)%(frames.length);
    }

    function stop(){
        var animationElem = document.getElementById("animation");
        var startElem = document.getElementById("start");
        var stopElem = document.getElementById("stop");
        var textElem = document.getElementById("text");
        clearInterval(timerID);
        loopVariable = 0;

        textElem.value = frames.join("=====\n");
        startElem.disabled = false;
        stopElem.disabled = true;
        animationElem.disabled = false;
    }

    function setAnimation(){
        var animationElem = document.getElementById("animation");
        var textElem = document.getElementById("text");
        var selected = animationElem.options[animationElem.selectedIndex].text;
        if(selected != "custom"){
            textElem.value = ANIMATIONS[selected];
        }
    }

    function changeFont(){
        var textElem = document.getElementById("text");
        var fontElem = document.getElementById("size");
        textElem.style.fontSize = fontElem.value;
    }

    function changeSpeed(){
        var turboElem = document.getElementById("speed");
        var startElem = document.getElementById("start");
        if(turboElem.checked){
            timeInterval = 50;
        } else{
            timeInterval = 250;
        }

        clearInterval(timerID);
        if(startElem.disabled){
            timerID = setInterval(display, timeInterval);
        }
    }
})();