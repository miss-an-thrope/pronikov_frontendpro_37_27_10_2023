// React tools
import { useEffect, useState } from 'react';

// React-router tools
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// API
import { fetchUsersData } from '../utils/api';

/* components: */
// => static
import Root from './root/Root';
import ErrorPage from './pages/ErrorPage';
// => Users
import UsersPage from './pages/UsersPage/UsersPage';
import UserCard from './pages/UsersPage/UserCard';
// => Forms
import AddUser from './pages/UsersPage/AddUserForm/AddUser';
import ChangeUser from './pages/UsersPage/ChangeUserForm/ChangeUser';


function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
  });

  const handleDeleting = (id) => {
    const newUsersList = users.filter(user => user.id !== id);
    setUsers(newUsersList);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchUsers = async () => {
    try {
      const users = await fetchUsersData();
      setUsers(users);
    } catch (error) {
      console.error(error.message);
    }
  }

  const displayUsers =
    users.map(user =>
    (
      <UserCard
        key={user.id} user={user}
        handleDeleting={handleDeleting}
      />
    )
    );

  useEffect(() => {
    fetchUsers();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <UsersPage displayUsers={displayUsers} />,
        },
        {
          path: '/addUser',
          element: <AddUser
            users={users} setUsers={setUsers}
            formData={formData} setFormData={setFormData}
            handleInputChange={handleInputChange}
          />,
        },
        {
          path: '/changeUser/:userID',
          element: <ChangeUser
            users={users} setUsers={setUsers}
            formData={formData} setFormData={setFormData}
            handleInputChange={handleInputChange}
          />,
        }

      ],
    }
  ],);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
