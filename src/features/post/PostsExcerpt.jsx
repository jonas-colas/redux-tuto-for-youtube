// import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';
import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux';
import { postById} from './postSlice';

// let PostsExcerpt = ({ post }) => {
const PostsExcerpt = ({ postId }) => {
  const post = useSelector(state => postById(state, postId));

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="exerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <Link className="link" to={`post/${post.id}`}>View Post</Link>
      <ReactionButton post={post} />
    </article>
  );
};

// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
