import React from 'react'
import '../../styles/Seller.css'
import Products from '../product/Products'
import BasicSeller from './BasicSeller'

function Seller() {
    return (
        <div className='seller-container'>
            <div >
                <BasicSeller 
                className='br7 mrgtb20' 
                linkButton={true}
                />
                <Products />
            </div>
        </div>
    )
}

export default Seller
