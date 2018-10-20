<template>
    <b-modal @hidden="setComponentBackgroundGradient" :id="'backgroundGradientModal'" title="Background Gradient" size="lg" ref="backgroundGradientModal" hide-footer lazy>

        <b-row>
            <b-col>
                <h6>Gradient Style</h6>
                <b-form-select size="sm" v-model="gradientStyle" :options="gradientStyles"></b-form-select>
            </b-col>

            <b-col v-if="gradientStyle === 'linear'">
                <h6>Gradient Position</h6>
                <b-form-select size="sm" v-model="gradientAngle" :options="gradientAngles"></b-form-select>
            </b-col>
        </b-row>

        <hr>

        <b-row>
            <!-- Where our gradient preview is displayed -->
            <b-col :style="{
                height: '100px',
                background: getGradientString,
            }"></b-col>
        </b-row>

        <hr>

        <b-row>
            <b-col :cols="4" v-for="(color, index) in colors" :key="index">
                <b-row style="margin-bottom: 5px">
                    <b-col>
                        <h6>Color #{{ index + 1 }}</h6>
                    </b-col>

                    <b-col>
                        <b-btn variant="outline-danger" size="sm" class="float-right" @click="deleteColor(index)" :disabled="colors.length <= 2" style="margin-right: 10px">
                            Delete
                        </b-btn>
                    </b-col>
                </b-row>

                <color-picker v-model="colors[index]"></color-picker>

                <br>
            </b-col>
        </b-row>

        <hr>

        <b-row>
            <b-col>
                <b-btn variant="success" @click="addColor" :disabled="colors.length === 6">
                    Add Another Color
                </b-btn>
            </b-col>
        </b-row>

    </b-modal>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color'

export default {
    name: "BackgroundGradientModal",

    components: {
        ColorPicker,
    },

    computed: {
        getGradientString() {
            let selectedGradientString =  this.gradientStyle === 'linear' ? 'linear-gradient(to ' + this.gradientAngle + ', ' : 'radial-gradient(';

            // Gradient Syntax is fussy, need to make sure we remove that trailing
            for (let i = 0; i < this.colors.length; i++) {
                i + 1 < this.colors.length ? selectedGradientString += this.colors[i].hex + ', ' : selectedGradientString += this.colors[i].hex;
            }

            return selectedGradientString + ')';
        }
    },

    data() {
        return {
            // Vue color expands these to larger objects, but initially we only need the hex code.
            colors: [
                {
                    hex: '#ffaaaa',
                },
                {
                    hex: '#aaaaff',
                },
            ],
            
            gradientStyle: 'linear',
            gradientStyles: [
                'linear', 'radial',
            ],
            gradientAngle: 'left',
            gradientAngles: [
                'top', 'bottom', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'
            ],
        }
    },

    methods: {
        addColor() {
            if (this.colors.length < 6) {
                this.colors.push(
                    {
                        hex: '#194d33',
                        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
                        hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
                        rgba: { r: 25, g: 77, b: 51, a: 1 },
                        a: 1
                    }
                );
            }
        },

        deleteColor(index) {
            if (this.colors.length > 2) {
                this.colors.splice(index, 1);
            }
        },

        setComponentBackgroundGradient() {
            this.$store.commit('setComponentProperty', { property: 'backgroundImage', value: this.getGradientString });
        }
    },
}
</script>
