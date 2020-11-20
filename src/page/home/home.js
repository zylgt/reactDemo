import React from 'react';
import {Card,Col,Row} from 'antd';
import Line from '../../components/chart/line';
import Pie from '../../components/chart/pie';
import Bar from '../../components/chart/bar';
import Map from '../../components/chart/map';


class Home extends React.Component {


  render() {
    return (
      <div id='Home'>
        <Row gutter={[{xs:8,sm:16,md:24,lg:32},{xs:8,sm:16,md:24,lg:32}]}>
          <Col span={6}>
            <Card title='订单数量'>1000</Card>
          </Col>
          <Col span={6}><Card title='待发货'>200</Card></Col>
          <Col span={6}><Card title='已发货'>300</Card></Col>
          <Col span={6}><Card title='已完成'>400</Card></Col>
          <Col span={12}>
            <Card title='未来一周气温变化' bordered={false}>
              <Line></Line>
            </Card>
          </Col>
          <Col span={12}>
            <Card  title='用户访问来源' bordered={false}>
             <Pie></Pie>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='用户访问数据' bordered={false}>
              <Bar></Bar>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='用户地理分布' bordered={false}>
              <Map></Map>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;