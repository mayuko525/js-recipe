const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

const fizzbuzzFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("fizzbuzz")
    } else if (n % 5 === 0) {
      console.log("buzz")
    } else if (n % 3 === 0) {
      console.log("fizz")
    } else {
      console.log(n)
    }
  }
}

fizzbuzzFunction(100)
