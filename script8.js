console.log("№8");

let a = 8;
b = 3;

{
  //a+2(x-b)=16
  //2(x-b)=(16-a)
  //(x-b)=(16-a)/2
  //x=(16-a)/2+b;
  let x = (16 - a) / 2 + b;
  console.log(x);
  console.log(a + 2 * (x - b));
}

{
  //b(x+15)=a+6x
  //bx+b15=a+6x
  //bx-6x=a-b15
  //x(b-6)=a-b15
  //x=(a-b15)/(b-6)
  let x = (a - b * 15) / (b - 6);
  console.log(x);
  console.log(b * (x + 15) === a + 6 * x);
}

{
  //x+2x+ax+bx=23780
  //x(1+2+a+b)=23780
  //x(3+a+b)=23780
  //x=23780/(3+a+b)
  let x = 23780 / (3 + a + b);
  console.log(x);
  console.log(x + 2 * x + a * x + b * x);
}

console.log("");
