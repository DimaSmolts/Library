import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const libraryLogo = require('../../assets/images/library-logo.svg');
const shoppingBag = require('../../assets/images/shopping-bag.svg');

export default class Header extends React.Component {
  render() {
    return <div className='header'>
      <img src={libraryLogo} />
      <Link to='/' className='organisation-name-link' >
        <h1>Library</h1>
      </Link>
      <Link to='/purchase'>
        <img className='shopping-bag' src={shoppingBag} />
      </Link>
    </div>
  }
}
