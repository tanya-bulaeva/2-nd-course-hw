//задание 1 clfyj 
function amountOfElements(str, letter) {
    let strSplit = str.split('').filter((el) => el == letter);
     console.log(strSplit.length);
 }
 amountOfElements('hello', 'l');
//задание 2++
// 2++ Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.++
function squareSum (num){
    return num.map(i => Math.pow (i, 2)).reduce((intermediate, value) => intermediate + value, 0)
}
console.log (squareSum ([1, 2, 2])) 

//задание 3++
const nearest_sq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
console.log(nearest_sq(111)); 
console.log(nearest_sq(144)); 

function nearestSq(n){
 return Math.pow(Math.round(Math.sqrt(n)), 2);

}
console.log(nearestSq(111)); 
console.log(nearestSq(144));


//задание 4++
let line = 'world';
let lineReverse = line.split('').reverse().join('');
console.log(lineReverse);

function solution(str){
  const lineReverse = str.split('').reverse().join('');
  return (lineReverse)
   }
   
solution ('world')


function solution(str){
    const lineReverse = str.split('').reverse().join('');
    console.log (String(lineReverse))
     }
     
  solution ('world')



//задание 5++
function addLength(str) {
    let strArr = str.split(' ');
    return strArr.map(item => item + ' ' + item.length);
}

console.log (addLength('fsssff ddd reggggggg'));

//задание 6++
function mango(quantity, price) {
    let cost = quantity - Math.floor(quantity/3);
    return cost*price;
}
mango(5, 2);

function mango(quantity, price) {
    let cost = Math.trunc(quantity/3);
    return  (quantity - cost) * price;
}
mango(5, 2);

//задание 7++
function litres(n) {
    return Math.floor(n * 0.5)
}
litres(3);


let time = 3;
let litres = Math.floor(time * 0.5);
console.log (litres)

let time1 = 6.7;
let litres1 = Math.floor(time1 * 0.5);
console.log (litres1)

//задание 8++
let arr111 = [1, -2, 3, -4];
invert = arr111.map(item => {
    if (item >= 0) {
       return -Math.abs(item)
    } else if (item < 0)
    return Math.abs(item)
}) //[-1, 2, -3, 4] 


function invert(array){
    let array = [];
   array2 = array.map(item => {
        if (item >= 0) {
           return -Math.abs(item)
        } else if (item < 0)
        return Math.abs(item)
    })
}

//задание 9++
function exponentiation (n){
    array = [];
      for (i = 0; i <= n; i++) {
           array.push(Math.pow(2, i));
    }
    return array;
  }
  
  console.log(exponentiation(2));


//задание 10//нет lenght 
function increase(x){
    return x.reduce(function(product, n){
        return product * n;
    }, 1)
  }
//нет reduce и условный оператор
  function grow(x){
    let prod = 1
     for( let i = 0; i < x.length; i ++){
     prod  *= x[i]
     }
     return prod
    }

    function grow(arr) {
        return arr.reduce((result, i) => result * i, 1);
      }
      grow([1, 2, 3, 4]);  // 24
      grow([4, 1, 1, 4]);  // 16


    const array = [5, 123, 556, 78, 3];
    const res = array.reduce((acc, rec) => acc * rec);

console.log(res);



    let arr444 = [1,2,3,4];
invert = arr444.reduce((accumulator, currentValue) => {if (arr444.length > 0){ return accumulator * currentValue}}) //не работает

function grow(x){
invert = x.reduce((accumulator, currentValue) => {if (x.length > 0){ return accumulator * currentValue}})//не работает
return invert
}

//задание 8++
let arr333 = [1, -2, 3, -4];
invert = arr333.map(item => {
    if (item >= 0) {
       return -Math.abs(item)
    } else if (item < 0)
    return Math.abs(item)
}) //[-1, 2, -3, 4] 


function invert(array){
   array2 = array.map(item => {
        if (item >= 0) {
           return -Math.abs(item)
        } else if (item < 0)
        return Math.abs(item)
    })
    return array2
} invert ([1, -2, 3, -7])