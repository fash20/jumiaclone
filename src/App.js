import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/Navbar';
import {Route, BrowserRouter} from 'react-router-dom'
import HomePage from './components/homePage/HomePage'
import Category from './components/categories/Category';
import Footer from './components/shared/Footer';
import UserLogin from './components/user/UserLogin';
import UserRegister from './components/user/UserRegister';
import Slider from './components/shared/primitiveComponents/Slider'
import CustomCheckBox from './components/shared/primitiveComponents/CustomCheckBox';
import UserProfile from './components/user/UserProfile';
import Product from './components/product/product-page/Product';



function App() {
  return (
    <BrowserRouter >
     <Navbar/>
    <div className="App">
      {/* <div className="cent"> */}
      <Route path='/'  exact component ={HomePage} />
      <Route path= '/category/' component = {Category}/>  
      <Route path= '/login' component = {UserLogin}/>  
      <Route path='/register' component ={UserRegister} />
      <Route path='/slide' component ={Slider} />
      <Route path='/check' component ={CustomCheckBox} />
      <Route path='/customer' component ={UserProfile} />
      <Route path='/product' component ={Product} />
      {/* </div> */}
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
