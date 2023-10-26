// React tools
import ReactDOM from 'react-dom/client';

// Redux tools
import store from './utils/reduxInitial';
import { Provider } from 'react-redux';

// components
import App from './components/App';

// styles
import './assets/scss/index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);