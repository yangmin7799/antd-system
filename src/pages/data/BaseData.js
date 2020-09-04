import React from 'react'
import MyTable from "../../components/Table"
import { Tag } from "antd"

const BaseData = () => {
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
		{
			key: '3',
			firstName: 'Joe',
			lastName: 'Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	];

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
						<Tag key={i} >{i}</Tag>
					))
				)
			}
		}
	]

	const otherProps = {
		bordered: true,
		align: "left",
		pagination: false
	}

	return (
		<MyTable
			data={data}
			columns={columns} 
			otherProps={otherProps}
		 />
	)
}


export default BaseData