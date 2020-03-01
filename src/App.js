/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.scss';
import { Comment } from './components/comment/Comment';

function App() {
  // comment mock data
  const [comment, setComment] = useState({
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
  });
  return <Comment {...comment} />;
}

export default App;
