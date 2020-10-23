import React, { useState } from 'react';
import '../../css/main.css';
import agreementsvg from '../../img/agreement.svg';
import signup_mobilesvg from '../../img/signup_mobile.svg';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    company: '',
    taxnum: '',
    companyfullname: '',
    taxname: '',
    email: '',
    type: '',
    password: '',
    password2: '',
    website: '',
    location: '',
  });

  const {
    company,
    taxnum,
    companyfullname,
    taxname,
    email,
    type,
    password,
    password2,
    website,
    location,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        company,
        taxnum,
        companyfullname,
        taxname,
        email,
        type,
        password,
        password2,
        website,
        location,
      });
    }
  };

  // Redirect
  if (isAuthenticated) {
    return <Redirect to='/adverts'></Redirect>;
  }
  return (
    <div id='wrapper'>
      <div className='register-container'>
        <div className='login'>
          <img src={agreementsvg} alt='login' />
          <h3>Welcome</h3>
          <p>
            As AuctionHouse, we care about security and reliability. Also you
            are about to join the internet side of business world.
          </p>
          <p id='doyou'>
            Do you already have an account? Click the link below to sign in.
          </p>
          <Link to='/login'>Sign In</Link>
        </div>
        <div className='register'>
          <h1>
            <img src={signup_mobilesvg} alt='' />
          </h1>
          <form className='register-form' onSubmit={onSubmit}>
            <div className='fields'>
              <label htmlFor='company'>Company *</label>
              <input
                type='text'
                name='company'
                placeholder=''
                value={company}
                onChange={(e) => onChange(e)}
                id='company'
              />
            </div>
            <div className='fields'>
              <label htmlFor='taxnum'>Tax Number *</label>
              <input
                type='text'
                name='taxnum'
                placeholder=''
                value={taxnum}
                onChange={(e) => onChange(e)}
                id='taxnum'
              />
            </div>
            <div className='fields'>
              <label htmlFor='companyfullname'>Company Fullname *</label>
              <input
                type='text'
                value={companyfullname}
                onChange={(e) => onChange(e)}
                name='companyfullname'
                placeholder=''
                id='companyfullname'
              />
            </div>
            <div className='fields'>
              <label htmlFor='taxname'>Tax Office *</label>
              <input
                type='text'
                name='taxname'
                placeholder=''
                value={taxname}
                onChange={(e) => onChange(e)}
                id='taxname'
              />
            </div>
            <div className='fields'>
              <label htmlFor='email'>E-Mail *</label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                placeholder=''
                id='email'
              />
            </div>
            <div className='fields'>
              <label htmlFor='type'>Type Of Company *</label>
              <input
                type='text'
                name='type'
                placeholder=''
                value={type}
                onChange={(e) => onChange(e)}
                id='type'
              />
            </div>
            <div className='fields'>
              <label htmlFor='password'>Password *</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                placeholder=''
                id='password'
              />
            </div>
            <div className='fields'>
              <label htmlFor='website'>Website *</label>
              <input
                type='text'
                name='website'
                placeholder=''
                value={website}
                onChange={(e) => onChange(e)}
                id='website'
              />
            </div>
            <div className='fields'>
              <label htmlFor='password2'>Confirm Password *</label>
              <input
                type='password'
                value={password2}
                onChange={(e) => onChange(e)}
                name='password2'
                placeholder=''
                id='password2'
              />
            </div>
            <div className='fields'>
              <label htmlFor='location'>Location *</label>
              <input
                type='text'
                name='location'
                placeholder=''
                value={location}
                onChange={(e) => onChange(e)}
                id='location'
              />
            </div>
            <input
              type='submit'
              id='register-sbt'
              name='register-sbt'
              value='Sign Up'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
