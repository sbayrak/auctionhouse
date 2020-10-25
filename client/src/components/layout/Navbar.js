import React, { Fragment } from 'react';
import '../../css/style.css';
import gravelWhite from '../../img/gravel-white.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
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
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <a href='#!' onClick={logout}>
          <i className='fas fa-sign-out-alt'></i> Sign Out
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='elementler'>
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
  );

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

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
