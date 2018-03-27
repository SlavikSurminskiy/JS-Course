var budget    = +prompt("Ваш бюджет?");
var shopName  = prompt("Название вашего магазина?");

var shopGoods = [];

for (var i = 0; i < 3; i++) {
	var a = prompt("Какой тип товаров будем продавать?");
	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != "") {
		shopGoods [i] = a;
	}
}

/*
var i = 0;
do {
	var a = prompt("Какой тип товаров будем продавать?");
	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != "") {
		shopGoods [i] = a;
	}
	i++;
}while(i < 3);
*/

/*
var i = 0;
while(i < 3) {
 var a = prompt("Какой тип товаров будем продавать?");
	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != "") {
		shopGoods [i] = a;
	}
 i++;
}
*/

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