import React from 'react'
import PostList from './features/post/PostList'
import AddPostForm from './features/post/AddPostForm'
// import Counter from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import SinglePost from './features/post/SinglePost'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<PostList />} />

      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePost />} />
      </Route>
    </Routes>
  )
}

export default App