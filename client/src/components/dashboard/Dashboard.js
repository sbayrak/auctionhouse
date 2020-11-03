import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/dashboard.css';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner></Spinner>
  ) : (
    <div className='wrapper3'>
      <div className='welcomer'>
        <span className='dashboard'>Dashboard</span>
        <div className='welcomer-group'>
          <i className='fas fa-user-tie'></i>
          <span className='welcome'> Welcome Bayrak Company</span>
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
            <p>*To update other fields, please contact website managers.</p>
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
                value='Bayrak Company'
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
                value='Bayrak Company LTD STI'
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
                value='bayrakcompany@bayrak.com'
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
                value='1234567890'
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
                value='Bayrampasa Tuna tax office'
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
                value='Logistics'
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
                value='https://www.bayrakcompany.com'
                name='web'
              />
            </div>
            <div className='profile-information-right-group'>
              <label className='location-label' htmlFor='location'>
                Location :{' '}
              </label>
              <input
                type='text'
                value='San Francisco'
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
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam maxime placeat voluptas temporibus deleniti quidem aut
                officiis quisquam! Neque, cumque!
              </textarea>
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
                    value='https://www.twitter.com/bayrakcompany'
                  />
                </div>
                <div className='social'>
                  <i className='fab fa-facebook'></i>
                  <input
                    type='text'
                    disabled
                    name='socials'
                    value='https://www.facebook.com/bayrakcompany'
                  />
                </div>
                <div className='social'>
                  <i className='fab fa-youtube'></i>
                  <input
                    type='text'
                    name='socials'
                    disabled
                    value='https://www.youtube.com/bayrakcompany'
                  />
                </div>
                <div className='social'>
                  <i className='fab fa-instagram'></i>
                  <input
                    type='text'
                    name='socials'
                    disabled
                    value='https://www.instagram.com/bayrakcompany'
                  />
                </div>
                <div className='social'>
                  <i className='fab fa-linkedin'></i>
                  <input
                    type='text'
                    name='socials'
                    disabled
                    value='https://www.linkedin.com/bayrakcompany'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='myadverts'>
        <span id='myadverts-title'>My Adverts</span>
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
          <div className='single-advert-bids'>
            <span id='single-advert-bids-title'>Bids to this advert : </span>
            <button id='hide'>
              <i className='fas fa-arrow-circle-down'></i>
            </button>
            <div className='single-advert-bid'>
              <a href='#!' id='single-advert-bid-company'>
                Bayrak Company
              </a>
              <span id='single-advert-bid-bid'>50000</span>
              <span id='single-advert-bid-date'>09/10/2020</span>

              <button type='button' id='single-advert-bid-button'>
                Accept
              </button>
            </div>
          </div>
          <div className='single-advert-bottom'>
            <button type='button' id='single-advert-bottom-button'>
              <a href='#!' id='advert-link'>
                Go to Advert
              </a>
            </button>
            <button
              type='button'
              className='advert-delete-button'
              id='single-advert-bottom-button'
            >
              <a href='#!' id='advert-delete-link'>
                Delete Advert
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
          <div className='single-advert-bids'>
            <span id='single-advert-bids-title'>Bids to this advert : </span>
            <button id='hide'>
              <i className='fas fa-arrow-circle-down'></i>
            </button>
            <div className='single-advert-bid'>
              <a href='#!' id='single-advert-bid-company'>
                Bayrak Company
              </a>
              <span id='single-advert-bid-bid'>50000</span>
              <span id='single-advert-bid-date'>09/10/2020</span>

              <button type='button' id='single-advert-bid-button'>
                Accept
              </button>
            </div>
          </div>
          <div className='single-advert-bottom'>
            <button type='button' id='single-advert-bottom-button'>
              <a href='#!' id='advert-link'>
                Go to Advert
              </a>
            </button>
            <button
              type='button'
              className='advert-delete-button'
              id='single-advert-bottom-button'
            >
              <a href='#!' id='advert-delete-link'>
                Delete Advert
              </a>
            </button>
          </div>
        </div>

        <div id='setup'></div>
      </div>

      <div className='divTable accepted-bids'>
        <span id='divTable-title'>My Accepted Adverts</span> <br />
        <br />
        <div className='divTableBody'>
          <div className='divTableRow'>
            <div className='divTableCell' id='no'>
              Advert Number
            </div>
            <div className='divTableCell' id='title'>
              Advert Title
            </div>
            <div className='divTableCell' id='date'>
              Advert Date
            </div>
            <div className='divTableCell' id='bid'>
              Bid
            </div>
          </div>
          <div className='divTableRow'>
            <div className='divTableCell'>
              <a href='#!'>5f8011878999670a50cb13ec</a>
            </div>
            <div className='divTableCell'>
              &nbsp;Need construction trucks for new buildings
            </div>
            <div className='divTableCell'>&nbsp;07/12/2020</div>
            <div className='divTableCell'>&nbsp;50000</div>
          </div>
          <div className='divTableRow'>
            <div className='divTableCell'>
              <a href='#!'>5f8011878999670a50cb13ec</a>
            </div>
            <div className='divTableCell'>
              &nbsp;Need construction trucks for new buildings
            </div>
            <div className='divTableCell'>&nbsp;&nbsp;07/12/2020</div>
            <div className='divTableCell'>&nbsp;50000</div>
          </div>
        </div>
      </div>
      <div className='divTable bids-by-me'>
        <span id='divTable-title'>Bids made by me : </span> <br />
        <br />
        <div className='divTableBody'>
          <div className='divTableRow'>
            <div className='divTableCell' id='no'>
              Advert Number
            </div>
            <div className='divTableCell' id='title'>
              Advert Title
            </div>
            <div className='divTableCell' id='date'>
              Advert Date
            </div>
            <div className='divTableCell' id='bid'>
              Bid
            </div>
          </div>
          <div className='divTableRow'>
            <div className='divTableCell'>
              <a href='#!'>5f8011878999670a50cb13ec</a>
            </div>
            <div className='divTableCell'>
              &nbsp;Need construction trucks for new buildings
            </div>
            <div className='divTableCell'>&nbsp;07/12/2020</div>
            <div className='divTableCell'>&nbsp;50000</div>
          </div>
          <div className='divTableRow'>
            <div className='divTableCell'>
              <a href='#!'>5f8011878999670a50cb13ec</a>
            </div>
            <div className='divTableCell'>
              &nbsp;Need construction trucks for new buildings
            </div>
            <div className='divTableCell'>&nbsp;&nbsp;07/12/2020</div>
            <div className='divTableCell'>&nbsp;50000</div>
          </div>
        </div>
      </div>

      <div className='dashboard-bottom'>
        <button type='button' id='delete-account'>
          Delete Account
        </button>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
