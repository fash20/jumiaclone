import React, { useState, useEffect, useRef, useContext } from 'react'
import '../../../styles/Dropdown.css'
import { useDetectClickOutside } from './useDetectClickOutSide';
import { RiArrowDownSLine, RiUserFollowLine } from 'react-icons/ri'
import { ActionContext, UserContext } from '../../../App';
import LinkBotton from './LinkBotton';



function DropDown(props) {
    const name = props.name
    const icons = props.icons
    const forr = props.for
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useDetectClickOutside(dropdownRef, false)
    const onClickHandler = () => setIsActive(!isActive)
    const user = useContext(UserContext)
    const action = useContext(ActionContext)
    const dropdownContent = [
        {
            name: 'help',
            content: [
                "  Help Center",
                "Place & Track Order",
                "Order Cancellation",
                "Return and Refund",
                "Payment and Jumia account",
            ]
        },
    ]
    return (
        <div>
            <div style ={{backgroundColor: isActive?'#ededed':'', borderRadius:'3px' }} onClick={onClickHandler} className='Dropdown'>
                {user.name !== undefined && forr === 'user' ? <RiUserFollowLine className='dropdown-icon' /> : icons[0]}
                <div className='bld'> {user.name !== undefined  && forr === 'user' ? (<span className='loggedin-user fs16 bld'>{'Hi, ' + user.name}</span>) : name}</div>
                {
                    isActive ? icons[1] : <RiArrowDownSLine className='dropdown-icon' />
                }
            </div>
            <nav ref={dropdownRef} className={`menu br7 ${isActive ? 'active' : 'inactive'}`}>
                {
                    props.component
                }
                { user.name !== undefined && forr && <div className='cart-cent1 mg-bm8'>
                    <LinkBotton onClick={() => { action('LOGOUT'); console.log('sjs') }} name="LOGOUT" />
                </div>
                }
            </nav>
        </div>
    )
}
export default DropDown
