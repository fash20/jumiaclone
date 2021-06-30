import React, { useContext } from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { ActionContext } from '../../App'
import '../../styles/Navbar.css'



const NavCart = () => {

    // const cart = useContext(cartContext)
    const action = useContext(ActionContext)
    const count = action('COUNTER')


    return (
        <div className='nav-cart ' >

            {
                count > 0 ? (<span className='cart-count cart-cent1'> {count} </span>) : ('')
            }
            <a href='/cart'>< BiCartAlt className='dropdown-icon' />  <h5>Cart</h5>
            </a>

        </div>

    )
}

export default NavCart
