import React from 'react'

function ProductImage(props) {
    return (
        
            <img onClick={props.onClick} src={props.source} className={props.style} style={{maxHeight:'100%', maxWidth:'100%'}}  />
    )
}

export default ProductImage
