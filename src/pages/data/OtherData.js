import React,{useState} from 'react'
import MyTable from "../../components/Table"
import MyButton from "../../components/Buttom"
import MyModal from "../../components/Modal"
import { Tag } from "antd"
import { useVideo } from 'react-use'

const OtherData = () => {
	const data = [
		{
			key: '1',
			firstName: 'John',
			lastName: 'Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			firstName: 'Jim',
			lastName: 'Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
	]

	const [visible,setVisible] = useState(false)
	const [object,setObject] = useState({})

	const onClick = (e,val) => {
		setVisible(true)
		setObject(val)
	}

	const columns = [
		{
			prop: "key",
			name: "key"
		},
		{
			name: "Name",
			children: [
				{
					prop: "firstName",
					name: "firstName"
				},
				{
					prop: "lastName",
					name: "lastName"
				}
			]
		},
		
		{
			prop: "age",
			name: "age"
		},
		{
			prop: "address",
			name: "address"
		},
		{
			prop: "tags",
			name: "tags",
			formatterRander: (curr,row,index)=> {
				return (
					curr.map(i => (
						<Tag key={i} color="blue" onClick={(e) => onClick(e,row)}>{i}</Tag>
					))
				)
			}
		}
	]

	const otherProps = {
		bordered: true,
	}

	return (
		<div>
			<MyTable
			data={data}
			columns={columns} 
			otherProps={otherProps}
		 />
		 
		 <MyModal 
				visible={visible} 
				slot={
					<div>
						{Object.keys(object).map(key => (
							<dl key={key}>
								<dt key={key+'-key'}>{key}:</dt>
								<dd key={key+'-text'}>{object[key]}</dd>
							</dl>
						))}
					</div>
				}
				handleCancel={() =>setVisible(false)} 
				handleOk={(val)=>setVisible(false)} />

		</div>
		
		 
	)
}


export default OtherData