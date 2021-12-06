<template>
    <div>
        <h1> {{name}} {{fav? "(Favourite)" : ""}} </h1>
        <button @click="toggleFavourite">Toggle Favourite</button>
        {{phoneNumber}} <br>
        {{emailAddress}} <br>
        {{favourite}}
        <button @click="deleteFriend">Delete friend</button>
        <!-- <button @click="$emit('delete-friend', id) ">Delete friend</button> -->
    </div>
</template>

<script>
export default {

    // Always use camel casing
    // props: ['name','phoneNumber','emailAddress'],
    // props: {
    //     name: String,
    //     phoneNumber: String,
    //     emailAddress: String
    // },

    // PROP VALIDATIONS
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: false,
            default: '12345'
        },
        favourite: {
            type: Boolean,
            required: false
        }
    },
    emits: ['toggle-favourite', 'delete-friend'],

    // VALIDATING CUSTOM EVENTS
    // emits: [
    //     'toggle-favourite': function(id) {
    //         if(id) {
    //             return true;
    //         } else {
    //             console.log('ID missing...!');
    //             return false;
    //         }
    //     }
    // ],
    data() {
        return {
            fav: this.favourite
        };
    },
    methods: {
        // toggleFavourite() {
        //     this.fav = !this.fav;
        // }

        // CHILD => PARENT
        toggleFavourite() {
            this.$emit('toggle-favourite', this.id);
        },
        deleteFriend() {
            this.$emit('delete-friend', this.id);
        }
    }

}
</script>