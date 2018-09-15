<template>
    <div>
        <top-bar-control icon="expand" tooltip="Margins" id="margin-popover"></top-bar-control>

        <b-popover target="margin-popover" placement="bottom">
            <b-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input type="number" v-model="marginTop" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input type="number" v-model="marginRight" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input type="number" v-model="marginBottom" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input type="number" v-model="marginLeft" :min="0" :max="500" size="sm"></b-form-input>
                </b-col>
            </b-row>
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from '../topbar/TopBarControl';

export default {
    name: "Margin",

    components: { TopBarControl },

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

