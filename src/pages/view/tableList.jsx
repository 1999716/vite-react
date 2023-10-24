import React from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
];

const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
];


const sonDataSource = [
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

const sonColumns = [
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
]


export default class TableList extends React.Component {


    render() {
        return (
            <Table
                className='my-table'
                style={{ margin: '8px' }}
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <Table
                            style={{
                                marginRight: "48px",
                                marginBottom: "10px"
                            }}
                            className='my-table'
                            columns={sonColumns}
                            dataSource={sonDataSource}
                            pagination={{ position: ['none', 'none'] }}
                        />
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }
                }
                dataSource={data}
            />
        );
    }

}

