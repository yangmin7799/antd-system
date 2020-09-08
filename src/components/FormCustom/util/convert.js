import React from 'react';
import { Input, InputNumber, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import Select from '../Select/index';

const { RangePicker } = DatePicker;

function TypeConversion(item) {
  let Component;
  switch (item.type) {
    
    case 'RangePicker':
      Component = RangePicker;
      break;
    case 'DatePicker':
      Component = DatePicker;
      break;
   
    case 'Select':
      Component = Select;
      break;
   
    case 'InputNumber':
      Component = InputNumber;
      break;
    case 'Custom': // 自定义组件
      Component = item.component;
      break;
    case 'Input':
    default:
      Component = Input;
      console.warn(
        '类型type请跟AntD保持一致，驼峰写法。eg:Input,Select,RangePicker'
      );
      break;
  }

  const { antProps, ...otherProps } = item;
  return (
    <Component
      {...otherProps}
      format={item.format || 'YYYY-MM-DD'}
      {...antProps}
      style={{ width: '100%' }}
      locale={locale}
    />
  );
}

export default TypeConversion;
