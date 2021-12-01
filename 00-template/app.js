const app = Vue.createApp({
    data() {
        return {
            temp : "hey!"
        }
    },
    methods : {
        fun() {
            return 'fun';
        }
    }
})

app.mount('#app')