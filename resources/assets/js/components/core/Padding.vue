<template>
    <div>
        <sidebar-control label="Padding" double>
            <template slot="first">
                <label class="sub-label">Top</label>
                <el-input-number v-model="paddingTop" :min="0" :max="1000" size="mini"></el-input-number>
            </template>

            <template slot="second">
                <label class="sub-label">Right</label>
                <el-input-number v-model="paddingRight" :min="0" :max="1000" size="mini"></el-input-number>
            </template>
        </sidebar-control>

        <sidebar-control double>
            <template slot="first">
                <label class="sub-label">Bottom</label>
                <el-input-number v-model="paddingBottom" :min="0" :max="1000" size="mini"></el-input-number>
            </template>

            <template slot="second">
                <label class="sub-label">Left</label>
                <el-input-number v-model="paddingLeft" :min="0" :max="1000" size="mini"></el-input-number>
            </template>
        </sidebar-control>
    </div>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl';

export default {
    name: "Padding",

    components: { SidebarControl },

    computed: {
        paddingTop: {
            get() {
                return this.$store.getters.getCurrentElement.padding.top;
            },
            set(amount) {
                this.$store.commit('setPaddingTop', amount);
            }
        },

        paddingRight: {
            get() {
                return this.$store.getters.getCurrentElement.padding.right;
            },
            set(amount) {
                this.$store.commit('setPaddingRight', amount);
            }
        },

        paddingBottom: {
            get() {
                return this.$store.getters.getCurrentElement.padding.bottom;
            },
            set(amount) {
                this.$store.commit('setPaddingBottom', amount);
            }
        },

        paddingLeft: {
            get() {
                return this.$store.getters.getCurrentElement.padding.left;
            },
            set(amount) {
                this.$store.commit('setPaddingLeft', amount);
            }
        },
    },
}
</script>

