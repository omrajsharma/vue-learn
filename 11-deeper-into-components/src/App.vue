<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- 1st way -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
  <TestingComponent></TestingComponent> -->

  <!-- 2nd way -->
  <!-- <hello-word></hello-word>
  <testing-component></testing-component> -->

  <!-- 3rd way -->
  <HelloWorld></HelloWorld>
  <TestingComponent></TestingComponent>
  <card-feature>
    <h1>helo world!</h1>

    <!-- Slot naming -->
    <!-- (v-slot) = (#) -->
    <template v-slot:base>
      <h3>Base</h3>
    </template>
  </card-feature>

  <!-- Slot with defalt content -->
  <card-feature>

  </card-feature>

  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

  <!-- OLD METHOD - DYNAMIC COMPONENTS -->
  <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
  <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

  <!-- GOOD PRACTICE -->
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TestingComponent from './components/TestComponent.vue';
import CardFeature from './components/CardFeature.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  name: 'App',
  data() {
    return {
      selectedComponent: 'active-goals'
    }
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;
    }
  },
  // 1st way
  // components: {
  //   HelloWorld,
  //   TestingComponent
  // }

  // 2nd way
  // components: {
  //   "hello-word": HelloWorld,
  //   "testing-component": TestingComponent
  // },

  // 3nd way - auto translate HelloWorld -> hello-world
  components: {
    HelloWorld: HelloWorld,
    TestingComponent: TestingComponent,
    CardFeature: CardFeature,
    ActiveGoals: ActiveGoals,
    ManageGoals: ManageGoals
  }

}
</script>

// scoped - attribute (Good Practice)
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
