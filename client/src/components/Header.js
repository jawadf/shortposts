import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="mainheader">
        <div className="row">
          <div className="mainheader__content">
            <Link to="/" >
              <img className="mainheader__logo" src="/logo.png" />
            </Link>
            <GoogleAuth />
          </div>
        </div>
      </div>
    ); 
  }
}

export default Header;