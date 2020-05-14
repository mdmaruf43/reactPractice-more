
// JavaScript XML (JSX) - Extension to the JavaScript language syntax. 
// Write XML-like code for elements and components. 
// JSX tags have a tag name, attributes, and children
// JSX is not a necessity to write React applications. // important 
// JSX makes your react code simpler and elegant.
// JSX ultimately transpiles to pure javascript which is understood by the browsers. 


import React from 'react'

function JSX() {
    // return (
    //     <div>
    //         <h1>Hello, Bangladesh</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        null, 
        React.createElement('h1', null, 'Hello, Bangladesh'))
}

export default JSX








