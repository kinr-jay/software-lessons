// Intro to JavaScript Functions
////////////////////////////////

// Declaring Functions

// Regular Function
const myFunction = function () {
  console.log("Hello Maisey.")
}

// Arrow Function
const myArrowFunc = (name) => {
  console.log("Good morning, " + name + "!")
}

// New arrow function, takes an int as an argument,
// performs an operation, console logs the result
const addFive = (x) => {
  console.log(x + 5)
}

// Calling Functions

myFunction()
myArrowFunc("Maisey")
addFive(4)
