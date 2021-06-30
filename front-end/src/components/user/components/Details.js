import React from 'react'
import './Styles/Details.css'
import Input from '../../shared/primitiveComponents/Input'
import Button from '../../shared/primitiveComponents/Button'

function Details() {
    return (
        <div className='details-container'>
            <div className='detail'>
                <Input style={{margin: '20px 20px' }} placeholder='First name' type='text' />
                <Input style={{margin: '20px 20px' }} placeholder='Last name' type='text' />
            </div>
            <div className='detail'>
                <Input style={{margin: '20px 20px' }} placeholder='Email name' type='text' />
                <Input style={{margin: '20px 20px' }} placeholder='Phone Number' type='text' />
            </div>
            <div className='detail'>
                <Input style={{margin: '20px 20px' }} placeholder='Gender' type='text' />
                <Input style={{margin: '20px 20px' }} placeholder='Date of Birth' type='text' />
            </div>
            <div>
                <Button style={{margin: '20px 20px' }} name='SAVE' />
            </div>

        </div>
    )
}

export default Details
