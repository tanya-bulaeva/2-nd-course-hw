//задание 1
let str = 'Задание 1';
str = str.toUpperCase();
console.log (str);

//задание 2
const arr = [];
function searchStart(arr, search) {
    arr.forEach((arr) => {
        if (arr.toLowerCase().includes(search.toLowerCase())) {
            console.log(arr);
}
    })}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

//задание 3

let x = 32.58884;
console.log (Math.floor(x));
console.log (Math.ceil(x));
console.log (Math.round (x));

//задание 4 

console.log (Math.max (52, 53, 49, 77, 21, 32));
console.log (Math.min (52, 53, 49, 77, 21, 32));

//задание 5

function randomaizer (minValue, maxValue) {
      return Math.round(Math.random()*(maxValue-minValue))+minValue;
    };
console.log (randomaizer(1, 10));


//задание 6 
function getRandomArrNumbers(n) {
    let arr = [];
    for (i = 0; i < Math.floor(n/2); i++) {
     arr.push(Math.round(Math.random() * 10) + i);
    }
    return arr;
  }
getRandomArrNumbers(11);



//задание 7

function randomaizer2(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
console.log (randomaizer2(45, 99));

//задание 8
let currentDate1 = new Date();
console.log (currentDate1);

//задание 9
let currentDate = new Date();
currentDate.setDate (currentDate.getDate()+73)
console.log (currentDate);

//задание 10
function day(days, months, year) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let myDate = new Date();
    let hour = myDate.getHours(); 
    let minute = myDate.getMinutes(); 
    let second = myDate.getSeconds();
    let fullDate =  myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + "- это " + days[myDate.getDay()].toLowerCase();
    console.log (`Дата: ${fullDate}. Время ${hour}:${minute}:${second} `)
    }
day()


//задание 11
let fruits = ['Яблоко' , 'Груша' , 'Дыня' , 'Виноград' , 'Персик' , 'Апельсин' , 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5)
alert (fruits);
let userAnswer1 = prompt ("Чему равнялся первый элемент массива?");
let userAnswer2 = prompt ("Чему равнялся последний элемент массива?");
if (userAnswer1.toLowerCase() === fruits[0].toLowerCase() && userAnswer2.toLowerCase() === fruits[1].toLowerCase()){
    alert ("Все правильно! У Вас хорошая память!")
} else if (userAnswer1.toLowerCase() === fruits[0].toLowerCase() || userAnswer2.toLowerCase() === fruits[1].toLowerCase()){
    alert ("Вы были близки к победе!")
} else {
    alert ("Попробуйте еще раз!")
};
console.log(fruits);

//для сайта
function randomFruits() {
    let fruits = ['Яблоко' , 'Груша' , 'Дыня' , 'Виноград' , 'Персик' , 'Апельсин' , 'Мандарин'];
  fruits = fruits.sort(() => Math.random() - 0.5)
  alert (fruits);
  let userAnswer1 = prompt ("Чему равнялся первый элемент массива?");
  let userAnswer2 = prompt ("Чему равнялся последний элемент массива?");
  if (userAnswer1.toLowerCase() === fruits[0].toLowerCase() && userAnswer2.toLowerCase() === fruits[-1].toLowerCase()){
      alert ("Все правильно! У Вас хорошая память!")
  } else if (userAnswer1.toLowerCase() === fruits[0].toLowerCase() || userAnswer2.toLowerCase() === fruits[-1].toLowerCase()){
      alert ("Вы были близки к победе!")
  } else {
      alert ("Попробуйте еще раз!")
  }
  };