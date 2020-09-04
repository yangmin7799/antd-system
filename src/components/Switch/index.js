import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


class MySwitch extends Component {
  onTabClick(key,e){
    this.props.getActive(key)
  }

  render(){
    const {active,options,otherProps,slot} = this.props;

    return (
      <Tabs activeKey={active} {...otherProps} onTabClick={(k,e) => this.onTabClick(k,e)}>
          {options.map(item => (
            <TabPane tab={item.label} key={item.value}>
              {slot}
            </TabPane>
          ))}
        </Tabs>
    )
  }
}

MySwitch.defaultProps = {
  active: "",
  options: [],
  otherProps: {
    tabPosition: "top", // 文字所在位置 上下左右
    animated: false
  }
}

MySwitch.propTypes = {
  active: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default MySwitch;