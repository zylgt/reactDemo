import Loadable from 'react-loadable'
import React from 'react'

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
const About =Loadable({
    loading:Loading,
    loader:() => import('../page/about/about')
})


const routes=[
    {
        path:'/',
        component:Home,
        exact:true
    },{
        path:'/home',
        component:Home,
        name:'home',
        meta:{
            title:'数据统计',
            icon:'BarChartOutlined'
        }
    },{
        path:'/order',
        component:Order,
        name:'order',
        meta:{
            title:'订单管理',
            icon:'UploadOutlined'
        }
    },{
        path:'/product',
        component:Product,
        name:'product',
        meta:{
            title:'商品管理',
            icon:'BarChartOutlined'
        }
    },{
        path:'/about',
        component:About,
        name:'about',
        meta:{
            title:'关于我们',
            icon:'TeamOutlined'
        }
    }
]

export default routes