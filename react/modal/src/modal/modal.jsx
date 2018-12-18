import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: true
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            visible: props.visible
        });
    }
    componentDidMount () {
        this.setState({
            visible: this.props.visible
        })
    }
    render() {
        const { visible } = this.state;
        const { title, children } = this.props;
        return visible && ( 
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-title">{title}</div>
                    <div className="modal-content">{children}</div>
                    <div className="modal-operator">
                        <button className="modal-operator-close" onClick={this.closeModal}>取消</button>
                        <button className="modal-operator-confirm" onClick={this.confirm}>确定</button> 
                    </div>
                </div>
                <div className="mask" onClick={this.maskClick}></div>
            </div>
        )
        
    }
    confirm =() => {
        const { confirm } = this.props;
        confirm && confirm();
        this.setState ({
            visible: false
        });
    }

    closeModal = () => {
        const { onClose } = this.props;
        onClose && onClose();
        this.setState ({
            visible: false
        });
    }
    maskClick = () => {
        console.log('tt');
        this.setState({
            visible: false
        })
    }
}  

export default Modal;