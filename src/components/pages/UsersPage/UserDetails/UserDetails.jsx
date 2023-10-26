// React-router tools
import { useLoaderData } from 'react-router';

// styles
import '../../../../assets/scss/components/pages/UsersPage/UserDetails/_userDetails.scss';

function UserDetails() {
   // hooks configuration
   const user = useLoaderData();
   console.log(user)
   return (
      <>
         <section className='main__user user'>
            <h2>Information about user</h2>
            <article className='user__info userInfo'>
               <p className='userInfo__name'>Name: {user.name}</p>
               <p className='userInfo__username'>Username: {user.username}</p>
               <p className='userInfo__email'>Email: {user.email}</p>
               <p className='userInfo__phone'>Phone: {user.phone}</p>         
               <p className='userInfo__city'>City: {user.address.city}</p>
               <p className='userInfo__street'>Street: {user.address.street}</p>
               <p className='userInfo__suite'>Suite: {user.address.suite}</p>
               <p className='userInfo__zipcode'>ZipCode: {user.address.zipcode}</p>            
            </article>
         </section>
      </>
   );
}

export default UserDetails;