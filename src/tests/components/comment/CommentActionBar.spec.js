import React from 'react';
import { shallow } from 'enzyme';
import {
  CommentActionBar,
  rootClass,
  replyClass,
  viewReplyClass,
  voteClass
} from '../../../components/comment/CommentActionBar';

describe('<CommentActionBar />', () => {
  const props = {
    numOfReply: 1,
    numOfUpVote: 0,
    numOfDownVote: 0,
    handleReplyClick: jest.fn(),
    handleViewReplyClick: jest.fn(),
    handleUpVoteClick: jest.fn(),
    handleDownVoteClick: jest.fn()
  };

  let wrapper = shallow(<CommentActionBar {...props} />);

  test('renders as expected', () => {
    expect(wrapper.find(`.${rootClass}`).exists()).toBeTruthy();
  });

  test('fires handleReplyClickwhen reply button is clicked', () => {
    const replyBtn = wrapper.find(`.${replyClass}`);
    expect(props.handleReplyClick).not.toHaveBeenCalled();
    replyBtn.simulate('click');
    expect(props.handleReplyClick).toHaveBeenCalledTimes(1);
  });

  test('fires handleViewReplyClick when view reply button is clicked', () => {
    const viewReplyBtn = wrapper.find(`.${viewReplyClass}`);
    expect(props.handleViewReplyClick).not.toHaveBeenCalled();
    viewReplyBtn.simulate('click');
    expect(props.handleViewReplyClick).toHaveBeenCalledTimes(1);
  });

  test('should show correct reply text based on the number of replies', () => {
    let viewReplyBtn = wrapper.find(`.${viewReplyClass}`);
    expect(viewReplyBtn.text()).toEqual('1 REPLY');

    wrapper = shallow(<CommentActionBar {...props} numOfReply={2} />);
    viewReplyBtn = wrapper.find(`.${viewReplyClass}`);
    expect(viewReplyBtn.text()).toEqual('2 REPLIES');
  });

  test('fires handleUpVoteClick when up vote button is clicked', () => {
    const UpvoteBtn = wrapper.find(`.${voteClass}--up`);
    expect(props.handleUpVoteClick).not.toHaveBeenCalled();
    UpvoteBtn.simulate('click');
    expect(props.handleUpVoteClick).toHaveBeenCalledTimes(1);
  });

  test('fires handleDownVoteClick when down vote button is clicked', () => {
    const DownvoteBtn = wrapper.find(`.${voteClass}--down`);
    expect(props.handleDownVoteClick).not.toHaveBeenCalled();
    DownvoteBtn.simulate('click');
    expect(props.handleDownVoteClick).toHaveBeenCalledTimes(1);
  });
});
