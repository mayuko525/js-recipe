const memo = document.getElementById("memo")
const addButton = document.getElementById("add-button")
addButton.onclick = function() {
  const text = "テスト"
  const div = document.createElement("div")
  div.textContent = text
  memo.append(div)
}
