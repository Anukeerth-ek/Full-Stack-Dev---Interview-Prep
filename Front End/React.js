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

// 6. What is ReactJS?
// ans: React is a JavaScript library for builing user interface. React is developed and maintained by FaceBook. React is JavaScript library used to build reuseable components for the view level of the mvc MdArchitecture. It is highly efficient and uses virutual dom to to render the components. It work on client side and written in JSX.
// _______________________________________________________________________________________

// 7. What is React?
// ans: React is a JavaScript library for creating reuseable user interface components exspecially for spa. React is a open source javascript library developed and maintained by FaFacebook. One of the main advantage of react is single page application. In spa we dont need to load the content as per the request. Spa means when the website initially loads the server will pass the html and respective css and javascript code. And it will dynamically rewrite the content according to the user's requests. 
// Main features in React is 
// 1. Components
// 2. State
// 3. JSX
// 4. Props
// 5. Virtual DOM 

// 1. Components is nothing but just a reuseable piece of code we can reuse that when ever we want. 
// 2. State a React-Object that contains data about or information about that component. A component's state will change when the component re-renders.
// 3. JSX - is javascript xml it will helps us to write html like code in react. jsx will helps us to write html in react without using the document.createElement() or append().
// 4. Props we can pass data to one component to another in the form of parent to child. We can pass props from parent to child. React's data flow is unidirectional that is from parent to child only.
// 5. Virtual DOM - Virtual is copy of real dom. when we update a state the react virutal dom will check the state and compare that with the real dom. And change that only. So it will helps us to increase the performance. 