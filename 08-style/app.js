const app = Vue.createApp({
    data() {
        return {
            boxA : false,
            boxB : false,
            boxC : false,
            flag : false
        }
    },
    methods : {
        boxSelected(box){
            if(box === 'a'){
                this.boxA = !this.boxA;
            } else if ( box === 'b'){
                this.boxB = !this.boxB;
            } else if( box === 'c'){
                this.boxC = !this.boxC;
            } else if ( box === 'r' ) {
                this.boxA = false;
                this.boxB = false;
                this.boxC = false;
            }
        }
    }
})

app.mount('#app')