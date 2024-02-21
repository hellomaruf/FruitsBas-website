let counter = 0;
let sumOfPrice = 0;
let addItems = 0;
let leftCount = 6;
let addToCartBtn = document.getElementsByClassName("add-to-cart-btn");
for (const button of addToCartBtn) {
  button.addEventListener("click", function () {
    let name = button.parentNode.parentNode.childNodes[1].innerText;
    console.log(name);
    let priceText =
      button.parentNode.parentNode.childNodes[3].innerText.split(" ")[1];
    let price = parseInt(priceText);
    console.log(price);
    let category =
      button.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];
    console.log(category);

    //   added counter

    // append name******
    let nameDiv = getValueById("name");
    let p = document.createElement("p");
    counter++;
    p.innerText = counter + ". " + name;
    nameDiv.appendChild(p);

    // append price*********
    let priceDiv = getValueById("price");
    let p1 = document.createElement("p");
    p1.innerText = price + " $";
    priceDiv.appendChild(p1);

    // append category********
    let categoryDiv = getValueById("category");
    let p2 = document.createElement("p");
    p2.innerText = category;
    categoryDiv.appendChild(p2);

    //   sum of price**********
    sumOfPrice += price;
    console.log(sumOfPrice);

    let totalPrice = getValueById("total-price");
    totalPrice.innerText = sumOfPrice;

    // added grand total**********
    let grandTotal = getValueById("grand-total");
    grandTotal.innerText = sumOfPrice;

    //   added items count*********
    addItems++;
    let addItemsNum = getValueById("add-items");
    addItemsNum.innerText = addItems;

    // added left count********
    leftCount--;
    let left = getValueById("left");
    left.innerText = leftCount;
  });
}

function getValueById(id) {
  let value = document.getElementById(id);
  return value;
}
getValueById("name");
