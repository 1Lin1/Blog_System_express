import Vue from 'vue'
import VueRouter from 'vue-router'

const LoginMenu = () => import('@/views/Login/LoginMenu');
const BlogProfileOperate = () => import('@/views/BlogProfileOperate/BlogProfileOperate');
const AsideNav = () => import('@/views/BlogProfileOperate/childCpn/AsideNav.vue');
const ListArticles =() => import('../views/BlogProfileOperate/childCpn/ListArticles');
const CreateArticles =() => import('../views/BlogProfileOperate/childCpn/CreateArticles');
const UpdateArticles =() => import('../views/BlogProfileOperate/childCpn/UpdateArticles');



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/loginmenu'
  },
  {
    path: '/loginmenu',
    name: 'LoginMenu',
    component: LoginMenu
  },
  

  {
    path: '/articles/listarticles',
    name: '内容管理',
    component: BlogProfileOperate,
    children:[
      {
        path: '/articles/listarticles',
        name: '文章列表',
        component: ListArticles,
        icon:'el-icon-tickets'
      },
      {
        path: '/articles/createarticles',
        name: '增加文章',
        component: CreateArticles,
        icon:'el-icon-document-add'
  
      },
      {
        path: '/articles/updatearticles/:id',
        component: UpdateArticles,
      },
    ]
  },
  
  
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
