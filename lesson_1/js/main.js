var budget    = +prompt("Ваш бюджет?");
var shopName  = prompt("Название вашего магазина?");

var shopGoods = [];
shopGoods [0] = prompt("Какой тип товаров будем продавать?");
shopGoods [1] = prompt("Какой тип товаров будем продавать?");
shopGoods [2] = prompt("Какой тип товаров будем продавать?");

mainList = {
 budget: budget,
 name: shopName,
 shopGoods: shopGoods,
 employers: {
   firstEmployers: "Bob",
   secondEmployers: "Martin",
   thirdEmployers: "Drake"
 },
 open: true
}

alert("Ваш бюджет на 1 день " + budget/30);

