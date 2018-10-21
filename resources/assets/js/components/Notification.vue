<template>
    <b-row class="session-alert-message">
        <b-col>
            <b-alert :variant="notification.type" dismissible fade :show="notification.dismissCountDown" @dismissed="notification.dismissCountDown = 0" @dismiss-count-down="dismissCountDown">
                <p>{{ notification.message }}</p>

                <b-progress :variant="notification.type"
                            :max="notification.dismissSecs"
                            :value="notification.dismissCountDown"
                            height="4px"
                ></b-progress>
            </b-alert>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "Notification",

    computed: {
        notification() {
            return this.$store.getters.notification;
        },
    },

    methods: {
        dismissCountDown(dismissCountDown) {
            this.$store.commit('setNotificationCountDown', dismissCountDown);
        },
    }
}
</script>

<style>
.session-alert-message {
    margin-top: 15px;
}
</style>
