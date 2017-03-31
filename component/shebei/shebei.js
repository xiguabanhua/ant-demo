import { Layout, Menu, Icon, Table, Button, Modal} from 'antd';
import React, {Component} from 'react';
import './shebei.css';
const { Column, ColumnGroup } = Table;

class Shebei extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            modal1Visible: false,
            modal2Visible: false,
            content: null,
            list: null,
            columns: [
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
            ],
            data: [
                {
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
                    date:'2017-06-02',
                    offLine: true
                }, {
                    key: '3',
                    firstName: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    date:'2017-07-01',
                    offLine: true
            }]
        }
        this.handleFun = this.handleFun.bind(this);
    }

    handleFun(record, event){
        // console.log(record, event);
        console.log(record);
        const index = parseInt(record.key, 10) - 1;
        this.state.content = this.state.list[index];
    }
    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    
    render() {

        this.state.list = this.state.data.map((value, index, arr) => {
            const objArray = Object.entries(value);
            return (
                <div key={`dd${index}`}>
                    {objArray.map((val, i) => {
                        return (
                            <span key={i+1}>{val[0]}:{val[1]}</span>
                        );
                    })}
                </div>
            );
        });

        return (
            <div>{/**/}
                <Table dataSource={this.state.data}>
                    <Column
                        title="First Name"
                        dataIndex="firstName"
                        key="firstName"
                    />
                    <Column
                        title="Date"
                        dataIndex="date"
                        key="date"
                        sorter={(a, b) => a.date<b.date ? 1:-1}
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
                            <Button type="primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
                        )}
                        onCellClick ={this.handleFun}
                    />
                </Table>
                <Modal
                    title="Vertically centered modal dialog"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                    footer={null}
                    >
                    <p>some contents...</p> 
                    <p>{this.state.content}</p>
                </Modal>
            </div>
        );
    }
}

export default Shebei;