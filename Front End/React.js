// _______________________________________________________________________________________
// 1. What is the differnce between var, let and const ?
// ans: var is a functional scoped, global scoped. Which means we can access the variables inside the functional scope. Lets see and examples

// const getDetails = ()=> {
//   var num1 = 10
//   if(true) {
//     var num2 = 20;
//     console.log(num1)
//     console.log(num2)
//   }

//   console.log(num1)
//   console.log(num2)
 
// }

// getDetails()

// In this we will get all the output as expected we won't get errors because var is functional scoped as well as global scoped variable declartion

// const getDetails = ()=> {
//   let num1 = 10
//   if(true) {
//     let num2 = 20;
//     console.log(num1)
//     console.log(num2)
//   }

//   console.log(num1)
//   console.log(num2)
 
// }

// getDetails()

// From this we will get error in the 4th console log because let is blocked scoped that means we can acess only inside the block (A block is defined by {})

// const getDetails = ()=> {
//   const num1 = 10
//   if(true) {
//     const num2 = 20;
//     console.log(num1)
//     console.log(num2)
//   }

//   console.log(num1)
//   console.log(num2)
 
// }

// getDetails()

// Same with the const too we will get error in the 4th console log because const is too a blocked scope.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 2.Explain the concept of a Single Page Application (SPA).
// A Single Page Application (SPA) is a web application that dynamically updates the current page rather than loading entire new pages from the server. 
// This approach provides a faster and more seamless user experience, leveraging JavaScript for dynamic content loading, client-side routing, and state management.
//  While SPAs offer numerous advantages, such as improved performance and reduced server load, they also come with challenges like SEO optimization and initial load time.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 3. What is JSX and how does it differ from HTML?
// ans: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript files. It needs to be transpiled to regular JavaScript before execution.
// HTML is a standard markup language for creating web pages.
// JSX differs from HTML in syntax, handling of attributes, embedding JavaScript expressions, and dealing with styles and events.
// Using JSX in React simplifies the process of writing and managing UI components by allowing you to combine markup and logic in a single file.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 5. How do you handle state management in a React application?
// ans: Small Applications: useState and useReducer are often sufficient for managing state.
// Medium to Large Applications: The Context API can be combined with useReducer for managing more complex state.
// Large and Complex Applications: Consider using external libraries like Redux, Recoil, or MobX for more scalable and maintainable state management.
// By understanding the strengths and use cases of each approach, you can choose the best state management strategy for your React application.
// _______________________________________________________________________________________