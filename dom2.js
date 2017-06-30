// addClass(document.querySelectorAll('h1'), 'kek');

// 1) Написать функцию addClass(node, className) которая выполняет добавление класса. Должна быть поддержка IE от 9 версии.

function addClass(node, className) {
    kek = document.querySelector(node);
    kek.className += className;
}

// 2) Написать функцию removeClass(className) которая удаляет заданный класс. Должна быть поддержка IE от 9 версии.
function removeClass(node, className) {
    kek = document.querySelector(node);
    kek.className.replace(className, "");
}

// 3) Создайте меню которое по клику разворачивается/сворачивается и выводится информационное окошко, что действие
// пользователя успешно выполнено. Через 1 секунду окошко должно скрыватся.


function fall() {
    var elem = document.querySelector('#nav li');
    var massage = document.querySelector('.b-popup');
    function remAlert() {
        massage.classList.remove('open');
    }

    if (elem.classList.contains('open')) {
        elem.classList.remove('open');
        massage.classList.add('open');
        setTimeout(remAlert, 1000);
    } else {
        elem.classList.add('open');
        massage.classList.add('open');
        setTimeout(remAlert, 1000);
    };
};
document.querySelector('#nav li a').addEventListener('click', fall);