/* eslint-disable react/prop-types */
// styles
import '../../../assets/scss/components/pages/UsersPage/_deleteModal.scss';

function DeleteModal({
   id,
   handleConfirmDeleting,
   handleHideConfirm,
}) {

   return (

      <section className="user__confirmModal confirmModal" >

         <p>Ви впевнені, що хочете видалити цього користувача?</p>
         <button onClick={() => handleConfirmDeleting(id)}>Так</button>
         <button onClick={handleHideConfirm}>Скасувати</button>

      </section>

   )

}

export default DeleteModal;