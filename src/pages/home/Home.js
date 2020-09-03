import React,{ useState } from 'react'
import { Input,Button } from 'antd';
import MySelect  from "../../components/FormCustom/Select"

const Home = () => {
	const [num,setNum] =  useState(0)
	const [selectVal,setSelectVal] = useState(1)
	const options = [{label: "js",value: 1},{label:"java",value: 2}]
	const other = {
		defaultValue: selectVal,
		style: {"width": 200}
	}
	return (
		<div className="page">
			<Input placeholder="Basic usage" value={num} />
			<Button type="primary" onClick={()=>setNum(num+1)}>Primary Button</Button>

			<MySelect options={options} otherProps={other} getSelectValue={(val)=>setSelectVal(val)} />
			<Input placeholder="Basic usage" value={selectVal} />

		</div>
	)
}


export default Home