console.time();
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
setTimeout(() => {
  console.log("6");
}, 3000);
setTimeout(() => {
  console.log("7");
}, 9000);
console.log("8");
console.log("9");
console.log("10");
for (let i = 11; i < 100000; i++) {
  console.log(i);
}
console.timeEnd();
