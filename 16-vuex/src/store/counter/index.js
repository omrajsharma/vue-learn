import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getter.js';

export default {
    // namespace - detach from rest of the store
    namespaced: true,
    state() {
        return {
            counter: 10,
        };
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters,
};
