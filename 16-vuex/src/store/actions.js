export default {
    // for setting auth
    login(context) {
        context.commit('setAuth', {isAuth: true});
    },
    logout(context) {
        context.commit('setAuth', {isAuth: false});
    }
};