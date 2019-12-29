import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="header">
        <span className="logo-pages">
          <figure className="logo"> bitty
          {/* <img src="" alt=""/> */}
          </figure>
          <nav className="pages">
            <Link className="page" to="/whyBitty">why bitty?</Link>
            <Link className="page" to="/solutions">solutions</Link>
            <Link className="page" to="/features">features</Link>
            <Link className="page" to="/pricing">pricing</Link>
            <Link className="page" to="/support">support</Link>
          </nav>
        </span>

        <span className="login-register">
          <span className="login">log in</span>
          <span className="register">sign up</span>
        </span>
      </div>
    );
  }

}

export default Header;