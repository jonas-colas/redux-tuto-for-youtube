import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allUsers } from './usersSlice';

const UserList = () => {
  const users = useSelector(allUsers);

  const renderedUsers = users?.map(user => (
    <li className="ul-users" key={user.id}>
      <Link className="users" to={`/user/${user.id}`}>{user.id} - {user.name} </Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      {renderedUsers}
    </section>
  );
};

export default UserList