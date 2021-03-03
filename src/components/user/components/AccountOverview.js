import React from 'react'
import InfoContainer from './InfoContainer'
import './Styles/AccountOverview.css'

function AccountOverview() {
    return (
        <div className='account-overview-container'>
            <InfoContainer showIcon ={true} title={"ACCOUNT DETAILS"} />
            <InfoContainer title={"ADDRES BOOK"} />
            <InfoContainer title={"E-SHOP PAY"}/>
            <InfoContainer showIcon ={false} title={"NEWSLETTER PREFERNCES"} />
        </div>
    )
}

export default AccountOverview
