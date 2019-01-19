export default {
    props: {
        canvasIndex: {
            type: Number,
            default: undefined,
        },

        rowIndex: {
            type: Number,
            default: undefined,
        },

        columnIndex: {
            type: Number,
            default: undefined,
        },

        componentIndex: {
            type: Number,
            default: undefined,
        },
    },

    computed: {
        getElementIdentifier() {
            return this.$store.getters.getElementIdentifier(this.indexes);
        },

        element() {
            return this.$store.getters.getSpecifiedElement(this.indexes);
        },

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

        getElementStyles() {
            const el = this.element;

            return {
                // Size & Layout
                ...el.width && { width: el.width + '%' },
                ...el.margin && { margin: el.margin.top + 'px ' + el.margin.right + 'px ' + el.margin.bottom + 'px ' + el.margin.left + 'px' },
                ...el.padding && { padding: el.padding.top + 'px ' + el.padding.right + 'px ' + el.padding.bottom + 'px ' + el.padding.left + 'px' },

                // Background
                ...el.backgroundImage && { backgroundImage: el.backgroundImage },
                ...el.backgroundColor && { backgroundColor: 'rgba(' + el.backgroundColor.r + ', ' + el.backgroundColor.g + ', ' + el.backgroundColor.b + ', ' + el.backgroundColor.a + ')' },
                ...el.backgroundSize && { backgroundSize: el.backgroundSize },
                ...el.backgroundPosition && { backgroundPosition: el.backgroundPosition },

                // Borders
                ...el.border && { borderWidth: el.border.top + 'px ' + el.border.right + 'px ' + el.border.bottom + 'px ' + el.border.left + 'px' },
                ...el.border && { borderStyle: el.border.style },
                ...el.border && { borderColor: 'rgba(' + el.border.color.r + ', ' + el.border.color.g + ', ' + el.border.color.b + ', ' + el.border.color.a + ')' },
                ...el.border && { borderRadius: el.border.radius + 'px' },
                ...el.boxShadow && { boxShadow: el.boxShadow.offsetX + 'px ' + el.boxShadow.offsetY + 'px ' + el.boxShadow.blurRadius + 'px ' + 'rgba(' + el.boxShadow.color.r + ', ' + el.boxShadow.color.g + ', ' + el.boxShadow.color.b + ', ' + el.boxShadow.color.a + ')' },

                // Typography
                ...el.textAlign && { textAlign: el.textAlign },
                ...el.textColor && { color: 'rgba(' + el.textColor.r + ', ' + el.textColor.g + ', ' + el.textColor.b + ', ' + el.textColor.a + ')' },
                ...el.fontSize && { fontSize: el.fontSize + 'pt' },
                ...el.fontFamily && { fontFamily: el.fontFamily },
                ...el.fontWeight && { fontWeight: el.fontWeight },
                ...el.lineHeight && { lineHeight: el.lineHeight },
                ...el.letterSpacing && { letterSpacing: el.letterSpacing + 'px' },
                ...el.textShadow && { textShadow: el.textShadow.offsetX + 'px ' + el.textShadow.offsetY + 'px ' + el.textShadow.blurRadius + 'px ' + 'rgba(' + el.textShadow.color.r + ', ' + el.textShadow.color.g + ', ' + el.textShadow.color.b + ', ' + el.textShadow.color.a + ')' },
            };
        },
    },

    data() {
        return {
            indexes: {
                canvasIndex: this.canvasIndex,
                rowIndex: this.rowIndex,
                columnIndex: this.columnIndex,
                componentIndex: this.componentIndex,
            }
        }
    },

    created() {
        this.$store.commit('createElementIdentifier', this.indexes);
    }
}