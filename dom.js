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

const pContainer = document.querySelector(".products-container");

for (let product of productsData) {
  const productCard = createProductCard(product);
  pContainer.append(productCard);
}
