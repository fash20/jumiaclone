import React from 'react'
import '../../../styles/Button.css'

function Button(props) {
        const size = props.size
        const style= props.style
        const {name} = props
        let width =''
        switch(size){
            case 'small': width='40px'; 
            break;
            case 'medium': width='90px'; 
            break;
            case 'large': width='180px'; 
            break;
        }

    return (
        <div 
           
        style = {{width:width, backgroundColor:'#F25C05'},  style !== undefined ?  style : undefined  }
    
        className='uni-button'>
                {props.icon? props.icon : null}
                    {name}
        </div>
    )
}

export default Button
