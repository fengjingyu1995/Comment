import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';
import { CommentActionBar } from './CommentActionBar';

export const rootClass = 'comment';
export const avatarClass = `${rootClass}__avatar`;
export const infoClass = `${rootClass}__info`;
export const infoHeaderClass = `${infoClass}__header`;

export const Comment = ({
  timeAgo,
  imgSrc,
  author,
  occupation,
  text,
  numOfReply,
  numOfUpVote,
  numOfDownVote
}) => {
  // set handle clicks in action bar
  const handleReplyClick = () => {
    console.log('handleReplyClick');
  };

  const handleViewReplyClick = () => {
    console.log('handleViewReplyClick');
  };

  const handleUpVoteClick = () => {
    console.log('handleUpVoteClick');
  };

  const handleDownVoteClick = () => {
    console.log('handleDownVoteClick');
  };

  return (
    <div className={rootClass}>
      <div className={avatarClass}>
        <img alt="avatar" className={`${avatarClass}__img`} src={imgSrc} />
      </div>
      <div className={infoClass}>
        <div className={`${infoHeaderClass}`}>
          <span className={`${infoHeaderClass}__author`}>{author}</span>
          <span className={`${infoHeaderClass}__occupation`}>{occupation}</span>
          <span className={`${infoHeaderClass}__time-ago`}>{timeAgo}</span>
        </div>
        <div className={`${infoClass}__text`}>
          <p>{text}</p>
        </div>
        <CommentActionBar
          numOfReply={numOfReply}
          numOfUpVote={numOfUpVote}
          numOfDownVote={numOfDownVote}
          handleReplyClick={handleReplyClick}
          handleViewReplyClick={handleViewReplyClick}
          handleUpVoteClick={handleUpVoteClick}
          handleDownVoteClick={handleDownVoteClick}
        />
      </div>
    </div>
  );
};

Comment.propTypes = {
  timeAgo: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  numOfReply: PropTypes.number.isRequired,
  numOfUpVote: PropTypes.number.isRequired,
  numOfDownVote: PropTypes.number.isRequired
};
