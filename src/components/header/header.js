import React from  'react';
import { Badge, Dropdown, Menu, Avatar } from 'antd';
import {
    BellOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
  import './header.css';

class HeaderBar extends React.Component{

    toggle = () => {
        this.props.onToggle()
    };

    render(){
        const menu = (
            <Menu>
                <Menu.Item>退出</Menu.Item>
            </Menu>
        )
        const { collapsed } = this.props
        return(
            <div id='HeaderBar'>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
                })}
                <div class='header-right-box'>
                    <div style={{margin:'0 30px'}}>
                        <Badge count={5} size="small" >
                            <BellOutlined style={{fontSize: '20px'}} />
                        </Badge> 
                    </div>
                    <div>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Avatar size={42} src={process.env.PUBLIC_URL + '/images/avatar.png'} />
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderBar