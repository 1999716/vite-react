
import Redirect from '../pages/redirect.jsx'
import NotFound from '../pages/404.jsx'
import Wel from '../pages/wel.jsx'


const mainRoutesArr = [
    {
        path: '*',
        name: '404',
        component: NotFound
    },
    {
        path: '/',
        name: '重定向',
        component: Redirect
    },
    {
        path: '/wel',
        name: '欢迎页',
        component: Wel
    },
];

export default mainRoutesArr;