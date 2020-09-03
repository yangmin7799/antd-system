import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Layout from '../components/layout/Layout'
import Login from '../pages/login/Login'
import AuthorizedRoute from './AuthorizedRoute'
import NoFound from '../pages/noFound/NoFound'

import Home from '../pages/home/Home'
import PatList from '../pages/pat/PatList'
import BaseData from '../pages/data/BaseData'
import OtherData from "../pages/data/OtherData"

export const Router = () => (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/login" component={Login} />
					<Redirect from="/" exact to="/login"/>{/*注意redirect转向的地址要先定义好路由*/}
					<AuthorizedRoute component={Layout} />
					<Route component={NoFound}/>
				</Switch>
			</div>
		</BrowserRouter>
)


export const routes = [
	{
		path: '/home',
		name: '工作台',
		icon: 'home',
		component: Home
	},
	{
		path: '/data',
		name: '算薪数据',
		icon: 'smile',
		children: [
			{
				path: '/data/base',
				name: '基础数据',
				breadcrumbName: '基础数据',
				icon: 'smile',
				component: BaseData
			},
			{
				path: '/data/other',
				name: '其他数据',
				breadcrumbName: '其他数据',
				icon: 'smile',
				component: OtherData
			}
		]
	},
	{
		path: '/pat',
		name: '系统设置',
		icon: 'user',
		children: [
			{
				path: '/pat/list',
				name: '用户列表',
				icon: 'list',
				component: PatList
			}
		]

	},
]







