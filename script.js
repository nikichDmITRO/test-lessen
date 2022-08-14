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
  document.querySelector(".out5").innerHTML = sum5;
}
