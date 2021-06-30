import React, { useState } from 'react'
import '../../../styles/CustomCheckBox.css'

function CustomCheckBox(props) {
    const [checked, setChecked] = useState(false)
    return (
        <div className='checkbox-container'>
            <div className='background-round'>
                <input onChange={(e)=>{setChecked(e.target.checked)}} className='custom-checkbox' type='checkbox' id='check' hidden />
                <label htmlFor='check' className='check-mark'></label>
            </div>
            <span style={{paddingLeft: '5px', fontSize:'14px', color:props.labelColor}}>{props.label}</span>
        </div>
    )
}

export default CustomCheckBox
