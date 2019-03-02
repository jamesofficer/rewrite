<template>
    <div class="topbar-button">
        <label class="style-panel-label">Gradient</label>

        <b-button v-b-modal.backgroundGradientModal variant="primary" tooltip="Select Image">
            <icon name="brush"></icon>
        </b-button>
    </div>
</template>

<script>
import TopbarButton from "../topbar/TopbarButton";

export default {
    name: "BackgroundGradient",

    components: { TopbarButton },
};
</script>