var budget    = +prompt("Ваш бюджет?");
var shopName  = prompt("Название вашего магазина?");
var prise     = 100;

var shopGoods = [];

for (var i = 0; i < 3; i++) {
	var a = prompt("Какой тип товаров будем продавать?");
	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != "") {
		shopGoods [i] = a;
	}
}

mainList = {
 budget: budget,
 name: shopName,
 shopGoods: shopGoods,
 employers: {
  firstEmployers: '',
  secondEmployers:'', 
  thirdEmployers: '',
  fourthEmployers:''
 },
 open: true,
 discount: false
}

/* Функції*/
function calcBudget(budget) {
	alert("Ваш бюджет на 1 день " + budget/30);
}

function isDiscount() {
	if(mainList.discount == true) {
		prise = prise * 0.8;
	}
}

function addEmployers() {
	mainList.employers.firstEmployers   = prompt("Введіть ім'я працівника №1");
	mainList.employers.secondEmployers  = prompt("Введіть ім'я працівника №2");
	mainList.employers.firstEmployers   = prompt("Введіть ім'я працівника №3");
	mainList.employers.fourthEmployers  = prompt("Введіть ім'я працівника №4");
}

