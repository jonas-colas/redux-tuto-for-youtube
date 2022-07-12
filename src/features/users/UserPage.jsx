import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { postByUser } from '../post/postSlice';//allPosts, 
import { userById } from './usersSlice';

const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => userById(state, Number(userId)));

  // const postsForUsers = useSelector((state) => {
  //   const posts = allPosts(state);
  //   return posts.filter((post) => post.userId === Number(userId));
  // });

  const postsForUsers = useSelector((state) => postByUser(state, Number(userId)));

  const postTitles = postsForUsers.map((post) => (
    <li key={post.id}>
      <Link className="users" to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
