import Vue from 'vue';
import Vuex from 'vuex';

// Element UI
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';

// Portal Vue
import PortalVue from 'portal-vue';

// Custom Imports
import App from './App.vue';
import { store } from './store/index';

Vue.use(Vuex);
Vue.use(ElementUI, { locale });
Vue.use(PortalVue);

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')