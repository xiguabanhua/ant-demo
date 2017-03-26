import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiderDemo from './component/layout';
import { DatePicker } from 'antd';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
    </div>
  );
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
