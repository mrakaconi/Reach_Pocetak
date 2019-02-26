import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <p>Ovo je MAIN komponenta.</p>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
