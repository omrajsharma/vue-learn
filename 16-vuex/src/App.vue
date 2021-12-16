<template>
  <base-container title="Vuex" v-if="isAuth">
    <!-- <h3> {{$store.state.counter}} </h3> -->
    <!-- <h3> {{counter}} </h3> -->
    <the-counter>  </the-counter>
    <favourite-value></favourite-value>
    <button @click="addOne">Add 10</button>
    <!-- <button @click="addOne">Add 1</button> -->
    <change-counter></change-counter>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  data() {
    return {
      counter: this.$store.state.counter
    };
  },
  methods: {
    addOne() {
      // this.$store.state.counter += 11;

      // MUTATION IMPLEMENTATIONS
      // this.$store.commit('increment');
      // this.$store.commit('increase', {value: 10});

      // GOOD PRACTICE - component uses actions and actions calls mutations in async 
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });
      // ACTIONS IMPLEMENTATIONS
      // this.$store.dispatch({
      //   type: 'increase',
      //   value: 10
      // });

      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    }
  },
  computed: {
      isAuth() {
          return this.$store.getters.userIsAuthenticated;
      }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>