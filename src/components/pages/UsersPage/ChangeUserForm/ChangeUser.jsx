/* eslint-disable react/prop-types */
// React tools
import { useState } from "react";

// React-router tools
import { useNavigate, useParams } from "react-router";

import '../../../../assets/scss/components/pages/UsersPage/changeUserForm/_changeUser.scss';
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../../../utils/usersSlice";

function ChangeUser() {
   const users = useSelector(state => state.users.users);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { userID } = useParams();
   
   const currentUser = users.find((user) => user.id.toString() === userID);

   const [localFormData, setLocalFormData] = useState({
      name: currentUser.name || "",
      username: currentUser.username || "",
      phone: currentUser.phone || "",
   });

   if (!currentUser) {
      return <div>User not found</div>;
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const updatedUsers = users.map((user) => {
         if (user.id === currentUser.id) {
            return {
               ...user,
               name: localFormData.name,
               username: localFormData.username,
               phone: localFormData.phone,
            };
         }
         return user;
      });

      dispatch(usersActions.setUsers(updatedUsers));
      navigate("/");
   };

   return (
      <>
         <form className="main__changeUserForm changeUserForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
               type="text"
               id="name"
               name="name"
               value={localFormData.name}
               onChange={(e) => {
                  setLocalFormData({ ...localFormData, name: e.target.value });
               }}
               required
            />

            <label htmlFor="username">Username:</label>
            <input
               type="text"
               id="username"
               name="username"
               value={localFormData.username}
               onChange={(e) => {
                  setLocalFormData({ ...localFormData, username: e.target.value });
               }}
               required
            />

            <label htmlFor="phone">Phone:</label>
            <input
               type="text"
               id="phone"
               name="phone"
               value={localFormData.phone}
               onChange={(e) => {
                  setLocalFormData({ ...localFormData, phone: e.target.value });
               }}
               required
            />

            <section className="changeUserForm__buttons">
               <button type='submit'>Change user</button>
               <button onClick={() => navigate('/')} type="button">Go back</button>
            </section>
         </form>
      </>
   );
}

export default ChangeUser;