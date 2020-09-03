import React, { useState } from 'react'
import { withRouter, Route, Link, Switch } from 'react-router-dom'
import { routes } from '../../routes/router'
import Header from '../header/Header'
import { Layout, Menu, Icon, Breadcrumb, PageHeader } from 'antd'
import "./layout.css"

const {  Sider, Content } = Layout
const { SubMenu } = Menu
// 面包屑配置[]
function breadcrumb() {
  const breadcrumbRouters = []
  routes.forEach( (route, index, routes)=> {
    route.breadcrumbName = route.name
    // 首页面包屑
    // if(routes.indexOf(route) === 0) {
    //   return (
    //     breadcrumbRouters[0] = route
    //   )
    // }

    const urlArr = location.pathname.split('/') || []
    
    if(route.path === '/'+urlArr[1] ){
      breadcrumbRouters[0] = route
      console.log(route)
      route.children && route.children.map( children => {
        const pathArr = children.path.split('/')
        const len = pathArr.length
        
        if(children.path.split('/')[len-1] === urlArr[2]){
          children.breadcrumbName = children.name
          breadcrumbRouters[1] = children
        }
          
        })
      // breadcrumbRouters[1] = route
      // route.children && route.children.map( children => {
      //   children.breadcrumbName = children.name
      //   breadcrumbRouters[2] = children
      // })
    }

  })
  return breadcrumbRouters
}

function ProLayout(props) {
    const { location } = props
    const breadcrumbRouters = breadcrumb()
    console.log(breadcrumbRouters)
    const [current, setCurrent] = useState({
      key: breadcrumbRouters[breadcrumbRouters.length-1].name,
      path: breadcrumbRouters[breadcrumbRouters.length-1].path
    })
    const [collapsed, setCollapsed] = useState(false)

    return (

      <Layout style={{ height:'100%' }}>
        {/* 菜单栏 */}
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          >
          <div className="white p2 flex a-center" >
            <img className={[collapsed && 'centered']} src='' width='40px'/>
            {!collapsed && <div className='px2 f4'>薪酬系统</div>}
          </div>
          <Menu
            theme="dark"
            onClick={(e) => setCurrent(e)}
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
            onClick={()=> setCollapsed(!collapsed) }
          >
            <Icon type={'menu-fold'} style={{color: "#fff"}} />
          </span>
        </Sider>

        <Layout>
          {/* 右边头部组件 */}
          {/* <Header handleCollapsed={()=> setCollapsed(!collapsed)}/> */}
          <Header handleCollapsed={()=> setCollapsed(!collapsed)}/>

        {/* 带页头的面包屑 */}
          <Breadcrumb className='bg-white f4 px4 pt3' separator=">">
            {/* <Breadcrumb.Item href={breadcrumbRouters[0].path}>
              <Icon type="home" />
              <span>{breadcrumbRouters[0].name}</span>
            </Breadcrumb.Item> */}

            {breadcrumbRouters.map( (breadcrumb, breadcrumbIdx)=> {
              return (
                  <Breadcrumb.Item key={breadcrumbIdx}  >
                    <span>{breadcrumb.name}</span>
                  </Breadcrumb.Item>
                )
               
            })}

          </Breadcrumb>

          {/* <PageHeader title={current.key} /> */}

          {/* 主体内容 */}
          <Content className='container bg-white'>

            {/* 动态route component */}
            <Switch>
              {routes.map( (route, routeIdx) => {
                if(route['children']) 
                  return route['children'].map( (children, childrenIdx) => {
                    return (
                        <Route key={children.name} path={children.path} component={children.component} />)
                    })
                if(!route['children'])
                  return (
                    <Route key={route.name} path={route.path} component={route.component} />)
                })
              }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
}
export default withRouter(ProLayout)