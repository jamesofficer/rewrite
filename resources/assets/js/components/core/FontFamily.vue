<template>
    <div>
        <b-dropdown :text="selectedFont" size="sm" variant="outline-primary" style="margin-right: 5px">
            <b-dropdown-item v-for="(font, index) in fonts" :key="index" @click="selectFont(font)">
                <span :style="'font-family: ' + font.name">{{ font.name }}</span>
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
import FontList from '../mixins/FontList'

export default {
    name: "FontFamily",

    mixins: [FontList],

    computed: {
        selectedFont() {
            return this.$store.getters.getCurrentElement.fontFamily;
        }
    },

    methods: {
        selectFont(font) {
            this.$store.commit('setComponentProperty', { property: 'fontFamily', value: font.name });
            this.$store.commit('setComponentProperty', { property: 'fontWeights', value: font.weights });
            this.$store.commit('setComponentProperty', { property: 'fontWeight', value: font.weights[
                Math.floor(font.weights.length / 2)  // select the 'middle' font weight.
            ]});

            this.$store.commit('addFontToFontsUsed', {
                name: font.name,
                weights: font.weights,
            });

            this.appendStylesheetToHead(font.name);
        },

        /**
         * When selecting a custom font, we need to put it's stylesheet in the head to render the font properly.
         * 
         */
        appendStylesheetToHead(font) {
            font = font.replace(/\s/g, '+');

            let head = document.head;
            let link = document.createElement('link');

            link.type = 'text/css';
            link.rel  = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css?family=' + font + ':100,200,300,400,500,600,700,800,900';

            head.appendChild(link);
        }
    },
}
</script>
