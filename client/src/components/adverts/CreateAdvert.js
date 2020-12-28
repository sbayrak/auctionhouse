import React, { useState, useEffect } from 'react';
import '../../css/cradvert.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAdvert } from '../../actions/advert';
import { getAdverts } from '../../actions/advert';
import { setAlert } from '../../actions/alert';
import { Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Redirect } from 'react-router-dom';

const CreateAdvert = ({
  addAdvert,
  setAlert,
  getAdverts,
  advert: { adverts, loading },
}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');
  const [submitRedirect, setSubmitRedirect] = useState(false);

  useEffect(() => {
    getAdverts();
  }, []);

  const submitNewAdvert = (e) => {
    e.preventDefault();
    if (!title || !text || !location) {
      setAlert('Please fill necessary fields', 'danger');
    } else if (title.length < 5 || title.length > 80) {
      setAlert(
        `Please enter a title, letter number of between 5 and 80, you have entered letter number of ${title.length} `,
        'danger',
        '6000'
      );
    } else if (text.length < 5 || text.length > 180) {
      setAlert(
        `Please enter a text, letter number of between 5 and 80, you have entered letter number of ${text.length} `,
        'danger',
        '6000'
      );
    } else if (location.length < 5 || location.length > 80) {
      setAlert(
        `Please enter a location, letter number of between 5 and 80, you have entered letter number of ${location.length} `,
        'danger',
        '6000'
      );
    } else {
      addAdvert({ title: title, text: text, location: location });
      setLocation('');
      setText('');
      setTitle('');
      setAlert('You have successfully posted your advert!', 'success');
      setSubmitRedirect(true);
    }
  };
  let lastElement = 0;
  if (adverts !== null) {
    lastElement = adverts[adverts.length - 1];
  }
  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          <div className='section'>
            <div className='create-advert'>
              <span className='section-title'>Create Advert</span>
              {adverts !== null ? (
                <Fragment>
                  <form
                    className='create-advert-form'
                    onSubmit={(e) => submitNewAdvert(e)}
                  >
                    <div className='create-advert-top'>
                      <label htmlFor='title' className='create-advert-lbl'>
                        Title{' '}
                      </label>
                      <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Please enter advert's title"
                      />
                    </div>
                    <div className='create-advert-mid'>
                      <label htmlFor='text' className='create-advert-lbl'>
                        Description{' '}
                      </label>
                      <textarea
                        name='text'
                        cols='30'
                        rows='10'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Please enter a clear description'
                      ></textarea>
                    </div>
                    <div className='create-advert-bottom'>
                      <label htmlFor='location' className='create-advert-lbl'>
                        Location{' '}
                      </label>
                      <input
                        type='text'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder='Please enter location'
                      />
                    </div>
                    <button type='submit'>Submit</button>
                  </form>
                  {submitRedirect && (
                    <Redirect
                      to={`/adverts/advert/${lastElement._id}`}
                    ></Redirect>
                  )}
                </Fragment>
              ) : (
                <Spinner></Spinner>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

CreateAdvert.propTypes = {
  addAdvert: PropTypes.func,
  setAlert: PropTypes.func,
  advert: PropTypes.object,
  getAdverts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  advert: state.advert,
});

export default connect(mapStateToProps, { addAdvert, setAlert, getAdverts })(
  CreateAdvert
);
