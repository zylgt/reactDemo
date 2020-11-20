
## 运行项目
    npm install

    npm start

    npm build (打包)


### 项目布局
├── public                                      // 公共资源文件，不会被打包
├── src                                         // 源码目录
│   ├── components                              // 公共组件
│   │   ├── chart                               
│   │   │   ├── bar.js                          // 柱状图
│   │   │   ├── line.js                         // 折线图
│   │   │   ├── map.js                          // 地图
│   │   │   ├── pie.js                          // 饼图
│   │   ├── header
│   │   │   ├── header.css                      // 头部组件样式
│   │   │   └── header.js                       // 头部公共组件
│   │   ├── mainContent
│   │   │   └── mainContent.js                  // 页面内容组件
│   │   └──Menu
│   │       └── Menu.js                         // 左侧菜单组件
│   ├── page
│   │   ├── about
│   │   │   └── about.js                        // 关于我们
│   │   ├── home
│   │   │   └──home.js                          // 首页
│   │   ├── order
│   │   │   └── order.js                        // 订单列表
│   │   ├── product
│   │   │   ├── addProduct.js                   // 添加商品
│   │   │   ├── edit.js                         // 编辑商品
│   │   │   ├── product.js                      // 容器组件
│   │   │   └── productList.js                  // 商品列表
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── store                                   // redux的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── actionType.js                       // 定义常量 action名
│   │   ├── reducers.js                         // 根据action实现操作
│   │   └──  store.js                           // 引用reducer，创建store
│   ├── App.js                                  // 程序入口文件，加载各种公共组件
│   ├── index.js                                // 页面入口文件