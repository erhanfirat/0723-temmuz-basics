// closure
function sayacUret(initialValue = 0, incrementCount = 1) {
  let sayac = initialValue;

  return function () {
    sayac += incrementCount; // ==> sayac = sayac + incrementCount;
    return sayac; // closure
  };
}

const sayac1 = sayacUret(100, 5);

console.log("sayac1: ", sayac1()); // 105
console.log("sayac1: ", sayac1()); // 110   sayac: 2
console.log("sayac1: ", sayac1()); // 115   sayac: 3
console.log("sayac1: ", sayac1()); // 120   sayac: 4

console.log("-----------------");

const sayac2 = sayacUret();
console.log("sayac2: ", sayac2()); // 1
console.log("sayac2: ", sayac2()); // 1
console.log("sayac2: ", sayac2()); // 1
console.log("sayac2: ", sayac2()); // 1
console.log("sayac2: ", sayac2()); // 1

console.log("-----------------");

console.log("sayac1: ", sayac1()); // 4   sayac: 4
console.log("sayac1: ", sayac1()); // 3   sayac: 4
console.log("sayac1: ", sayac1()); // 3   sayac: 4
console.log("sayac1: ", sayac1()); // 3   sayac: 4
