import React from  'react';
import { Route, Switch, } from 'react-router-dom'
import routes from '../../router/router';

class MainCotents extends React.Component{

    render(){
        return(
            <Switch>
                {routes.map((item,index) => {
                    return <Route 
                            path={item.path} 
                            key={index}
                            exact={item.exact}
                            render={props=>{
                                if(item.children){
                                    return <item.component {...props}  routes={item.children} />
                                }else{
                                    return <item.component {...props} />
                                }
                            }}
                            ></Route>
                })}
            </Switch>
        )
    }
}

export default MainCotents