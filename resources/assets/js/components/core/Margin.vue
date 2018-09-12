<template>
    <div>
        <sidebar-control label="Margin">
            <b-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input type="number" v-model="marginTop" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input type="number" v-model="marginRight" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input type="number" v-model="marginBottom" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input type="number" v-model="marginLeft" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>
            </b-row>
        </sidebar-control>
    </div>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl';

export default {
    name: "Margin",

    components: { SidebarControl },

    computed: {
        marginTop: {
            get() {
                return this.$store.getters.getCurrentElement.margin.top;
            },
            set(amount) {
                this.$store.commit('setMarginTop', amount);
            }
        },

        marginRight: {
            get() {
                return this.$store.getters.getCurrentElement.margin.right;
            },
            set(amount) {
                this.$store.commit('setMarginRight', amount);
            }
        },

        marginBottom: {
            get() {
                return this.$store.getters.getCurrentElement.margin.bottom;
            },
            set(amount) {
                this.$store.commit('setMarginBottom', amount);
            }
        },

        marginLeft: {
            get() {
                return this.$store.getters.getCurrentElement.margin.left;
            },
            set(amount) {
                this.$store.commit('setMarginLeft', amount);
            }
        },
    },
}
</script>

