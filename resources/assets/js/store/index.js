import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import colorpicker from './modules/color-picker'

window.Vue = Vue;

export const store = new Vuex.Store({
    modules: {
        colorpicker,
    },
    state,
    getters,
    mutations,
    actions,
});
