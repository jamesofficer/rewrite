<template>
    <div class="device-size-controls">
        <b-button-group class="device-size-btn-group">
            <b-button @click="setDeviceSize('sm')" :pressed="getDeviceSize === 'sm'" variant="success" v-b-tooltip.top="'Devices <576px wide'">
                Small
            </b-button>

            <b-button @click="setDeviceSize('md')" :pressed="getDeviceSize === 'md'" variant="success" v-b-tooltip.top="'Devices ≥576px wide'">
                Medium
            </b-button>

            <b-button @click="setDeviceSize('lg')" :pressed="getDeviceSize === 'lg'" variant="success" v-b-tooltip.top="'Devices ≥768px wide'">
                Large
            </b-button>

            <b-button @click="setDeviceSize('xl')" :pressed="getDeviceSize === 'xl'" variant="success" v-b-tooltip.top="'Devices ≥992px wide'">
                X Large
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
    position: fixed;
    bottom: 5px;
    right: 5px;
}
</style>
