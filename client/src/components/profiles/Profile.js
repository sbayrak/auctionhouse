import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import '../../css/profile.css';

const Profile = (props) => {
  return (
    <Fragment>
      <div className='wrapper7'>
        <div className='profile-left'>
          <div className='profile-left-img'>
            <img
              src='/img/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png'
              width='250px'
              alt=''
            />
          </div>
          <div className='profile-left-info'>
            <span className='profile-left-company'> Bayrak Company </span>
            <span className='profile-left-type'> Logistics </span>
            <p className='profile-left-member'>Member since 20/12/2020</p>
          </div>
        </div>
        <div className='profile-right'>
          <div className='profile-right-contact'>
            <h3>Contact Information</h3>
            <span id='title'> Company Fullname : </span>
            <span className='profile-right-companyfullname'>
              Bayrak Company LTD STI
            </span>
            <span id='title'>E-Mail : </span>
            <span className='profile-right-email'>suatbayrak@bayrak.com</span>
            <span id='title'>Website : </span>
            <span className='profile-right-website'>
              https://www.bayrak.com
            </span>
          </div>

          <div className='profile-right-info'>
            <h3>General Information</h3>

            <span id='title'>Location : </span>
            <span className='profile-right-location'>San Francisco</span>

            <span id='title'>Biography : </span>
            <span className='profile-right-bio'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              perferendis repellat quisquam cum nulla. Adipisci distinctio fuga
              voluptates animi vero!
            </span>

            <span id='title'>Social Media : </span>
            <ul className='socials'>
              <li>
                <a href='#'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>

              <li>
                <a href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>

              <li>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='all-adverts'>
          <div className='single-advert'>
            <div className='single-advert-top'>
              <ul className='single-advert-top-ul'>
                <li>
                  <a href='#!' id='advert-no'>
                    5f8011878999670a50cb13ec
                  </a>
                </li>
                <li>
                  <span id='advert-title'>
                    Need construction trucks for new buildings
                  </span>
                </li>
                <li>
                  <a href='#!' id='advert-company'>
                    Bayrak Company
                  </a>
                </li>
              </ul>
            </div>
            <div className='single-advert-mid'>
              <textarea name='text' id='text' cols='30' rows='10' disabled>
                The new constrution area needs approximately 15 trucks
              </textarea>
            </div>
            <div className='single-advert-bottom'>
              <button type='button' id='single-advert-bottom-button'>
                <a href='#!' id='advert-link'>
                  Go to Advert
                </a>
              </button>
            </div>
          </div>
          <div className='single-advert'>
            <div className='single-advert-top'>
              <ul className='single-advert-top-ul'>
                <li>
                  <a href='#!' id='advert-no'>
                    5f8011878999670a50cb13ec
                  </a>
                </li>
                <li>
                  <span id='advert-title'>
                    Need construction trucks for new buildings
                  </span>
                </li>
                <li>
                  <a href='#!' id='advert-company'>
                    Bayrak Company
                  </a>
                </li>
              </ul>
            </div>
            <div className='single-advert-mid'>
              <textarea name='text' id='text' cols='30' rows='10' disabled>
                The new constrution area needs approximately 15 trucks
              </textarea>
            </div>
            <div className='single-advert-bottom'>
              <button type='button' id='single-advert-bottom-button'>
                <a href='#!' id='advert-link'>
                  Go to Advert
                </a>
              </button>
            </div>
          </div>
          <div id='setup'></div>
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {};

export default Profile;
