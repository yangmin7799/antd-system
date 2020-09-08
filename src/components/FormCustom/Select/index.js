import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

class MySelect extends Component {
  state = {
    _defaultValue: this.props.defaultValue
  }
  componentDidMount() {
    if (!this.isOptionsValid()) {
      console.error('使用Select组件请传入options数组，且长度要大于0');
    }
  }

  isOptionsValid = () => {
    const { options } = this.props;
    return options && Array.isArray(options) && options.length > 0;
  };

  getSelectValue = (val) => {
    console.log(val)
    const { getSelectValue } = this.props
    this.setState({
      _defaultValue : val
    })
    getSelectValue && getSelectValue(val)
  }

  render() {
    const { options,...otherProps } = this.props;

    const {defaultValue} = otherProps;

    let _defaultValue = defaultValue || null;

    return this.isOptionsValid() ? (
      <Select 
        {...otherProps} 
        defaultValue={_defaultValue}
        placeholder="请选择">
          {/* 
        onChange={(val) => this.getSelectValue(val)} */}

        {options.map(option => (
          <Option key={option.label} value={option.value}>
            {option.label}
          </Option>
        ))}

      </Select>
    ) : (
      <span style={{ color: 'red' }}>请检查配置项是否正确！！</span>
    );
  }
}

MySelect.propTypes = {
  options: PropTypes.array.isRequired
};

export default MySelect;
