import React, { useState } from 'react';
import '../../css/cradvert.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAdvert } from '../../actions/advert';
import { setAlert } from '../../actions/alert';

const CreateAdvert = ({ addAdvert, setAlert }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');

  const submitNewAdvert = (e) => {
    e.preventDefault();
    if (!title || !text || !location) {
      setAlert('Please fill necessary fields', 'danger');
    } else if (title.length < 5 || title.length > 80) {
      setAlert(
        `Please enter a title letter number of between 5 and 80, you have entered letter number of ${title.length} `,
        'alert'
      );
    } else if (text.length < 5 || text.length > 180) {
      setAlert(
        `Please enter a text letter number of between 5 and 80, you have entered letter number of ${text.length} `,
        'alert'
      );
    } else if (location.length < 5 || location.length > 80) {
      setAlert(
        `Please enter a location letter number of between 5 and 80, you have entered letter number of ${location.length} `,
        'alert'
      );
    } else {
      addAdvert({ title: title, text: text, location: location });
      setLocation('');
      setText('');
      setTitle('');
      setAlert('You have successfully posted your advert!', 'success');
    }
  };

  return (
    <div className='section'>
      <div className='create-advert'>
        <span className='section-title'>Create Advert</span>
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
              required
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
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='Please enter location'
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

CreateAdvert.propTypes = {
  addAdvert: PropTypes.func,
  setAlert: PropTypes.func,
};

export default connect(null, { addAdvert, setAlert })(CreateAdvert);
