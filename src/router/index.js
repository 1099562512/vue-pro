import Vue from 'vue'
import Router from 'vue-router'
import staticRoute from './staticRoute'

Vue.use(Router)

//处理NavigationDuplicated报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//创建返回一个Router实例
export default new Router({
	mode: "history",
  routes: staticRoute
})
