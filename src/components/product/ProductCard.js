import React, { useState } from 'react'
import Image from '../shared/primitiveComponents/Image'
import('../../styles/ProductCard.css')

function ProductCard(props) {
    const item = props.item
    // const [item, setItem] = useState(items)
    
   
    return (
        // <div className='product-card-wrapper'>
      
                    <div className='product-card-container'>
                        <Image imageSize={'medium'} source={item.imageSource} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{margin:'7px 5px'}}className="product-name">{
                                item.name.length <= 25 ? item.name   : item.name.substring(0,22,)+ '...'
                            }</span>
                            <span style={{margin:'1px 5px'}} className="product-price">{item.price}</span>
                            <span style={{margin:'1px 5px'}} className='product-oldprice'>{item.oldPrice}</span>
                        </div>

                    </div>
        // </div>

    )
}

export default ProductCard
