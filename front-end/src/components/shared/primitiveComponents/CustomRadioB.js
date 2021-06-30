import React from 'react'
import '../../../styles/CustomRadioB.css'

function CustomRadioB(props) {
    return (

        <label className='radio'>
            <input type='radio' name={props.name} hidden /><span className='radio-circle'></span>
        </label>




    )
}

export default CustomRadioB
