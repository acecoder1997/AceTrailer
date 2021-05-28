import Vue from 'vue'
import App from './App'
import Divider from './components/Divider/index.vue'
Vue.config.productionTip = false

App.mpType = 'app'

Vue.component('Divider', Divider)

const app = new Vue({
	...App
})
app.$mount()
