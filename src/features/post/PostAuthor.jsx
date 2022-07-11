import React from 'react';
import { useSelector } from 'react-redux';
import { allUsers } from '../users/usersSlice';

const PostAuthor = ({userId}) => {
  const users = useSelector(allUsers);
  
  const author = users.find(user => user.id === userId)


  return <span className="post-author">by { author ? author.name : 'Unknown author' }</span>
};

export default PostAuthor;
