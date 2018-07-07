<template>
  <div id="app">
      <nav>
        <h1>AIRLENCE</h1>
        <ul>
          <li><router-link class="hover" to="/about"><h5>ABOUT</h5></router-link></li>
          <!-- 
          <li><router-link class="hover" to="/experiments"><h5>EXPERIMENTS</h5></router-link></li>
          -->
          <li><router-link to="/"><h5>HOME</h5></router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../src/styles/app.scss";
</style>
