import React, { useState } from 'react'
import comma from '../shared/Comma'
import nameSlicer from '../shared/NameSlicer'
import Image from '../shared/primitiveComponents/Image'
import Naira from '../shared/primitiveComponents/Naira'
import Preduction from '../shared/primitiveComponents/Preduction'
import('../../styles/ProductCard.css')

function ProductCard({name, price, image, oldPrice}) {
  
    // const [item, setItem] = useState(items)
    
   
    return (
        // <div className='product-card-wrapper'>
      
                    <div style={{position:'relative'}} className='product-card-container'>
                        <div className='product-image-cont'>
                             <Image  source={image} />
                        </div>
                        <div className='cart-cent cart-flex-dirc-col flex-just-lefts'>
                            <span style={{margin:'7px 5px'}}className="product-name">{
                               nameSlicer(15, name)
                            }</span>
                            <span style={{margin:'1px 5px'}} className="product-price"><Naira />{comma(price)}</span>
                            {oldPrice && <span style={{margin:'1px 5px'}} className='product-oldprice'><Naira /> {comma(oldPrice)}</span>}
                            <Preduction price={price} oldPrice={oldPrice} style={{ position: 'absolute', top: "4px", right: '4px', }} />
                        </div>

                    </div>
        // </div>

    )
}

export default ProductCard
