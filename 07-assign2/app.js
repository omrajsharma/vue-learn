const app = Vue.createApp({
    data() {
        return {
            temp : "hey!",
            content : '',
            contentEntered : ''
        }
    },
    methods : {
        yeah(){
            alert('Yeah!!!')
        },
        copying() {
            this.content = event.target.value;
        },
        showEntered(){
            this.contentEntered = this.content;
            alert('hurrah!!');
        }
    }
})

app.mount('#app')