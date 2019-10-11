import React from 'react';

class Header extends React.Component {
  render () {
    return(
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src="images/logo.png"></img>
            </div>
            <a className="header__name">ИРИТ-РтФ</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
