import React, { useEffect, useState } from 'react'
import ProductLists from '../product/ProductLists'
const product = ProductLists



function CartTester() {
    let totalPrice = 0
    let count = 0
    const [cart, setCart] = useState([])
    cart.map((item1, index) => {  item1.count ?  item1.count = item1.count : item1.count = 1 })

    const addToCart = (item) => {
        
        let itemFound = -1
        if (cart.length === 0) {

            item.count = 1
            setCart([item])
        }
        else if (cart.length >= 1) {
            cart.map((item1, index) => { 
                if (item1.name === item.name) {
                   
                    if (item.count === 0) {
                        item.count++
                        setCart(() => [...cart])
                    }
                    item1.count++
                    setCart(() => [...cart])
                    itemFound = index
                }

            })
            if (itemFound === -1) {
                setCart((prev) => [...prev, item])
            }

        }

    }
    const removeOne = (item) => {

        if (cart.length > 0) {
            cart.map(item1 => {
                if (item1.name === item.name && item1.count > 0) {
                    item1.count--
                    setCart(() => [...cart])
                }
                if (item.count < 1) {
                    removeItem(item)
                }
            })
        }
        else {
            setCart([])
        }

    }

    const removeItem = (item) => {
        if (cart.length > 0) {
            cart.map((item1,index) => {
                if (item1.name.toString() == item.name.toString()) {
                    item1.count = 1
                    cart.splice(index, 1)
                    setCart([...cart])
                }
            })
        }
        else {
            return
        }
    }
    const calcTotal = (price) => {
        totalPrice = totalPrice + price

    }

    const totalCount = (num) => {
        count = count + num
    }

    useEffect(() => {
        if (localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')))

        }
        return ()=>{
            localStorage.removeItem('cart')
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem('cart') === null) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        else {
                localStorage.setItem('cart', JSON.stringify(cart))
        }


    }, [cart])
    return (
        <div style={{ width: '90%', justifyContent: "space-between", display: 'flex', flexDirection: 'row' }}>
            <div>
                {
                    product.map(item => (
                        <div key={item.id}>
                            <span>{item.name} </span>
                            <span>{item.price} </span>
                            ---<span>{item.seller.name} </span>
                            <button onClick={() => addToCart(item)}> + </button>
                            <button onClick={() => removeOne(item)}>-</button>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    cart.length > 0 ?
                        cart.map(item => (
                            <div style={{ position: 'relative' }} key={item.name} >
                                <CartCard name={item.name} item={item} price={item.price} count={item.count} onAdd={addToCart} />
                                <div style={{ position: 'absolute', top: '40%', right: '4px' }}>
                                    <button onClick={() => addToCart(item)}> + </button>
                                    <button onClick={() => removeOne(item)}>-</button>
                                    <button onClick={() => removeItem(item)}>Remove</button>
                                    {
                                        item.seller.name
                                    }
                                    {
                                        calcTotal((item.price * item.count))
                                    }
                                    {
                                        totalCount((item.count))
                                    }
                                </div>
                            </div>

                        ))
                        : <div><h4>Cart is Empty</h4></div>
                }

                <h5> Items :  {count}</h5>
                <h3> Total Price: N {totalPrice}</h3>

            </div>
        </div>
    )
}

export default CartTester


const CartCard = ({ name, count, price, onAdd, onRemove, item }) => {
    return (
        <div style={{ margin: '3px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: "90px", width: '300px', backgroundColor: 'steelblue' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span>Name:{name}</span>
                <span>Total:{count * price}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span>Price: {price}</span>
                <span>Count: {count}</span>
            </div>
        </div>
    )
}