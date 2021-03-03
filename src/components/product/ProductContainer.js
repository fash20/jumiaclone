import React from 'react'
import ProductCard from './ProductCard'

function ProductContainer() {
    const product = [
        {
            imageSource: '',
            name: 'Apple MacBook 2019',
            price: 250000,
            oldPrice: 350000,
            id: 'efgeg'
        },
        {
            imageSource: '',
            name: 'Gionee M4',
            price: 25000,
            oldPrice: 31000,
            id: 'efgddeg'
        },
        {
            imageSource: '',
            name: 'Mens Sneakers',
            price: 2500,
            oldPrice: 3500,
            id: 'efg12eg'
        },
        {
            imageSource: '',
            name: 'Shifuren The Velcro Strap Sanfransisco',
            price: 1590,
            oldPrice: 2700,
            id: 'efgdweg'
        },

        {
            imageSource: '',
            name: 'Shifuren The Velcro Strap Sanfransisco',
            price: 1590,
            oldPrice: 2700,
            id: 'efgsdseg'
        },
        {
            imageSource: '',
            name: 'Shifuren The Velcro Strap Sanfransisco',
            price: 1590,
            oldPrice: 2700,
            id: 'efgegeeqe'
        },
    ]
    return (
        // <div className='product-card-wrapper'>
        <>
            {
                product.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </>
        // </div>

    )
}

export default ProductContainer
