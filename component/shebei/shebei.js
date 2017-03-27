import { Layout, Menu, Icon, Table, Button, Modal} from 'antd';
import React, {Component} from 'react';
import './shebei.css';
const { Column, ColumnGroup } = Table;

class Shebei extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {

        }
        this.handleFun = this.handleFun.bind(this);
    }

    handleFun(record, event){
        console.log(record, event);

    }

    info() {
        Modal.info({
            title: 'This is a notification message',
            content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
            ),
            onOk() {},
        });
    }
    
    render() {
        const columns = [
            {
                title: '设备名',
                dataIndex: 'name',
                key: 'name',
            }, 
            {
                title: '公司',
                dataIndex: 'age',
                key: 'age',
            }, 
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            }, 
            {
                title: '详情',
                key: 'action',
                render: (text, record) => (
                    <span>
                    <Button onClick={info}>详情</Button>
                    </span>
                ),
            }  
         ];

        const data = [{
            key: '1',
            firstName: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            date:'2017-06-01',
            offLine: true
            }, {
            key: '2',
            firstName: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            date:'2017-06-01',
            offLine: true
            }, {
            key: '3',
            firstName: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            date:'2017-06-01',
            offLine: true
        }];

        return (
            <Table dataSource={data}>
                <Column
                    title="First Name"
                    dataIndex="firstName"
                    key="firstName"
                />
                <Column
                    title="Last Name"
                    dataIndex="lastName"
                    key="lastName"
                />
                <Column
                    title="Age"
                    dataIndex="age"
                    key="age"
                />
                <Column
                    title="Address"
                    dataIndex="address"
                    key="address"
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <a href="#">Delete</a>
                        </span>
                    )}
                    onCellClick ={this.handleFun}
                />
        </Table>
        );
    }
}

export default Shebei;