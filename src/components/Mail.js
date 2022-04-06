import React from 'react'

function Mail(props) {

    return (
        <div className='mail'>
        <input type='checkbox'></input>
            <div>{props.name}</div>
            <div>{props.subject}</div>
            <div>{props.time}</div> 
        </div>
    )
}

export default Mail