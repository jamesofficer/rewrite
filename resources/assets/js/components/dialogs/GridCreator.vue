<template>
    <b-modal :id="'createGridModal'" size="lg" ref="createGridModal" hide-header hide-footer>

        <b-btn @click="addColumn">Add Column</b-btn>
        <b-btn @click="addRow">Add Row</b-btn>
        <b-btn @click="addGridItem">Add Item</b-btn>

        <div id="grid-preview" :style="{
            gridGap: `${grid.gap}px`,
            gridTemplateColumns: `repeat(${grid.columns.length}, 1fr)`,
            gridTemplateRows: `repeat(${grid.rows.length}, 1fr)`,
        }">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="grid-item"
                :style="{
                    height: item.height === 'auto' ? 'auto' : item.height + 'px',
                    width: item.width === 'auto' ? 'auto' : item.width + 'px',
                }"
            >
                {{ item.text }}
            </div>
        </div>
    </b-modal>
</template>

<script>
class GridColumn {
    constructor(index, width = '1', unit = 'fr') {
        this.index = index;
        this.width = width;
        this.unit  = unit;
    }
}

class GridRow {
    constructor(index, width = '1', unit = 'fr') {
        this.index = index;
        this.width = width;
        this.unit  = unit;
    }
}

class GridItem {
    constructor(text, width = 'auto', height = 'auto', alignSelf = 'stretch', justifySelf = 'stretch') {
        this.text        = text;
        this.width       = width;
        this.height      = height;
        this.alignSelf   = alignSelf;
        this.justifySelf = justifySelf;
    }
}

export default {
    name: "GridCreator",

    data() {
        return {
            grid: {
                columns: [],
                rows: [],
                gap: 10,
                justifyContent: 'auto',
                alignContent: 'auto',
                justifyItems: 'auto',
                alignItems: 'auto',
            },

            items: [],
            selected: undefined,
        }
    },

    methods: {
        addColumn() {
            this.grid.columns.push(
                new GridColumn(this.grid.columns.length)
            );
        },

        addRow() {
            this.grid.rows.push(
                new GridRow(this.grid.rows.length)
            );
        },

        addGridItem() {
            this.items.push(
                new GridItem(this.items.length + 1)
            );
        }
    }


}
</script>

<style lang="scss" scoped>
#createGridModal {
    display: 'grid';
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    #grid-preview {
        display: grid;
        height: 500px;
        width: 500px;
        background: lightgray;
        border-radius: 5px;
    }

    .grid-item {
        background: cadetblue;
    }
}
</style>
