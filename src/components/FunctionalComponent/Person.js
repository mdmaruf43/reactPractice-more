import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>
                I am {person.name}. I am {person.age} years old and I have {person.skill} Skill
            </h1>
        </div>
    )
}

export default Person
