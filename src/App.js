import React, { Component } from "react";
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer'

import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
        <Pricing/>
        <Location/>
        <Footer/>
      </div>
    );
  }
}

export default App;
