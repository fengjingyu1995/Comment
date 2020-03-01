/* eslint-disable prettier/prettier */
import React from 'react';
import { shallow } from 'enzyme';
import { Comment, rootClass } from '../../../components/comment/Comment';

describe('<Comment />', () => {
  const props = {
    imgSrc: 'images/Avatar.jpg',
    author: 'Brad',
    occupation: 'AUTHOR',
    timeAgo: '2 MINUTES AGO',
    text: `So what the German automaker is likely to focus on today is the bigger
    picture. This will be the first time we see the Taycan free from any
    prototype bodywork.`,
    numOfReply: 21,
    numOfUpVote: 123,
    numOfDownVote: 0
  };
  const wrapper = shallow(<Comment {...props} />);

  test('renders as expected', () => {
    expect(wrapper.find(`.${rootClass}`).exists()).toBeTruthy();
  });
});
