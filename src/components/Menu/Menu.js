import React from 'react';
import { Menu } from 'antd';
import {
    BarChartOutlined,
    TeamOutlined,
    UploadOutlined
  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
class Menus extends React.Component{
    render(){
        return(
            <div id='Menu'>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<BarChartOutlined />}>
                        <Link to='/home'>数据统计</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />}>
                        <Link to='/about'>关于我们</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to='/order'>订单管理</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UploadOutlined />}>
                        <Link to='/product'>商品管理</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
export default Menus