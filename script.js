function season () {
    let monthNumber = prompt ("Ведите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится");
    if (monthNumber <= 12 || monthNumber <= 2){
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
