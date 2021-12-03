const app = Vue.createApp ({
    data(){
        return {
            friends: [
                {id: 1, name: 'Omraj Sharma', phone: '0123456789', email: 'omraj@example.com'},
                {id: 2, name: 'Rocky', phone: '0123456789', email: 'riya@example.com'}
            ],
            display : false
        }
    },
    // methods: {
    //     toggleDisplay() {
    //         this.display = !this.display;
    //     }
    // }
})

app.component('component-one', {
    template: `
        <div v-for="mate in classMate">
            <button @click="show = !show">show</button>
            <div v-if="show">
                <h4>{{mate.name}}</h4>
                <p> {{mate.id}} </p>
                <p> {{mate.number}} </p>
                <p> {{mate.phone}} </p>
            </div>

        </div>
        <h1>Omraj Sharma</h1>
        
        <p>I code {{classMate}}</p>
    `,
    data(){
        return {  
            show: false,
            classMate: [
                {id: 1, name: 'abc', number: '0123456789', email: 'abc@gmail.com'},
                {id: 2, name: 'xyz', number: '0123456789', email: 'xyz@gmail.com'},
                {id: 3, name: 'pqr', number: '0123456789', email: 'pqr@gmail.com'},
            ]            
        };
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        }
    }
});

app.mount('#app');