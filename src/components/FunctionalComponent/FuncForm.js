import React, { useState, useEffect } from 'react'

function FuncForm() {
    const [formField, setFormField] = useState({
        userName: '',
        coments: '',
        topic: '',
        value: ''
    })

    const handleSubmit = (e) => {
        alert(`${formField.userName}, ${formField.coments}, ${formField.topic}`)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>This is Form Field</div>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        onChange={e => setFormField({...formField, userName: e.target.value})}
                        value={formField.userName}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        onChange={e => setFormField({...formField, coments: e.target.value})}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select onChange={e => setFormField({...formField, topic: e.target.value})}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FuncForm
