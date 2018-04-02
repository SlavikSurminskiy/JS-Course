let open                = document.getElementById("open-btn"),
    name_value          = document.getElementsByClassName("name-value")[0],
    budget_value        = document.getElementsByClassName("budget-value")[0],
    goods_value         = document.getElementsByClassName("goods-value")[0],
    items_value         = document.getElementsByClassName("items-value")[0],
    employers_value     = document.getElementsByClassName("employers-value")[0],
    discount_value      = document.getElementsByClassName("discount-value")[0],
    isopen_value        = document.getElementsByClassName("isopen-value")[0],

    goods_item          = document.getElementsByClassName("goods-item"),
    goods_btn           = document.getElementsByTagName("button")[1],
    budget_btn          = document.getElementsByTagName("button")[2],
    employers_btn       = document.getElementsByTagName("button")[3],
    choose_items        = document.querySelector(".choose-item"),
    time_value          = document.querySelector(".time-value"),
    count_budget_value  = document.querySelector(".count-budget-value"),
    hire_employers_item = document.querySelectorAll(".hire-employers-item");

let money,
    price;

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: [],
	open: false,
	discount: false,
	shopItems: []
}


open.addEventListener('click', () => {

	money = prompt("Ваш бюджет?", "");

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет?", "");
	}

	budget_value.textContent = money;

	name_value.textContent = prompt("Назва вашого магазину?", "").toUpperCase();

	discount(money); // виклик функції discount
	
});


goods_btn.addEventListener('click', () => {

	for (let i = 0; i < goods_item.length; i++) {

		let a = goods_item[i].value;

		if( (typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		}else {
			i--;
		}

	}

});

choose_items.addEventListener('change',() => {

	let items = choose_items.value;

	if(isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		items_value.textContent = mainList.shopItems;
	}

});

time_value.addEventListener('change',() => {

	let time = time_value.value;

	if(time > 8 && time < 20) {
		mainList.open = true;
	}else {
		mainList.open = false;
	}

	if(mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
	}else {
		isopen_value.style.backgroundColor = 'red';
	}

});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {

	for(let i = 0; i < hire_employers_item.length; i++) {
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;
		employers_value.textContent += mainList.employers[i] + ", ";
	}

});

/*Discount function*/

function discount(z) {

	if(money > 1000) {
		mainList.discount = true;
		discount_value.style.backgroundColor = 'green';
	}else {
		mainList.discount = false;
		discount_value.style.backgroundColor = 'red';
	}

 if(mainList.discount == true) {
 	discount_value.style.backgroundColor = 'green';
 }else {
 	discount_value.style.backgroundColor = 'red';
 }

}