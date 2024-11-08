const sequence = document.querySelector("h2")! as HTMLHeadingElement;
const choosedNum = document.querySelector("input")! as HTMLInputElement;
const submit = document.querySelector("button")! as HTMLButtonElement;
const result = document.querySelector("h4")! as HTMLHeadingElement;

let arr: number[] = [0, 1];
let i;

for (i = 0; i < 18; i++) {
  arr.push(arr.at(-2)! + arr.at(-1)!);
}
console.log("Fibonacci sequence 1-20:");
console.log(...arr);
sequence.textContent = arr.join(" ");

let fibonacci: number[] = [0, 1];
let x;

for (x = 0; x <= 999; x++) {
  fibonacci.push(fibonacci.at(-2)! + fibonacci.at(-1)!);
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let choosedNumValue: number = +choosedNum.value;
  let fibonacciValue = BigInt(fibonacci.at(choosedNumValue - 1)! as number);
  if (choosedNumValue > 0 && choosedNumValue <= 999) {
    result.textContent = `The Fibonacci number at position ${choosedNumValue} is ${fibonacciValue}`;
    choosedNum.value = "";
  } else {
    result.textContent = `Choose number between 1 and 999`;
  }
});
