import React from 'react'

function Print(props) {
    console.log(props);
    const {name, heroName} = props;
    return (
        <div>
            <h1>Name: {name} Hero name: {heroName}</h1>
        </div>
    )
}

export default Print
