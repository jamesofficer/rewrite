<template>
    <sidebar-control label="Font Weight and Size" double>
        <template slot="first">
            <b-form-select size="sm" v-model="fontWeight" :options="fontSizes"></b-form-select>
        </template>

        <template slot="second">
            <b-form-input size="sm" type="number" v-model="fontSize" :min="10" :max="64"></b-form-input>
        </template>
    </sidebar-control>
</template>

<script>
import SidebarControl from '../sidebar/SidebarControl'

export default {
    name: "FontWeightAndSize",

    components: { SidebarControl },

    computed: {
        fontWeight: {
            get () {
                return this.$store.getters.getCurrentElement.fontWeight;
            },
            set (weight) {
                this.$store.commit('setFontWeight', weight);
            }
        },

        fontSize: {
            get () {
                return this.$store.getters.getCurrentElement.fontSize;
            },
            set (size) {
                this.$store.commit('setFontSize', size);
            }
        },
    },

    data() {
        return {
            fontSizes: [
            {
                text: 'Lightest',
                value: 100,
            },
            {
                text: 'Light',
                value: 300,
            },
            {
                text: 'Normal',
                value: 500,
            },
            {
                text: 'Bold',
                value: 700,
            },
            {
                text: 'Boldest',
                value: 900,
            },
            ]
        }
    }
}
</script>
