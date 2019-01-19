<template>
    <div>
        <top-bar-control icon="expand-arrows-alt" tooltip="Padding" id="padding-popover"></top-bar-control>

        <b-popover target="padding-popover" placement="bottom">
            <b-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input
                        type="number"
                        v-model.number="paddingTop"
                        :min="0" 
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('paddingTop')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input
                        type="number"
                        v-model.number="paddingBottom"
                        :min="0" 
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('paddingBottom')"
                    ></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input
                        type="number"
                        v-model.number="paddingLeft"
                        :min="0" 
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('paddingLeft')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input
                        type="number"
                        v-model.number="paddingRight"
                        :min="0" 
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('paddingRight')"
                    ></b-form-input>
                </b-col>
            </b-row>
        </b-popover>
    </div>
</template>

<script>
import TopBarControl from '../topbar/TopBarControl';
import NoEmptyValues from '../mixins/EnsureNoEmptyValues';

export default {
    name: "Padding",

    components: { TopBarControl },

    mixins: [NoEmptyValues],

    computed: {
        paddingTop: {
            get() {
                return this.$store.getters.getSelectedElement.padding.top;
            },
            set(amount) {
               this.$store.commit('setComponentSubProperty', {
                    property: 'padding',
                    subproperty: 'top',
                    value: amount,
                });
            }
        },

        paddingRight: {
            get() {
                return this.$store.getters.getSelectedElement.padding.right;
            },
            set(amount) {
               this.$store.commit('setComponentSubProperty', {
                    property: 'padding',
                    subproperty: 'right',
                    value: amount,
                });
            }
        },

        paddingBottom: {
            get() {
                return this.$store.getters.getSelectedElement.padding.bottom;
            },
            set(amount) {
               this.$store.commit('setComponentSubProperty', {
                    property: 'padding',
                    subproperty: 'bottom',
                    value: amount,
                });
            }
        },

        paddingLeft: {
            get() {
                return this.$store.getters.getSelectedElement.padding.left;
            },
            set(amount) {
               this.$store.commit('setComponentSubProperty', {
                    property: 'padding',
                    subproperty: 'left',
                    value: amount,
                });
            }
        },
    },
}
</script>

