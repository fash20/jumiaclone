import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../shared/primitiveComponents/Button'
import Input from '../../shared/primitiveComponents/Input'
import './Styles/ChangePassword.css'

function ChangePassword() {
    return (
        <div className='change-password-container'>
            <Input  style={{paddng:'10px', margin:'20px 0px'}} placeholder = 'Current Password' />
            <Input  style={{paddng:'10px', margin:'20px 0px'}} placeholder = 'New Password' />
            <Input  style={{paddng:'10px', margin:'20px 0px'}} placeholder = 'Retype New Password' />
           <Link to='/'> <Button style={{margin:'30px 0px', width: '100%'}}   name='SUBMIT' /></Link>
        </div>
    )
}

export default ChangePassword
