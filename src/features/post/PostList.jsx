import { useSelector } from 'react-redux';
import { allPosts, postsStatus, postsError } from './postSlice';

import PostsExcerpt from './PostsExcerpt';

const PostList = () => {
  const posts = useSelector(allPosts);
  const pStatus = useSelector(postsStatus);
  const pErrors = useSelector(postsError);

  let content;
  if (pStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (pStatus === 'succeeded') {
    const orderPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderPosts.map((post, index) => (
      <PostsExcerpt key={index} post={post} />
    ));
  } else if (pStatus === 'failed') {
    content = <p>{pErrors}</p>;
  }

  return (
    <section>
      {/* <h2>Posts</h2> */}
      {content}
    </section>
  );
};

export default PostList;
