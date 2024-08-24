// _________________________________________________________________
// 1. Explain a few advantages of CSS.
// ans:
// Faster page speed: CSS can help websites load faster.
// Better user experience: CSS can make web pages more visually appealing and easier to use.
// Easier maintenance: CSS separates content and style, which can make it easier to maintain web pages and update them.
// Consistent design: CSS can help ensure a consistent visual identity across a website or multiple pages.
// _________________________________________________________________

// _________________________________________________________________
// 2. What is the difference between a class and an ID?
// ans:
// The main use of class is we can have multiple class name to multiple tags and we the id should be unique. We only have one id to the one Element.
// _________________________________________________________________

// _________________________________________________________________
// 3. Define z-index.
// ans:
// Z-index is used to specify the stack order of elements that are overlaping each other. The element with high Z-index will stacked above the lower index element. Its default value is Zero and can take negative and positive number. It take the following value - auto, Number, initial and inherit.
// _________________________________________________________________

// _________________________________________________________________
// 4. Define contextual selectors.
// ans:
// Contextual selectors are powerful tools for creating more specific and flexible styles based on the structure and relationships of HTML elements. They help you avoid overly generic styles and keep your CSS organized and efficient.
// _________________________________________________________________

// _________________________________________________________________
// 5.  How does Calc work?
// ans:
// Calc can be used to specify the result of the mathematical operation of two or more elements. For example to specify the width elements by the addition of two or more elements, we can write as
// eg:
//  .new-btn {
//     width: calc(100px - 50px);
// }
// _________________________________________________________________

// _________________________________________________________________
// 6. Explain CSS specificity.
// ans:
// CSS specificity is a rank or score that decides style declaration to be used to an element. ID selectors have high specificity, while universal selector * has low specificity. The four CSS categories that authorize the selector's specificity level are IDs, inline style, elements/pseudo-elements, and classes and attributes. 
// _________________________________________________________________

// _________________________________________________________________
// 7.  What is common between class and ID?
// ans:
// Both class and ID are used in HTML to assign a value from CSS. The ID is used as an element, whereas the class is used as a block. 
// _________________________________________________________________

// _________________________________________________________________
// 8. What are the differences between pseudo-elements and pseudo-classes?
// ans:
// * Pseudo-Classes
// Pseudo-classes target elements based on their state or position, such as :hover for when an element is hovered over, or :nth-child(2) for styling the second item in a list.

// *Pseudo-Elements
// Pseudo-elements create and style virtual content or parts of elements, like ::before to insert content before an element or ::first-line to style the first line of a paragraph.
// _________________________________________________________________

// _________________________________________________________________
// 9. What is z-index ? ans How does it works?
// ans:
// The z-index property specifies the stack order of an element.

// An element with greater stack order is always in front of an element with a lower stack order.

// Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements).

// Note: If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top.

// How does it works?
// ans:
// Stacking Context: The z-index property only works on elements that are positioned (position property set to relative, absolute, fixed, or sticky). Elements that are not positioned (e.g., position: static, which is the default) are not affected by z-index.

// Stacking Order:

// Elements with higher z-index values are displayed on top of elements with lower z-index values.
// If two elements have the same z-index, the one that appears later in the HTML source code will be on top.
// Creating Stacking Contexts:

// A new stacking context is created for an element if it has a position value other than static and a z-index value other than auto.
// Nested stacking contexts will affect the stacking order of their child elements but do not influence sibling stacking contexts.
// _________________________________________________________________

// _________________________________________________________________
// 10. Why are media queries important in responsive design?
// ans:
// Media queries are a key part of responsive web design because they allow you to create different layouts for different screen sizes and devices.
// They can also detect other environmental factors, such as whether the user is using a touchscreen or a mouse. 
// Media queries are CSS statements that apply different styles based on media features like width, height, orientation, resolution, and color mode. 
// Responsive design can help your website in many ways, including: 
// Mobile-friendliness: Make your site easier to use on mobile devices 
// Improved appearance: Make your site look better on devices with large and small screens 
// Increased engagement: Visitors may spend more time on your site 
// Better search engine rankings: Responsive design can help improve your search engine rankings 
// Consistent brand experience: Maintain a consistent brand experience across different devices
// _________________________________________________________________

// _________________________________________________________________
11. 