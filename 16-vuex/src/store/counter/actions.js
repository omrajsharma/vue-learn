export default {
    increment(context){
        setTimeout(() => {
            context.commit('increment');
        }, 2000);
    },
    increase(context,payload){
        console.log('increase in actions')
        console.log(context)
        setTimeout(() => {
            context.commit('increase', payload);
            
        }, 2000);
    },
};