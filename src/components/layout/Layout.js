import React, { useState } from 'react'
import { withRouter, Route, Link, Switch } from 'react-router-dom'
import { routes } from '../../routes/router'
import Header from './header'
import LeftSider  from "./leftSider"
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd'
import "./layout.css"

const {  Content } = Layout
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
    
  console.log("props",location)
    const breadcrumbRouters = breadcrumb()

    const [current, setCurrent] = useState({
      key: breadcrumbRouters[breadcrumbRouters.length-1].name,
      path: breadcrumbRouters[breadcrumbRouters.length-1].path
    })
    const [collapsed, setCollapsed] = useState(false)

    return (

      <Layout style={{ height:'100%' }}>
        {/* 菜单栏 */}
        <LeftSider 
          collapsed={collapsed} 
          current={current} 
          routes={routes} 
          setCurrent={(e) => setCurrent(e)} 
          setCollapsed={(collapsed) =>setCollapsed(collapsed)} />

        <Layout>
          {/* 右边头部组件 */}
          <Header handleCollapsed={()=> setCollapsed(!collapsed)}/>

          {/* 带页头的面包屑 */}
          <Breadcrumb className='bg-white f4 px4 pt3' separator=">">
            {breadcrumbRouters.map( (breadcrumb, breadcrumbIdx)=> {
              return (
                  <Breadcrumb.Item key={breadcrumbIdx}  >
                    <span>{breadcrumb.name}</span>
                  </Breadcrumb.Item>
                )
            })}
          </Breadcrumb>

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