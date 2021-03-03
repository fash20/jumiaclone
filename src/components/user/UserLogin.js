import React from 'react'
import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'
import '../../styles/UserLogin.css'
import Button from '../shared/primitiveComponents/Button'
import CustomCheckBox from '../shared/primitiveComponents/CustomCheckBox'
import Input from '../shared/primitiveComponents/Input'

function UserLogin() {
    const buttonStyle = {
        height: '50px', width: '100%', color: '#fff', fontSize: '14px', fontWeight: '500'
    }
    const buttonStyle1 = {
        height: '50px', width: '100%', color: '#fff', backgroundColor: '#3b5998', fontSize: '14px', fontWeight: '500'
    }
    return (
        <div className='user-login-form-container'>
            <div className='login-form-1' >
                <span className='login-form-header'>Login</span>
                <div className='login-form-container'>
                    <Input placeholder= 'E-mail' type={'text'} />
                    <Input placeholder= 'Password' type={'Password'} />
                    <div className='remember-forgot' >
                        <span> <CustomCheckBox label='Remember me'/> </span>
                        <span className='forgot-password' style={{ float: 'right' }} >Forgot your password?</span>
                    </div>
                </div>

                <div className='login-form-btn'>
                    <Button icon={<FaEnvelope style={{ position: 'absolute', height: '45px', fontSize: '25px', left: '10px', }} />} style={buttonStyle} name='LOGIN' />
                    <Button icon={<FaFacebookSquare style={{ position: 'absolute', fontSize: '25px', left: '10px' }} />} style={buttonStyle1} name='LOGIN WITH FACEOOK' />
                </div>
            </div>
            <div className='login-form-2'>
                <span className='login-form-header'>Create your E-shop accuont</span>
                <div className='login-form-container'>
                    <p className='login-paragraph'>With few clicks you can create your account with your e-mail or facebook account </p>
                </div>
                <div className='login-form-btn'>
                    <Button style={buttonStyle} icon={<FaEnvelope style={{ position: 'absolute', height: '45px', fontSize: '23px', left: '10px' }} />} name='CREATE ACCOUNT VIA E-MAIL' />
                    <Button icon={<FaFacebookSquare style={{ position: 'absolute', fontSize: '25px', left: '10px' }} />} style={buttonStyle1} name='REGISTER WITH FACEOOK' />

                </div>
            </div>
        </div>
        
    )
}

export default UserLogin
