import React,{ useState } from 'react'
import MyRadio from "./index"



const demo = () => {
  const options = [{label: "js",value: 1},{label:"java",value: 2}]
	const [radioVal,setRadioVal] = useState(2)

  const getRadioValue = (e) =>{
		const {value} = e.target;
		setRadioVal(value)
	}
  
	return (
    <MyRadio 
				options={options} 
				defaultValue={radioVal} 
				getRadioValue={(val)=>getRadioValue(val)}/>
	)
}

export default demo