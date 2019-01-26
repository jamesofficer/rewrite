<template>
    <div>
        <div class="sidebar-control">
            <b-button @click="setDeviceSize('sm')" :pressed="getDeviceSize === 'sm'" variant="primary" v-b-tooltip.right="'Mobiles'">
                <icon name="mobile-alt"></icon>
            </b-button>
        </div>

        <div class="sidebar-control">
            <b-button @click="setDeviceSize('md')" :pressed="getDeviceSize === 'md'" variant="primary" v-b-tooltip.right="'Tablets'">
                <icon name="tablet-alt"></icon>
            </b-button>
        </div>

        <div class="sidebar-control">
            <b-button @click="setDeviceSize('lg')" :pressed="getDeviceSize === 'lg'" variant="primary" v-b-tooltip.right="'Laptops'">
                <icon name="laptop"></icon>
            </b-button>
        </div>

        <div class="sidebar-control">
            <b-button @click="setDeviceSize('xl')" :pressed="getDeviceSize === 'xl'" variant="primary" v-b-tooltip.right="'Desktops'">
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