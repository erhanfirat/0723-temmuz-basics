function calculateTotal(items, discountCode) {
  function getDiscount(code) {
    if (code === "SALE10") {
      return 0.1;
    } else if (code === "SALE20") {
      return 0.2;
    } else {
      return 0;
    }
  }

  const discount = getDiscount(discountCode);
  let total = 0;

  for (let item of items) {
    total += item.price;
  }

  return total * (1 - discount);
}

const sepet1Fiyat = calculateTotal(
  // Object Array
  [
    { name: "Klavye", price: 150 },
    { name: "Mouse", price: 2000 },
    { name: "Mousepad", price: 350 },
  ],
  "SALE20"
);

const sepet2Fiyat = calculateTotal(
  [{ price: 7000 }, { price: 3000 }],
  "SALE10"
);

console.log("sepet1Fiyat > ", sepet1Fiyat);
console.log("sepet2Fiyat > ", sepet2Fiyat);
