import Vue from 'vue'
import VueRouter from 'vue-router'
import addOrder from '../views/addOrder'
import orderList from '../views/orderList'
import changePwd from '../views/changePwd'
import needList from '../views/needList'

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
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router