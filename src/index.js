import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import App from './App';
import store from './app/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
