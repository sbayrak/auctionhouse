import React from 'react';
import '../../css/style.css';
import gravelWhite from '../../img/gravel-white.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <input type='checkbox' id='check' />
      <label htmlFor='check' className='checkbtn'>
        <i className='fas fa-bars'></i>
      </label>
      <img src={gravelWhite} alt='' />
      <label className='logo'>
        <Link to='/'>AuctionHouse</Link>
      </label>

      <ul className='elementler'>
        <li>
          <Link to='/adverts' className='active'>
            Adverts
          </Link>
        </li>
        <li>
          <Link to='/companies' className='active'>
            Companies
          </Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
