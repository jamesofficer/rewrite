<template>
    <div class="topbar-button">
        <topbar-button
            v-b-modal.editTextModal
            variant="primary"
            icon="paragraph"
            tooltip="Edit Text"
        ></topbar-button>
    </div>
</template>

<script>
import EditTextModal from '../dialogs/EditTextModal'
import TopbarButton from './TopbarButton';

export default {
    name: "EditTextButton",

    components: {
        EditTextModal, TopbarButton,
    },
}
</script>

