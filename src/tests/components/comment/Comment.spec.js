/* eslint-disable prettier/prettier */
import React from 'react';
import { shallow } from 'enzyme';
import { Comment, rootClass } from '../../../components/comment/Comment';

describe('<Comment />', () => {
  const wrapper = shallow(<Comment />);

  test('renders as expected', () => {
    expect(wrapper.find(`.${rootClass}`).exists()).toBeTruthy();
  });
});
