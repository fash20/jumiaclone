import React, { useState, useEffect } from 'react'
import '../../styles/Navbar.css'
import logo from '../../assets/logo4.png'
import DropDown from './primitiveComponents/DropDown'
import NavItemList from './primitiveComponents/NavItemList'
import NavListItem from './primitiveComponents/NavListItem'
import Button from './primitiveComponents/Button'
import { IoHelpOutline } from 'react-icons/io5'
import { RiArrowUpSLine, RiUserLine } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'
import { BiCartAlt } from 'react-icons/bi'



const Navbar = () => {
    const [isScreenSmall, setIsScreenSmall] = useState(false);
    const [isNavVissible, setIsNavVissble] = useState([]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 745px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange)
        }
    }, [])
    const handleMediaQueryChange = (mediaQuery) => {
        mediaQuery.matches == true ? setIsScreenSmall(true) : setIsScreenSmall(false)
    }

    return (
        <div className='navbar-container' >
            <div className='navbar-wrapper' >
                {
                    isScreenSmall == true ? (
                        <div className='big-screen'>
                            <a href='/'><img className='logo-wrapper' style={{ height: '75px', margin: '0 10px' }} src={logo} /></a>
                            <div className='nav-form'>
                                <form className='search-wrapper'>
                                    <i className='input-icon'>< BsSearch fontSize='20px' /></i>
                                    <input className='nav-form-search-textbox' type='text' placeholder='Search products brands and categories' />
                                </form>
                                <div className='nav-form-search-btn'>
                                    <Button className='nav-form-search-btn' size='medium' name='SEARCH' />
                                </div>
                            </div>
                            <div className='account-help-cart'>
                                <DropDown name={'Login'} icons={[<RiUserLine className='dropdown-icon' />, <RiArrowUpSLine className='dropdown-icon' />]} component={(<NavItemList />)} />
                                <DropDown name={'Help'} icons={[<IoHelpOutline className='dropdown-icon' />, <RiArrowUpSLine className='dropdown-icon' />]} component={(<NavListItem />)} />
                                <div className='nav-cart ' > <a href='/'>< BiCartAlt className='dropdown-icon' /> <h5>Cart</h5> </a> </div>
                            </div>

                        </div>
                    )
                        :
                        <div>
                            <a href='/'><img className='logo-wrapper' style={{ height: '75px', margin: '0 20px' }} src={logo} /></a>
                        </div>
                }
            </div>
        </div>
    )
}
export default Navbar