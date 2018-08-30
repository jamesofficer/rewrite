<template>
    <sidebar-control label="Background Colour">
        <div class="row">
            <b-col cols="9">
                <b-form-input type="color" v-model="backgroundColor"></b-form-input>
            </b-col>

            <b-col cols="3">
                <b-btn size="sm" variant="outline-secondary" @click="resetBackgroundColor">Reset</b-btn>
            </b-col>
        </div>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "BackgroundColor",

    components: { SidebarControl },

    computed: {
        backgroundColor: {
            get () {
                return this.$store.getters.getCurrentElement.backgroundColor;
            },
            set (color) {
                this.$store.commit('setBackgroundColor', color);
            }
        },
    },

    methods: {
        resetBackgroundColor() {
            this.$store.commit('setBackgroundColor', undefined);
        }
    }
}
</script>
