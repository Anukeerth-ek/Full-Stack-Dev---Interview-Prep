// _________________________________________________________________
// 1. Explain the differences between == and ===
// ans:
// == (Loose Equality): "When using ==, JavaScript performs type coercion, so 5 == '5' evaluates to true because the string '5' is converted to the number 5 before the comparison."

// === (Strict Equality): "When using ===, no type conversion occurs, so 5 === '5' evaluates to false because the number 5 and the string '5' are of different types."
// _________________________________________________________________

// _________________________________________________________________
// 2. What is event delegation, and how does it function in JavaScript?
// ans: Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching individual
// listeners to each child element. This listener then handles events that bubble up from its descendant elements.  Event delegation in JavaScript allows you to
// efficiently manage events by attaching a single listener to a parent element and using event bubbling to handle interactions with its child elements,
// simplifying code and improving performance.
// _________________________________________________________________

// _________________________________________________________________
// 3. Explain the concept of prototypal inheritance.?
// ans:Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a
//  parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class with
//  child classes.
// _________________________________________________________________

// _________________________________________________________________
// 4. Differentiate between a variable that is null, undefined, or undeclared.
// ans:
// Undefined: A variable has been declared but not yet assigned a value.
// Null: A variable has been explicitly assigned a value of null, indicating an intentional absence of value.
// Undeclared: A variable that has not been declared at all and attempting to access it will result in a ReferenceError.
// _________________________________________________________________

// _________________________________________________________________
// 5. Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other.
// ans:
// Array.forEach():

// Purpose: Executes a provided function once for each array element, primarily for side effects or processing.
// Returns: undefined.
// Use Case: When you need to perform actions on each element without creating a new array.
// Array.map():

// Purpose: Creates a new array with the results of applying a provided function to each element.
// Returns: A new array with transformed elements.
// Use Case: When you need to transform each element and obtain a new array with the results.
// Use forEach() for side effects and map() for transforming data.
// _________________________________________________________________

// _________________________________________________________________
// 6. Reverse a String
// ans:
// const userName = "niveK"

// const reversedName = userName.split('').reverse().join('').toUpperCase()
// console.log(reversedName) // KEVIN
// _________________________________________________________________
// 7. Check for Palindrome
// i. 2211, 1221

// const firstNumber = "2211";
// const secondNumber = 1221;

// const resultOfFirst = secondNumber.toString().split('').reverse().join('')
// if(secondNumber == resultOfFirst){
//     console.log(`The entered input is Palindrome number`)
// }
// else console.log("The entered input is not a Palindrome number")
// _________________________________________________________________

// _________________________________________________________________

// 7. What is Closures?
// ans:
// 1. So closure is a concept in js where the inner function can access the variable from the outer function.

// for eg:

// const returnUserName = (userName) => {
//      const name = userName;
//      console.log("From outer function", userName);

//      return function innerFunction() {
//           console.log("From inner function", userName);
//      };
// };

// const innerFunction = returnUserName("Kevin");
// innerFunction();

// A closure is a function in JavaScript that "remembers" its lexical scope, even when the function is executed outside that scope. In simpler terms, a closure allows an inner function 
// to retain access to variables from its outer (enclosing) function, even after the outer function has finished executing.

// Closures are created every time a function is defined, and they are a natural part of JavaScript's function scope behavior.
// _________________________________________________________________

// _________________________________________________________________
// 8. What is Map and filter in function in js?
// ans: Map function is used to manipulate or iterate an array element. Map will return new array after iterating/manipulating. And map does not change the original array. 

// Filter is return the value if that value has successfully pass the condition

// const userNamesData = ["Kevin", "John", "Devin", "Peter"]
// // return the names 

// const userNames = userNamesData.map((name)=> `The teams members ${name}`)
// console.log(userNames)


// const userData = [
//     {
//         name: "Kevin",
//         age: '12'
//     },
//     {
//         name: "John",
//         age: '42'
//     },
//     {
//         name: "Devin",
//         age: '37'
//     },
//     {
//         name: "Peter",
//         age: '22'
//     },
// ]

// return only users name whose age is greater than 30

// const userAgeGreaterThanThirty = userData.filter((user)=> user.age > 30).map((user)=> user.name)
// console.log(userAgeGreaterThanThirty)
// _________________________________________________________________

// _________________________________________________________________
// 9. What is Object.freeze()?
// ans:
// Consider we have an Object that should not be changed if we unknowingly assign a new value to that. It will change that value right. There comes the JavaScript property 
// Object.freeze()

// By using Object.freeze() we can't modify or add new values to that Object. 

// Means this will the Object immutable.

// const userDetails = {
//     name: "kevin",
//     age: '12'
// }


// Object.freeze(userDetails)
// console.log("Before", userDetails)  // { name: 'kevin', age: '12' }

// userDetails.place = "kannur"

// userDetails.name = "John"

// userDetails.name = "narayan"
// console.log("After", userDetails)  // { name: 'kevin', age: '12' }
// _________________________________________________________________

// _________________________________________________________________
// 10. What you mean by Object.seal()?
// ans: By using this will make the object immutable in some sense. We can modify the Object but we can't add new values to the object

// const userDetails = {
//     name: "kevin",
//     age : 12
// }

// console.log("Before", userDetails)

// Object.seal(userDetails)

// userDetails.age = 11

// userDetails.place = "kannur"

// console.log("After", userDetails)
// _________________________________________________________________