const app = Vue.createApp({
    // data: function() {}    -- another method
    data() {
      return {
        myName: "Omraj Sharma",
        connect: "https://omrajsharma.github.io",
        sayHtml: "<h3>saying html from data</h3>"
      };
    },
    methods: {
      myFun(){
        return "this text is coming from methods in vue";
      },
      sayName(){
        return this.myName;
      },
      sayHt(){
        return "<h4>saying html from function return</h4>"
      }
    }
});

app.mount('#app')