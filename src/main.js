import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'//引入lib-flexible
import * as filters from './utils/filter'

import { Container, Main, Aside, Header, Menu, MenuItem, Input, Select, Option, Row, Col } from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.config.productionTip = false

// 注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
