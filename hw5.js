//задание 1
function simile(a,b) {
    if (a>=b) {
        return b;
    } else {
        return a;
    }
}
console.log (simile(8,4));
console.log (simile(6,6))

//задание 2
function numeric(a) {
    if (a % 2 == 0) {
        return `Число четное`;
    } else {
        return `Число нечетное`;
    }
    
}
console.log (numeric(4));
console.log (numeric(5));

//задание 3.1
function squareNumber(a) {
    let mult = a**2;
    console.log (`Квадрат числа равен ${mult}`)
}
squareNumber(2)

//задание 3.2
function squareNumber(a) {
    return a**2;
}
squareNumber(2)

//задание 4
"use strict";
let age = prompt (`Сколько вам лет?`);
let welcomeMessage;
if (age < 0){
    welcomeMessage = function () {
console.log(" Вы ввели неправильное значение");
    }
} else if (age>=0 && age<=12){
    welcomeMessage = function () {
        console.log(" Привет, друг!");
            }
} else {
    welcomeMessage = function (){
        console.log("Добро пожаловать!")
    }
};
welcomeMessage();

//задание 5
function numeric(a, b) {
    if (isNaN(a) || isNaN (b)) {
   console.log  ("Одно или оба значения не являются числом")
} else {
    return a * b;
}
}
numeric ('f', 2);
numeric (5, 2);

//задание 6
function numeric() {
    let n = prompt ("Введите число");
    let f = n**3
    if (isNaN (n)){
        console.log ("Переданный параметр не является числом")
    } else {
 console.log (`${n} в кубе равно ${f}`)
    }
}
numeric ();

//задание 7
function getArea (){
    return this.radius **2 * Math.PI;
}
function getPerimeter(){
    return this.radius*2*Math.PI;
}
let circle1 = {
    radius: 3,
    getCircleArea: getArea,
    getCirclePerimeter: getPerimeter, 
};
let circle2 = {
    radius: 5,
    getCircleArea: getArea,
    getCirclePerimeter: getPerimeter,    
};
console.log (circle1.getCircleArea());
console.log (circle1.getCirclePerimeter());
console.log (circle2.getCircleArea());
console.log (circle2.getCirclePerimeter());


//задание 8

function season (n) {
        if (n <= 12 || n <= 2){
        return ( "Зима");
      } else if (n <= 5 && n >= 3) {
        return ( "Весна");
      } else if (n <= 8 && n >= 6) {
        return ("Лето");
      } else if (n <= 11 && n >=7){
        return ("Осень")
      } else {
        return ("Попробуй еще раз. В году всего 12 месяцев")
      }
}
console.log (season (12));
console.log(season(5));

