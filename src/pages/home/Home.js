import React,{ useState } from 'react'
import { Input,Button } from 'antd';

const Home = () => {
	const [num,setNum] =  useState(0)
	return (
		<div className="page">
			<Input placeholder="Basic usage" value={num} />
			<Button type="primary" onClick={()=>setNum(num+1)}>Primary Button</Button>

		</div>
	)
}


export default Home