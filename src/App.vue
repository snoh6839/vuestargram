<template>
  
  <!-- {{ $store.state.test }} -->

  <!-- header -->
  <div class="header">
    <ul>
      <li class="header-button header-button-left">취소</li>
      <li>
        <img class="logo" src="./assets/img/bin.png" alt="Vue logo">
      </li>
      <li class="header-button header-button-right">다음</li>
    </ul>
  </div>

  <!-- contents -->
  <containerComponent/>
  
  <button id="moreBtn" @click="$store.dispatch('getMoreList')">More</button>

  <!-- footer  -->
  <div class="footer">
    <div class="footer-button-store">
      <label for="file" class="label-store"> + </label>
      <input accept="image/*" type="file" id="file" class="input-file">
    </div>
  </div>
</template>

<script>
import containerComponent from "./components/containerComponent.vue";

export default {
  name: 'App',
  components: {
    containerComponent,
  },
  created() {
    this.$store.dispatch('getMainList');
  },
}
</script>

<style>

@import url('./assets/css/common.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
