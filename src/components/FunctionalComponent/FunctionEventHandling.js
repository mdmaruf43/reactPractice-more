import React from 'react'

function FunctionEventHandling() {
    const btnHandle = () => {
        console.log('Clicked');
        
    }
    return (
        <div>
            <button onClick={btnHandle}>Clicked</button>
        </div>
    )
}

export default FunctionEventHandling
