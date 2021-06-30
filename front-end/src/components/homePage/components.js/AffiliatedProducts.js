import React from 'react'
import { BsBag } from 'react-icons/bs';
import { FaPlane, FaMoneyBillAlt } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import '../styles/HomePageComponents.css'

function AffiliatedProducts() {
    const affProduct = [
        {
            name: 'Offical Store',
            icon: <BsBag color="white "  />,
            color:'#F26052'
        },
        {
            name: 'Travle',
            icon: <FaPlane color="white "/>,
            color:'#F2CF66'
        },
        {
            name: 'Food',
            icon: <IoFastFoodOutline color="white "/>,
            color:'#F2C0A2'
        },
        {
            name: 'Loans',
            icon: <FaMoneyBillAlt color="white " />,
            color:'#F285AD'
        }
    ];
    return (
        <div className='aff-pro '>
            {
                affProduct.map(item => (
                   <div key ={item.name} className='aff-pro-cont'> <a href='/'><span style={{backgroundColor:item.color, fontSize:'20px'}} className='aff-icon'>{item.icon}</span> {item.name} </a> </div>
                ))
            }
        </div>
    )
}

export default AffiliatedProducts
