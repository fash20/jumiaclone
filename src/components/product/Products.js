import React from 'react'
import ProductCardWButton from './ProductCardWButton'
import '../../styles/Product.css'
import FinderComponent from '../shared/FinderComponent'

function Products() {
    return (
        <div className="product-content-wrapper">
            <div className='category-finder-comp'>
                <FinderComponent />
            </div>
            <div className='product-card-button-w-container'>
                <div className='header-container' >
                    <div className='header-text-cont'>
                        <span style={{fontSize:'20px'}} className='header text'>Category name</span>
                        <select>
                            <option>Newest arrival</option>
                            <option>Low to High</option>
                            <option>High to low</option>
                        </select>
                    </div>
                    <div className='header-text-cont'>
                        <span style={{color:'#75757A', fontSize:'14px'}}>Product count found</span>
                    </div>
                </div>
                <div className='product-cart-wrapper-all' >
                    <ProductCardWButton />
                    <ProductCardWButton />
                    <ProductCardWButton />
                    <ProductCardWButton />
                    <ProductCardWButton />
                    <ProductCardWButton />
                    <ProductCardWButton />
                    <ProductCardWButton />
                    <ProductCardWButton />
                </div>
            </div>
        </div>
    )
}

export default Products
