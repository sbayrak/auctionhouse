import React, { useState } from 'react';
import '../../css/login.css';
import signupsvg from '../../img/signup.svg';
import signinsvg from '../../img/signin.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div id='wrapper2'>
      <div className='register-container2'>
        <div className='login2'>
          <img src={signupsvg} alt='login' />
          <h3>Welcome</h3>
          <p>
            As AuctionHouse, we care about security and reliability. Also you
            are about to join the internet side of business world.
          </p>
          <p id='doyou2'>
            Don't you have an account? Click the link below to sign up.
          </p>
          <Link to='/register'>Sign Up</Link>
        </div>
        <div className='register2'>
          <h1>
            <img src={signinsvg} alt='' />
          </h1>
          <form className='register-form2'>
            <div className='fields2'>
              <label htmlFor='email'>E-Mail *</label>
              <input
                type='email'
                name='email'
                placeholder=''
                value={email}
                onChange={onChange}
                id='email'
                required
              />
            </div>

            <div className='fields2'>
              <label htmlFor='password'>Password *</label>
              <input
                type='password'
                name='password'
                placeholder=''
                value={password}
                onChange={onChange}
                id='password'
                maxLength='20'
                minLength='6'
                required
              />
            </div>

            <input
              type='submit'
              id='login-sbt'
              name='login-sbt'
              value='Sign In'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
