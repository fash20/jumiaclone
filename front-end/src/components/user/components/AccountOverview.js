import React from 'react'
import InfoContainer from './InfoContainer'
import './Styles/AccountOverview.css'

function AccountOverview({data}) {
    // console.log(props);
    return (
        
        <div className='account-overview-container'>
            <InfoContainer data = {data} showIcon ={true} title={"ACCOUNT DETAILS"} />
            <InfoContainer title={"ADDRES BOOK"} />
            <InfoContainer title={"E-SHOP PAY"}/>
            <InfoContainer showIcon ={false} title={"NEWSLETTER PREFERNCES"} />
        </div>
    )
}

export default AccountOverview
