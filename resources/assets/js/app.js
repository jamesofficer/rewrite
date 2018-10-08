import Vuex from "vuex";
import PortalVue from "portal-vue";
import BootstrapVue from "bootstrap-vue";
import Shift from "./Shift.vue";
import Icon from "vue-awesome/components/Icon";
import VueAutosize from "vue-autosize";
import './icons.js';

Vue.use(VueAutosize)
import { store } from "./store/index";
import "axios/dist/axios.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

require("./bootstrap");

window.Vue = require("vue");

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(PortalVue);
Vue.use(VueAutosize);
Vue.component("icon", Icon);

Vue.config.productionTip = false;

// The Shift Article creation application.
new Vue({
    store: store,
    render: h => h(Shift)
}).$mount("#shift");
