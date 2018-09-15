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
import "vue-awesome/icons/bars";
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
import "vue-awesome/icons/file-export";
import "vue-awesome/icons/image";
import "vue-awesome/icons/images";
import "vue-awesome/icons/heading";
import "vue-awesome/icons/paragraph";
import "vue-awesome/icons/quote-right";
import "vue-awesome/icons/fill";
import "vue-awesome/icons/expand";
import "vue-awesome/icons/expand-arrows-alt";
import "vue-awesome/icons/paint-roller";
import "vue-awesome/icons/brands/instagram";
import "vue-awesome/icons/brands/facebook";
import "vue-awesome/icons/brands/youtube";

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
