import React from 'react'

function Input(props) {
    return (
        
              <div style ={props.style} className='textbox-label'> <input onChange={props.onChange} className='login-textbox' name={props.name} type={props.type} required /><label className='placeholder'>{props.placeholder}</label></div>
       
    )
}

export default Input
