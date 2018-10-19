<template>
    <b-modal @shown="getGradientColors" :id="'backgroundGradientModal'" title="Background Gradient" size="lg" ref="backgroundGradientModal" hide-footer lazy>

        <b-row>
            <b-col>
                <h6>Gradient Style</h6>
                <b-form-select size="sm" v-model="gradientStyle" :options="gradientStyles"></b-form-select>
            </b-col>

            <b-col v-if="gradientStyle === 'Linear'">
                <h6>Gradient Position</h6>
                <b-form-select size="sm" v-model="gradientAngle" :options="gradientAngles"></b-form-select>
            </b-col>
        </b-row>

        <hr>

        <b-row>
            <b-col :style="{
                height: '100px',
                background: 'linear-gradient(to ' + gradientAngle + ', ' + selectedGradientString + ')',
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
                        <b-btn variant="outline-danger" size="sm" class="float-right" @click="deleteColor(index)" :disabled="colors.length === 6" style="margin-right: 10px">
                            Delete
                        </b-btn>
                    </b-col>
                </b-row>

                <color-picker :value="colors[index]" @input="getGradientColors"></color-picker>

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

    data() {
        return {
            gradientStyle: 'Linear',
            gradientStyles: [
                'Linear', 'Radial', 'Circle', 'Ellipse'
            ],
            gradientAngle: 'top',
            gradientAngles: [
                'top', 'bottom', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'
            ],
            selectedGradientString: '',
            colors: [
                { r: 100, g: 100, b: 255, a: 1 },
                { r: 100, g: 255, b: 100, a: 1 },
            ],
        }
    },

    methods: {
        addColor() {
            if (this.colors.length < 6) {
                this.colors.push(
                    { r: 0, g: 0, b: 0, a: 1 }
                );
            }
        },

        deleteColor(index) {
            this.colors.splice(index, 1);
        },

        getGradientColors() {
            // Gradient Syntax is fussy, need to make sure we remove that trailing
            for (let i = 0; i < this.colors.length; i++) {
                if (i + 1 < this.colors.length) {
                    this.selectedGradientString += 'rgb(' + this.colors[i].r + ' ' + this.colors[i].g + ' ' + this.colors[i].b +'), ';
                } else {
                    this.selectedGradientString += 'rgb(' + this.colors[i].r + ' ' + this.colors[i].g + ' ' + this.colors[i].b +')';
                }
            }
        }
    },
}
</script>
