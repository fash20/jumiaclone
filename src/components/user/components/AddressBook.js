import React from 'react'
import LinkBotton from '../../shared/primitiveComponents/LinkBotton'
import InfoContainer from './InfoContainer'
import './Styles/AddressBook.css'

function AddressBook() {
    return (
        <div className='detail'>
           <InfoContainer showHeaderBelow={true} title='Address Book' showIcon={true} />
           <InfoContainer showHeaderBelow={true} delete={true} title= {<LinkBotton name='Set Default' />} showIcon={true} />
        </div>
    )
}

export default AddressBook
