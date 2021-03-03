import React, { useState, useEffect, useRef } from 'react'
import '../../../styles/Dropdown.css'
import { useDetectClickOutside } from './useDetectClickOutSide';
import { RiArrowDownSLine  } from 'react-icons/ri'



function DropDown(props) {
    const name = props.name
    const icons = props.icons
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useDetectClickOutside(dropdownRef, false)
    const onClickHandler = () => setIsActive(!isActive)

    return (
        <div>
            <button onClick={onClickHandler} className='Dropdown'>
                {icons[0]} 
                <h4>{name}</h4>
                {
                    isActive ? icons[1] : <RiArrowDownSLine className='dropdown-icon'/>
                }
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                    {
                        props.component
                    }
                  
            </nav>
        </div>
    )
}
export default DropDown
