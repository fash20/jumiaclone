import React, { useContext, useEffect, useState } from 'react'
import CartCard from './CartCard'
import '../../styles/CartCard.css'
import comma from '../shared/Comma'
import Naira from '../shared/primitiveComponents/Naira'
import { ActionContext, cartContext, CountContext,  } from '../../App'


function Cart() {
    const cart = useContext(cartContext)
    const action = useContext(ActionContext)
    const count = useContext(CountContext)
    let price = 0 
    const calcPrice = (itemPrice) => {
        return  price = price + itemPrice
    }

    return (
        <div className='card-container cart-flex-dirc-col'>
            <div style={{ justifyContent: 'flex-start' }} className='cart-activity-cont'><h3>Cart ({count} Items)</h3></div>
            <div>
                <div className='cart-cent cart-flex-dirc-row' style={{ maxWidth: '950px', }}>
                    <div className='fs15 cart-table-head-color mgbtm6 cart-width1'>ITEM</div>
                    <div className='fs15 cart-table-head-color mgbtm6 cart-width2'>QUANTITY</div>
                    <div className='fs15 cart-table-head-color mgbtm6 cart-width3'>UNIT PRICE</div>
                    <div className='fs15 cart-table-head-color mgbtm6 cart-width4'>SUBTOTAL</div>
                </div>
                {
                    cart.map(item => 
                        (<CartCard
                            key={item.name}
                            name={item.name}
                            price={item.price}
                            count={item.count}
                            seller={item.seller.name}
                            image={item.image}
                            oldPrice={item.oldprice}
                        />)

                    )
                 
                }
                {
                    cart.map(item =>  {
                       calcPrice(item.price*item.count)
                    })
                    
                }
            </div>
            <div style={{ alignItems: 'flex-end', paddingRight: '30px' }} className='cart-activity-cont cart-cent cart-flex-dirc-col cart-ali-flexend'>
                <div className='cart-cent1'>
                    <span style={{ marginRight: '60px' }} className='fs15'>Total:</span>
                    <h3 className='cart-color'><Naira /> {comma(price)}</h3>

                </div>
                <span className='fs13 graycolor'>Delivery fee not included yet</span>
            </div>

            <div className='cart-activity'>
                <div className='cart-activity-cont'>
                    <a href='/'><div className='cart-btn1'>CONTINUE SHOPPING</div></a>
                    <a href='/checkout' ><div className='cart-btn1 cart-btn2'>PROCEED TO CHECKOUT</div></a>
                </div>

            </div>
        </div>
    )
}

export default Cart
