<template>
    <div>
        <!-- SLOTS -->
        <slot>
            default content
        </slot>

        <!-- naming slots -->
        <slot name="base"></slot>
        <slot name="second-base"></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots.base);
    }
}
</script>

<style scoped>
    div {
        width: 1400px;
        height: 500px ;
        background: pink;
    }
</style>