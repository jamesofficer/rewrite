<template>
    <div class="sidebar-control">
        <sidebar-control v-b-modal.editTextModal variant="outline-success" icon="font" tooltip="Edit Text"></sidebar-control>
    </div>
</template>

<script>
import EditTextModal from '../dialogs/EditTextModal'
import SidebarControl from './SidebarControl';

export default {
    name: "EditTextButton",

    components: {
        EditTextModal, SidebarControl,
    },
}
</script>

