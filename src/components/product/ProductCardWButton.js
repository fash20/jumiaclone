import React, { useState } from 'react'
import '../../styles/ProductCardWButton.css'
import Button from '../shared/primitiveComponents/Button'
import Image from '../shared/primitiveComponents/Image'
import image from '../../assets/1 (1).jpg'
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import Rating from './Rating'

function ProductCardWButton() {
    const [isVisble, setIsVisible] = useState(false)


    return (
        <div onMouseOver = {()=> setIsVisible(true)} onMouseLeave = {()=> setIsVisible(false)} className='product-card-w-button'>
            <Image source={image} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' , marginLeft:'5px'}}>
                <span style={{ fontSize: '11px', background: '#0040ce', color: '#fff', padding: '2px 4px', width: 'fit-content', borderRadius: '2px' }}>shiped from abroad</span>
                <span style={{ fontSize: '12px' }}>Name</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>N 2000</span>
                <div> <span style={{ fontSize: '12px', color: '#75757a', textDecorationLine: 'line-through' }}>N 2000</span> <span style={{ backgroundColor: 'pink', fontSize: '13px', marginLeft: '5px', padding: '3px', borderRadius: '2px' }}>-5%</span></div>
                <Rating rating={3} />
                <span style={{ fontSize: '11px'}}>Futher information can appear here... Though it depends it availability.</span>
            </div>
            <Button style={{ fontSize: '12px' , visibility : isVisble ? 'visible':'hidden' }}  name={'ADD TO CART'} />
        </div>
    )
}

export default ProductCardWButton
