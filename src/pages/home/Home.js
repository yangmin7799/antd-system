import React,{ useState } from 'react'
import { Input,Button } from 'antd';
import MySelect  from "../../components/FormCustom/Select"
import MyRadio  from "../../components/FormCustom/Radio"
import MyButton  from "../../components/Buttom"
import MyModal from "../../components/Modal"
import MySwitch  from "../../components/Switch"

import MyForm  from "../../components/FormCustom"

const Home = () => {
	const [num,setNum] =  useState(0)
	const [selectVal,setSelectVal] = useState(1);
	const [radioVal,setRadioVal] = useState(2);
	const [active,setActive] = useState("2")
	const [visible,setVisible] = useState(false)

	let [selectVals,setSelectVals] = useState([1])

	const options = [{label: "js",value: 1},{label:"Java",value: 2}]
	const other = {
		defaultValue: selectVals,
		mode: "multiple",
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
		// 提交表单
		// 关闭
		setVisible(_visible)
	}

	const fields = [
		{
			field: 'name',
			label: '姓名'
		},
		// {
		// 	field: 'age',
		// 	label: '年龄',
		// 	type: 'InputNumber'
		// },
		// {
		// 	field: 'birthday',
		// 	label: '生日',
		// 	type: 'DatePicker'
		// },
		{
			field: 'select',
			label: 'Select',
			type: 'Select',
			// initialValue: '22',
			options: [
				{
					label: '11',
					value: '11'
				},
				{
					label: '22',
					value: '22'
				}
			]
		}
	]

	const onClick = () => {
		console.log("hhh",this)
	}


	return (
		<div className="page">
			<MySwitch 
				active={active} 
				options={options} 
				slot={
					active === '1' ? (<div>这是前端</div>) : (<div>这是后端</div>)
				}
				getActive={(key)=>setActive(key)} />

			<div>
				<Input placeholder="Basic usage" value={num} />
				<Button type="primary" onClick={() => setNum(num+1)}>+1</Button>
			</div>

		

			<MyRadio 
				options={options} 
				defaultValue={radioVal} 
				getRadioValue={(val) => getRadioValue(val)}/>
			<Input placeholder="Basic usage" value={radioVal} />

			<MyButton text="点开弹窗" otherProp={btnProps} />
			
			<MyModal 
				visible={visible} 
				otherProps={modalProps}
				slot={
					<MyRadio 
						options={options} 
						defaultValue={radioVal} 
						getRadioValue={(val) => getRadioValue(val)} />
				}
				handleCancel={() =>setVisible(false)} 
				handleOk={(val)=>getVisible(val)} />

			<MySelect 
				options={options} 
				{...other}
				getSelectValue={(val) => setSelectVals(val)} />
			<Input placeholder="Basic usage" value={selectVals} />

			<MyForm 
				fields={fields}
				onSubmit={() => {}}
			/>
			{/* <Button onClick={onClick}>提交</Button> */}
		</div>
	)
}


export default Home