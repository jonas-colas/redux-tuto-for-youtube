import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCounter, increaseCount } from '../features/post/postSlice';


const Header = () => {
  const dispatch = useDispatch();

  const count = useSelector(getCounter)

  

  return (
    <header className="header">
      <h2>
        <Link to="/" className="logo">Redux Blog</Link>
      </h2>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="post">Post</Link> </li>
          <li> <Link to="user">Users</Link> </li>
        </ul>
        <button onClick={() => dispatch(increaseCount())}>
          {count}
        </button>
      </nav>
    </header>
  );
};

export default Header;
