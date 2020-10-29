import React from 'react';
import { Menu} from 'antd';
import routes from '../../router/router';
import { Link,withRouter } from 'react-router-dom';

// withRouter的作用：把不是通过路由切换过来的组件中，将react-router的history、location、match三个对象传入props对象上

class Menus extends React.Component{
    state = {
        selectedKeys:[]
    }
    render(){
        const path = this.props.location.pathname
        return(
            <div id='Menu'>
                <Menu theme="dark" mode="inline" selectedKeys={[path]} >
                    {routes.map((item,index) => {
                            return <Menu.Item key={item.path} icon={item.meta.icon}>
                                    <Link to={item.path}>{item.meta.title}</Link>
                                </Menu.Item>
                    }) }
                </Menu>
            </div>
        )
    }
}
export default withRouter(Menus)