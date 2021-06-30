import React, { useState } from 'react'
import ProductCardWButton from './ProductCardWButton'
import '../../styles/Product.css'
import FinderComponent from '../shared/FinderComponent'
import ProductLists from './ProductLists'

function Products({title}) {
    const [products, setProducts] = useState(ProductLists)
    return (
        <div className="product-content-wrapper">
            <div className='category-finder-comp br7'>
                <FinderComponent />
            </div>
            <div className='product-card-button-w-container br7'>
                <div className='header-container' >
                    <div className='header-text-cont'>
                        <span style={{ fontSize: '20px' }} className='header text'>{title}</span>
                        <select>
                            <option>Newest arrival</option>
                            <option>Low to High</option>
                            <option>High to low</option>
                        </select>
                    </div>
                    <div className='header-text-cont'>
                        <span style={{ color: '#75757A', fontSize: '14px' }}> {products.length} Products found</span>
                    </div>
                </div>
                <div className='product-cart-wrapper-all' >
                    {
                        products.map(item => <ProductCardWButton
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            rating={item.ratng}
                            oldPrice={item.oldprice} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default Products
