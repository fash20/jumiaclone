import React from 'react'
import Image from '../shared/primitiveComponents/Image'
import '../../styles/SavedItem.css'
import Preduction from '../shared/primitiveComponents/Preduction'
import Button from '../shared/primitiveComponents/Button'
import { BiTrash } from 'react-icons/bi'


function SavedItem({name,price,old}) {

    return (
        <div style={{position:'relative', justifyContent:'space-between', marginBottom:'8px'}} className='cart-cent cart-flex-dirc-row pdd8 SI'>
            <div className='cart-cent cart-flex-dirc-row'>
            <div className='SI-image pdd8'>
                <Image source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU' />
            </div>
            <div style={{position:'relative', minWidth:'200px'}}  className='pdd8 '>
                <span className='fs16 mgbtm6 '>{name}</span>
                <div style={{position:'absolute', bottom: 0}} className='cart-cent cart-flex-dirc-col'>
                    <span className='fs15'> N {price}</span>
                    <div style={{height:'25px', width:'200px'}} className='cart-cent cart-flex-dirc-row cart-ali-cent '>
                        <span style={{ textDecorationLine: 'line-through', }} className='cart-cent cart-flex-dirc-row fs14 graycolor '> N {old}</span> <Preduction  style={{margin: 0, marginLeft: '10px', padding:"3px 4px",fontSize:'14px'}} />
                    </div>
                </div>
            </div>
            </div>
            <div style={{alignItems:'center' ,justifyContent:'space-between'}} className='cart-cent cart-ali-cent  cart-flex-dirc-col pdd8'>
                <Button style={{margin:0, width:'150px', borderRadius:'3px'}} name='BUY NOW' />
                <a href='/'><span className='cart-cent cart-ali-cent cart-just-cent fs13 cart-color' >{<BiTrash className='mgri10' fontSize={18}/>} REMOVE</span> </a>
            </div>
        </div>
    )
}

export default SavedItem
