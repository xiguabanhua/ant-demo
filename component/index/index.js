import { Modal, Button, Switch } from 'antd';
import React, {Component} from 'react';
import './index.css';
import ReactDOM from 'react-dom';

//导入echarts
// var echarts = require('echarts/lib/echarts') //必须
// require('echarts/lib/chart/pie') //图表类型
// require('echarts/lib/component/title') //标题插件
// require('./lib/chart/bar');

class Index extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            ifShow: false
        }
    }

  showMessage = () => {
       this.setState({ifShow: !this.state.ifShow}); 
  } 
  hidePopup = (e) => {
    // if(!this.isMounted()){
    //     return false;
    // }
    console.log(e, node, target, isInside);
    const node = ReactDOM.findDOMNode(this);
    const target = e.target || e.srcElement;
    // const isInside = node.contains(target);
    console.log(e, node, target);
    if(this.state.ifShow){
        this.setState({ ifShow: false});
    }
  }
  componentWillMount() {
      document.removeEventListener('click', this.hidePopup);
  }
  componentDidUpdate(prevProps, prevState) {
      //如果弹框是隐藏
     if(!this.state.ifShow){
        document.removeEventListener('click', this.hidePopup);
      }
      if(this.state.ifShow){
        document.addEventListener('click', this.hidePopup);
      }
     
  }
  
  render() {
    const notice =  <div className='notice-message'>消息通知弹框</div>
    return (
        <div>
             <Button onClick={this.showMessage}>点击</Button>
            {this.state.ifShow ? notice : null}
        </div>

    );
  }
}

export default Index;