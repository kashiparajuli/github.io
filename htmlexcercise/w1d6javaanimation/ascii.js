window.onload = function () {
    // "use strict";
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var textArea = document.getElementById("text-area");
    var animation = document.getElementById("animation");
    var size = document.getElementById("fontsize");
    var turbo = document.getElementById("turbo");
    var delayTime = 250;
    var i = 0;
    var interval;
    var initialText = "";

    start.onclick = startAnimation;
    stop.onclick = stopAnimation;
    animation.onchange = initialTextSet;
    size.onchange = changeSize;
    turbo.onchange = changeTurbo;

    function startAnimation() {
        interval = null;
        disabledElement(start);
        disabledElement(animation);
        disabledElement(textArea);
        enabledElement(stop);
        animationPlay();
    }

    function stopAnimation() {
        disabledElement(stop);
        enabledElement(start);
        enabledElement(animation);
        enabledElement(textArea);
       clearInterval(interval);
        initialTextSet();

    }

    function changeSize() {
        textArea.style.fontSize = size.value;

    }
    function initialTextSet() {
        initialText = ANIMATIONS[animation.value];
        textArea.value = initialText;

    }
    function changeTurbo() {
        clearInterval(interval)
        if (interval !== null) {
            if (turbo.checked) {
                delayTime = 50;
            }
            else {
                delayTime = 250;
            }
            animationPlay();
        }

    }

    function animationPlay() {

        if (initialText !== "") {
            var textAreaValue = initialText.split("=====\n");
            interval = setInterval(animateRun, delayTime, textAreaValue);
        }

    }
    function animateRun(arr) {
        console.log('animate');
        if (i === arr.length) {
            i = 0;
        }
        textArea.value = arr[i];
        i++;
    }

    function enabledElement(btn) {
        btn.removeAttribute("disabled");
    }

    function disabledElement(btn) {
        btn.setAttribute("disabled", "disabled");
    }

};