import React from 'react';
import './order.css';
import { Table, Row, Col, Select, DatePicker, Button, Popconfirm } from 'antd';
 
class Order extends React.Component {
    state={
      dataSource:[
        {
          key: '1',
          name: '胡彦斌',
          num: 32,
          address: '西湖区湖底公园1号',
          status:'待付款',
          product:'血压计',
          order:'20201027',
          time:'2020-10-27 12:00',
          total:'￥1900',
          phone:'15827972359',
        },
        {
          key: '2',
          name: '胡彦祖',
          num: 42,
          address: '西湖区湖底公园1号',
          status:'待付款',
          product:'血压计',
          order:'20201027',
          time:'2020-10-27 12:00',
          total:'￥1900',
          phone:'15827972359',
        },
        {
            key: '3',
            name: '胡彦祖',
            num: 42,
            address: '西湖区湖底公园1号',
            status:'待付款',
            product:'血压计',
            order:'20201027',
            time:'2020-10-27 12:00',
            total:'￥1900',
            phone:'15827972359',
          },
          {
            key: '4',
            name: '胡彦祖',
            num: 42,
            address: '西湖区湖底公园1号',
            status:'已完成',
            product:'血压计',
            order:'20201027',
            time:'2020-10-27 12:00',
            total:'￥1900',
            phone:'15827972359',
          },
          {
            key: '5',
            name: '胡彦祖',
            num: 42,
            address: '西湖区湖底公园1号',
            status:'已付款',
            product:'血压计',
            order:'20201027',
            time:'2020-10-27 12:00',
            total:'￥1900',
            phone:'15827972359',
          },
      ]
    }
    delClick = (e) => {
      console.log(e)
      let dataSource = this.state.dataSource
      let newData=dataSource.filter(item=> item.key!==e.key)
      this.setState({
        dataSource:newData
      })
    }
    render() {
        const { Option } = Select;
        const { RangePicker } = DatePicker;
        const { Column } = Table;
        const dataSource = this.state.dataSource
        return (
        <div id='Order'>
            <Row gutter={[{xs:8,sm:16,md:24,lg:32},{xs:8,sm:16,md:24,lg:32}]}>
                <Col span={6} >
                    <span className='label' >状态</span>
                    <Select
                        style={{width:160}}
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Col>
                <Col span={8} >
                    <span className='label' >日期</span>
                    <RangePicker />
                </Col>
                <Col span={8} >
                <Button type="primary">查询</Button>
                </Col>
            </Row>
            <Table dataSource={dataSource}>
                <Column title='订单编号' dataIndex='order' key='order' ></Column>
                <Column title='下单时间' dataIndex='time'  key='time' ></Column>
                <Column title='商品名称' dataIndex='product' key='product' ></Column>
                <Column title='下单数量' dataIndex='num' key='num' ></Column>
                <Column title='下单金额' dataIndex='total' key='total' ></Column>
                <Column title='订单状态' dataIndex='status' key='status' ></Column>
                <Column title='收货人姓名' dataIndex='name' key='name' ></Column>
                <Column title='电话' dataIndex='phone' key='phone' ></Column>
                <Column title='住址' dataIndex='address' key='address' ></Column>
                <Column title='操作' dataIndex='edit' key='edit'  render={(text,record)=>(
                  <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={()=>this.delClick(record)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button danger>删除</Button>
                  </Popconfirm>
                )} ></Column>
            </Table>
        </div>
        );
    }
}

export default Order;