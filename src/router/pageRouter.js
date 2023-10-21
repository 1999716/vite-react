
import Test from '../pages/view/test.jsx'
import TableList from '../pages/view/tableList.jsx'


const pageRouteArr = [
    {
        path: '/test',
        name: '测试页',
        component: Test
    },
    {
        path: '/table',
        name: '号码',
        component: TableList
    }
];

export default pageRouteArr;