import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

class MySelect extends Component {
  componentDidMount() {
    if (!this.isOptionsValid()) {
      console.error('使用Select组件请传入options数组，且长度要大于0');
    }
  }

  isOptionsValid = () => {
    const { options } = this.props;
    return options && Array.isArray(options) && options.length > 0;
  };

  render() {
    const { options,getSelectValue,otherProps } = this.props;

    return this.isOptionsValid() ? (
      <Select 
        {...otherProps} 
        placeholder="请选择"
        onChange={(val) => getSelectValue(val)}>

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
