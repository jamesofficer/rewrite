<template>
    <div class="device-size-controls">
        <h6 class="shift-small-heading">Device Size</h6>

        <b-button-group size="sm">
            <b-button @click="setDeviceSize('sm')" :pressed="getDeviceSize === 'sm'" variant="secondary" v-b-tooltip.top="'Devices <576px wide'">
                Small
            </b-button>

            <b-button @click="setDeviceSize('md')" :pressed="getDeviceSize === 'md'" variant="secondary" v-b-tooltip.top="'Devices ≥576px wide'">
                Medium
            </b-button>

            <b-button @click="setDeviceSize('lg')" :pressed="getDeviceSize === 'lg'" variant="secondary" v-b-tooltip.top="'Devices ≥768px wide'">
                Large
            </b-button>

            <b-button @click="setDeviceSize('xl')" :pressed="getDeviceSize === 'xl'" variant="secondary" v-b-tooltip.top="'Devices ≥992px wide'">
                X Large
            </b-button>

            <b-button @click="setDeviceSize('fw')" :pressed="getDeviceSize === 'fw'" variant="secondary" v-b-tooltip.top="'Matches window width'">
                Full Width
            </b-button>
        </b-button-group>
    </div>
</template>

<script>
export default {
    name: "DeviceSizeControls",

    computed: {
        getDeviceSize() {
            return this.$store.getters.deviceSize;
        }
    },

    methods: {
        setDeviceSize(size) {
            this.$store.commit('setDeviceSize', size);
        }
    }
}
</script>

<style scoped>
.device-size-controls {
    margin-bottom: 20px;
}
</style>
