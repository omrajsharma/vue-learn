const app = Vue.createApp({
    data() {
        return {
            counter : 0,
            cont : '',
            name : ''
        };
    },
    methods : {
        square(){
            this.counter = this.counter*this.counter;
        },
        root() {
            this.counter = Math.sqrt(this.counter);
        },
        addFive(num){
            this.counter = this.counter + num;
        },
        changeCont(event) {
            this.cont = event.target.value;
        },
        enterName(event, lastName){
            this.name = event.target.value + " " + lastName;
        },
        submitForm(){
            event.preventDefault();
            alert("success!" + event);
            console.log(event)
        }
    }
})

app.mount('#app')