<template>
    <div style="display: inline-block">
        <div class="topbar-button">
            <b-button
                @click="setDeviceSize('sm')"
                :pressed="getDeviceSize === 'sm'"
                v-b-tooltip.bottom="'Mobiles'"
            >
                <icon name="mobile-alt"></icon>
            </b-button>
        </div>

        <div class="topbar-button">
            <b-button
                @click="setDeviceSize('md')"
                :pressed="getDeviceSize === 'md'"
                v-b-tooltip.bottom="'Tablets'"
            >
                <icon name="tablet-alt"></icon>
            </b-button>
        </div>

        <div class="topbar-button">
            <b-button
                @click="setDeviceSize('lg')"
                :pressed="getDeviceSize === 'lg'"
                v-b-tooltip.bottom="'Laptops'"
            >
                <icon name="laptop"></icon>
            </b-button>
        </div>

        <div class="topbar-button">
            <b-button
                @click="setDeviceSize('xl')"
                :pressed="getDeviceSize === 'xl'"
                v-b-tooltip.bottom="'Desktops'"
            >
                <icon name="desktop"></icon>
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