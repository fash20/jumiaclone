import React, { useState, useEffect } from 'react'
import { userActions } from './userActions'
import '../../styles/UserProfile.css'
import { RiUserLine } from 'react-icons/ri'
import LinkBotton from '../shared/primitiveComponents/LinkBotton'
import { useLocation, Link, useHistory } from 'react-router-dom'
import AccountOverview from './components/AccountOverview'
import Details from './components/Details'
import AddressBook from './components/AddressBook'
import ChangePassword from './components/ChangePassword'

function UserProfile() {
    const location = useLocation().pathname.substring(9)
    const histroy = useHistory();
    const [title, setTitle] = useState()
    const [component, setComponent] = useState('')
    const [background, setBackground] = useState('#dbdbdb')
    const titler = () => {
        // if (location === '/account') setTitle('Account Overview')
        switch (location) {
            case '/account': setTitle('Account Overview'); setComponent(<AccountOverview />)
                break;
            case '/orders': setTitle('Orders');
                break;
            case '/pendingreviews': setTitle('Pending Reviews');
                break;
            case '/vouchercredits': setTitle('Voucher Credits');
                break;
            case '/saveditems': setTitle('Saved Items');
                break;
            case '/recentlyviewed': setTitle('Recently Viewed');
                break;
            case '/details': setTitle('Details'); setComponent(<Details />);
                break;
            case '/addressbook': setTitle('Address Book'); setComponent(<AddressBook />)
                break;
            case '/changepassword': setTitle('Change Password'); setComponent(<ChangePassword />)
                break;
            case '/newsletter': setTitle('News Letter');
                break;
            default: setTitle('Account 0verview'); setComponent(<AccountOverview />);

        }
    }

    useEffect(() => {
        titler()
        return () => {

        }
    }, [title])

    return (
        <div style={{ width: '80%' }}>
            <div className='user-profile-container' >
                <div className='user-profile-actions'>
                    <div className='user-profile-action border'>
                        <a href='/customer/login'>
                            <span
                                className='account-action border'
                                style={{ backgroundColor: title == 'Account 0verview' ? background : null }}>
                                <RiUserLine className='user-profile-icon' />
                                My Account
                            </span>
                        </a>
                        {
                            userActions.map((item) => {
                                if (item.icon !== undefined) {
                                    return <a href={item.route} key={item.route} >
                                        <span
                                            className='account-action'
                                            style={{ backgroundColor: title == item.name ? background : null }}
                                        >
                                            {item.icon}{item.name}
                                        </span>
                                    </a>
                                }
                            }

                            )
                        }
                    </div>
                    <div className='user-profile-action border'>
                        {
                            userActions.map((item) => {
                                if (item.icon === undefined) {
                                    return <a href={item.route} key={item.route} >
                                        <span
                                            className='account-action'
                                            style={{ backgroundColor: title == item.name ? background : null }}  >
                                            {item.name}
                                        </span>
                                    </a>
                                }
                            })

                        }
                        <span className='account-action centralize hover-white'>
                            <a href='/'>
                                <LinkBotton name={"LOG OUT"} />
                            </a>
                        </span>

                    </div>
                </div>
                <div className='user-profile-info-container'>
                    <div className='user-info-title'>{title}</div>
                    {
                        component
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfile
