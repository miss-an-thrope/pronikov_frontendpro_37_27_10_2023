// => styles
import '../../../assets/scss/components/root/blocks/_header.scss';

// => components
import NavBar from './NavBar';

function Header() {

  return (
    <header className='header'>
      {/* <section className='header__logo'></section> */}
        <NavBar block='header' />
      {/* <section className='header__account account'></section> */}
    </header>
  );
}

export default Header;