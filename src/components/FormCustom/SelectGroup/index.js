import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select,Popover, Button } from 'antd';

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

  onClick(e){
    console.log(e)
  }

  render() {
    const { options,getSelectValue,otherProps } = this.props;
    const selectedLabel = null

    return this.isOptionsValid() ? (
      <Popover 
        placement="bottomLeft" trigger="click">
          {/* 已选内容 */}
        <div class="select_label">
         {selectedLabel || '点开吧'}
         <div class="select-arrow-wrapper">
                <i class="arrowClasses" />
            </div>
        </div>
        {/* 全选按钮 */}
        <div >全选</div>

        {/* 下拉列表 */}
        <ul>
          {options.map(item => (
            <li key={item.value} onClick={this.onClick}>{item.label}</li>
            ))}
        </ul>

      </Popover>
    ) : (
      <span style={{ color: 'red' }}>请检查配置项是否正确！！</span>
    );
  }
}

MySelect.propTypes = {
  options: PropTypes.array.isRequired
};

export default MySelect;
