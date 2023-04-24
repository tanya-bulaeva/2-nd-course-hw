
let a = 20; // задание 1
alert(a); 

let relese = 2007; // задание 2
alert (relese);

let creator = `Brendan Eich`; //задание 3
alert (creator);

let x = 10; //задание 4
let y = 2;
alert(10+2);
alert(10-2);
alert(10*2);
alert(10/2);

let result = 2**5; //задание 5
alert(result);

//задание 6, замена переменной a на d 
let d = 9; 
let b = 2;
alert (d/b);

//задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//задание 8
let age = prompt (`Сколько вам лет?`);
alert (age);

// задание 9.1-9.3
const user = { 
    name: `Ju`,
    age: 32,
    isAdmin: false
   };

user['city of residence'] = `Ufa`; //задание 9.1
user.age=45; //задание 9.2
delete user['city of residence']; //задание 9.3

//задание 9.4
let info = prompt(`Какую информацию хотите узнать о пользователе?`);

alert(user[info]);

//задание 10
let userName = prompt(`Как вас зовут?`);
alert(`Привет ${userName}!`);