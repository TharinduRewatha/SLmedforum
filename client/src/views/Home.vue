<template>
  <div class="home">
  <div class="jumbotron">
      <h1 class="display-3">Welcome to Sri Lanka MED FORUM!</h1>
      <p class="lead">We are an online community for current and prospective medical, dental and allied health students and early career professionals from Sri Lanka. </p>
      <hr class="my-4">
      <p>This forum is all about community. Be kind! Be helpful! 🌈💚</p>
      <p class="lead">
        <a
          v-if="!user"
          class="btn btn-danger btn-lg"
          :href="getLoginURL"
          role="button">Login with Google</a>
        <router-link
          class="btn btn-primary btn-lg"
          to="/forum"
          role="button">Go to Forum</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
};
</script>
