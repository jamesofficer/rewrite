
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


// =============================== //
// MERGED STUFF FROM SHIFT
// =============================== //

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

// The Shift Article creation application.
new Vue({
  store: store,
  render: h => h(App)
}).$mount('#shift')

// =============================== //
// FINISH MERGED STUFF
// =============================== //





/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });
