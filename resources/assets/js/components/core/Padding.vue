<template>
    <div>
        <sidebar-control label="Padding">
            <b-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input type="number" v-model="paddingTop" :min="0" :max="1000" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input type="number" v-model="paddingRight" :min="0" :max="1000" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input type="number" v-model="paddingBottom" :min="0" :max="1000" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input type="number" v-model="paddingLeft" :min="0" :max="1000" size="sm"></b-form-input>
                </b-col>
            </b-row>
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

