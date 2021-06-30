import React, { useContext } from 'react'
import { BiHeart, BiTrash } from 'react-icons/bi'
import { ActionContext } from '../../App'
import  '../../styles/CartCard.css'
import comma from '../shared/Comma'
import Image from '../shared/primitiveComponents/Image'
import LinkBotton from '../shared/primitiveComponents/LinkBotton'
import Naira from '../shared/primitiveComponents/Naira'


function CartCard({seller, name, count , price, oldPrice, image }) {
    const action  = useContext(ActionContext)
    return (
        <div className='cartcard-container br7'>
            <div className='cartImage '>
               <Image source={image} />
            </div>
            <div style={{position:'relative', width:'422px', padding:'10px 0'}} className='cart-cent cart-flex-dirc-col bdri'>
                <div style={{height:"107px"}} className='cart-cent cart-flex-dirc-col'>
                    <span className='fs14 graycolor mgbtm6'>{seller}</span>
                    <span className='fs16 mgbtm6 '> {name}</span>
                    {/* <span className='fs12 '>Other information</span> */}
                </div>
                <div className='cart-cent cart-flex-dirc-row' style={{position: 'absolute', left:'0', bottom:'10px'}}>
                   <a href='/'><span className='cart-cent1 fs13 cart-color' ><BiHeart className='mgri10' fontSize={14}/>  MOVE TO SAVED ITEM </span></a> 
                   <span onClick={()=> action('REMOVEITEM', name)} style={{marginLeft:'40px',cursor:'pointer'}} className='cart-cent cart-ali-cent cart-just-cent fs13 cart-color' >{<BiTrash className='mgri10' fontSize={14}/>} REMOVE</span> 
                </div>
            </div>
            <div className ='cart-quantity cart-cent1 bdri'>
                <input min={0} contentEditable defaultValue={count} style={{height: '30px', width: '70px', outline:'none', border:'none',textAlign:"center", borderBottom:'1px solid #e8e8e8'}} type ='number' placeholder={1} />
            </div>
            <div className='cart-cent1 cart-flex-dirc-col cart-price bdri' >
                <span className='fs15 mgbtm6 '> <Naira /> {comma(price)}</span>
                <span style={{textDecorationLine:'line-through'}} className='fs12 graycolor mgbtm6 '>N {comma(oldPrice)}</span>
                <span className='fs12 ' style={{color:'green', fontWeight:"500"}}> Savings: N {comma(oldPrice-price)} </span>
            </div>
            <div className='cart-cent1 cart-flex-dirc-col cart-subtotal '>
                <span className='fs15 mgbtm6 cart-color'> N {comma(count*price)}</span>
            </div>
        </div>
    )
}
export default CartCard

// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU'