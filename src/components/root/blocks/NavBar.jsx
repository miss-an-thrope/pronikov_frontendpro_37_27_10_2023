/* eslint-disable react/prop-types */
// React-router tools
import { NavLink } from 'react-router-dom';

//styles
import '../../../assets/scss/components/root/blocks/_navbar.scss';

function NavBar({block}) {

   return (
      <nav className={`${block}__nav nav`}>

         <ul className='nav__list list'>

            <li className='list__item item'>
               <NavLink className='item__link' to='/'>Contacts</NavLink>
            </li>

            <li className='list__item item'>
               <NavLink className='item__link' to='/addUser'>Add User</NavLink>
            </li>

         </ul>
      </nav>
   );
}

export default NavBar;