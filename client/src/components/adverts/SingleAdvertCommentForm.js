import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/advert';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const SingleAdvertCommentForm = ({ setAlert, addComment, advertId }) => {
  const [text, setText] = useState('');

  const submitComment = (e) => {
    e.preventDefault();
    if (text.length < 250 && text.length >= 5) {
      addComment(advertId, { text: text });
      setText('');
      setAlert('Your comment posted successfully!', 'success');
    } else if (text.length >= 250) {
      setAlert(
        'Please type a comment that is less than the number of letters 250',
        'danger'
      );
      setText('');
    } else if (text.length < 5) {
      setAlert(
        'Please type a comment that is more than the number of letters 5',
        'danger'
      );
      setText('');
    }
  };

  return (
    <Fragment>
      <span id='single-advert-comment-bar'>Leave a comment</span>
      <form id='myform' onSubmit={(e) => submitComment(e)}>
        <textarea
          name='text'
          id='text'
          cols='30'
          rows='10'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Commen on this advert...'
        ></textarea>
        <button type='submit' id='comment-button'>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

SingleAdvertCommentForm.propTypes = {
  addComment: PropTypes.func,
  setAlert: PropTypes.func,
};
export default connect(null, { setAlert, addComment })(SingleAdvertCommentForm);
