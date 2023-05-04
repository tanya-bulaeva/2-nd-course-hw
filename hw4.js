//задание 1
let hi='0';
while (hi<2){
    console.log('Привет');
    hi++
};

//задание 2
let i = 1;
while (i<=5){
    console.log(i);
    i++;
};
//задание 3
let d = 7;
while (d<=22){
    console.log(d);
    d++;
};
//задание 4
const obj={
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}
for (let key in obj){
    console.log (`${key} - зарплата ${obj[key]} долларов`)
}
//задание 5

for (let n = 1000, num=1; n >= 50; num++) {
n=n/2;
console.log(n);
console.log(num);
}

//задание 6
for(let fr= 5; fr<=31; fr+=7){
        console.log(`Сегодня пятница, ${fr}-е число. Необходимо подготовить отчет.`)
}
