import NotFound from 'pages/NotFound';
import HomePage from 'pages/HomePage';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
        auth: false
    },
    {
        path: '*',
        component: NotFound,
        auth: false
    },
]