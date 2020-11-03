import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile }) => {
  return (
    <div className='company'>
      <img src={profile.avatar} alt='' />
      <div className='company-top'>
        <ul>
          <li>
            <span id='company-top-type'>{profile.type}</span>
          </li>
          <li>
            <span id='company-top-company'>
              <a href='#!'>{profile.company}</a>
            </span>
          </li>
          <li>
            <span id='company-top-location'>{profile.location}</span>
          </li>
        </ul>
      </div>
      <div className='company-mid'>
        <div className='company-mid-group'>
          <span id='company-mid-group-bio'>Biography : </span> <br />
          <textarea name='bio' id='bio' cols='30' rows='5' disabled>
            {profile.bio}
          </textarea>
        </div>
        <div className='company-mid-group'>
          <span id='company-mid-website'>
            Website : <a href='#!'>{profile.website}</a>
          </span>
        </div>
        <div className='company-mid-group'>
          {/* {
            profile.social !==  null ? 
        } */}
          <div className='socials'>
            <ul>
              <li>
                <a href='#!'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#!'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#!'>
                  <i className='fab fa-youtube'></i>
                </a>
              </li>
              <li>
                <a href='#!'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#!'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
