import React from "react";
import './styles/App.css';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer';
import MainDisplay from "./components/MainDisplay";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        {/* <Header /> */}
        <Navbar/>
        <MainDisplay />
        <Footer/>
      </Router>
    );
}

export default App;
