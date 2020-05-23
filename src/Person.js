import React from 'react'
import "./Person.css"
export default function Person(props) {

    return (
        <div className='Card'>
            <img src={props.image} alt="person-img" />
            <p><strong>{props.title}</strong>.{props.name}</p>
            <p id='email'>{props.email}</p>
        </div>
    )
}
