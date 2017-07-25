/**
 * Created by Vzhak on 25.07.2017.
 */


// Домашнее задание:
//   Необходимо создать функцию которая встроит на страницу плеер.
//   В консоль необходимо выводить отладочную информацию по действиям пользователя:
//   пользовать начал воспроизведение, нажал паузу/стоп, если нажал стоп,
//   то выводить в минутах и секундах сколько он уже просмотрел видео.
//   Кроме Пауза/Плей необходимо предусмотреть кнопку Стоп.
//   Плеер генерировать с помощью JavaScript. Пример вызова функции:
//
//     makePlayer('#player, 'http://play.google.com/video.mp4');
//   первый аргумент селектор элемента куда необходимо вставить плеер, второй - ссылка на видеофайл.


function makePlayer(node, source) {
    let element = document.querySelector(node);
    let vid = document.createElement('video');

    vid.src = source;
    vid.setAttribute('controls', 'controls');
    let stopBut = document.createElement('input');
    stopBut.type = "button";
    stopBut.value = "stop";
    stopBut.setAttribute('id', "stopBtn");

    vid.addEventListener('play', playInf);
    function playInf() {
        console.log('Пользователь начал воспроизведение')
    }

    vid.addEventListener('pause', pauseInf);

    function pauseInf() {
        console.log('Пользователь остановил воспроизведение')
    }

    stopBut.addEventListener('click', stop);
    function stop() {
        console.log(`Просмотрено  ${(vid.currentTime/60).toFixed(1)} минут  и ${(vid.currentTime).toFixed(2)} секунд видео `);
        vid.pause();
        vid.currentTime = 0;

    }

    element.appendChild(vid);
    element.appendChild(stopBut);
}
