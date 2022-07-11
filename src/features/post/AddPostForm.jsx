import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postSlice';
import { allUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const users = useSelector(allUsers);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const canSave = Boolean(title) || Boolean(content) || Boolean(userId);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !userId) {
      return;
    }
    dispatch(
      addPost(title, content, userId)
    );
    setTitle('');
    setContent('');
    setUserId('');
  };

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add New Post</h2>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author:</label>
        <select value={userId} onChange={(e) => setUserId(e.target.value)} >
          <option value=""></option>
          {userOptions}
        </select>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        {/* <button type="submit" disabled={!canSave}> */}
        <button type="submit" disabled={!canSave} className={canSave ? 'enabled' : 'disabled'}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
