//Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
//Примечание. Пустые массивы должны возвращать 0.
const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
  };
  
  const numbers = [1, 2, 3, 4];
  console.log(getAverage(numbers)); // => 2.5

  //вариант 2
  const arr = [1, 3, 5, 7, 9, 11];

const getAverage1 = (numbers) => {
  let sum1 = 0; // объявляем переменную, в которой будет храниться сумма всех чисел массива
  for (let i = 0; i < numbers.length; i += 1) { // инициализируем цикл
    sum1+= numbers[i]; // на каждой итерации прибавляем к сумме значение текущего элемента массива
  }
  return sum1 / numbers.length; // возвращаем среднее арифметическое
};

console.log(getAverage1(arr)); // => 6

//Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
//Если вхождений не найдено, должно быть возвращено число 0.
function amountOfElements(str, el) {
    return str.split(el).length - 1;
}
amountOfElements('hello', 'l') //рабочий код но без фильтра

function name(str, el) {
    return str.lenght (function (el){ 
        str.filter ((el) => {str.split('')})
    })
    
}
 name('hello', 'l') 

 function num(str, el) {
  let strLength = str.split('').length;
      return strLength;
      }
  
num("hello"); // разбивает строку и возвращает длину строки, не трогать 

function num(str, letter) {
    let strSplit = str.split('');
    let a = strSplit.filter ((el) => el == letter) ;
    return a.lenght
            }
    
  num("hello", "l"); 

  function num(str, eletter){
    return str.split('').filter((it) => it ==  letter).lenght;

  }
    num("hello", "l"); 

// 2++ Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.++
function squareSum (num){
    return num.map(i => Math.pow (i, 2)).reduce((intermediate, value) => intermediate + value, 0)
}
console.log (squareSum ([1, 2, 2])) // не менять

//9
function powersOfTwo(n){
    array = [];
      for (i = 0; i <= n; i++) {
           array.push(Math.pow(2, i));
    }
    return array;
  }
  
  console.log(powersOfTwo(2));
  //5
  function addLength(str) {
    let strArray = str.split(' ');
    return strArray.map(item => item + ' ' + item.length);
}

console.log (addLength('dshshfjhf ksjsjdjs'));


//3
//Ваша задача состоит в том, чтобы найти ближайшее квадратное число nearest_sq(n)или nearestSq(n)положительное целое число n.
//Например, если n = 111, то nearest\_sq(n)( nearestSq(n)) равно 121, так как 111 ближе к 121, квадрату 11, чем 100, квадрату 10.
//Если это n уже идеальный квадрат (например n = 144, n = 81, и т. д.), вам нужно просто вернуть n.
//Math.sqrt и условное ветвление
function nearest_sq(n) {
    if (Math.sqrt(n) = Math.sqrt(n)) {
     return n; 
    } else if (Math.sqrt(n) > Math.sqrt(n)){
        return Math.sqrt(n-1)}
}
nearest_sq(144)

//4 Завершите решение так, чтобы оно перевернуло переданную в него строку. Split, reverse, join:
//'world'  =>  'dlrow'
//'word'   =>  'drow'

let line1 = 'world';
let lineReverse1 = line1.split('').reverse().join('');
console.log(lineReverse1);

//Есть предложение «3 по цене 2» (или «2+1» , если хотите) на манго. Для данного количества и цены (за манго) рассчитайте общую стоимость манго.
//Арифметические операторы, условное ветвление:
//function mango(a,b) {
 //   if (a ){
   //    return `${a} mangoes for ${b} $ per unit = $ ${a*b}` 
   // }
   
//}
mango (2, 3)

//Натан любит кататься на велосипеде.
//Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
//Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
//Арифметические операторы, Math.floor():
function water(n) {
    return Math.floor(n * 0.5)
}
water (3)

//Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.
//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//map(), условный оператор:

function invert(arr1) {
let arr1 = [];
invertis = arr1.map(item => {
     if (item > 0) {
        return item *=-1;
     }
})}

console.log(invert([1, 2, 3]))

let arr2 = [1, 2, 3, 4];
invertis2 = arr2.map(item => {
    if (item > 0) {
       return item *=-1;
    } else {
        Math.abs (item)
    }
})


//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []

let arr3 = [1, 2, 3, 4];
invertis3 = arr3.map(item => {
    if (item > 0) {
       return item *=-1;
    }
})
//получилось из положительных сделать отрицательные
let arr4 = [1, -2, 3, -4];
invertis4 = arr4.map(item => {
    if (item > 0) {
       return -Math.abs(item)
    } else if (item < 0)
    return Math.abs(item)
}) //[-1, 2, -3, 4] 
