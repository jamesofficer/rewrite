import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import App from './App.vue';
import { store } from './store/index';
import PortalVue from 'portal-vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(PortalVue);

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')