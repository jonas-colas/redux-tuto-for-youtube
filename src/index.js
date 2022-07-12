import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/post/postSlice';

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={"/*"} element={<App />}/>
      </Routes>
    </Router>
  </Provider>
);
