<template>
    <div class="layout">
        <div class="layout-header">
            这是头部
        </div>
        <div class="layout-content">
            <slot name="content"></slot>
        </div>
        <div class="layout-footer">
            这是底部
        </div>
    </div>
</template>
<style lang="less">
.layout {
    width: 100%;
    height: 100%;
    .layout-header {
        width: 100%;
        height: 80px;
        background-color: #cccccc;
    }
    .layout-content {
        width: 1100px;
        margin: 0 auto 0;
        height: 400px;
        background-color: red;
    }
    .layout-footer {
        width: 100%;
        height: 80px;
        background-color: #cccccc;
    }
}
</style>