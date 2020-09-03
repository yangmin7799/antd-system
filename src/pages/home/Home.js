import React,{ useState } from 'react'
import { Input,Button } from 'antd';
import MySelect  from "../../components/FormCustom/Select"
import MyRadio  from "../../components/FormCustom/Radio"
// import SelectGroup  from "../../components/FormCustom/SelectGroup"

const Home = () => {
	const [num,setNum] =  useState(0)
	const [selectVal,setSelectVal] = useState(1);
	const [radioVal,setRadioVal] = useState(2)

	const options = [{label: "js",value: 1},{label:"java",value: 2}]
	const other = {
		defaultValue: selectVal,
		mode: "multiple",
		style: {"width": 200}
	}

	const getRadioValue = (e) =>{
		const {value} = e.target;
		setRadioVal(value)
	}

	return (
		<div className="page">
			<div>
				<Input placeholder="Basic usage" value={num} />
				<Button type="primary" onClick={()=>setNum(num+1)}>Primary Button</Button>
			</div>

			<MySelect 
				options={options} 
				otherProps={other} 
				getSelectValue={(val)=>setSelectVal(val)} />
			<Input placeholder="Basic usage" value={selectVal} />

			<MyRadio 
				options={options} 
				defaultValue={radioVal} 
				getRadioValue={(val)=>getRadioValue(val)}/>
			<Input placeholder="Basic usage" value={radioVal} />


			{/* <SelectGroup options={options} /> */}

		</div>
	)
}


export default Home