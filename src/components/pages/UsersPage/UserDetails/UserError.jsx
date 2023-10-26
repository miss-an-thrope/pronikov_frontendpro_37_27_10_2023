// React-router tools
import { useRouteError } from 'react-router';

// styles
import '../../../../assets/scss/components/pages/UsersPage/UserDetails/_userError.scss';

function UserError() {

   const error = useRouteError();
   console.log(error);

   return (
      <>
      HELLO
      {error.status}
      </>
   );
}

export default UserError;