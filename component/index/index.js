import { Modal, Button, Switch } from 'antd';
import React, {Component} from 'react';
import './index.css';

class Index extends Component {

    constructor(props){
        super(props);
        
        this.state = {
           visible: false,
           menu: <div>
                    <span>USB热点</span>
                    <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
                    </div>
        }
        this.divClick = this.divClick.bind(this);
    }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  divClick(e){
    console.log(e.target);
    let menu = null;
    switch(e.target.className){
        case 'usb':
            menu = <div>
                        <span>USB热点</span>
                        <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
                    </div>
            break;
        case 'hotapp':
            menu = <div>
                        <span>红外线</span>
                        <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
                    </div>
            break;
        case 'aplity':
            menu = <div>
                        <span>应用管理权限</span>
                        <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
                        <span>管理员密码</span>
                        <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
                    </div>
            break;
        default:
            break;
    }
    this.setState({ menu });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
        <Modal title="Basic Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
         <div className='app-usb-hotapp-aplity'>
             <ul>
                 <li className='usb' key='usb1' onClick = {this.divClick}>
                     <span>USB热点</span>
                 </li>
                 <li className='hotapp' key='hotapp1' onClick = {this.divClick}>
                     <span>红外线热点</span>
                 </li>
                 <li className='aplity' key='aplity1' onClick = {this.divClick}>
                     <span>应用权限</span>
                 </li>
             </ul>
             {this.state.menu}
         </div>
        </Modal>
      </div>
    );
  }
}

export default Index;