<template>
    <h3> {{counter}} </h3>
</template>

<script>
export default {
    computed: {
        counter() {
            // return this.$store.state.counter * 2;
            // return this.$store.getters.finalCounter;

            // GETTERS IMPLEMENTATIONS
            // return this.$store.getters.normalizedCounter;

            // to access global store from module of state
            return this.$store.getters['numbers/normalizedCounter'];
        }
    }
}
</script>