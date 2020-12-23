import React, { Fragment, useState } from 'react';
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
              <Link to={`/companies/company/${profile._id}`}>
                {profile.company}
              </Link>
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
          <textarea
            name='bio'
            id='bio'
            cols='30'
            rows='5'
            disabled
            value={profile.bio}
          ></textarea>
        </div>
        <div className='company-mid-group'>
          <span id='company-mid-website'>
            Website :{' '}
            <a href={profile.website} target='_blank' rel='noopener noreferrer'>
              {profile.website}
            </a>
          </span>
        </div>
        <div className='company-mid-group'>
          {profile.social && (
            <div className='socials'>
              <ul>
                <li>
                  <a
                    href={profile.social.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.social.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.social.youtube}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.social.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.social.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
