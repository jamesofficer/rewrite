<template>
    <sidebar-control label="Image Source">
        <input type="file" name="pic" accept="image/*" @change="changeImage">
    </sidebar-control>
</template>

<script>
import SidebarControl  from '../sidebar/SidebarControl'

export default {
    name: "ImageSource",

    components: { SidebarControl },

    methods: {
        changeImage(e) {
            let files = e.target.files || e.dataTransfer.files;

            if (files.length === 0)
                return;

            this.createImage(files[0]);
        },

        createImage(file) {
            let image  = new Image();
            let reader = new FileReader();

            reader.onload = (e) => {
                this.$store.commit('setImageSource', e.target.result);
            };

            reader.readAsDataURL(file);
        },
    }
}
</script>
