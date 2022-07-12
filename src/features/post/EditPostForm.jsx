import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost, postById, deletePost } from './postSlice'; 
import { allUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = useSelector((state) => postById(state, Number(postId)));

  const users = useSelector(allUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState('idle');

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

  const onSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setRequestStatus('pending');
        dispatch(updatePost({id: post.id, title, body: content, userId, reactions: post.reactions})).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
        navigate(`/post/${postId}`);
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setRequestStatus('idle');
      }
    }
  };
  
  const onDeletePost = (e) => {
    e.preventDefault();
    try {
      setRequestStatus('pending');
      dispatch(deletePost({ id: post.id })).unwrap();
      setTitle('');
      setContent('');
      setUserId('');
      navigate('/');
    } catch (err) {
      console.error('Failed to delete the post', err);
    } finally {
      setRequestStatus('idle');
    }
  };

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author:</label>
        <select defaultValue={userId} onChange={(e) => setUserId(e.target.value)} >
          <option value=""></option>
          {userOptions}
        </select>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit" disabled={!canSave} className={canSave ? 'enabled' : 'disabled'}>
          Edit Post
        </button>
      </form>
      <button type="submit" className="deleteButton" onClick={onDeletePost}>
        Delete Post
      </button>
    </section>
  );
};

export default AddPostForm;
