import React, { useEffect, useState } from 'react'
// import useLocalStorage from './useLocalStorage'
const product = [
    {
        name: 'product1', price: 20, count: 1
    },
    {
        name: 'product2', price: 30, count: 1
    },
    {
        name: 'product3', price: 70, count: 1
    },
    {
        name: 'product4', price: 60, count: 1
    },
    {
        name: 'product5', price: 10, count: 1
    },
    {
        name: 'product6', price: 90, count: 1
    },
]

function CartTester2() {
    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])
    let cartItem = []
    const addItem = (item) => {

        if (cartItem.length === 0) {
            cartItem = [item]
            // setCart([item])
        }
        else {
            let found = -1;
            for (let i = 0; i < cartItem.length; i++) {
                if (cartItem[i].name === item.name) {
                    cartItem[i].count++
                    found = i
                }

            }
            if (found === -1) {
                cartItem = [...cartItem, item]
            }
            console.log(cartItem)
            // console.log('setting cart')
            // setCart([...cartItem])
            // // console.log(cart)
        }
         setCart([item])


    }
    // useEffect(()=>{
    //    console.log(cart)
    // },[cart])

    return (
        <div>
            {
                product.map(item => (
                    <div key={item.name}>
                        {
                            item.name
                        }
                        <button onClick={() => addItem(item)}> add</button>
                    </div>
                ))
            }
        </div>
    )
}

export default CartTester2
