const figure = document.getElementById("figure")
const changeButton = document.getElementById("change-button")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}
changeButton.onclick = function() {
  figure.classList.toggle("rounded")
}
