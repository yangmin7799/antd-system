import React from 'react';
import { Dropdown, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './header.module.css'

const menu = (
  <Menu>
    <Menu.Item key="2">
      <Link to="/login">
        <Icon type="poweroff" />&nbsp;退出登录
      </Link>
    </Menu.Item>
  </Menu>
);

const Header = (props) => {
  const userName = window.sessionStorage.getItem("userName")
  return (
    <div className='header-wrapper'>
      <div className='header-user-info'>
        <Dropdown overlay={menu} placement="bottomRight">
          <span className='header-dropdown-link'>
            <Icon type="user" /> {userName} <Icon type="down" />
          </span>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header;