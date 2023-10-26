/* eslint-disable react/prop-types */
// React-router tools
import { Link } from 'react-router-dom';

// styles
import '../../../assets/scss/components/pages/UsersPage/_usersPage.scss';

function UsersPage({displayUsers}) {

   return (
      <>
         <section className='main__phonebook phonebook'>

            <h2 className='phonebook__header'>Contacts</h2>

            {displayUsers}

            <Link className='phonebook__addUser' to='/addUser'>Add User</Link>

         </section>
      </>
   );
}

export default UsersPage;