import React, { useState } from 'react';
import '../../css/main.css';
import agreementsvg from '../../img/agreement.svg';
import signup_mobilesvg from '../../img/signup_mobile.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
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
      console.log('success');
    }
  };
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className='fields'>
              <label htmlFor='type'>Type Of Company *</label>
              <input
                type='text'
                name='type'
                placeholder=''
                value={type}
                required
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
                required
              />
            </div>
            <div className='fields'>
              <label htmlFor='website'>Website *</label>
              <input
                type='text'
                name='website'
                placeholder=''
                value={website}
                required
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
                required
              />
            </div>
            <div className='fields'>
              <label htmlFor='location'>Location *</label>
              <input
                type='text'
                name='location'
                placeholder=''
                required
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
};

export default connect(null, { setAlert })(Register);
