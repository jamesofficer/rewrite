<template>
    <div class="device-size-controls">
        <div class="sidebar-control">
            <b-button @click="setDeviceSize('sm')" :pressed="getDeviceSize === 'sm'" variant="success" v-b-tooltip.hover.right="'Devices <576px wide'">
                SM
            </b-button>
        </div>

        <div class="sidebar-control">
            <b-button @click="setDeviceSize('md')" :pressed="getDeviceSize === 'md'" variant="success" v-b-tooltip.hover.right="'Devices ≥576px wide'">
                MD
            </b-button>
        </div>

        <div class="sidebar-control">
            <b-button @click="setDeviceSize('lg')" :pressed="getDeviceSize === 'lg'" variant="success" v-b-tooltip.hover.right="'Devices ≥768px wide'">
                LG
            </b-button>
        </div>

        <div class="sidebar-control">
            <b-button @click="setDeviceSize('xl')" :pressed="getDeviceSize === 'xl'" variant="success" v-b-tooltip.hover.right="'Devices ≥992px wide'">
                XL
            </b-button>
        </div>
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