import React from 'react';
import { Route } from "react-router-dom";

class Product extends React.Component {


  render() {
    return (
      <div id='Product'>
        {
            this.props.routes.map((item,index) => {
                    return <Route 
                            path={item.path} 
                            key={index}
                            exact
                            render={props=>{
                              return <item.component {...props} />
                            }}
                            ></Route>
                })}
      </div>
    );
  }
}

export default Product;