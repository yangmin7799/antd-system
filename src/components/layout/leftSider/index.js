import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import logo from "../images/logo.png"

const {  Sider, Content } = Layout
const { SubMenu } = Menu

function LeftSider(props){
  const {collapsed,current,routes} = props

  return (
    <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          >
          <div className="white  flex a-center header-logo" >
            <img className={[collapsed && 'centered']} src={logo} width='20px'/>
            {!collapsed && <div className='px2 f4'>管理系统</div>}
          </div>
          <Menu
            theme="dark"
            onClick={(e) => props.setCurrent(e)}
            selectedKeys={[current.key]}
            mode="inline"
          >
            {
              routes.map( (item, menuIdx) => {
                if (item.children instanceof Array) {
                  return (
                    <SubMenu key={item.name}
                            title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                      {
                        item.children.map( (subItem, subItemIdx) => (
                          <Menu.Item key={subItem.name}>
                            <Link to={subItem.path}>{subItem.name}</Link>
                          </Menu.Item>
                        ))
                      }
                    </SubMenu>
                  )
                } else {
                  return (
                    <Menu.Item key={item.name}>
                      <Link to={item.path}>
                        <Icon type={item.icon} /><span>{item.name}</span>
                      </Link>
                    </Menu.Item>
                  )
                }
              })
            }
          </Menu>
          <span
            className='header-collapsed'
            onClick={()=> props.setCollapsed(!collapsed) }
          >
            <Icon type={'menu-fold'} style={{color: "#fff"}} />
          </span>
        </Sider>
  )
}

export default LeftSider;