//task 1 Використовуйте метод getElementById для пошуку <h2> елемента та змініть його текст на "Привіт".
var hello = document.getElementById("banner");
hello.innerHTML = "Привіт";

//task 2 Використовуйте метод getElementsByTagName, щоб знайти третій <li> елемент, і змініть його текст на "Світ".
var world = document.getElementsByTagName("li");
world[2].innerHTML = "Світ";

//task 3 Змініть текст другого елемента, з класом "tests" на "Ще трошки попрацюйте".
var tests = document.getElementsByClassName("tests")
tests[1].innerHTML = "Ще трошки попрацюйте";

//task 4 За допомогою властивостей, встновить калас "selected" у третього <li> елементу
var _li = document.getElementsByTagName("li");
_li[2].setAttribute('Class', 'selected');

//task 5 Встановіть атрибут title із значенням 'Вже половина завдань' для елемента <p class="tests">
tests[1].setAttribute('title', 'Вже половина завдань')

//task 6 Змініть колір другого абзацу на червоний
var _p = document.getElementsByTagName("p");
_p[0].style.color = 'red';

//task 7 Задайте розмір шрифту для другого абзацу 40px
_p[0].style.fontSize = '40px';

//task 8 Задайте властивість float: left для елементів списку
for (var i = 0; i < _li.length; i++) {
    _li[i].style.float = 'left';
}

//task 9  Видаліть заголовок h1 з текстом "My Foo Tests"
var _body = document.getElementsByTagName("body");
var _h1 = document.getElementsByTagName("h1");
_body[0].removeChild(_h1[0]);

