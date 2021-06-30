import axios from 'axios'
import { useState, useEffect } from 'react'
import {decodeToken ,isExpired} from 'react-jwt'

const GlobalStore = () => {
    let currentUser = { name:'Abdulfatai', id:'quyguqgfbiufiwr', token: ''}
    let count = 0
    let pCount = 0
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name:null, id: null})
    cart.map((item1, index) => { item1.count ? item1.count = item1.count : item1.count = 1 })

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
                if (item1.name === item && item1.count > 0) {
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
            cart.map((item1, index) => {
                if (item1.name.toString() == item.toString()) {
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
    const itemConter = () => { 
        cart.map(item => {
             count = count + item.count
        })
    }
    const productCount = (payload) =>{
        cart.map(item => {
           if (item.name === payload){
                pCount = item.count
                return pCount
           }
       })
    }
    const action = (action, payload) => {
        switch (action) {
            case 'ADDONE':
                addToCart(payload);
                break;
            case 'REMOVEITEM':
                removeItem(payload);
                break;
            case 'REMOVEONE':
                removeOne(payload);
                break;
            case 'COUNTER':
                return count;
            case 'PROCOUNTER':
                productCount(payload);
                return pCount
            case 'LOGIN':
                logIn(payload);
                break;
            case 'LOGOUT':
                logOut();
                break;
            case 'PRICE':
                break;
            default:
                break;
        }

    }
    const logIn = (token) =>{
        const decodedUser = decodeToken(token)
        let result = {}
        axios.get('http://localhost:3100/customer/'+decodedUser.userId)
            .then(res => setUser({name:res.data.user.firstname, id:res.data.user.id, token: token}))
            .catch(err=> console.log(err))
    }
    const logOut = () => {
        setUser({})

    }

    useEffect(() => {
        if (localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')))

        }
        // if(sessionStorage.getItem('user') !== null){
            setUser(JSON.parse(sessionStorage.getItem('user')))
        // }
        return () => {
            localStorage.removeItem('cart')
        }
    }, [])
    useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    
    useEffect (()=> {
            sessionStorage.setItem('user', JSON.stringify(user))
    },[user])

    itemConter()

    return [cart, action , count , user]

}
export default GlobalStore
