var row = prompt("Скільки рядків буде в матриці?",'');
var col = prompt("Скільки стовпців буде в матриці?",'');

var arr  = [];

for(var i = 0; i < row; i++) {
	arr.push([]);
}

/* Matrix 

  0/0 0/1 0/2 0/3 0/4 ...

  1/0 1/1 1/2 1/3 1/4 ...

  2/0 2/1 2/2 2/3 2/4 ...

  ...

  ...

*/

/*Запонюємо матрицю рандомними числами від 0 до 9*/
for(i = 0; i < row; i++) {
	for(var z = 0; z < col; z++) {
  arr [i][z] = parseInt((Math.random()*10));
	}
}
/*Виводимо матрицю в консоль*/
for(i = 0; i < row; i++) {
	console.log(arr[i]);
}