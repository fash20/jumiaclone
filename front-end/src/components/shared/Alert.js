import React, { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { IoClose } from 'react-icons/io5'
import '../../styles/CheckOut.css'
import Button from './primitiveComponents/Button'
import '../../styles/Alert.css'
function Alert() {
    const [display, setDisplay ]=useState('block')

    const onClick = () =>{
        setDisplay('none');
    }
    return (
        <div style={{display:display === 'block'?'':display}} id ='alert' className='cart-cent1 alert-wrapper'>
            <div className='br7 alert-container' 
            // style={{display: display,}}
            >
                <div style={{backgroundColor:""}} className='cart-cent cart-flex-dirc-row cart-ali-cent just-space-between ppd10 bdbm '>
                    <div  className='cart-cent1 '>
                        <FaRegCheckCircle color='#63da7d' style={{ marginRight: "10px", }} fontSize={20} />
                        <span style={{color:"#63da7d"}} className='fs14 '>Success </span>                       
                    </div>
                    <span className='cart fs14 '> <GrClose onClick={onClick} className='close-icon'  fontSize={20} />  </span>
                </div>
                <div style={{}}>
                       <span className='fs14 pdd8'>
                           Message Alert
                       </span>
                </div>
                <div className='cart-cent1' style={{position:'absolute', bottom:'10px', right:'10px'}}>
                    <Button onClick={onClick} name='OK' style={{height: '30px',  margin:'0 5px', fontSize:'12px' , width: '60px', borderRadius:"2px"}} />
                    {/* <Button name='CANCEL' style={{height: '30px',margin:'0 5px' ,fontSize:'12px', width: '60px', borderRadius:"2px"}} /> */}
                </div>
            </div>
         </div>
    )
}

export default Alert
