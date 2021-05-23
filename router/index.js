import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import FooterGuide from '../components/FooterGuide/FooterGuide.vue'
import MSite from '../views/MSite/MSite.vue'
import Order from '../views/Order/Order.vue'
import Search from '../views/Search/Search.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: MSite,
    redirect:'/MSite'
  },
  {
    path: '/MSite',
    name: 'MSite',
    component: MSite,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    
  },

]

const router = new VueRouter({
  routes
})

export default router
