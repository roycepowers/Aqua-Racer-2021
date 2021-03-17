var id1 = null;
function myMove1() {
    var elem = document.getElementById("racer1");
    var pos = 0;
    clearInterval(id1);
    id1= setInterval(frame, 50);
    function frame () {
        if (pos == 350) {
            clearInterval(id1);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
var id2 = null;
function myMove2() {
    var elem = document.getElementById("racer2");
    var pos = 0;
    clearInterval(id2);
    id2= setInterval(frame, 50);
    function frame () {
        if (pos == 350) {
            clearInterval(id2);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
var id3 = null;
function myMove3() {
    var elem = document.getElementById("racer3");
    var pos = 0;
    clearInterval(id3);
    id3= setInterval(frame, 50);
    function frame () {
        if (pos == 350) {
            clearInterval(id3);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
var id4 = null;
function myMove4() {
    var elem = document.getElementById("racer4");
    var pos = 0;
    clearInterval(id4);
    id= setInterval(frame, 50);
    function frame () {
        if (pos == 350) {
            clearInterval(id4);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
var id5 = null;
function myMove5() {
    var elem = document.getElementById("racer5");
    var pos = 0;
    clearInterval(id5);
    id5= setInterval(frame, 50);
    function frame () {
        if (pos == 350) {
            clearInterval(id5);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
var id6 = null;
function myMove6() {
    var elem = document.getElementById("racer6");
    var pos = 0;
    clearInterval(id6);
    id= setInterval(frame, 50);
    function frame () {
        if (pos == 350) {
            clearInterval(id6);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}