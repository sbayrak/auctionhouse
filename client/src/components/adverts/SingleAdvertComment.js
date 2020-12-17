import React from 'react';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Fragment } from 'react';

const SingleAdvertComment = ({ comment, advert: { loading } }) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className='single-advert-comments-comment'>
          <div className='single-advert-comments-left'>
            <a href='userinprofilinegit'>
              <img src={comment.avatar} alt='' />
            </a>
            <span id='single-advert-comments-left-company'>
              {comment.company}
            </span>
          </div>
          <div className='single-advert-comments-right'>
            <input type='text' value={comment.text} disabled />
            <span id='single-advert-title-right-date'>
              Posted on <Moment format='DD/MM/YYYY'>{comment.date}</Moment>
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  advert: state.advert,
});
export default connect(mapStateToProps)(SingleAdvertComment);
