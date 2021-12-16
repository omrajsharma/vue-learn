<template>
    <!-- <button @click="addOne">
        Add Two
    </button> -->

    <!-- <button @click="increment">Add increment</button>
    <button @click="increase({value: 10})">Add increase</button> -->
    <button @click="inc">Add increment</button>
    <button @click="incr({value: 10})">Add increase</button>
</template>

<script>
    import {mapActions} from 'vuex';

export default {
    methods: {
        // addOne() {
        //     this.$store.state.counter++;
        // }
        // addOne() {
        //     this.$store.commit('increment');
        // }
        
        // MAP ACTIONS
        // ...mapActions(['increment', 'increase'])
        // ...mapActions(  {
        //     inc: 'increment',
        //     incr: 'increase'
        // })

        // access to global store 
        ...mapActions( 'numbers',  {
            inc: 'increment',
            incr: 'increase'
        })
    },
}
</script>