import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import '../../styles/CheckOut.css'
import Rating from '../shared/primitiveComponents/Rating' 

function Review({rating,summary, review, customer,}) {
    return (
        <div style={{height:'148px', backgroundColor:'#fff', padding:'8px 0'}} className='cart-cent cart-flex-dirc-col '>
           <span className="ppd-tb8"> <Rating size={18} /></span>
            <span className='fs16 fwb  ppd-tb8' >{summary}</span>
            <span className='fs14 ppd-tb8'>{review} </span>
             <span className='fs14 grayercolor ppd-tb8 cart-cent  just-space-between'>{Date().substring(0,15)} by {customer}  <span style={{color:"#6bdb28"}} className='fs14 cart-cent cart-ali-cent '> <IoMdCheckmarkCircleOutline fontSize={18}/> Verified Purchase </span> </span>
        </div>
    )
}

export default Review
