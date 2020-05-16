import React from 'react';
import './Header.css'

const libraryLogo = require('../../assets/images/library-logo.svg');
const shoppingBag = require('../../assets/images/shopping-bag.svg');

export default class Header extends React.Component {
  render() {
    return <div className='header'>
      <img src={libraryLogo} />
      <p>Library</p>
      <img src={shoppingBag} />
    </div>
  }
}
