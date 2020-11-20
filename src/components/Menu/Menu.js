import React from 'react';
import { Menu} from 'antd';
import routes from '../../router/router';
import { Link,withRouter } from 'react-router-dom';

// withRouter的作用：把不是通过路由切换过来的组件中，将react-router的history、location、match三个对象传入props对象上
const { SubMenu } = Menu;
class Menus extends React.Component{
    renderMenuItem = (item) => {
        if(item.isShow){
            return(
                <Menu.Item key={item.path} icon={item.meta.icon}>
                    <Link to={item.path}>{item.meta.title}</Link>
                </Menu.Item>
            )
        }
    }
    renderSubMenuItem = (item) => {
        if(item.isShow){
            return(
                <SubMenu  key={item.path} icon={item.meta.icon} title={item.meta.title} path={item.path}  >
                    {
                        item.children.map((item,indexs) => {
                            return  item.children && item.children.length > 0 ? this.renderSubMenuItem(item) : this.renderMenuItem(item)
                        })
                    }
                </SubMenu>
            )
        }
    }
    render(){
        const path = this.props.location.pathname
        return(
            <div id='Menu'>
                <Menu theme="dark" mode="inline" selectedKeys={[path]}  >
                    {routes.map((item,index) => {
                        return item.children && item.children.length > 0 ? this.renderSubMenuItem(item) : this.renderMenuItem(item)
                    }) }
                </Menu>
            </div>
        )
    }
}
export default withRouter(Menus)