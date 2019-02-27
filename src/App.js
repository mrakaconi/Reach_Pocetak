import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';


const imeFirme = "Mikroelektronika d.o.o";
const slogan = "Pravimo kvalitetne mikrokontrolere";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header ime={imeFirme} slogan={slogan} />
        <Main/>
        <Footer ime={imeFirme} />
      </div>
    );
  }
}

export default App;
