import React, { useState, useEffect, useRef, useContext } from 'react'
import { faHeart, faSave, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/Dropdown.css'
import Button from '../primitiveComponents/Button';
import Divider from './Divider';
import LinkBotton from './LinkBotton';
import { AiOutlineHeart, AiOutlineSave, AiOutlineUser } from 'react-icons/ai';
import { UserContext } from '../../../App';


function NavItemList() {
    const user = useContext(UserContext )
    return (
        <div>
            {
              user.name == undefined &&  <div>
                <div > <Button linkTo='/login' name='Login' size ='large'/> </div>
                <Divider divideWith='OR' divideBy='2' />
                <div  className='signup-link centralize'> <a href='/register'><LinkBotton name='CREATE AN ACCOUNT'/> </a> </div>
                </div>
            }
            <a href={`/customer`}><div className=" navbar-dropdown-list"><AiOutlineUser className='dropdown-icon1' /> <div className='link-list'>Account</div> </div></a>
            <a href='/customer/order'><div className=" navbar-dropdown-list"> < AiOutlineSave className='dropdown-icon1' icon={faSave} /><div className='link-list'>Order</div> </div></a>
            <a href='/customer/saved'><div className=" navbar-dropdown-list"> <AiOutlineHeart className='dropdown-icon1' icon={faHeart} /><div className='link-list'>Saved Item</div> </div></a>
        </div>
    )
}

export default NavItemList
