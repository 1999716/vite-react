import React from 'react';
import axios from "axios"
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 10,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 12,
        address: '西湖区湖底公园1号',
    },
];

let columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];


export default class TableList extends React.Component {


    render() {

        // axios({
        //     method: 'get',
        //     url: '/api/xy-magic-api/api-2.0/kp/park/detail?id=1000001',
        // }).then(res => {
        //     console.log(res)
        // })

        dataSource.forEach(element => {
            if (element.age > 3) {
                columns = columns.filter(item => item.key != 'age')
            }
        });

        return (
            <div className="Table">
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }

}

