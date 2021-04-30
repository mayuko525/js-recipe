const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const beerButton = document.getElementById("beer-button")
const baitoButton = document.getElementById("baito")
const coinButton = document.getElementById("coin")
const pocketMoney = document.getElementById("my-money")
const amountMoneyDisplay = document.getElementById("amount-money")
const changeButton = document.getElementById("change")

let myMoney = 0
let amountMoney = 0

const createImage = (drink) => {
  let drinkImgSrc = ""
  if (drink === "tea") {
    drinkImgSrc =
      "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
  } else if (drink === "coke") {
    drinkImgSrc =
      "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
  } else if (drink === "beer") {
    drinkImgSrc =
      "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg"
  } else {
    drinkImgSrc =
      "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

baitoButton.onclick = function() {
  myMoney += 1000
  pocketMoney.textContent = myMoney
  // myMoney = myMoney + 1000
}

coinButton.onclick = function() {
  if (myMoney >= 100) {
    myMoney -= 100
    pocketMoney.textContent = myMoney
    amountMoney += 100
    amountMoneyDisplay.textContent = amountMoney
  }
}

if (amountMoney >= 100) {
  document.getElementById("tea-button").disabled = false
} else {
  document.getElementById("tea-button").disabled = true
}

if (amountMoney >= 130) {
  document.getElementById("coke-button").disabled = false
}
if (amountMoney >= 150) {
  document.getElementById("beer-button").disabled = false
}

teaButton.onclick = () => {
  if (amountMoney >= 100) {
    const image = createImage("tea")
    display.append(image)
    amountMoney -= 100
    amountMoneyDisplay.textContent = amountMoney
  }
}
cokeButton.onclick = () => {
  if (amountMoney >= 130) {
    const image = createImage("coke")
    display.append(image)
    amountMoney -= 130
    amountMoneyDisplay.textContent = amountMoney
  }
}
beerButton.onclick = () => {
  if (amountMoney >= 150) {
    const image = createImage("beer")
    display.append(image)
    amountMoney -= 150
    amountMoneyDisplay.textContent = amountMoney
  }
}
changeButton.onclick = function() {
  myMoney += amountMoney
  pocketMoney.textContent = myMoney
  amountMoney -= amountMoney
  amountMoneyDisplay.textContent = amountMoney
}
