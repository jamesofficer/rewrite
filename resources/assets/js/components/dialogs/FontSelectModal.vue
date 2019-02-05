<template>
    <b-modal :id="'fontSelectModal'" title="Select Font" size="lg" ref="fontSelectModal" hide-footer lazy>

        <b-row>
            <!-- Sans Serif -->
            <b-col>
                <h5 class="text-center">Sans Serif</h5>

                <b-list-group class="font-list-group">
                    <b-list-group-item
                        class="font-list-item text-center"
                        v-for="(font, index) in fonts.sans"
                        :key="index"
                        @click="selectFont(font)"
                    >
                        <span :style="'font-family: ' + font.name">
                            {{ font.name }}
                        </span>
                    </b-list-group-item>
                </b-list-group>
            </b-col>

            <!-- Serif -->
            <b-col>
                <h5 class="text-center">Serif</h5>

                <b-list-group class="font-list-group">
                    <b-list-group-item
                        class="font-list-item text-center"
                        v-for="(font, index) in fonts.serif"
                        :key="index"
                        @click="selectFont(font)"
                    >
                        <span :style="'font-family: ' + font.name">
                            {{ font.name }}
                        </span>
                    </b-list-group-item>
                </b-list-group>
            </b-col>

            <!-- Handwritten -->
            <b-col>
                <h5 class="text-center">Handwritten</h5>

                <b-list-group class="font-list-group">
                    <b-list-group-item
                        class="font-list-item text-center"
                        v-for="(font, index) in fonts.handwritten"
                        :key="index"
                        @click="selectFont(font)"
                    >
                        <span :style="'font-family: ' + font.name">
                            {{ font.name }}
                        </span>
                    </b-list-group-item>
                </b-list-group>
            </b-col>

            <!-- Monospaced -->
            <b-col>
                <h5 class="text-center">Monospaced</h5>

                <b-list-group class="font-list-group">
                    <b-list-group-item
                        class="font-list-item text-center"
                        v-for="(font, index) in fonts.monospaced"
                        :key="index"
                        @click="selectFont(font)"
                    >
                        <span :style="'font-family: ' + font.name">
                            {{ font.name }}
                        </span>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>

    </b-modal>
</template>

<script>
import FontList from '../mixins/FontList'

export default {
    name: "FontSelectModal",

    mixins: [FontList],

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
            this.$refs.fontSelectModal.hide();
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
    }
}
</script>

<style scoped>
.font-list-group {
    max-height: 500px;
    overflow-y: auto;
}

.font-list-item {
    cursor: pointer;
}

.font-list-item:hover {
    background: #eee;
}
</style>
