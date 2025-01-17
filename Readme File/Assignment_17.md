
1. What is Emmet?
          Emmet is a web development toolkit that speeds up HTML and CSS coding using shorthand syntax to generate full code snippets.
<!-- -------------------------------------------------------------------------------------------------------------------- -->

2. Difference Between a Library and Framework (in React Context)?
             React is a library because it focuses on UI rendering and allows developers to choose tools, while a framework (e.g., Angular) provides a complete application structure with predefined rules.
<!-- -------------------------------------------------------------------------------------------------------------------- -->

3. What is CDN? Why Do We Use It?
      A CDN (Content Delivery Network) is a network of servers distributed globally to deliver content quickly to users.

   Why use it?

   -> Faster load times by serving content from the nearest server.
   -> Reduces server load and bandwidth costs.
   -> Improves availability and reliability.
<!-- -------------------------------------------------------------------------------------------------------------------- -->

4. Why is React Known as React?
         React is called "React" because it uses a reactive programming approach to update the UI efficiently by reacting to changes in state or data using a virtual DOM.
<!-- -------------------------------------------------------------------------------------------------------------------- -->

5. What is crossorigin in the <script> tag?
         The crossorigin attribute specifies how browsers handle CORS (Cross-Origin Resource Sharing) when loading external scripts.

    -> anonymous: Sends no credentials (default).
    -> use-credentials: Sends cookies and authentication headers.
<!-- -------------------------------------------------------------------------------------------------------------------- -->

6. Difference Between React and ReactDOM?

    -> React: Handles the core library for creating UI components.
    -> ReactDOM: Manages rendering React components to the DOM and includes methods like ReactDOM.render().
<!-- -------------------------------------------------------------------------------------------------------------------- -->

7. Difference Between react.development.js and react.production.js Files via CDN?

   -> react.development.js:
            >> Used in development.
            >> Includes helpful warnings and error messages for debugging.
            >> Larger file size.

   -> react.production.js:
            >> Used in production.
            >> Optimized for performance, with warnings stripped out.
            >> Smaller file size.
<!-- -------------------------------------------------------------------------------------------------------------------- -->

8. What is async and defer?
    -> async:
           >> Loads the script asynchronously (parallel to HTML parsing) and executes it immediately once loaded.
           >> Example: Used for scripts that don't depend on others.
    
    -> defer:

            >> Loads the script asynchronously but delays execution until the HTML parsing is complete.
            >> Example: Used for scripts that depend on fully loaded HTML.
<!-- -------------------------------------------------------------------------------------------------------------------- -->