<template>
<div>
    <input type="text" ref="goal">
    Active Goals
    <button @click="setGoal">set goals</button>

    <!-- teleports -->
    <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>Input is invalid</h2>
            <p>please enter at least a few characters...</p>
            <button @click="inputIsInvalid = !inputIsInvalid">Okay</button>
        </error-alert>
    </teleport>
</div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: { ErrorAlert },
    data() {
        return {
            inputIsInvalid: false
        };
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === ''){
                // alert("Please enter something");
                this.inputIsInvalid = true;
            }
        }
    }
}
</script>