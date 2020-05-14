import React, {useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [dispaly, setDisplay] = useState(true);   
    return (
        <div>
            <button onClick={() => setDisplay(!dispaly)}>Toggle display</button>
            {dispaly && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
