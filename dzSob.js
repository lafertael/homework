/**
 * Created by Vzhak on 04.07.2017.
 */



var neCmokay = document.getElementById('neCmokay');


neCmokay.onmousedown = function(e) { // 1. отследить нажатие

    // подготовить к перемещению
    // 2. разместить на том же месте, но в абсолютных координатах
    neCmokay.style.position = 'absolute';
    moveAt(e);
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.appendChild(neCmokay);

    neCmokay.style.zIndex = 1000; // показывать мяч над другими элементами

    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(e) {
        neCmokay.style.left = e.pageX - neCmokay.offsetWidth / 2 + 'px';
        neCmokay.style.top = e.pageY - neCmokay.offsetHeight / 2 + 'px';
    }

    // 3, перемещать по экрану
    document.onmousemove = function(e) {
        moveAt(e);
    };

    // 4. отследить окончание переноса
    neCmokay.onmouseup = function() {
        document.onmousemove = null;
        neCmokay.onmouseup = null;
    };

    neCmokay.ondragstart = function() {
        return false;
    };
};