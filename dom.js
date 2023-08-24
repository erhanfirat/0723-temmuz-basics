/** JSDOC
 * It creates IconButton Component
 * @param {String} btnText text of button
 * @param {String} iconClass class names of the icon
 * @returns Button element with icon
 */
function createIconButton(btnText, iconClass) {
  const btn = document.createElement("button");
  // btn.classList.add("btn")
  // btn.setAttribute("class", "btn");
  // btn.className = "btn";
  btn.classList = "btn";
  btn.textContent = btnText;

  const i = document.createElement("i");
  i.setAttribute("class", iconClass);

  btn.prepend(i);
  return btn;
}

/**
 * It creates Product Card component
 * @param {Product} product product data
 * @returns ProductCard component
 */
function createProductCard(product) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("product-card");

  const img = document.createElement("img");
  img.setAttribute("src", product.img);

  const h3 = document.createElement("h3");
  h3.textContent = product.name;

  const p = document.createElement("p");
  p.textContent = product.description;

  const p2 = document.createElement("p");
  p2.textContent = product.price;

  const inceleBtn = createIconButton("İncele", "fa-solid fa-magnifying-glass");

  const sepeteEkleBtn = createIconButton(
    "Sepete Ekle",
    "fa-solid fa-cart-plus"
  );

  cardDiv.append(img);
  cardDiv.append(h3);
  cardDiv.append(p);
  cardDiv.append(p2);
  cardDiv.append(inceleBtn);
  cardDiv.append(sepeteEkleBtn);

  return cardDiv;
}

function createProductCards(productsData) {
  const pContainer = document.querySelector(".products-container");

  for (let product of productsData) {
    const productCard = createProductCard(product);
    pContainer.append(productCard);
  }
}

//----------------------------------

// const sifirdanYuzeKadarRastgeleCiftSayiBul = () => {
//   return new Promise((resolve, reject) => {
//     console.log("düşünüyoruummm…");
//     setTimeout(() => {
//       const sayi = Math.floor(Math.random() * 100);
//       if (sayi % 2 === 0) {
//         resolve(sayi);
//       } else {
//         reject(sayi);
//       }
//     }, 3000);
//   });
// };

// const sayiPromise = sifirdanYuzeKadarRastgeleCiftSayiBul();
// // sayiPromise yeni bir promise objesidir

// // Promise chaining

// sayiPromise
//   .then((response) => {
//     console.log("sayiPromise then success response: ", response);
//     return response + " başarılı";
//   })
//   .then((res) => {
//     console.log("2. then çalıştı ", res);
//     return "ali";
//   })
//   .catch((response) => {
//     console.log("sayiPromise catch error response: ", response);
//     throw response + " çift değil!";
//   })
//   .catch((response) => {
//     console.log("2. catch: ", response);
//     throw "Sonuç hatalı!";
//   })
//   .then((res) => {
//     console.log("3. then çalıştı ", res);
//   })
//   .finally(() => {
//     console.log("hatasıyla doğrusuyla işlem sonlandı!");
//   });

axios
  .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
  .then((res) => res.data)
  .then((productsData) => {
    createProductCards(productsData);
  })
  .catch((err) => {
    console.error("axios isteğinde hata oluştu", err);
  });

const getProducts = async function () {
  try {
    const response = await axios.get(
      "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products123"
    );
    console.log("response: ", response);
  } catch (err) {
    console.log(err);
  }
};

getProducts();
