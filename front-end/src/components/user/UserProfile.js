import React, { useState, useEffect, useContext, useRef } from 'react'
import { userActions } from './userActions'
import '../../styles/UserProfile.css'
import { RiUserLine } from 'react-icons/ri'
import LinkBotton from '../shared/primitiveComponents/LinkBotton'
import { useLocation, Link, useHistory } from 'react-router-dom'
import AccountOverview from './components/AccountOverview'
import Details from './components/Details'
import AddressBook from './components/AddressBook'
import ChangePassword from './components/ChangePassword'
import SavedItem from '../saved Item/SavedItem'
import SIContainer from '../saved Item/SIContainer'
import { UserContext } from '../../App'
import { useFetch } from '../shared/helpers/useFetch'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min'

function UserProfile() {
    const ref = useRef(true)
    const user = useContext(UserContext)
    const location = useLocation().pathname.substring(9)
    const histroy = useHistory();
    let [data, setData] = useState({})
    const [title, setTitle] = useState()
    let component  = '' 
    const [background, setBackground] = useState('#dbdbdb')
    // const [data, setData] =useState({firstname:'Fash'})
    const titler = () => {
        // if (location === '/account') setTitle('Account Overview')
        switch (location) {
            case '/account': setTitle('Account Overview'); 
                break;
            case '/orders': setTitle('Orders');
                break;
            case '/pendingreviews': setTitle('Pending Reviews');
                break;
            case '/vouchercredits': setTitle('Voucher Credits');
                break;
            case '/saveditems': setTitle('Saved Items'); component=<SIContainer />
                break;
            case '/recentlyviewed': setTitle('Recently Viewed');
                break;
            case '/details': setTitle('Details'); component=<Details />;
                break;
            case '/addressbook': setTitle('Address Book'); component=<AddressBook />
                break;
            case '/changepassword': setTitle('Change Password'); component=<ChangePassword />
                break;
            case '/newsletter': setTitle('News Letter');
                break;
            default: setTitle('Account 0verview'); component=<AccountOverview />;

        }
    }

    useEffect(() => {
        if (user.id !== null) {
            axios.get('http://localhost:3100/customer/' + user.id).
                then(res => {
                    setData(res.data.user)
                })
                .catch(err => err)
        }
        titler()
        return () => {

        }
    }, [title])

    return (
        <div style={{ width: '80%', overflowY: 'scroll' }}>
            <div className='user-profile-container' >
                <div className='user-profile-actions'>
                    <div className='user-profile-action border'>
                        <a href='/customer/'>
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
                    <div style={{ padding: '8px' }} >
                        <BrowserRouter>
                            <Route exact path='/customer' >
                              <AccountOverview data = {data}  />
                            </Route>
                            <Route path='/customer/orders' >
                        
                            </Route>
                            <Route path='customer/pendingreviews' >
                              <AccountOverview name = {data.firstname}  />
                            </Route>
                            <Route path='/customer/vouchercredits' >
                              <AccountOverview name = {data.firstname}  />
                            </Route>
                            <Route path='/customer/saveditems' >
                              <SIContainer name = {data.firstname}  />
                            </Route>
                            <Route path='/customer/recentlyviewed' >
                              <AccountOverview name = {data.firstname}  />
                            </Route>
                            <Route path='/customer/details' >
                              <Details name = {data.firstname}  />
                            </Route>
                            <Route path='/customer/addressbook' >
                              <AddressBook name = {data.firstname}  />
                            </Route>
                            <Route path='/customer/changepassword' >
                              <ChangePassword name = {data.firstname}  />
                            </Route>
                            <Route path='/customer/newsletter' >
                              <AccountOverview name = {data.firstname}  />
                            </Route>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
