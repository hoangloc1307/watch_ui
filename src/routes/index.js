import About from '~/pages/About';
import Blogs from '~/pages/Blogs';
import Category from '~/pages/Category';
import Checkout from '~/pages/Checkout';
import Gallery from '~/pages/Gallery';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';
import SearchResult from '~/pages/SearchResult';

export const publicRoute = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blogs', component: Blogs },
    { path: '/checkout', component: Checkout },
    { path: '/gallery', component: Gallery },
    { path: '/product/:slug', component: ProductDetail },
    { path: '/category/:type', component: Category },
    { path: '/search', component: SearchResult },
    // { path: '*', component: PageNotFound },
];

export const restrictRoute = [{ path: '/login', component: Login }];
