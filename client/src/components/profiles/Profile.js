import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import '../../css/profile.css';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import { getAdverts } from '../../actions/advert';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import ProfileAdvert from './ProfileAdvert';

const Profile = ({
  getAdverts,
  getProfileById,
  advert: { adverts, loading },
  match,
  profile: { profile },
}) => {
  useEffect(() => {
    getAdverts();
  }, [getProfileById, match.params.userId]);

  useEffect(() => {
    getProfileById(match.params.userId);
  }, [getProfileById, match.params.userId]);
  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <Fragment>
              {!profile || !adverts ? (
                <Spinner></Spinner>
              ) : (
                <Fragment>
                  <div className='wrapper7'>
                    <div className='profile-left'>
                      <div className='profile-left-img'>
                        <img src={profile.avatar} width='200px' alt='' />
                      </div>
                      <div className='profile-left-info'>
                        <span className='profile-left-company'>
                          {profile.company}
                        </span>
                        <span className='profile-left-type'>
                          {profile.type}
                        </span>
                        <p className='profile-left-member'>
                          Member since{' '}
                          <Moment format='DD/MM/YYYY'>{profile.date}</Moment>
                        </p>
                      </div>
                    </div>
                    <div className='profile-right'>
                      <div className='profile-right-contact'>
                        <h3>Contact Information</h3>
                        <span id='title'> Company Fullname : </span>
                        <span className='profile-right-companyfullname'>
                          {profile.companyfullname}
                        </span>
                        <span id='title'>E-Mail : </span>
                        <span className='profile-right-email'>
                          {profile.email}
                        </span>
                        <span id='title'>Website : </span>
                        <span className='profile-right-website'>
                          {profile.website}
                        </span>
                      </div>

                      <div className='profile-right-info'>
                        <h3>General Information</h3>

                        <span id='title'>Location : </span>
                        <span className='profile-right-location'>
                          {profile.location}
                        </span>

                        <span id='title'>Biography : </span>
                        <span className='profile-right-bio'>{profile.bio}</span>

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
                      {adverts
                        .filter((advert) => advert.user == profile._id)
                        .map((advert) => (
                          <ProfileAdvert
                            key={advert._id}
                            advert={advert}
                          ></ProfileAdvert>
                        ))}

                      <div id='setup'></div>
                    </div>
                  </div>
                </Fragment>
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getAdverts: PropTypes.func,
  getProfileById: PropTypes.func,
  advert: PropTypes.object,
  profile: PropTypes.object,
};

const mapStateToProps = (state) => ({
  advert: state.advert,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById, getAdverts })(
  Profile
);
