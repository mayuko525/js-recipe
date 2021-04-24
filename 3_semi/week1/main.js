const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const display3 = document.getElementById("display3")

button1.onclick = function() {
  display1.textContent = "残念！"
}
button2.onclick = function() {
  display2.textContent = "正解！"
}
button3.onclick = function() {
  display3.textContent = "残念！"
}
