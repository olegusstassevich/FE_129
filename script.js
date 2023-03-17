console.log("№1");

let Name = prompt("Ф.И.О.");
let age = prompt("Возраст");
let city = prompt("Город");
let company = prompt("Компания");
let phone = prompt("Телефон");
let email = prompt("E-mail");
console.log(
  `Меня зовут ${Name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: телефон ${phone}, электронный адрес ${email}.`
);

console.log("");

console.log("№2");

let year = 2023;

console.log(`${Name} родился в ${year - age} году.`);

console.log("");

alert("№3");

let str = prompt("Введите шесть любых цифр");
if (str.length === 6) {
  if (+str[0] + str[1] + str[2] == +str[3] + str[4] + str[5]) {
    alert("Дa");
  } else {
    alert("Нет");
  }
} else {
  alert("Строка не из 6 цифр");
}

console.log("");

console.log("№4");

let a = prompt("Введите цифры: 1, 0, -3");
if (a > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

console.log("");

console.log("№5");

let a1 = 10;
b = 2;
sum = a1 + b;
console.log(sum);
console.log(a1 - b);
console.log(a1 * b);
console.log(a1 / b);
if (sum > 1) {
  console.log(sum * sum);
}

console.log("");

console.log("№6");

if ((a1 > 2 && a1 < 11) || (b >= 6 && b < 14)) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

console.log("");

console.log("№7");

let n = prompt("Введите число: 0 - 59");
if (n <= 15) {
  console.log("1-ая четверть часа");
} else if (n <= 30) {
  console.log("2-ая четверть часа");
} else if (n <= 45) {
  console.log("3-ая четверть часа");
} else if (n <= 59) {
  console.log("4-ая четверть часа");
} else {
  console.log("Неверное число");
}

console.log("");

console.log("№8");

let day = prompt("Введите число: 1 - 31");
if (day <= 10) {
  console.log("Декада 1");
} else if (day <= 20) {
  console.log("Декада 2");
} else if (day <= 31) {
  console.log("Декада 3");
} else {
  console.log("Неверное число");
}

console.log("");

console.log("№9");

let days = prompt("Ввести количество дней");
console.log(`${days / 365} перевод день в год`);
console.log(`${days / 31} перевод день в месяц`);
console.log(`${days / 7} перевод день в неделю`);
console.log(`${days * 24} перевод день в часы`);
console.log(`${days * 1440} перевод день в минуты`);
console.log(`${days * 86400} перевод день в секунды`);

let year1 = days / 365;
if (year1 < 1) {
  console.log("Меньше года");
}
let month = days / 31;
if (month < 1) {
  console.log("Меньше месяца");
}
let week = days / 7;
if (week < 1) {
  console.log("Меньше недели");
}

console.log("");

console.log("№10");

let overYear = null;

if (days > 365) {
  overYear = Math.floor(days / 365);
  days = days % 365; //day %= 365;
}

console.log(days);

let mont = Math.floor(days / 31) + 1;

console.log(mont);

switch (mont) {
  case 1:
    console.log("Зима");
    console.log("Январь");
    break;
  case 2:
    console.log("Зима");
    console.log("Февраль");
    break;
  case 3:
    console.log("Весна");
    console.log("Март");
    break;
  case 4:
    console.log("Весна");
    console.log("Апрель");
    break;
  case 5:
    console.log("Весна");
    console.log("Май");
    break;
  case 6:
    console.log("Лето");
    console.log("Июнь");
    break;
  case 7:
    console.log("Лето");
    console.log("Июль");
    break;
  case 8:
    console.log("Лето");
    console.log("Август");
    break;
  case 9:
    console.log("Осень");
    console.log("Сентябрь");
    break;
  case 10:
    console.log("Осень");
    console.log("Октябрь");
    break;
  case 11:
    console.log("Осень");
    console.log("Ноябрь");
    break;
  default:
    console.log("Зима");
    console.log("Декабрь");
}
