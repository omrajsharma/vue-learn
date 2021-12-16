export default {
    increment(state) {
        // bad practice
        // mutations has to be synchronous - actions are used to create async mutations
        // setTimeout(() => {
        //     state.counter++;
        // }, 2000);
        state.counter++;
    },
    increase(state, payload ){
        console.log(state)
        console.log('increase in mutations')
        state.counter += payload.value ;
    },
};