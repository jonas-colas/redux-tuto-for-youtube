import React from 'react';
import PostList from './features/post/PostList';
import AddPostForm from './features/post/AddPostForm';
// import Counter from './features/counter/Counter';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SinglePost from './features/post/SinglePost';
import EditPostForm from './features/post/EditPostForm';
import UserList from './features/users/UserList';
import UserPage from './features/users/UserPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        
        <Route path="user">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
        
        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
};

export default App;
