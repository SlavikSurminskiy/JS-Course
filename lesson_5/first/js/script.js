/*1 пункт*/
var menuItem = document.querySelectorAll(".menu li");
var ul = document.getElementsByTagName("ul");

menuItem[1].style.order = "1";
menuItem[3].style.order = "2";

var newLi = document.createElement("li");
newLi.classList.add('menu-item');                      
newLi.appendChild(document.createTextNode("Пятый пункт"));                             
newLi.style.order = "3";
ul[0].appendChild(newLi);

/*2 пункт*/
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

/*3 пункт*/
var title = document.getElementById("title");
title.innerHTML = "Мы продаем только подлинную технику Apple";

/*4 пункт*/
var adv = document.getElementsByClassName("adv");
adv[0].remove();

/*5 пункт*/
var answer = prompt("Как Вы относитесь к технике Apple?","");
