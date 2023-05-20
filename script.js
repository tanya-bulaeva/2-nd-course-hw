function season () {
    let monthNumber = prompt ("Ведите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится");
    if (monthNumber == 12 || monthNumber <= 2 && monthNumber > 0){
        alert ( "Зима");
      } else if (monthNumber <= 5 && monthNumber >= 3) {
        alert ( "Весна");
      } else if (monthNumber <= 8 && monthNumber >= 6) {
        alert ("Лето");
      } else if (monthNumber <= 11 && monthNumber >=7){
        alert ("Осень")
      } else {
        alert ("Попробуй еще раз. В году всего 12 месяцев")
      }
}


function randomFruits() {
  let fruits = ['Яблоко' , 'Груша' , 'Дыня' , 'Виноград' , 'Персик' , 'Апельсин' , 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5)
alert (fruits);
let userAnswer1 = prompt ("Какой было первое слово?");
let userAnswer2 = prompt ("Какой было последнее слово?");
if (userAnswer1.toLowerCase() === fruits[0].toLowerCase() && userAnswer2.toLowerCase() === fruits[6].toLowerCase()){
    alert ("Все правильно! У Вас хорошая память!")
} else if (userAnswer1.toLowerCase() === fruits[0].toLowerCase() || userAnswer2.toLowerCase() === fruits[6].toLowerCase()){
    alert ("Вы были близки к победе!")
} else {
    alert ("Попробуйте еще раз!")
}
};
