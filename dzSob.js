/**
 * Created by Vzhak on 04.07.2017.
 */



var neCmokay = document.getElementById('neCmokay');


neCmokay.onmousedown = function(e) { // 1. отследить нажатие
    neCmokay.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(neCmokay);

    function moveAt(e) {
        neCmokay.style.left = e.pageX - neCmokay.offsetWidth / 2 + 'px';
        neCmokay.style.top = e.pageY - neCmokay.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    neCmokay.onmouseup = function() {
        document.onmousemove = null;
        neCmokay.onmouseup = null;
    };

    neCmokay.ondragstart = function() {
        return false;
    };
};
