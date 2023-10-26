/* eslint-disable react/prop-types */
// React-router tools
import { useNavigate } from 'react-router';

// styles
import '../../../assets/scss/components/pages/UsersPage/_userCard.scss';

// components
import DeleteModal from './DeleteModal';
import { useState } from 'react';

function UserCard({
   user,
   handleDeleting,
}) {
   const navigate = useNavigate();
   const { id, name, username, phone } = user;

   const [showConfirm, setShowConfirm] = useState(false);

   const handleShowConfirm = () => setShowConfirm(true);
   const handleHideConfirm = () => setShowConfirm(false);

   const handleConfirmDeleting = (id) => {
      handleDeleting(id);
      handleHideConfirm();
   }

   return (
      <>
         <table className='user__table usertable'>

            <tbody className='usertable__body'>

               <tr className='usertable__raw'>
                  <th>Name:</th>
                  <td>{name}</td>
               </tr>

               <tr className='usertable__raw'>
                  <th>Username:</th>
                  <td>{username}</td>

               </tr>

               <tr className='usertable__raw'>
                  <th>Phone:</th>
                  <td>{phone}</td>
               </tr>

               <tr className='usertable__raw'>
                  <td className='usertable__delete'><button onClick={handleShowConfirm}>Видалити</button></td>
                  <td className='usertable__change'><button onClick={() => navigate(`/changeUser/${id}`)}>Змінити</button></td>
               </tr>

            </tbody>

         </table>
         {showConfirm && (
            <DeleteModal
               id={id}
               handleHideConfirm={handleHideConfirm}
               handleConfirmDeleting={handleConfirmDeleting}
            />
         )
         }


      </>
   );
}

export default UserCard;