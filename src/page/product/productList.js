import React from 'react';
import { Table, Row, Col, Button, Popconfirm, Space, Image, Input } from 'antd';

class ProductList extends React.Component {
  state={
    dataSource:[
      {
        key: '1',
        type:'BPM1',
        name:'5907',
        specs:'1',
        money:'199',
        stock:'999',
        date:'2020-08-09',
        lot:'202008090056',
        img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
      },
      {
        key: '2',
        type:'BPM2',
        name:'5907',
        specs:'1',
        money:'199',
        stock:'999',
        date:'2020-08-09',
        lot:'202008090056',
        img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
      },
      {
        key: '3',
        type:'BPM3',
        name:'5907',
        specs:'1',
        money:'199',
        stock:'999',
        date:'2020-08-09',
        lot:'202008090056',
        img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
      },
      {
        key: '4',
        type:'BPM4',
        name:'5907',
        specs:'1',
        money:'199',
        stock:'999',
        date:'2020-08-09',
        lot:'202008090056',
        img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
      },
      {
        key: '5',
        type:'BPM5',
        name:'5907',
        specs:'1',
        money:'199',
        stock:'999',
        date:'2020-08-09',
        lot:'202008090056',
        img:'https://cnbj2.fds.api.xiaomi.com/webfiles/detail-img416071590370824.jpeg'
      }
    ]
  }
  render() {
    const { Column } = Table;
    const dataSource = this.state.dataSource
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
           <Table dataSource={dataSource} bordered >
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
                    <Button type="primary" ghost size='small' >编辑</Button>
                  </Space>
                  
                )} ></Column>
            </Table>
      </div>
    );
  }
}

export default ProductList;