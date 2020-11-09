import React from 'react';
import { connect } from 'react-redux'
import { Table, Row, Col, Button, Popconfirm, Space, Image, Input } from 'antd';
 
class ProductList extends React.Component {
  state={
    dataSource:''
  }
  delClick = (e) => {
    this.props.del(e.key)
  }
  editClick = (e) =>{
    this.props.history.push({pathname:'/product/edit',state:{id:e.key}})
  }
  render() {
    const { Column } = Table;
    console.log(this.props)
    return (
      <div id='ProductList'>
            <Row gutter={[{xs:8,sm:16,md:24,lg:32},{xs:8,sm:16,md:24,lg:32}]}>
                <Col span={5} >
                    <Space>
                      <span className='label' >型号</span>
                      <Input  />
                    </Space>
                </Col>
                <Col span={5}>
                    <Space>
                      <span className='label' >名称</span>
                      <Input  />
                    </Space>
                </Col>
                <Col span={2} >
                <Button type="primary">查询</Button>
                </Col>
                <Col span={2} >
                <Button type="primary">添加</Button>
                </Col>
            </Row> 
           <Table dataSource={this.props.dataSource} bordered >
                <Column align='center' title='商品型号' dataIndex='type' key='type' ></Column>
                <Column align='center' title='商品名称' dataIndex='name'  key='name' ></Column>
                <Column align='center' title='商品规格' dataIndex='specs' key='specs' ></Column>
                <Column align='center' title='商品价格' dataIndex='money' key='money' ></Column>
                <Column align='center' title='商品库存' dataIndex='stock' key='stock' ></Column>
                <Column align='center' title='生产日期' dataIndex='date' key='date' ></Column>
                <Column align='center' title='生产批号' dataIndex='lot' key='lot' ></Column>
                <Column align='center' title='商品主图' dataIndex='img' key='img' render={(text,record)=>(
                  <Image width={60} src={text} />
                )}></Column>
                <Column align='center' title='操作' dataIndex='edit' key='edit'  render={(text,record)=>(
                  <Space>
                    <Popconfirm
                      title="确定删除该商品吗?"
                      onConfirm={()=>this.delClick(record)}
                      okText="是"
                      cancelText="否"
                    >
                      <Button danger size='small'>删除</Button>
                    </Popconfirm>
                    <Button type="primary" ghost size='small' onClick={this.editClick.bind(this,record)} >
                      编辑
                    </Button>
                  </Space>
                  
                )} ></Column>
            </Table>
      </div>
    );
  }
  
}
// 把状态映射到props
function mapStateToProps(state) {
  return {
    dataSource: state.dataSource
  }
}

// 把dispatch映射到props
function mapDispatchToProps(dispatch) {
  return {
      del: (key) => dispatch({ type: 'DEL' , data : key})
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ProductList);