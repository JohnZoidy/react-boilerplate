// @ts-check

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './slices/index';
import '../assets/app.scss';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.createRoot(document.getElementById('tasklist') as HTMLElement).render(Root());
