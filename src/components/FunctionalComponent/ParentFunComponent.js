import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

function ParentFunComponent() {
    const [parent, setParent] = useState('Parent');
    const greetParent = (childName) => {
        alert((`Hello ${parent} from ${childName}`))

    }
    return (
        <div>
            <ChildComponent greetHandler = {greetParent} />
        </div>
    )
}

export default ParentFunComponent
