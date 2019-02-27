import React from 'react';
import logo from '../assets/logo.png';


export default function Header(props) {
  return (
    <header className="header">
      <div className="row">
      <h1 className="col-sm-9">{props.ime}</h1>
      <img className="col-sm-3 img" alt="logo" src={logo} width="20"/>
      </div>
      <div className="row">
      <p className="col-sm-9">{props.slogan}</p>
      <p className="col-sm-3"></p>
      </div>
      
      
    </header>
  )
}



