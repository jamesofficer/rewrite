<template>
    <div class="sidebar-control">
        <top-bar-control icon="expand" tooltip="Margins" id="margin-popover"></top-bar-control>

        <b-popover target="margin-popover" placement="right">
            <b-row>
                <b-col>
                    <label class="sub-label">Top</label>
                    <b-form-input
                        type="number"
                        v-model.number="marginTop"
                        :min="0"
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('marginTop')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Bottom</label>
                    <b-form-input
                        type="number"
                        v-model.number="marginBottom"
                        :min="0"
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('marginBottom')"
                    ></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <label class="sub-label">Left</label>
                    <b-form-input
                        type="number"
                        v-model.number="marginLeft"
                        :min="0"
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('marginLeft')"
                    ></b-form-input>
                </b-col>

                <b-col>
                    <label class="sub-label">Right</label>
                    <b-form-input
                        type="number"
                        v-model.number="marginRight"
                        :min="0"
                        :max="500"
                        size="sm"
                        @focusout.native="ensureValueIsNotEmpty('marginRight')"
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
    name: "Margin",

    components: { TopBarControl },

    mixins: [NoEmptyValues],

    computed: {
        marginTop: {
            get() {
                return this.$store.getters.getSelectedElement.margin.top;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'margin',
                    subproperty: 'top',
                    value: amount,
                });
            }
        },

        marginRight: {
            get() {
                return this.$store.getters.getSelectedElement.margin.right;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'margin',
                    subproperty: 'right',
                    value: amount,
                });
            }
        },

        marginBottom: {
            get() {
                return this.$store.getters.getSelectedElement.margin.bottom;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'margin',
                    subproperty: 'bottom',
                    value: amount,
                });
            }
        },

        marginLeft: {
            get() {
                return this.$store.getters.getSelectedElement.margin.left;
            },
            set(amount) {
                this.$store.commit('setComponentSubProperty', {
                    property: 'margin',
                    subproperty: 'left',
                    value: amount,
                });
            }
        },
    },
}
</script>

