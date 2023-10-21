import React from 'react';
import { Empty } from 'antd';

export default class NotFound extends React.Component {

    render() {
        return (
            <div>
                <Empty description="当前页面未找到" />
            </div>
        );
    }

}

