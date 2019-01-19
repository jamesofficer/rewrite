/**
 * Empty text values in component inputs such as Margin, Padding, and Border will mean
 * the component layout will not apply properly. Setting them back to 0 fixes this.
 *
 */

export default {
    methods: {
        ensureValueIsNotEmpty(property, defaultValue = 0) {
            if (this[property] === '') {
                this[property] = defaultValue;
            }
        }
    }
};