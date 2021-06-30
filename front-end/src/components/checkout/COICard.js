import React from 'react'
import Image from '../shared/primitiveComponents/Image'
import '../../styles/CheckOut.css'
import comma from '../shared/Comma'
import nameSlicer from '../shared/NameSlicer'

function COICard({name, price, count, image}) {
    return (
        <div  style={{padding:'6px 8px'}} className='cart-cent cart-flex-dirc-row brbtm' >
            <div style={{width:'57px', height:'60px'}}>
            <Image source={image}/>
            </div>
            <div style={{}} className='cart-cent cart-flex-dirc-col'>
                <span className='fs13 cart-color ppd-tb2'>{nameSlicer(25,name)}</span>
                <span className='fs13 ppd-tb2'>N {comma(price)}</span>
                <span className='fs13 fw500 ppd-tb2'>Qty: {count}</span>
            </div>
        </div>
    )
}

export default COICard
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU'