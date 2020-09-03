import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio  } from 'antd';

class MyRadio extends Component {
  componentDidMount() {
    if (!this.isOptionsValid()) {
      console.error('使用Radio组件请传入options数组，且长度要大于0');
    }
  }

  isOptionsValid = () => {
    const { options } = this.props;
    return options && Array.isArray(options) && options.length > 0;
  };

  onChange(e){
    console.log(e)
    console.log(this)
  }

  render() {
    const { options,defaultValue,getRadioValue } = this.props;

    return this.isOptionsValid() ? (
      <Radio.Group onChange={(val) => getRadioValue(val)} value={defaultValue}>
        { options.map(item => (
          <Radio key={item.label} value={item.value}>{item.label}</Radio>
        ))}
      </Radio.Group>
    ) : (
      <span style={{ color: 'red' }}>请检查配置项是否正确！！</span>
    );
  }
}

MyRadio.propTypes = {
  options: PropTypes.array.isRequired
};

export default MyRadio;
