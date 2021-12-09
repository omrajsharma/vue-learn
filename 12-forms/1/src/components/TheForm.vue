<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidity ==='invalid'}">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateInput"
      />
      <p v-if="userNameValidity ==='invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input
        id="age"
        name="age"
        type="number"
        v-model="userAge"
        ref="ageInput"
      />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
        <rating-control v-model="rating"></rating-control>
    </div>
    <div class="form-control">
        <input type="checkbox" name="confirm-terms" id="confirm-terms" v-model="confirm" >
        <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';
export default {
  components : {
      RatingControl
  },
  data() {
    return {
      userName: "",
      userAge: null,
      referrer: "google",
      interest: [],
      how: null,
      rating: null,
      confirm: false,
      userNameValidity: 'pending'
    };
  },
  compute : {
  },
  methods: {
    submitForm() {
      console.log(
        this.userName,
        this.userAge,
        this.referrer,
        this.interest,
        this.how,
        this.confirm,
        this.userNameValidity,
        this.rating
      );
        //   console.log(this.$refs.ageInput.value + 5);
      this.userName = "";
      this.userAge = "";
      this.interest = [];
      this.how = null;
      this.confirm = false;
      this.rating = null;
    },
    validateInput() {
        if(this.userName === ''){
            this.userNameValidity= 'invalid';
        } else {
            this.userNameValidity = 'valid';
        }
    }

  },
};
</script>

<style scoped>
.invalid  input{
    border-color: tomato;
}
.invalid label {
    border-color: tomato;
}
</style>