import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { updateProfile } from '../../actions/profile';
import { setAlert } from '../../actions/alert';
import Spinner from '../layout/Spinner';
import '../../css/editprofile.css';
import { useHistory, Link } from 'react-router-dom';

const initialState = {
  website: '',
  bio: '',
  password: '',
  location: '',
  facebook: '',
  instagram: '',
  twitter: '',
  linkedin: '',
  youtube: '',
};

const DashboardActions = ({
  setAlert,
  getCurrentProfile,
  profile: { profile, loading },
  updateProfile,
}) => {
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);
  const {
    website,
    bio,
    password,
    location,
    facebook,
    instagram,
    twitter,
    linkedin,
    youtube,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      website,
      bio,
      password,
      location,
      facebook,
      instagram,
      twitter,
      linkedin,
      youtube,
    });
    setAlert('Updated', 'success');
    console.log(formData);

    setTimeout(() => {
      history.push('/dashboard');
    }, 3000);
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          {!profile ? (
            <Spinner></Spinner>
          ) : (
            <div className='edit-profile'>
              <div className='welcomer'>
                <span className='dashboard'>Dashboard</span>
                <div className='welcomer-group'>
                  <i className='fas fa-user-tie'></i>
                  <span className='welcome'> Welcome, {profile.company}</span>
                </div>
              </div>

              <form onSubmit={onSubmit}>
                <div className='profile-information'>
                  <span id='profile-information-h2'>Edit Profile</span>
                  <Link to='/dashboard' id='goback'>
                    <i class='fas fa-caret-square-left'></i>
                    {'  '}Back
                  </Link>
                  <div className='profile-information-all'>
                    <div className='profile-information-left'>
                      <div className='profile-information-left-group'>
                        <label className='company-label' for='company'>
                          Company* :{' '}
                        </label>
                        <input
                          type='text'
                          disabled
                          value={profile.company}
                          name='company'
                          id='company-input'
                        />
                      </div>
                      <div className='profile-information-left-group'>
                        <label
                          className='companyfullname-label'
                          for='companyfullname'
                        >
                          Company Fullname* :
                        </label>
                        <input
                          type='text'
                          disabled
                          value={profile.companyfullname}
                          name='companyfullname'
                          id='companyfullname-input'
                        />
                      </div>
                      <div className='profile-information-left-group'>
                        <label className='email-label' for='email'>
                          Email* :{' '}
                        </label>
                        <input
                          type='email'
                          disabled
                          value={profile.email}
                          id='email-input'
                        />
                      </div>
                      <div className='profile-information-left-group'>
                        <label className='password-label' for='password'>
                          Password :{' '}
                        </label>
                        <input
                          type='password'
                          value={password}
                          onChange={onChange}
                          name='password'
                          id='password-input'
                        />
                      </div>
                      <div className='profile-information-left-group'>
                        <label className='taxnum-label' for='taxnum'>
                          Tax Number* :{' '}
                        </label>
                        <input
                          type='text'
                          disabled
                          value={profile.taxnum}
                          name='taxnum'
                          id='taxnum-input'
                        />
                      </div>
                      <div className='profile-information-left-group'>
                        <label className='taxname-label' for='taxname'>
                          Tax office* :{' '}
                        </label>
                        <input
                          type='text'
                          disabled
                          value={profile.taxname}
                          name='taxname'
                          id='taxname-input'
                        />
                      </div>
                      <div className='profile-information-left-group'>
                        <label className='type-label' for='type'>
                          Type of Company* :{' '}
                        </label>
                        <input
                          type='text'
                          disabled
                          value={profile.type}
                          name='type'
                          id='type-input'
                        />
                      </div>
                    </div>
                    <div className='profile-information-right'>
                      <div className='profile-information-right-group'>
                        <label className='web-label' for='website'>
                          Website :{' '}
                        </label>
                        <input
                          type='text'
                          id='web-input'
                          onChange={onChange}
                          value={website}
                          name='website'
                        />
                      </div>
                      <div className='profile-information-right-group'>
                        <label className='location-label' for='location'>
                          Location :{' '}
                        </label>
                        <input
                          type='text'
                          onChange={onChange}
                          value={location}
                          name='location'
                          id='location-input'
                        />
                      </div>
                      <div className='profile-information-right-group'>
                        <label className='bio-label' for='bio'>
                          Biography :{' '}
                        </label>
                        <textarea
                          name='bio'
                          id='bio-textarea'
                          cols='30'
                          onChange={onChange}
                          value={bio}
                          rows='10'
                        ></textarea>
                      </div>
                      <div className='profile-information-right-group'>
                        <label className='socials-label' for='socials'>
                          Socials :{'  '}
                        </label>
                        {/* social begins */}
                        <div className='social-group'>
                          <div className='social'>
                            <i className='fab fa-twitter'></i>
                            <input
                              type='text'
                              name='socials'
                              id='socials-input'
                              onChange={onChange}
                              value={twitter}
                            />
                          </div>
                          <div className='social'>
                            <i className='fab fa-facebook'></i>
                            <input
                              type='text'
                              name='socials'
                              id='socials-input'
                              onChange={onChange}
                              value={facebook}
                            />
                          </div>
                          <div className='social'>
                            <i className='fab fa-youtube'></i>
                            <input
                              type='text'
                              name='socials'
                              id='youtube-input'
                              onChange={onChange}
                              value={youtube}
                            />
                          </div>
                          <div className='social'>
                            <i className='fab fa-instagram'></i>
                            <input
                              type='text'
                              name='socials'
                              id='socials-input'
                              onChange={onChange}
                              value={instagram}
                            />
                          </div>
                          <div className='social'>
                            <i className='fab fa-linkedin'></i>
                            <input
                              type='text'
                              name='socials'
                              id='socials-input'
                              onChange={onChange}
                              value={linkedin}
                            />
                          </div>
                        </div>
                        {/* social ends */}
                      </div>
                    </div>
                  </div>
                  <div className='profile-information-bottom'>
                    <div className='profile-information-bottom-group'>
                      <button
                        className='profile-information-bottom-edit-button'
                        type='submit'
                      >
                        Update
                      </button>
                    </div>

                    <div className='profile-information-bottom-group'>
                      <p>
                        *To update other fields, please contact website
                        managers.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

DashboardActions.propTypes = {
  profile: PropTypes.object,
  getCurrentProfile: PropTypes.func,
  setAlert: PropTypes.func,
  updateProfile: PropTypes.func,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  setAlert,
  updateProfile,
})(DashboardActions);
