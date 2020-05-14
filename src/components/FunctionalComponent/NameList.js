import React from 'react'
import Person from './Person'

function NameList() {
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Mauf',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Maya',
    //         age: 40,
    //         skill: 'Coking',
    //     },
    //     {
    //         id: 3,
    //         name: 'Bushra',
    //         age: 18,
    //         skill: 'Dr',
    //     }
    // ]
    const names = ['Maruf', 'Maya', 'Bushra', 'Ohidul', 'Maya'];
    // const personList = persons.map(person => (
    //     <Person key={person.id} person={person}/>
    // ))
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
