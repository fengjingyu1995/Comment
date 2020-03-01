import React from 'react';
import PropTypes from 'prop-types';
import './CommentActionBar.scss';

export const rootClass = 'comment-info-action-bar';
export const replyClass = `${rootClass}__reply`;
export const viewReplyClass = `${rootClass}__view-reply`;
export const voteClass = `${rootClass}__vote`;

export const CommentActionBar = ({
  handleReplyClick,
  handleViewReplyClick,
  numOfReply,
  handleUpVoteClick,
  numOfUpVote,
  handleDownVoteClick,
  numOfDownVote
}) => (
  <div className={rootClass}>
    <span className={replyClass} onClick={handleReplyClick}>
      REPLY
    </span>
    <span className={viewReplyClass} onClick={handleViewReplyClick}>
      <span className={`${viewReplyClass}__number`}>{numOfReply}</span>
      {numOfReply > 1 ? ' REPLIES' : ' REPLY'}
    </span>
    <span
      className={`${voteClass} ${voteClass}--up`}
      onClick={handleUpVoteClick}
    >
      {` ${numOfUpVote}`}
    </span>
    <span
      className={`${voteClass} ${voteClass}--down`}
      onClick={handleDownVoteClick}
    >
      {` ${numOfDownVote}`}
    </span>
  </div>
);

CommentActionBar.propTypes = {
  handleReplyClick: PropTypes.func.isRequired,
  handleViewReplyClick: PropTypes.func.isRequired,
  numOfReply: PropTypes.number.isRequired,
  handleUpVoteClick: PropTypes.func.isRequired,
  numOfUpVote: PropTypes.number.isRequired,
  handleDownVoteClick: PropTypes.func.isRequired,
  numOfDownVote: PropTypes.number.isRequired
};
