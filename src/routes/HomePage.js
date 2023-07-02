import React from 'react';
import './homePage.css';
import Header from '../components/Header';

function HomePage() {
  return (
    <>
      <div className='viewport'>
        <div class='contents'>
          <Header />
          <div className='body'>
            <div className='sidebar'>sidebar</div>
            <div className='main'>
              <div className='searchbar'>searchbar</div>
              <div className='navbar'>navbar</div>
              <div classname='maincontents'>maincontents</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
