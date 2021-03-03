import React from 'react'
import { BiPencil, BiTrash } from 'react-icons/bi'
import LinkBotton from '../../shared/primitiveComponents/LinkBotton'
import './Styles/InfoContainer.css'

function InfoContainer(props) {
    var below = false;
    props.showHeaderBelow ? below = true : below = false
    return (
        <div className='info-container'>
            <div style={{ border: '1px solid #ededed', position: 'relative' }}>


                {  !below ? <div className='user-info-title' style={{ fontSize: '14px', paddingLeft: '16px' }}>{props.title} { props.showIcon && <LinkBotton icon={<BiPencil style={{ fontSize: '25px' }} />} style={{ position: 'absolute', right: '0%', width: '40px', borderRadius: '50%', marginRight: '10px' }} />}</div>:null}
                <div className='info-body-container'>
                    <span className='info-body'>Customer names</span>
                    <span className='info-body fade'>Customer Emails</span>
                </div>
                <div style={{ paddingLeft: '6px' }}>
                    <LinkBotton style={{ fontSize: '14px' }} name='CHANGE PASSWORD' />
                </div>
            { below ? <div className='below-header bortop' style={{fontSize:'14px', paddingLeft:'16px'}}>{props.title} <div className='icons-container'>{ props.showIcon && <LinkBotton  icon ={ <BiPencil style={{fontSize:'25px'}} /> } style={{ width:'40px' ,borderRadius:'50%', marginRight:'10px'}} />  } {props.showIcon && props.delete && <LinkBotton  icon ={ <BiTrash style={{fontSize:'25px'}} /> } style={{ width:'40px' ,borderRadius:'50%', marginRight:'10px'}} />} </div> </div> : null  }
            </div>
        </div>
    )
}

export default InfoContainer
