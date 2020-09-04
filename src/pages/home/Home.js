import React,{ useState } from 'react'
import { Input,Button } from 'antd';
import MySelect  from "../../components/FormCustom/Select"
import MyRadio  from "../../components/FormCustom/Radio"
import MyButton  from "../../components/Buttom"
import MyModal from "../../components/Modal"

const Home = () => {
	const [num,setNum] =  useState(0)
	const [selectVal,setSelectVal] = useState(1);
	const [radioVal,setRadioVal] = useState(2);
	const [visible,setVisible] = useState(false)

	const options = [{label: "js",value: 1},{label:"java",value: 2}]
	const other = {
		defaultValue: selectVal,
		mode: "multiple",
		style: {"width": 200}
	}
	const btnProps = {
		onClick: () =>{
			setVisible(true)
		}
	}

	const modalProps = {
		title: "这是一个弹窗",
		okText: "保存",
		cancelText: "取消",
	}

	const getRadioValue = (e) =>{
		const {value} = e.target;
		setRadioVal(value)
	}

	const getVisible = ({_visible}) => {
		setVisible(_visible)
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

			<MyButton text="点开弹窗" otherProp={btnProps} />
			
			<MyModal 
				visible={visible} 
				otherProps={modalProps}
				handleCancel={() =>setVisible(false)} 
				handleOk={(val)=>getVisible(val)} />

		</div>
	)
}


export default Home