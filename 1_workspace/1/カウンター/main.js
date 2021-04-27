const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twotimesButton = document.getElementById("2times-button")

let count = 0
plusButton.onclick = function() {
  count += 1
  display.textContent = count
}
minusButton.onclick = function() {
  count -= 1
  display.textContent = count
}
twotimesButton.onclick = function() {
  count *= 2
  display.textContent = count
}
