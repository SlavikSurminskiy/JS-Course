var num = 33721;
var result = 1;

for (var i = 1; i <= 5; i++) {
 var count = num % 10;
 var num = Math.floor(num/10);
 result = result * count;
}

console.log(result);
console.log(Math.pow(result,3));
