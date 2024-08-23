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