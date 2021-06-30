import React, { useState } from 'react'
import '../../styles/ProductCardWButton.css'
import Button from '../shared/primitiveComponents/Button'
import Image from '../shared/primitiveComponents/Image'
import image from '../../assets/1 (1).jpg'
import defaultImage from '../../assets/default-image.gif'
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import Rating from './Rating'
import Preduction from '../shared/primitiveComponents/Preduction'
import comma from '../shared/Comma'
import Naira from '../shared/primitiveComponents/Naira'
import nameSlicer from '../shared/NameSlicer'

function ProductCardWButton({name, price, oldPrice, rating } ) {
    const [isVisble, setIsVisible] = useState(false)
    return (
        <div onMouseOver = {()=> setIsVisible(true)} onMouseLeave = {()=> setIsVisible(false)} className='product-card-w-button'>
            <Image source={image} />
            <div style={{ display: 'flex',position:'relative', flexDirection: 'column', justifyContent: 'left' , marginLeft:'5px'}}>
                <span style={{ fontSize: '11px', background: '#0040ce', color: '#fff', padding: '2px 4px', width: 'fit-content', borderRadius: '2px' }}>shiped from abroad</span>
                <span style={{ fontSize: '12px' }}>{nameSlicer(60,name)}</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}><Naira />{comma(price)}</span>
                <div style={{height:'25px'}}>{oldPrice && (<div style={{ position:'relative', height:'25px'}}><span className='fs12 grayercolor' style={{textDecorationLine:'line-through'}}> <Naira /> {oldPrice} </span > <Preduction oldPrice={oldPrice} price={price}  style={{ position: 'absolute', width:'35px' ,top: "0", right: '0', }}/> </div>)} </div>
                 <div className='cart-cent'><Rating rating={rating} /><span className='fs13 grayercolor'>({rating})</span></div>
                <span style={{ fontSize: '11px'}}>Futher information can appear here... Though it depends it availability.</span>
            </div>
            <Button style={{ fontSize: '13px' ,height:"38px", visibility : isVisble ? 'visible':'hidden', margin:'10px 5px' }}  name={'ADD TO CART'} />
        </div>
    )
}

export default ProductCardWButton
