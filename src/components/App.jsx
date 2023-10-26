// React tools
import { useState } from 'react';

// React-router tools
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../utils/usersSlice';


function App() {

  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
  });

  const handleDeleting = (id) => {
    const newUsersList = users.filter(user => user.id !== id);
    dispatch(usersActions.setUsers(newUsersList));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const displayUsers =
  users.map(user =>
  (
    <UserCard
      key={user.id} user={user}
      handleDeleting={handleDeleting}
    />
  )
  );


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
          formData={formData} setFormData={setFormData}
            handleInputChange={handleInputChange}
          />,
        },
        {
          path: '/changeUser/:userID',
          element: <ChangeUser />,
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
