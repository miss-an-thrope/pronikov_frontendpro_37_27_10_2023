// React-router tools
import { useRouteError } from 'react-router';

// styles
import '../../assets/scss/components/pages/_errorPage.scss';

// components
import Header from '../root/blocks/Header';
import Footer from '../root/blocks/Footer';

function ErrorPage() {

   const error = useRouteError();

   return (
      <div className='container'>
         
         <Header />
         
         <main className='main'>
            <section className="main__error error">
               <h2 className='error__header'>Oops.. Here comes an Error</h2>
               <article className='error__info'>
                  <p className='error__status'>Error status: {error.status} {error.statusText}</p>
                  <p className='error__message'>{error.data}</p>
               </article>
            </section>
         </main>

         <Footer />

      </div>
   );
}

export default ErrorPage;