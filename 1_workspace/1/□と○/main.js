const figure = document.getElementById("figure")
const changeButton = document.getElementById("change-button")

//figure.onclick = function() {
//figure.classList.toggle("rounded")
//}
changeButton.onclick = function() {
  figure.classList.toggle("rounded")
}

figure.onclick = function() {
  console.log(figure.classList)
  //もしfugureが□なら○にチェンジ
  if (figure.classList.contains("square")) {
    figure.classList.remove("square")
    figure.classList.add("rounded")
  }
  //もしfugureが○なら△にチェンジ
  else if (figure.classList.contains("rounded")) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  }
  //もしfugureが△なら□にチェンジ
  else if (figure.classList.contains("triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
