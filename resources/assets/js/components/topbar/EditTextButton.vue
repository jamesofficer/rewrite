<template>
    <div class="sidebar-control">
        <top-bar-control v-b-modal.editTextModal variant="outline-success" icon="font" tooltip="Edit Text"></top-bar-control>
    </div>
</template>

<script>
import EditTextModal from '../dialogs/EditTextModal'
import TopBarControl from './TopBarControl';

export default {
    name: "EditTextButton",

    components: {
        EditTextModal, TopBarControl,
    },
}
</script>

