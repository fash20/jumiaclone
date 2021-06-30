import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import '../../styles/UserRegister.css'
import Button from '../shared/primitiveComponents/Button'
import CustomCheckBox from '../shared/primitiveComponents/CustomCheckBox'
import Divider from '../shared/primitiveComponents/Divider'
import Input from '../shared/primitiveComponents/Input'
import LinkBotton from '../shared/primitiveComponents/LinkBotton'

function UserRegister() {
    const textstyle={
        width: '95%'
    }
    const buttonStyle = {
        height: '50px', width: '100%', color: '#fff', fontSize: '14px', fontWeight: '500'
    }
    const buttonStyle1 = {
        height: '50px', width: '100%', color: '#fff', backgroundColor: '#3b5998', fontSize: '14px', fontWeight: '500'
    }
    return (
        <div  className='user-register-form-container'>
            <div className='Register-form-1' >
                <span  className='register-form-header'>Create Account</span>
                <div className='register-form-container'>
                    <Input style={textstyle} placeholder='First Name' type={'text'} />
                    <Input style={textstyle} placeholder='Last Name' type={'ext'} />
                    <Input style={textstyle} placeholder='Email' type={'text'} />
                    <Input style={textstyle} placeholder='Password' type={'Password'} />
                    <Input style={textstyle} placeholder='Phone Number' type={'number'} />

                </div>
                    <CustomCheckBox label='Remember me' labelColor={'#282828'} />
                <div className='login-form-btn'>
                    <Button style={buttonStyle} name='CREATE ACCOUNT' />
                    <Divider divideWith ='OR'/>
                    <Button icon={<FaFacebookSquare style={{ position: 'absolute', fontSize: '25px', left: '10px' }} />} style={buttonStyle1} name='LOGIN WITH FACEBOOK' />

                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <span style={{fontSize:'14px'}}>Already have an account?</span>
                    <a href='/login'><LinkBotton name='Login' /></a>
                </div>
            </div>
        </div>
    )
}

export default UserRegister
