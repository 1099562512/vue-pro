import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/layout/index'

Vue.use(Router)

export default new Router({
	mode: "hash",
   routes: [
		{
		   path: '/',
		   component: index
		},
   ]
})
