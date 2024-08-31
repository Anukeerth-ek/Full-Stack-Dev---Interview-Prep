// ________________________________________________________________________
// 1. What is Next.js and why would you use it?
// ans:
// Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) for React applications. 
// It's used to build performant, SEO-friendly web applications with features like automatic code splitting, optimized performance, 
// and built-in routing.
// ________________________________________________________________________

// ________________________________________________________________________
// 2. Explain the concept of server-side rendering (SSR) in Next.js.
// ans:
// SSR in Next.js involves rendering React components on the server at request time, generating the HTML for a page before sending it to the client. 
// This can improve SEO and performance since the initial page load is faster and search engines can easily index the content.
// ________________________________________________________________________

// ________________________________________________________________________
// 3. What is static site generation (SSG) and how does it differ from SSR?
// ans:
// SSG generates HTML pages at build time, rather than on each request like SSR. This results in faster load times for end users and less server load. 
// However, it means the content is static and needs to be rebuilt to reflect updates.
// ________________________________________________________________________

// ________________________________________________________________________
// 4. How does Next.js handle routing?
// ans:
// Next.js simplifies routing with a file-based system where the file structure inside the pages directory directly maps to your application's routes. 
// It supports static, dynamic, and catch-all routes, as well as API routes. The Link component enables client-side navigation, making the routing 
// experience efficient and user-friendly.
// ________________________________________________________________________

// ________________________________________________________________________
// 5. Mention some features of Next.js?
// ans:
// Next.js is a powerful React framework that offers various features to simplify and enhance the development of web applications. Here are some key features of Next.js:
// Server-Side Rendering (SSR): Next.js allows server-side rendering, improving initial page load performance by rendering HTML on the server and sending it to the client.
// Static Site Generation (SSG): Next.js supports static site generation, enabling the pre-rendering of pages at build time, resulting in faster loading times and better SEO.
// File System-Based Routing: The routing system is based on the file structure of the “pages” directory, making it intuitive and easy to organize code.
// Automatic Code Splitting: Next.js automatically splits code into smaller chunks, loading only what’s necessary for each page. This enhances performance by reducing initial bundle sizes.
// API Routes: Easily create serverless functions by defining API routes alongside your pages, simplifying the development of server-side logic.
// ________________________________________________________________________

// ________________________________________________________________________
// 6. What do you mean by SSR?
// ans:
// SSR stands for Server-Side Rendering. It’s a technique used in web development where the server processes the React or other JavaScript framework code and 
// generates the HTML on the server side, sending the fully rendered HTML to the client’s browser.

// Here’s a brief overview of the SSR process:

// Request from Client: When a user makes a request to a server for a web page, the server receives the request.
// Server-Side Processing: Instead of sending just a blank HTML shell or a minimal document, the server executes the JavaScript code associated with the requested page, fetches data if needed, and renders the complete HTML content on the server side.
// Sending Rendered HTML to Client: The fully rendered HTML, along with any necessary CSS and JavaScript, is sent as a response to the client’s browser.
// Client-Side Hydration: Once the HTML is received by the browser, any JavaScript code needed for interactive elements or further client-side rendering is executed. This process is known as “hydration.”
// ________________________________________________________________________