import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postById } from './postSlice';

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';

const SinglePost = () => {
  const { postId } = useParams();

  const post = useSelector((state) => postById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <Link className="link" to={`/post/edit/${post.id}`}>Edit Post</Link>
      <ReactionButton post={post} />
    </article>
  );
};

export default SinglePost;
