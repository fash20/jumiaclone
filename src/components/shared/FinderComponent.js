import { Input } from 'antd'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import '../../styles/FinderComponent.css'

function FinderComponent() {
    const subCategory =
        [
            "Electronic Gadgets",
            "Accessories & Supplies",
            "Camera & Photo",
            "Cameras",
            "Car & Vehicle Electronics",
            "eBook Readers & Accessories",
            "Headphones",
            "Home Audio",
            "Portable Audio & Recorders",
            "Radios & Transceivers",
            "Security & Surveillance",
            "Television & Video",
            "Wearable Technology"
        ]
    const brand = ['Apple', 'Hp', 'Dell', 'Lenovo', 'Acer']
    return (
        <div className='finder-category-container'>
            <span style={{ fontSize: '14px', margin: '5px', fontWeight: '500' }} >CATEGORY</span>
            <a style={{ fontSize: '14px', margin: '5px' }} href='/category'>Category name</a>
            <div className='subcategory-stack'>
                {
                    subCategory.map(item => <span className='subcategory' key={item}>{item}</span>)
                }
            </div>
            <div>
                <div><span style={{ fontSize: '14px', margin: '5px' }}>BRAND</span></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px 0' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80%', height: '32px', borderRadius: '30px', border: '1px solid ' }}>
                        <i className='input-icon-brand'><IoSearch fontSize='17px' /></i>
                        <input placeholder='Search...' style={{ width: '90%', fontSize: '14px', height: '18px', outline: 'none', border: 'none' }} type='text' />
                    </div>
                </div>
                <div className='subcategory-brand-stack'>
                    {
                        brand.map(item => <span className='checkbox-brand' key={item}><input className='checkbox' type='checkbox' />{item} </span>)
                    }
                </div>

            </div>

            <div>
                <span style={{ fontSize: '14px', margin: '5px' }}>PRODUCT RATING</span>
                <div className='subcategory-brand-stack'>
                    {
                        brand.map(item => <span className='checkbox-brand' key={item}><input className='checkbox' type='checkbox' />{item} </span>)
                    }
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default FinderComponent
