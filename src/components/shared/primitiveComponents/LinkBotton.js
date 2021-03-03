import React from 'react'
import '../../../styles/LinkButton.css'

function LinkBotton(props) {
    return (
        <div className='link-button' style={props.style}>
            {
                props.icon
            }
            {
                props.name
            }
        </div>
    )
}

export default LinkBotton
