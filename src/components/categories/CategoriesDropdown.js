import React, { useState, useRef } from 'react'
import './styles.css/CategoryStyles.css'
import image from '../../assets/PS-4.jpg';
import FeaturedProductImage from '../homePage/components.js/FeaturedProductImage';
import Image from '../shared/primitiveComponents/Image'
import { categories } from './categories'

function CategoriesDropdown() {
    const [content, setContent] = useState([])
    const [side, setSide] = useState(false)
    const [category, setCategory] = useState(categories)

    return (
        <div className='category-dropdown-container' onMouseLeave={() => setContent([])}>
            <div className=' category-dropdown-item-container ' style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    categories.map(item =>
                    (
                        <span

                            key={item.name}
                            onMouseOver={(e) => { setSide(true); setContent(item.subGroup) }}
                            onMouseLeave={(e) => { setSide(false); }}
                            className='category-dropdown-item'>
                            {item.icon}{item.name}
                        </span>)
                    )
                }
            </div>

            <div style={{ visibility: 'visible' }} className='dropside-container'>
                {
                    content.map(item => (
                        <div key={item.name} style={{ margin: '10px', minHeight: '400px' }} className='visdrop-side-container'>
                            <span className='sub-category' style={{ fontSize: '12px', fontWeight: '500' }}>{item.name}</span>
                            <hr style={{ border: '.5px solid #f2f2f2' }} />
                            {
                                item.items.map(item => <div className="sub-category-item" key={item} style={{ fontSize: '12px', padding: '3px' }}>{item}</div>)
                            }
                        </div>
                    ))

                }
            </div>

        </div>
    )
}

export default CategoriesDropdown
