const state = {
    // Hide or show the Colour Picker.
    showColorPicker: false,

    // The property and optional subProperty the Colour Picker should update.
    colorPickerProperty: undefined,
    colorPickerSubProperty: undefined,
}

const getters = {
    showColorPicker: (state) => {
        return state.showColorPicker;
    },

    colorPickerProperty: (state) => {
        return state.colorPickerProperty;
    },

    colorPickerSubProperty: (state) => {
        return state.colorPickerSubProperty;
    },
}

const mutations = {
    showColorPicker (state, toggle) {
        state.showColorPicker = toggle;
    },

    setColorPickerProperty (state, property) {
        state.colorPickerProperty = property;
    },

    setColorPickerSubProperty (state, subProperty) {
        state.colorPickerSubProperty = subProperty;
    },

    resetColorPicker (state) {
        state.colorPickerProperty = undefined;
        state.colorPickerSubProperty = undefined;
        state.showColorPicker = false;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}