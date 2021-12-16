<template>
<h3>
    <!-- {{$store.state.counter}} -->
    {{finalCounter}}
</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // }

    // MAP GETTERS
    // getters name as argument
    // ...mapGetters(['finalCounter'])

    // access global store from state module
    ...mapGetters('numbers', ['finalCounter'])
  },

}
</script>