import React from 'react'
import PostList from './features/post/PostList'
import AddPostForm from './features/post/AddPostForm'
// import Counter from './features/counter/Counter';


const App = () => {
  return (
    <main className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostList />
    </main>
  )
}

export default App