import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import  Login  from  '../pages/Login/Login.vue'
const originalPush = Router.prototype.push;
Router.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect:  '/msite'   //使得初始显示msite路由
    },
    {
      path: '/msite',
      name: '',
      component:Msite   
    },
    {
      path: '/order',
      name: '',
      component:Order 
    },
    {
      path: '/profile',
      name: '',
      component:Profile 
    },
    {
      path: '/search',
      name: '',
      component:Search
    },
    {
      path: '/login',
      name: '',
      component:Login,
      meta:  {
        showFooter:  true
        }  
    }
  ]
})
