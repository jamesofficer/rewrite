<template>
    <div class="device-size-controls">
        <h5 class="device-size-heading">Device Size</h5>

        <b-button-group size="md" class="device-size-btn-group">
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

            <!--<b-button @click="setDeviceSize('fw')" :pressed="getDeviceSize === 'fw'" variant="secondary" v-b-tooltip.top="'Matches window width'">-->
                <!--Full Width-->
            <!--</b-button>-->
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
.device-size-heading {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9em;
    color: #aaa;
    margin-left: 10px;
}

.device-size-controls {
    margin-left: 5px;
    margin-bottom: 5px;
}
</style>
