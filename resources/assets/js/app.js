import Vuex from "vuex";
import PortalVue from "portal-vue";
import BootstrapVue from "bootstrap-vue";
import Shift from "./Shift.vue";
import Icon from "vue-awesome/components/Icon";
import { store } from "./store/index";
import "axios/dist/axios.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Icon Imports
// https://fontawesome.com/icons?d=gallery
import "vue-awesome/icons/palette";
import "vue-awesome/icons/columns";
import "vue-awesome/icons/sitemap";
import "vue-awesome/icons/align-left";
import "vue-awesome/icons/align-center";
import "vue-awesome/icons/align-right";
import "vue-awesome/icons/align-justify";
import "vue-awesome/icons/times";
import "vue-awesome/icons/times-circle";
import "vue-awesome/icons/minus";
import "vue-awesome/icons/plus";
import "vue-awesome/icons/plus-circle";
import "vue-awesome/icons/trash-alt";
import "vue-awesome/icons/arrow-up";
import "vue-awesome/icons/arrow-down";
import "vue-awesome/icons/eye";
import "vue-awesome/icons/save";
import "vue-awesome/icons/folder-open";

require("./bootstrap");

window.Vue = require("vue");

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(PortalVue);
Vue.component("icon", Icon);

Vue.config.productionTip = false;

// The Shift Article creation application.
new Vue({
    store: store,
    render: h => h(Shift)
}).$mount("#shift");
