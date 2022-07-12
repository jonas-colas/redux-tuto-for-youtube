import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allPosts, postsStatus, postsError, fetchPosts } from './postSlice';

import PostsExcerpt from './PostsExcerpt';

const PostList = () => {
  const dispatch = useDispatch();
  
  const posts = useSelector(allPosts);
  const pStatus = useSelector(postsStatus);
  const pErrors = useSelector(postsError);

  useEffect(() => {
    if(pStatus === 'idle'){
      dispatch(fetchPosts());
    }
  }, [pStatus, dispatch]);

  let content;
  if(pStatus === 'loading'){
    content = <p>"Loading..."</p>;
  }else if(pStatus === 'succeeded'){
    const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = orderPosts.map(post =>  <PostsExcerpt key={post.id} post={post} /> );
  } else if(pStatus === 'failed'){
    content = <p>{pErrors}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostList