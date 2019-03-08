import Vue from 'vue'
import Router from 'vue-router'


import  HmIndex from '../pages/HmIndex'
import  HmClassify from '../pages/HmClassify'
import  HmCommunity from '../pages/HmCommunity'
import  HmCarts from '../pages/HmCarts'
import  HmMine from '../pages/HmMine'
import  ClassList from "../pages/ClassList";
import  HmGoodsDetails from "../pages/HmGoodsDetails";
// 二级路由
import ClassFruits from "../pages/HmClassList/ClassFruits";
import ClassVeg from "../pages/HmClassList/ClassVeg";
import ClassMeat from "../pages/HmClassList/ClassMeat";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: HmIndex,redirect:'/HmIndex'},
    {path: '/HmIndex',name:"HmIndex", component: HmIndex},
    {path: '/HmClassify',name:"HmClassify", component: HmClassify},


    { path:"/Classlist/:id",
      name:"classlist",
      component:ClassList,
      children:[
        { path:"/Classlist/ClassFruits", name:"ClassFruits", component:ClassFruits},
        { path:"/Classlist/ClassVeg", name:"ClassVeg", component:ClassVeg},
        { path:"/Classlist/ClassMeat", name:"ClassMeat", component:ClassMeat}

      ]

    },


    {path: '/HmCommunity',name:"HmCommunity", component: HmCommunity},
    {path: '/HmCarts',name:"HmCarts", component: HmCarts},

    //路由传参
    {path:"/HmGoodsDetails",component:HmGoodsDetails},
    {path:"/HmGoodsDetails/:goods",name:"HmGoodsDetails",component:HmGoodsDetails},

    {path: '/HmMine',name:"HmMine", component: HmMine},

  ]
})
