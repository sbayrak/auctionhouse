import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/dashboard.css';
import { getCurrentProfile } from '../../actions/profile';
import { getMyAdverts } from '../../actions/advert';
import Spinner from '../layout/Spinner';
import DashboardMyAdverts from './DashboardMyAdverts';
import DashboardMyAccepted from './DashboardMyAccepted';
import DashboardMyBids from './DashboardMyBids';
import { deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  getMyAdverts,
  auth: { user, isAuthenticated },
  advert: { my_adverts },
  profile: { profile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  useEffect(() => {
    getMyAdverts();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          <div className='wrapper3'>
            <div className='welcomer'>
              <span className='dashboard'>Dashboard</span>
              <div className='welcomer-group'>
                <i className='fas fa-user-tie'></i>
                <span className='welcome'> Welcome, {profile.company} </span>
              </div>
            </div>

            <div className='profile-information'>
              <span id='profile-information-h2'>Profile Information</span>

              <div className='profile-information-bottom'>
                <div className='profile-information-bottom-group'>
                  <button className='profile-information-bottom-edit-button'>
                    Edit Profile
                  </button>
                  {/* <!-- <button className="profile-information-bottom-update">Update</button> --> */}
                </div>

                <div className='profile-information-bottom-group'>
                  <p>
                    *To update other fields, please contact website managers.
                  </p>
                </div>
              </div>
              <div className='profile-information-all'>
                <div className='profile-information-left'>
                  <div className='profile-information-left-group'>
                    <label className='company-label' htmlFor='company'>
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
                      htmlFor='companyfullname'
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
                    <label className='email-label' htmlFor='email'>
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
                    <label className='password-label' htmlFor='password'>
                      Password* :{' '}
                    </label>
                    <input
                      type='password'
                      disabled
                      value='1234567890'
                      name='password'
                      id='password-input'
                    />
                  </div>
                  <div className='profile-information-left-group'>
                    <label className='taxnum-label' htmlFor='taxnum'>
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
                    <label className='taxname-label' htmlFor='taxname'>
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
                    <label className='type-label' htmlFor='type'>
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
                    <label className='web-label' htmlFor='web'>
                      Website :{' '}
                    </label>
                    <input
                      type='text'
                      id='web-input'
                      disabled
                      value={profile.website}
                      name='web'
                    />
                  </div>
                  <div className='profile-information-right-group'>
                    <label className='location-label' htmlFor='location'>
                      Location :{' '}
                    </label>
                    <input
                      type='text'
                      value={profile.location}
                      disabled
                      name='location'
                      id='location-input'
                    />
                  </div>
                  <div className='profile-information-right-group'>
                    <label className='bio-label' htmlFor='bio'>
                      Biography :{' '}
                    </label>
                    <textarea
                      name='bio'
                      id='bio-textarea'
                      cols='30'
                      rows='10'
                      disabled
                      value={profile.bio}
                    ></textarea>
                  </div>
                  <div className='profile-information-right-group'>
                    <label className='socials-label' htmlFor='socials'>
                      Socials :{' '}
                    </label>

                    <div className='social-group'>
                      <div className='social'>
                        <i className='fab fa-twitter'></i>
                        <input
                          type='text'
                          disabled
                          name='socials'
                          value={profile.social ? profile.social.twitter : '-'}
                        />
                      </div>
                      <div className='social'>
                        <i className='fab fa-facebook'></i>
                        <input
                          type='text'
                          disabled
                          name='socials'
                          value={profile.social ? profile.social.facebook : '-'}
                        />
                      </div>
                      <div className='social'>
                        <i className='fab fa-youtube'></i>
                        <input
                          type='text'
                          name='socials'
                          disabled
                          value={profile.social ? profile.social.youtube : '-'}
                        />
                      </div>
                      <div className='social'>
                        <i className='fab fa-instagram'></i>
                        <input
                          type='text'
                          name='socials'
                          disabled
                          value={
                            profile.social ? profile.social.instagram : '-'
                          }
                        />
                      </div>
                      <div className='social'>
                        <i className='fab fa-linkedin'></i>
                        <input
                          type='text'
                          name='socials'
                          disabled
                          value={profile.social ? profile.social.linkedin : '-'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ilk part sonu */}
            {/* ikinci part baslangici */}
            <div className='myadverts'>
              <span id='myadverts-title'>My Adverts</span>
              {my_adverts &&
                my_adverts.map((advert) => (
                  <DashboardMyAdverts
                    key={advert._id}
                    advert={advert}
                  ></DashboardMyAdverts>
                ))}
            </div>
            {/* ikinci part sonu */}
            {/* my accepted adverts basi  */}
            <div className='divTable accepted-bids'>
              <span id='divTable-title'>My Accepted Bids</span> <br />
              <br />
              <div className='divTableBody'>
                <div className='divTableRow'>
                  <div className='divTableCell' id='no'>
                    Bidder Number
                  </div>
                  <div className='divTableCell' id='title'>
                    Bidder Company
                  </div>
                  <div className='divTableCell' id='date'>
                    Advert Date
                  </div>
                  <div className='divTableCell' id='bid'>
                    Bid
                  </div>
                </div>

                <DashboardMyAccepted></DashboardMyAccepted>
              </div>
            </div>
            {/* my accepted adverts sonu  */}
            {/* my bids'in basi */}
            <div className='divTable bids-by-me'>
              <span id='divTable-title'>Bids made by me : </span> <br />
              <br />
              <div className='divTableBody'>
                <div className='divTableRow'>
                  <div className='divTableCell' id='no'>
                    Advert Number
                  </div>
                  {/* <div className='divTableCell' id='title'>
                    Advert Title
                  </div> */}
                  <div className='divTableCell' id='date'>
                    Advert Date
                  </div>
                  <div className='divTableCell' id='bid'>
                    Bid
                  </div>
                </div>
                <DashboardMyBids></DashboardMyBids>
              </div>
            </div>
            {/* my bids'in sonu */}

            <div className='dashboard-bottom'>
              <button
                type='button'
                id='delete-account'
                onClick={() => deleteAccount()}
              >
                Delete Account
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getMyAdverts: PropTypes.func,
  auth: PropTypes.object.isRequired,
  advert: PropTypes.object,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  advert: state.advert,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getMyAdverts,
  deleteAccount,
})(Dashboard);
