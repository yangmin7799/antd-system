import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

class MyModal extends Component {

  onConfirm(){
    this.props.handleOk({_visible: false})
  }
  
  render() {
    const { visible,otherProps,handleCancel } = this.props;

    return  (
      <Modal
        visible={visible}
        maskClosable={false}
        {...otherProps}
        onOk={()=>this.onConfirm()}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    ) ;
  }
}

MyModal.defaultProps = {
  visible: false,
  otherProps: {
    title: "这是一个弹窗",
		okText: "保存",
		cancelText: "取消"
  }
}

MyModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  otherProps: PropTypes.object
}

export default MyModal; 