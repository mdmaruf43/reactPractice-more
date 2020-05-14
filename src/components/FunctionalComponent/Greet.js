



// import React from 'react';

// const Greet = (props) => {
//     const {name, heroName} = props;
//     return( 
//         <div>
//             <h1>Hello {name} a.k.n {heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// export default Greet;

import React, { Component } from 'react'

export class Greet extends Component {
    render() {
        const {name, heroName} = this.props;
        return (
            <div>
                <h1>Hello {name} a.k.n {heroName}</h1>
            </div>
        )
    }
}

export default Greet
















