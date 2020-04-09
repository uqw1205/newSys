import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/addOrder',
		name: 'addOrder',
		component: () => import('../views/addOrder'),
	},
	{
		path: '/orderList',
		name: 'orderList',
		component: () => import('../views/orderList'),
	},
	{
		path: '/changePwd',
		name: 'changePwd',
		component: () => import('../views/changePwd'),
	},
	{
		path: '/needList',
		name: 'needList',
		component: () => import('../views/needList'),
	},
	{
		path: '/showFaq/:id',
		name: 'showFaq',
		component: () => import('../views/showFaq'),
	},
    {
      path: '*',
      redirect (to) {
        if(to.path === '/') {
          return '/orderList';
        } else {
          return '/';
        }
      }
    }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router