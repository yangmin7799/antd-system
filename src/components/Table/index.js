import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Tag} from "antd";
const { Column, ColumnGroup } = Table;

const MyCol = (col,otherProps) => {
  return (
    <Column 
      {...otherProps}
      title={col.name} 
      dataIndex={col.prop} 
      key={col.prop} 
      render={col.formatterRander} />
  )
}


class MyTable extends Component {

  onRender(curr,row,index){
    console.log(curr,row,index)
    return (
      <span>{curr}</span>
    )
  }

  render() {
    const {data,columns,otherProps} = this.props

    return (
      <Table dataSource={data} {...otherProps}>
        {columns.map(column => (
          column.children ? (
            <ColumnGroup title={column.name} key={column.name}>
              {column.children.map(col => (
                MyCol(col,otherProps)
              ))}
            </ColumnGroup>
          ): (
            MyCol(column,otherProps)
          )
        ))}
        
      </Table>
    )
  }

}

MyTable.defaultProp = {
  data: [],
  columns: []
}

export default MyTable; 
