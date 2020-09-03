import React from 'react'
import MySelect  from "./index"

const demo = () => {
  const options = [{label: "js",value: 1},{label:"java",value: 2}]
  const other = {
		defaultValue: 1,
		style: {"width": 200}
  }
  
	return (
    <MySelect 
      options={options}
      otherProps={other}
      getSelectValue={(val)=>setSelectVal(val)}/>
	)
}

export default demo