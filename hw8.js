//задание 1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
people1.sort (function (a,b) {
    if (a.age > b.age){
        return 1;
    } if (a.age < b.age) {
    return -1; 
}
});

//задание 2
function isPositive(i) {
 if (i > 0){
    return i;
 }
}

  function isMale(man) {
    if (man.gender == 'male') {
        return man;
    }
}
function filter(arr, ruleFunction) {
    for (let i = 0; i < arr.length; i++) {
        return arr.filter(ruleFunction);
   }
}
    
 console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
  const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
    
   console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//задание 3


let today = new Date();
let timerId = setInterval(() => alert(`${today}`), 3000);
setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 1000*30);

//задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
    callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

//задание 5+
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(sayHi('Глеб'), () =>{console.log('Прошла одна секунда')})
