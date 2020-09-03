import React from 'react'
import {Table, Tag} from "antd"
const { Column, ColumnGroup } = Table;

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

	return (
		<Table dataSource={data} bordered>
			<ColumnGroup title="Name">
				<Column title="First Name" dataIndex="firstName" key="firstName" />
				<Column title="Last Name" dataIndex="lastName" key="lastName" />
			</ColumnGroup>
			<Column title="Age" dataIndex="age" key="age" />
			<Column title="Address" dataIndex="address" key="address" />
			<Column
				title="Tags"
				dataIndex="tags"
				key="tags"
				render={tags => (
					<>
						{tags.map(tag => (
							<Tag color="blue" key={tag}>
								{tag}
							</Tag>
						))}
					</>
				)}
			/>
		
		</Table>
	)
}


export default OtherData