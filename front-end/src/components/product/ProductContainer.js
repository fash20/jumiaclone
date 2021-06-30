import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductLists from './ProductLists'
import '../../styles/ProductCard.css'

function ProductContainer() {
    const [products, setProduct] = useState(ProductLists)
    return (
        <div sty className='product-cont'>

            {
                products.map(item => (
                   < a key={item.id} href={`/product/${item.id}`}> <ProductCard
                        
                        name={item.name}
                        price={item.price}
                        oldPrice={item.oldprice}
                        image={item.image}
                    />
                    </a>
                ))
            }

         </div>

    )
}

export default ProductContainer
