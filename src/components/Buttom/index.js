import React,{ Component } from "react"
import PropTypes from 'prop-types';
import { Button } from 'antd';

class MyButton extends Component{
  render(){
    const {text,otherProp} = this.props;

    return (
      <Button {...otherProp} >{text}</Button>
    )
  }
}

MyButton.defaultProps = {
  text: "按钮"
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired
}

export default MyButton