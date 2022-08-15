document.querySelector("button").onclick = muClick;

function muClick() {
  let a = Number(document.querySelector(".int-val").value);

  let sum1 = a * 2;
  let sum2 = a * 3;
  let sum3 = a * 4;
  let sum4 = a * 5;
  let sum5 = a * 6;

  document.querySelector(".out1").innerHTML = sum1;
  document.querySelector(".out2").innerHTML = sum2;
  document.querySelector(".out3").innerHTML = sum3;
  document.querySelector(".out4").innerHTML = sum4;
  document.querySelector(".out5").innerHTML = sum5; ///
}

let arrNumb = [2, 10, 4, 6, 8, 10];

let sum = 0;

for (let i = 0; i < arrNumb.length; i++) {
  sum = sum + arrNumb[i];
}
console.log(arrNumb);

console.log(sum);

let b = arrNumb.reduce((prev, item, index) => {
  return prev + item;
}, 0);

console.log(`сумма массива 2 = ${b} `);

arrNumb = [2, 10, 34, 6, 65, 10];

let max = 0;
for (let i = 0; i < arrNumb.length; i++) {
  if (arrNumb[i] > max) {
    max = arrNumb[i];
  }
}
console.log(max);

let c = arrNumb.reduce((prev, item) => {
  if (prev < item) {
    return item;
  } else {
    return prev;
  }
});

console.log(c);
