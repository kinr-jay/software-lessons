# JavaScript Functions

## Learning Objectives

After today's lesson, you will be able to:

1. Identify the different parts of a function
2. Declare and call a function in JavaScript

---

## What are functions?

Functions are like little packages of code that perform a specific task or set of tasks. They provide a number of important benefits to you as a programmer including:

- Performance - Easily eliminate repeated code which can make a website take longer to load
- Maintainability - If a change needs to be made, you only need to change code in one place as opposed to throughout the file
- Control - Easily standarize the input and output for a specific task.

Function `expressions` are made of the following parts:

- a variable name
- the `function` keyword or the fat arrow `=>`
- parentheses `()`
- code block `{}`
- the `return` keyword (optional)

---

## How do we declare a function in JS?

There are two main ways to do this.

By using the `function` keyword:

```js
const myFunction = function () {
  console.log("Hello Maisey.")
}
```

By using the `fat arrow`, also known as Arrow Functions:

```js
const myArrowFunc = () => {
  console.log("Good morning, Maisey!")
}
```

---

## How do we call a function?

Simply use the function's name to execute the function when and where you want. It's important in this situation to include the parentheses. It doesn't matter how it was declared above.

```js
myFunction()
myArrowFunc()
```

Now in the terminal we can run the JS program with Node to execute and we can see the console logs.

```
> node functions.js
```

## Functions with input parameters

Functions can receive information when being called to use within their internal logic. This is called passing arguments. The empty parentheses that we have in our function declarations indicate the function is not expecting any arguments. However we can easily include one there. This is sort of a variable declaration as well, because you will use the same variable name within the function.

```js
const myArrowFunc = (name) => {
  console.log(name)
}

myArrowFunc("Maisey")
```

We can also do something a little more fancy using the concatenation that we learned yesterday.

```js
const myArrowFunc = (name) => {
  console.log("Good morning, " + name + "!")
}

myArrowFunc("Maisey")
```

## Naming conventions

Let's discuss the naming of things. No, not the Andrew Bird song. The best names are short yet descriptive, and in JavaScript, we use `camelCase` for our variable and function names. How would you name our above arrow function?

---

## Activity

We can use different variable types as arguments. Write a function that takes in an integer as an input, performs an operation on it, and console logs the result. For example, a function that adds 5 to whatever number is passed as an argument, then outputs the result to the console.

---
