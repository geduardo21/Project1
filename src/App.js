import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import GiftBoxes from "./components/GiftBoxes";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";


function App() {
  return (
    < BrowserRouter>
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <Navbar/>
      </nav>
    <div className="App">
      <header className="App-header">
        <Route path="/about" exact={true} component={About}/>
        <Route path ="/home" exact={true} component={Home}/> 
        <Route path ="/menu" exact ={true} component={Menu}/>
        <Route path="/giftboxes" exact={true} component={GiftBoxes}/>
        <Route path="/orderform" exact = {true} component={OrderForm}/>
      </header>
    </div>
     <Footer/>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
