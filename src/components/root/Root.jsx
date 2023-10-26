// React-router tools
import { Outlet } from 'react-router';

// styles
import '../../assets/scss/components/root/_root.scss';

// components
import Header from './blocks/Header';
import Footer from './blocks/Footer';

function Root() {

  return (
    <>
      <div className='container'>
        <Header />
        <main className='main'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Root;