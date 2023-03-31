console.log("N1");
console.log("");

let a = 1;
while (a <= 50) {
  console.log(a);
  a++;
}
console.log("");

let b = 35;
while (b >= 8) {
  console.log(b);
  b--;
}

//N2

let c = 89;
while (c >= 11) {
  document.write(c + "<br>");
  c--;
}

console.log("");

console.log("N3");

let sum = 0;
for (let d = 0; d <= 100; d++) {
  sum += d;
}
console.log(sum);

console.log("");

//N4

let e = prompt("Ввести число от 1 до 5");

let sum1 = 0;

if (e >= 1 && e <= 5) {
  for (let f = 0; f <= e; f++) {
    sum1 += f;
  }
  alert(sum1);
} else {
  alert("Число не соответствует критерию");
}

console.log("N5");
console.log("");

for (let g = 8; g <= 56; g++) {
  if (g % 2 == 0) {
    console.log(g);
  }
}

console.log("");

let g = 8;
while (g <= 56) {
  if (g % 2 == 0) {
    console.log(g);
  }
  g++;
}

console.log("");

console.log("N6");

for (let h = 2; h <= 10; h++) {
  for (let i = 2; i <= 10; i++) {
    console.log(`${h} * ${i} = ${h * i}`);
  }
}

console.log("");

console.log("N7");

let n = 1000;
let num = 0;
while (n > 50) {
  num++;
  n /= 2;
}
console.log(n);
console.log(num);

console.log("");

console.log("N8");

let summ = 0;
count = 0;

while (1) {
  let j = +prompt("Введите число");

  if (j === 0) break;

  if (isNaN(j)) {
    alert("Введено не число");
    continue;
  }

  summ += j;
  count++;
}

console.log("Сумма", summ);
console.log("Среднее арифметическое", summ / count);

console.log("");

console.log("N9");

let nums = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";

let min = Infinity,
  max = -Infinity;

let buff = "";

for (let m = 0; m < nums.length; m++) {
  if (nums[m] !== " ") {
    buff += nums[m];
  } else {
    if (+buff > max) max = +buff;
    if (+buff < min) min = +buff;
    buff = "";
  }
}

console.log(max, min);

console.log("");
console.log("N10");

let numm = prompt("Вводить только числа !");
let len = numm.length;
(summ = 0), (rev = "");

for (let n = 0; n < len; n++) {
  summ += +numm[n];
}

for (let n = len - 1; n >= 0; n--) {
  rev += numm[n];
}

console.log(
  `Вводимое число ${numm}, цифр в числе ${len}, сумма ${summ}, обратный порядок ${rev}`
);
