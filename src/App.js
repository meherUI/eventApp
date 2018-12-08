import React, { Component } from "react";
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue';
import Highlights from './components/highlights'

import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{'height':'1500px'}}>
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
