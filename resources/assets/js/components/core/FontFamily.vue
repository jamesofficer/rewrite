<template>
    <b-form-select
            v-model="selectedFont"
            :options="fontList"
            v-b-tooltip.hover
            title="Font Family"
            size="sm"
            class="top-bar-input"
    ></b-form-select>
</template>

<script>
import FontList from '../mixins/FontList'

export default {
    name: "FontFamily",

    mixins: [FontList],

    computed: {
        selectedFont: {
            get() {
                return this.$store.getters.getCurrentElement.fontFamily;
            },
            set(fontName) {
                const font = this.fonts.filter(font => {
                    return font.name === fontName;
                })[0];

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
            }
        }
    },

    methods: {
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