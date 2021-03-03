import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSave, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/Dropdown.css'
import Button from '../primitiveComponents/Button';
import { useDetectClickOutside } from './useDetectClickOutSide';
import Divider from './Divider';
import LinkBotton from './LinkBotton';
import { AiOutlineHeart, AiOutlineSave, AiOutlineUser } from 'react-icons/ai';


function NavItemList() {
    return (
        <div>
            <div > <Button linkTo='/login' name='Login' size ='large'/> </div>
            <Divider divideWith='OR' divideBy='2' />
            <div  className='signup-link centralize'> <a href='/register'><LinkBotton name='CREATE AN ACCOUNT'/> </a> </div>
            <div className=" navbar-dropdowm-list"><AiOutlineUser className='dropdown-icon1' /> <span style={{ fontSize: '14px' }}>Account</span> </div>
            <div className=" navbar-dropdowm-list"> < AiOutlineSave className='dropdown-icon1' icon={faSave} /><span style={{ fontSize: '14px' }}>Order</span> </div>
            <div className=" navbar-dropdowm-list"> <AiOutlineHeart className='dropdown-icon1' icon={faHeart} /><span style={{ fontSize: '14px' }}>Saved Item</span> </div>
        </div>
    )
}

export default NavItemList
