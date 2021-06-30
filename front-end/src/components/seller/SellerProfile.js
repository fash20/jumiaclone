import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'
import BasicSeller from './BasicSeller'

function SellerProfile() {
    return (
        <div className='seller-profile-container mrgtb20'>
             <div className='cart-cent cart-flex-dirc-row cart-ali-cent just-space-between ppd10 bdbm'>
                        <div className='cart-cent1 '>
                            <BsArrowLeft style={{ marginRight: "10px" }} fontSize={30} />
                            <span className='fs20'> Seller Profile </span>
                        </div>
                    </div>
                    <div className='ppd10'>
                        <BasicSeller className='bd br3' />
                    </div>
        </div>
    )
}

export default SellerProfile
