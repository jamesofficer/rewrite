<template>
    <!-- A div must wrap this component (usually the parent component) with position styles (e.g. style="bottom: 5px; right: 5px") for it display correctly. -->
    <div class="panel" :style="[{ height : panelVisible ? height : '35px' }, { width: width }, { minWidth: '250px' }]">
        <div class="panel-header" @click="panelVisible = ! panelVisible">
            <div class="row">
                <div class="col-9">
                    <!-- Panel Title -->
                    <slot name="title"></slot>
                </div>

                <div class="col-3 text-right">
                    <span class="panel-minimise-button">
                        <icon :name="panelVisible ? 'minus' : 'plus'"></icon>
                    </span>
                </div>
            </div>
        </div>

        <div class="panel-body" v-if="panelVisible">
            <!-- Panel Content will appear in here. -->
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "FloatingPanel",

    props: {
        height: {
            type: String,
            required: false,
            default: '300px',
        },

        width: {
            type: String,
            required: false,
            default: '280px',
        }
    },

    data() {
        return {
            panelVisible: true,
        }
    },
}
</script>

<style scoped>
.panel {
    position: fixed;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(150, 150, 150, 0.75);
    overflow: hidden;
}

.panel-header {
    cursor: pointer;
    background: black;
    color: white;
    padding: 7px 10px;
    border-bottom: 1px solid gray;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 10;
}

.panel-body {
    height: 100%;
    overflow-y: auto;
    z-index: 5;
}

.panel-minimise-button {
    cursor: pointer;
}

.panel-minimise-button:hover {
    color: #dddddd;
}
</style>

