// there is one store per app
import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js'; 
import counterModule from './counter/index.js';

const store = createStore({
    // MODULES
    modules: {
        numbers: counterModule
    },
    state(){
        return {
            isLoggedIn: false
        };
    },
    // setters
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,

});

export default store;