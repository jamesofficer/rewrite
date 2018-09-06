<template>

        <div>
        <sidebar-control label="SetBorder">
            <b-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input type="number" v-model="borderTop" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input type="number" v-model="borderRight" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input type="number" v-model="borderBottom" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input type="number" v-model="borderLeft" :min="0" :max="10" size="sm"></b-form-input>
                </b-col>
            </b-row>
        </sidebar-control>
    </div>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "SetBorder",

    components: { SidebarControl },

    computed: {
        borderTop: {
            get() {
                return this.$store.getters.getCurrentElement.border.top;
            },
            set(amount) {
                this.$store.commit('setBorderTop', amount);
            }
        },

        borderRight: {
            get() {
                return this.$store.getters.getCurrentElement.border.right;
            },
            set(amount) {
                this.$store.commit('setBorderRight', amount);
            }
        },

        borderBottom: {
            get() {
                return this.$store.getters.getCurrentElement.border.bottom;
            },
            set(amount) {
                this.$store.commit('setBorderBottom', amount);
            }
        },

        borderLeft: {
            get() {
                return this.$store.getters.getCurrentElement.padding.left;
            },
            set(amount) {
                this.$store.commit('setBorderLeft', amount);
            }
        },
    },
}
</script>

