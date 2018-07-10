<template>
  <div class="experiments">
    <video muted=”muted” preload="yes" autoplay="autoplay" loop="loop" width="100%" height="" id="myVideo">
      <source src="https://s3-us-west-2.amazonaws.com/airlence/landing-page+1.m4v">
    </video>
  </div>
</template>

<script>
export default {
  name: "Experiments"
};
</script>
<style lang="scss" scoped>
@import "../styles/experiments.scss";
</style>
