import React from 'react'
import SavedItem from './SavedItem'

function SIContainer() {
    const savedItems = [
        {
            name: 'Beat By Dre',
            price:23000,
            old: 2100,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
        {
            name: 'Orimo headset',
            price:23600,
            old: 21000,
            reduction: -24
        },
    ]
    return (
        <div style={{maxHeight:'485px', overflowY:'scroll', }}>    
           {  
               savedItems.map((item,index)=>
                 <SavedItem key={index} name ={item.name} old={item.old} price={item.price}  />
               )
           }
        </div>
    )
}

export default SIContainer
