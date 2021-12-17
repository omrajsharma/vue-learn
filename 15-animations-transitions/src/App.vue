<template>

<!-- this is unsopported in vue 3 -->
  <!-- <transition name="route">
    <router-view ></router-view>
  </transition> -->

<!-- page transition -->
  <router-view v-slot="slotProps" mode="in-out">
    <transition name="fade-button">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

</template>

<script>
// import UsersList from './components/UsersList.vue';

export default {
  components: {
    // UsersList
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    // programmatically adding css
    enterCancelled(el){
      console.log(el);
      clearInterval(this.enterInterval);
    }, 
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log("before the enter ()");
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter");
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01 ;
        round++;
        if(round > 100){
          clearInterval(this.enterInterval);
          // after done of the function
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      setTimeout(() => {
        console.log("after enter");
        console.log(el);
      }, 2000);
    },
    beforeLeave(el) {
      console.log("before the leaving ()");
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave')
      console.log(el)
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1- round * 0.01 ;
        round++;
        if(round > 100){
          clearInterval(this.leaveInterval);
          // after done of the function
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterleave')
      console.log(el);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    // ANIMATIONS
    animateBlock() {
      this.animatedBlock = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* TRANSITION */
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-250px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.route-enter-active {
  animation: slide-scale 0.8s ease-out;
}

.route-leave-active {
  animation: slide-scale 0.8s ease-in;
}

/* Vue added classes with transition tag */
/* .v-enter-active */
/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30);
} */
/* .para-enter-active {
  transition: all 0.3s ease-out;
  animation: slide-fade 0.3s ease-out;
} */
/* .para-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .para-leave-from {
  opacity: 1;
  transform: translateY(0);
} */
/* .para-leave-active {
  transition: all 0.3s ease-in;
  animation: slide-fade 0.3s ease-out;
} */
/* .para-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

/* for modal */
/* .modal-enter-from {
  
}
.modal-enter-active{
  animation: modal 1s ease-out;
}
.modal-enter-to{

} */




.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active,
.fade-button-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/* Modal Animation */
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(0) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150) scale(1);
  }
}
</style>
