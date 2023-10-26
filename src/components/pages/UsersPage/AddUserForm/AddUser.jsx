/* eslint-disable react/prop-types */
// React-router tools
import { useNavigate } from "react-router";

// styles
import '../../../../assets/scss/components/pages/UsersPage/addUserForm/_addUser.scss';
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../../../utils/usersSlice";

function AddUser({
   formData,
   setFormData,
   handleInputChange }) {

   const users = useSelector(state => state.users.users);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();

      const newUser = {
         id: Date.now(), // Lazy custom ID
         name: formData.name,
         username: formData.username,
         phone: formData.phone,
      }

      dispatch(usersActions.setUsers([...users, newUser]));

      setFormData({
         name: '',
         username: '',
         phone: '',
      });

      navigate('/');
   }

   return (
      <>
         <form className="main__addUserForm addUserForm" onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input
               type="text"
               id="name"
               name='name'
               value={formData.name}
               onChange={handleInputChange}
               required
            />

            <label htmlFor="username">Username:</label>
            <input
               type="text"
               id="username"
               name='username'
               value={formData.username}
               onChange={handleInputChange}
               required
            />

            <label htmlFor="phone">Phone:</label>
            <input
               type="text"
               id="phone"
               name='phone'
               value={formData.phone}
               onChange={handleInputChange}
               required
            />

            <section className="addUserForm__buttons">
               <button type='submit'>Add User</button>
               <button onClick={() => navigate('/')} type="button">Go back</button>
            </section>

         </form>
      </>
   );
}

export default AddUser;