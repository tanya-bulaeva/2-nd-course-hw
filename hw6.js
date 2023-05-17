//задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//задание 2
const numeric = [1, 5, 4, 10, 0, 3];
numeric.indexOf(4);

//второй вариант задания 2
const numeric1 = [1, 5, 4, 10, 0, 3];
numeric1.findIndex(i => i == 4);

// задание 3 
const massiv = [1, 3, 5, 10, 20];
const NewMassiv = massiv.join(' ');
console.log(NewMassiv); 

//задание 4?
const mass = [];
for (let i = 0; i < 3; i++){
    mass[i] = [];
    for (let j = 0; j < 3; j++){
        mass [i][j] = 1;
    }
}
console.log (mass)


//задание 5
const massiv2 = [1, 1, 1];
massiv2.push(2,2,2);
console.log(massiv2);

//задание 6
const massiv3 = [9, 8, 7, 'a', 6, 5];
massiv3.sort ();
console.log(massiv3.pop());
console.log(massiv3);

//задание 7
const massiv4 = [9, 8, 7, 6, 5];
const userAnswer = prompt ("Введите число от 1 до 10");
const result = massiv4.filter((item) => userAnswer == item);
console.log (result);


//задание 8 
let line = 'abcdef';
let lineReverse = line.split('');
lineReverse = lineReverse.reverse();
lineReverse = lineReverse.join('');
console.log(lineReverse);

//второй вариант задания 8, покороче
let line1 = 'abcdef';
let lineReverse1 = line1.split('').reverse().join('');
console.log(lineReverse1);


//задание 9 
const massiv5 = [
    [1, 2, 3,],
    [4, 5, 6],
];
massiv6 = massiv5[0].concat(massiv5[1]);
console.log(massiv6);


//либо 
const massiv6 = [
    [1, 2, 3,],
    [4, 5, 6],
]; 
const massiv7 = massiv6.flat ()
console.log (massiv7)


//задание 10
const massiv8 = [2, 5, 6, 9, 10];
for (let i = 0; i < massiv8.length - 1; i++){
    console.log (massiv8[i] + massiv8 [i+1])
}


//задание 11 

function num(arr) {
   return arr.map ((item) => item ** 2)
    }
console.log (num ([2, 5, 7]))


//либо
const num1 = [2, 4, 5, 8, 9, 11];
const doubles = num1.map((num1) => num1 ** 2);
console.log (doubles); 

//задание 12
function getLengthWords(arr) {
    return arr.map((item) => item.length)
    }
console.log (getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']))

//задание 13
function filterPositive(array) {
    return array.filter ((item) => item < 0);
  }
  
  console.log (filterPositive([-1, 0, 5, -10, 56])); 
  console.log (filterPositive([-25, 25, 0, -1000, -2]));














