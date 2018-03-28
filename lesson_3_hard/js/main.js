var str = "урок-3-был слишком легким";
var strLenght = str.length;
var str2;

for(var i = 0; i < strLenght; i++) {
 if(i == 0) {
 	str2 = str[i].toUpperCase();
 }else {

 	if(str[i] == "-"){
 		str2 = str2 + " ";
 	}else {
 		str2 = str2 + str[i];
 	}
 	
 }
}

console.log(str2);


/*Функція selectWord отримує 2 параметри: 
перший параметр змінна яка містить строку
другий параметр слово яке потрібно знайти в цій строці 
функція повертає слово яке потрібно було знайти
*/

function selectWord(string, wordToSelect) {

	var selectedWord = wordToSelect;
 var lengthSelectedWord = selectedWord.length;
 var IndexSelectedWord = string.indexOf(selectedWord);
 var result;

 for(i = IndexSelectedWord; i < IndexSelectedWord + lengthSelectedWord; i++) {
	 if(i == IndexSelectedWord) {
	  result = string[i];
	 }else {
		 result = result + string[i];
	 }
 }
 return result;
}


/*Функція changeWord приймає строку і замінює два остані символи строки на "О"*/

function changeWord(wordToChange) {

 var wordToChange = wordToChange;
 var lengthWordToChange = wordToChange.length;
 var result;

 for(i = 0; i < lengthWordToChange; i++) {
  if(i == 0) {
  	result = wordToChange[i];
  }else if(i == lengthWordToChange - 2 || i == lengthWordToChange - 1) {
  	result = result + "O";
  }else {
  	result = result + wordToChange[i];
  }
 }
 return result;
}

alert(changeWord(selectWord(str,"легким")));



var sum = 0;
var arr = [20, 33, 1, "Человек", 2, 3];
for(i = 0; i < 6; i++) {
	if(!isNaN(arr[i])) {
  sum = sum + Math.pow(arr[i],3);
	}
}
alert(Math.sqrt(sum)); 