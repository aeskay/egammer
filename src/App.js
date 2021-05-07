import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './viewport.css';
import Navigation from './components/template/Navigation';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import About from './components/About';
import Details from './components/Details';
import Footer from './components/template/Footer';
import Default from './components/Default';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Account from './components/auth/Account';



function App() {
  
  return (
    <BrowserRouter>
      <Navigation/>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/shop" component={Shop}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/products/:id" component={Details}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/checkout" component={Checkout}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/account" component={Account}></Route>
              <Route component={Default}></Route>
          </Switch>
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
