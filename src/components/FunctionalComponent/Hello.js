import React from 'react';

const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'hello', className: 'testClass'},
        React.createElement('h1', null, 'Hello Maruf')
        
        // this Method except Minimun three parameters 
        // First parameters is HTML tag to render
        // Second parameters is any optional properties
        // Third is children of the HTML element. 
        // It don't except any number of method of childern. 
        // The second parameter is an Object of key value pairs, that will be apply to the element. 

    ); 
};

export default Hello;




//Example of JSX
// return (
//     <div>
//         <h1>Hello Reader</h1>
//     </div>
// );




