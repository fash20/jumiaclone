import React from 'react'
import '../../../styles/Dropdown.css'

function NavItemList() {
    const items = ['Help Center','Place & Track Order', 'Order Cancellation', 'Return and Refund', 'Payment and Jumia account']
    return (
        <div>
            {
                items.map((item)=>(
                    <div className=" navbar-dropdowm-list" key={item}> <a href='/' style={{ fontSize: '14px', marginLeft:'10px',textDecoration:'none', color:'black' }}>{item}</a> </div>
                ))
            }
        </div>
    )
}

export default NavItemList