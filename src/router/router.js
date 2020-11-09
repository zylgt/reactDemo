import Loadable from 'react-loadable'
import React from 'react'
import {
    BarChartOutlined,UploadOutlined,TeamOutlined
  } from '@ant-design/icons';

const Loading = () => {
    return <div>loading...</div>
}

const Home =Loadable({
    loading:Loading,
    loader:() => import('../page/home/home')
})
const Order =Loadable({
    loading:Loading,
    loader:() => import('../page/order/order')
})
const Product =Loadable({
    loading:Loading,
    loader:() => import('../page/product/product')
})
const Edit =Loadable({
    loading:Loading,
    loader:() => import('../page/product/edit')
})
const ProduceList =Loadable({
    loading:Loading,
    loader:() => import('../page/product/productList')
})
const About =Loadable({
    loading:Loading,
    loader:() => import('../page/about/about')
})

const routes=[
    {
        path:'/',
        component:Home,
        exact:true,
        meta:{
            title:'',
            icon:''
        }
    },{
        path:'/home',
        component:Home,
        name:'home',
        exact:true,
        meta:{
            title:'数据统计',
            icon:<BarChartOutlined/>
        }
    },{
        path:'/order',
        component:Order,
        name:'order',
        exact:true,
        meta:{
            title:'订单管理',
            icon:<UploadOutlined/>
        }
    },{
        path:'/product',
        component:Product,
        name:'product',
        exact:false,
        meta:{
            title:'商品管理',
            icon:<BarChartOutlined/>
        },
        children:[
            {
                path:'/product/edit',
                component:Edit,
                name:'edit',
                meta:{
                    title:'添加商品'
                }
            },
            {
                path:'/product/productList',
                component:ProduceList,
                name:'productList',
                meta:{
                    title:'商品列表'
                }
            }
        ]
    },{
        path:'/about',
        component:About,
        name:'about',
        exact:true,
        meta:{
            title:'关于我们',
            icon:<TeamOutlined/>
        }
    }
]

export default routes