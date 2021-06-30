import React from 'react'
import '../../../styles/LinkButton.css'

function LinkBotton({style,icon,link,name, onClick}) {
    return (
        // <a href={link}>
        <div onClick={()=>onClick()} className='link-button' style={style}>
            {
                icon
            }
            {
                name
            }
        </div>
        // </a> 
    )
}

export default LinkBotton
