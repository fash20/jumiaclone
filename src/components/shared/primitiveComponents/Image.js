import React from 'react'
import image from '../../../assets/logo.png'
import '../../../styles/PrimitiveComponents.css'

function Image(props) {
    const {source} = props;
    var style ={width: 'fit-content', height:'fit-content'}
    switch(props.imageSize){
        case 'small': style = {width: '100px', height: '140px' }
        break;
        case 'medium': style ={width: 'fit-content', height:'fit-content'}
        
    }
    return (
        <div style={style} >
            <img className='img-cont' style={{maxHeight:'100%', width:'100%', borderRadius:'3px'}} src={(source) ?source  : image } />
        </div>
    )
}

export default Image
