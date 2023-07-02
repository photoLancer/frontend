import React from 'react';
import './header.css';
import logo from '../logo/logo_symbol.png';

function Header(props) {
  const onLogoutHandle = (e) => {
    e.preventDefault();
    console.log('logout');
  };

  return (
    <>
      <div className='header'>
        <a href='/'>
          <img src={logo} alt='logo' className='logo' />
        </a>

        <button className='logout-btn' onClick={onLogoutHandle}>
          Log out
        </button>
      </div>
    </>
  );
}

export default Header;
