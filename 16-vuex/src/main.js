import { createApp } from 'vue';
// there is one store per app
// import { createStore } from 'vuex';

import App from './App.vue';
// import store from './store.js';
import store from './store/index.js';

// LOCAL STORE MAKING
// const counterModule = {
//     // namespace - detach from rest of the store
//     namespaced: true,
//     state() {
//         return {
//             counter: 10,
//         };
//     },
//     mutations: {
//         increment(state) {
//             // bad practice
//             // mutations has to be synchronous - actions are used to create async mutations
//             // setTimeout(() => {
//             //     state.counter++;
//             // }, 2000);
//             state.counter++;
//         },
//         increase(state, payload ){
//             console.log(state)
//             console.log('increase in mutations')
//             state.counter += payload.value ;
//         },
//     },
//     actions: {
//         // can use same names as mutations
//         // can't change the state
//         // context object
//         increment(context){
//             setTimeout(() => {
//                 context.commit('increment');
//             }, 2000);
//         },
//         increase(context,payload){
//             console.log('increase in actions')
//             console.log(context)
//             setTimeout(() => {
//                 context.commit('increase', payload);
                
//             }, 2000);
//         },
//     },
//     getters: {

//         finalCounter(state){
//             return state.counter *2;
//         },
//         // _ defines that I am having this argument not using it
//         normalizedCounter(_, getters) {
//             const finalCounter = getters.finalCounter;
//             if(finalCounter<0){
//                 return 0;
//             }
//             if(finalCounter>100){
//                 return 100;
//             }
//             return finalCounter;
//         },
//     },
// };

// const store = createStore({
//     // MODULES
//     modules: {
//         numbers: counterModule
//     },
//     state(){
//         return {
//             isLoggedIn: false
//         };
//     },
//     // setters
//     mutations: {
        
//         setAuth(state, payload){
//             state.isLoggedIn = payload.isAuth
//         },

//     },
//     // actions - between component and mutations
//     // components -> actions -> mutations
//     // actions are allowed to run async code
//     actions: {
        
//         // for setting auth
//         login(context) {
//             context.commit('setAuth', {isAuth: true});
//         },
//         logout(context) {
//             context.commit('setAuth', {isAuth: false});
//         }
//     },
//     // getters
//     getters: {
        
//         userIsAuthenticated(state){
//             return state.isLoggedIn;
//         }
//     },

// });

const app = createApp(App);

app.use(store);

app.mount('#app');
