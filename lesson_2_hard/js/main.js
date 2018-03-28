/*ЧАСТИНА 1*/

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*визначаємо який сьогодні день*/
var d = new Date();
var indexCurrentDay = d.getDay();
var currentDay = week[indexCurrentDay];

/*створюємо список*/
var ul = document.createElement('ul');
document.body.appendChild(ul);

//заповнюємо список і стилізуємо його елементи
//вихідні дні написані жирним шрифтом
//сьгоднішній день написаний курсивом
//якщо сьогоднішній день є вихідний то він написаний жирним шрифтом + курсивом

for (var i = 0; i < 7; i++) {

 if (week[i] == currentDay && (i == 0 || i == 6)) {
	  var li = document.createElement('li');
	  ul.appendChild(li).classList.add("currentDay");
	  ul.appendChild(li).classList.add("weekendDay");
	  li.append(week[i]);
 }
 else if(week[i] == currentDay) {
 	 var li = document.createElement('li');
	  ul.appendChild(li).classList.add("currentDay");
	  li.append(week[i]);
 }
 	else if (i == 0 || i == 6) {
	  var li = document.createElement('li');
	  ul.appendChild(li).classList.add("weekendDay");
	  li.append(week[i]);
 }else {
 	 var li = document.createElement('li');
	  ul.appendChild(li);
	  li.append(week[i]);
 }

}


/*ЧАСТИНА 2*/

var arr = ['12345', '23451', '34512', '45123', '51234', '56789', '75679'];

for(var i = 0; i < 7; i++) {
	if(arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7) {
		console.log(arr[i]);
	}
}



