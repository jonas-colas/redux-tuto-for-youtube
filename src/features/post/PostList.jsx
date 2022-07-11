import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { allPosts } from './postSlice';
import ReactionButton from './ReactionButton';
import TimeAgo from './TimeAgo';

const PostList = () => {
  // const posts = useSelector(state => state.posts);
  const posts = useSelector(allPosts);

  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostList