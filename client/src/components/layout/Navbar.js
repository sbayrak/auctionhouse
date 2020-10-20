import React from 'react';
import '../../css/style.css';
import gravelWhite from '../../img/gravel-white.png';

const Navbar = () => {
  return (
    <nav>
      <input type='checkbox' id='check' />
      <label for='check' className='checkbtn'>
        <i className='fas fa-bars'></i>
      </label>
      <img src={gravelWhite} alt='' />
      <label className='logo'>AuctionHouse</label>

      <ul className='elementler'>
        <li>
          <a href='#' className='active'>
            Adverts
          </a>
        </li>
        <li>
          <a href='#'>Profile</a>
        </li>
        <li>
          <a href='#'>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
