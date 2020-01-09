// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //等于import Vue from "../node_modules/vue/dist/vue.js";
import App from './App'
import router from './router'//等效于import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false //生成环境下,避免不必要的提示
Vue.use(ElementUI) //使用elementUI插件
console.log("main")

//创建根实例
new Vue({
  el: '#app', //挂载元素为index.html内id为app的元素
  router,//通过router配置参数注入路由,相当于router: router,从而使整个应用具备路由功能
  components: {App}, //引入主组件
  template: '<App />'// 调用的主组件模板(模板替换挂载的元素),把app渲染挂载到页面
})
