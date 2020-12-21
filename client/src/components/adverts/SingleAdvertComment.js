import React from 'react';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { deleteComment } from '../../actions/advert';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const SingleAdvertComment = ({
  comment,
  advert: { loading },
  deleteComment,
  auth,
  advertId,
  setAlert,
}) => {
  const submitDelete = (e) => {
    e.preventDefault();
    deleteComment(advertId, comment._id);
    setAlert('You have successfully deleted your comment!', 'success');
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className='single-advert-comments-comment'>
          <div className='single-advert-comments-left'>
            <a href={`/companies/company/${comment.user}`}>
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
            {!auth.loading && comment.user === auth.user._id && (
              <button
                id='delete-comment-button'
                onClick={(e) => submitDelete(e)}
              >
                <i className='fas fa-times'></i>
              </button>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  advert: state.advert,
  auth: state.auth,
});

SingleAdvertComment.propTypes = {
  advert: PropTypes.object,
  auth: PropTypes.object,
  deleteComment: PropTypes.func,
};
export default connect(mapStateToProps, { deleteComment, setAlert })(
  SingleAdvertComment
);
