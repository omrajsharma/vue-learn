export default {
    finalCounter(state){
        return state.counter *2;
    },
    // _ defines that I am having this argument not using it
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if(finalCounter<0){
            return 0;
        }
        if(finalCounter>100){
            return 100;
        }
        return finalCounter;
    },
}