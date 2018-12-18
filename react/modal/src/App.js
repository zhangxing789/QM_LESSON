import React, { Component } from 'react';
import Modal from './modal/modal';
import './App.css';

class App extends Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  }
  closeModal = () => {
    console.log("关闭了");
  }
  confirm = () => {
    console.log("确定了");
  }
  render() {
    const { visible }  = this.state;
    return (
      <div className="App">
        <button onClick={this.showModal}>click here</button>
        <Modal 
        title="这是标题"
        visible={visible}
        onClose={this.closeModal}
        confirm={this.confirm}
        >这是内容</Modal>
      </div>
    );
  }
}

export default App;
