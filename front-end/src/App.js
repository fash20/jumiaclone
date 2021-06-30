import logo from './logo.svg';

import './App.css';
import Navbar from './components/shared/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './components/homePage/HomePage'
import Category from './components/categories/Category';
import Footer from './components/shared/Footer';
import UserLogin from './components/user/UserLogin';
import UserRegister from './components/user/UserRegister';
import Slider from './components/shared/primitiveComponents/Slider'
import CustomCheckBox from './components/shared/primitiveComponents/CustomCheckBox';
import UserProfile from './components/user/UserProfile';
import Product from './components/product/product-page/Product';
import Ratinng from './components/shared/primitiveComponents/Rating'
import Carousel from './components/shared/primitiveComponents/Carousel';
import Cart from './components/cart/Cart'
import SIContainer from './components/saved Item/SIContainer';
import CheckOut from './components/checkout/CheckOut';
import CustomRadioB from './components/shared/primitiveComponents/CustomRadioB';
import Review from './components/review/Review';
import Alert from './components/shared/Alert';
import Products from './components/product/Products';
import Seller from './components/seller/Seller';
import SellerProfile from './components/seller/SellerProfile';
import CartTester from './components/cart/CartTester';
import CartTester2 from './components/cart/CartTester2';
import React from 'react';
import useGlobalStore from './components/global store/useGlobalStore'
import NotFound from './components/shared/NotFound';
import Tess from './components/Tess';

export const cartContext = React.createContext()
export const AddContext = React.createContext()
export const ActionContext = React.createContext()
export const CountContext = React.createContext()
export const UserContext = React.createContext()
function App() {
  const [cart, action, count, user] = useGlobalStore()
  return (
    <div className='App'>
      <BrowserRouter  >

        <UserContext.Provider value={user} >
          <ActionContext.Provider value={action}>
            <Navbar />
          </ActionContext.Provider>
        </UserContext.Provider>
        <div className="Content">
          <UserContext.Provider value={user} >
            <cartContext.Provider value={cart}>
              <ActionContext.Provider value={action} >
                <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/cart' component={Cart} />
                  <Route path='/catalog' component={Category} />
                  <Route path='/customer' component={UserProfile} />
                  <Route path='/product' component={Product} />
                  <Route path='/login' component={UserLogin} />
                  <Route path='/checkout' component={CheckOut} />
                  <Route path='/register' component={UserRegister} />
                  <Route path='/review' component={Review} />
                  {/* <Route path='/alert' component={Alert} /> */}
                  <Route path='/saved' component={SIContainer} />
                  <Route path='/seller' exact component={Seller} />
                  <Route path='/seller/profile' component={SellerProfile} />
                  <Route path='/tester' component={CartTester} />
                  <Route path='/tes' component={Tess} />

                  <Route path='*' component={NotFound} />
                </Switch>
              </ActionContext.Provider>
            </cartContext.Provider>
          </UserContext.Provider>
        </div>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
