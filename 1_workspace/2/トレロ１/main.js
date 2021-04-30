const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function() {
  const text = inputElement.value

  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card.remove()
  }

  card.append(deleteButton)

  container.append(card)

  inputElement.value = ""
}

//$("#add-button").click(function() {
//alert($("input-todo").val())
//})
//$("input-todo").keypress(function(e) {
//  if (e.which == 13) {
//    $("#add-button").click()
//  }
//})

function button_click() {
  alert(document.getElementById("input-todo").value)
}
function keydown_enter() {
  if (window.event.keyCode == 13) {
    document.getElementById("add-button").click()
  }
}
