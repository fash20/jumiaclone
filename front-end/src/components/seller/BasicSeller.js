import React from 'react'
import Button from '../shared/primitiveComponents/Button'
import LinkBotton from '../shared/primitiveComponents/LinkBotton'

function BasicSeller({className , linkButton}) {
    return (
         <div className={className} style={{ backgroundColor: '#fff' }}>
        <div className="cart-cent cart-flex-dirc-col  seller-info-name brbtm"   >
            <div className="cart-cent cart-flex-dirc-row cart-ali-cent  just-space-between pdd-ltb4r8 ">
                <span className='fs20'>Seller Name</span>
               {linkButton && <LinkBotton link='seller/profile' style={{ fontSize: '14px', margin: '0', padding: '0px', height: '32px', width:'90px' }} name='SEE PROFILE' />}
            </div>

            <span className='fs16 pdd-ltb4r8' style={{paddingTop:0}}>Seller Score</span>
        </div>
        <div className="cart-cent cart-flex-dirc-row just-space-between cart-ali-cent seller-info-score ppd10 " >
            <div className="cart-cent cart-flex-dirc-col cart-just-cent">
                <span className='fs16'>Country of Origin: </span>
            </div>
            <div className='cart-cent cart-flex-dirc-row  cart-ali-cent '>
            <span className='mgri10'>500 Followers</span>
            <Button style={{ padding: '8px 16px', margin: 0, width: '90px', height: '32px' }} name='Follow' />
            </div>
        </div>
    </div>
    )
}

export default BasicSeller
