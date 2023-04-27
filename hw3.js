// задание 1
let password = 'пароль';
let userAnswer = prompt ('Введите пароль');
if (userAnswer === 'пароль') {
alert("Пароль введен верно");
} else {
alert("Пароль введен неправильно")
};

//задание 2
let c1 = 0;
let result1 = prompt ('Введите число');
if (result1 >= 0 && result1 <= 10){
    alert ("Верно");
} else {
    alert ("Неверно")};

let c2 = 10;
let result2 = prompt ('Введите число');
if (result2 >= 0 && result2 <= 10){
    alert ("Верно");
} else {
    alert ("Неверно")};

let c3 = -3;
let result3 = prompt ('Введите число');
if (result3 >= 0 && result3 <= 10){
    alert ("Верно");
} else {
    alert ("Неверно")};

    
let c4 = 2;
let result4 = prompt ('Введите число');
if (result4 >= 0 && result4 <= 10){
    alert ("Верно");
} else {
    alert ("Неверно")};

//задание 3
let d=195;
let e=58;

if (d >100 ||e >100){
alert ("Верно");
} else {
    alert ("Неверно");
}

//задание 4 
let a = '2';
let b = '3';
alert (Number(a) + Number(b));


//задание 5 
let monthNumber =  prompt ('Ведите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится')
switch (monthNumber ) {
	case '1':
		console.log('Зима');
		break;
	case '2':
		console.log('Зима');
		break;
    case '3':
            console.log('Весна');
        break;
    case '4':
            console.log('Весна');
            break;
    case '5':
		console.log('Весна');
		break;
	case '6':
		console.log('Лето');
		break;
    case '7':
        console.log('Лето');
            break;
    case '8':
        console.log('Лето');
            break;
    case '9':
		console.log('Осень');
		break;
    case '10':
        console.log('Осень');
            break;
    case '11':
        console.log('Осень');
            break;
    case '12':
        console.log('Зима');
            break;
	default: 
    console.log('Попробуй еще раз. В году всего 12 месяцев');
		break;
    }

