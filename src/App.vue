<template>
  
  <!-- {{ $store.state.test }} -->

  <!-- header -->
  <div class="header">
    <ul>
      <li v-if="$store.state.tabFlg == 1" @click="$store.commit('changeTabFlg', 0); $store.commit('clearState');" class="header-button header-button-left">취소</li>
      <li v-if="$store.state.tabFlg == 2" @click="$store.commit('changeTabFlg', 1)" class="header-button header-button-left">취소</li>
      <li>
        <img class="logo" src="./assets/img/bin.png" alt="Vue logo">
      </li>
      <li v-if="$store.state.tabFlg == 1" @click="$store.commit('changeTabFlg', 2)" class="header-button header-button-right">다음</li>
      <li v-if="$store.state.tabFlg == 2" @click="$store.dispatch('writeContent'); $store.commit('changeTabFlg', 0);" class="header-button header-button-right">작성</li>
    </ul>
  </div>

  <!-- contents -->
  <containerComponent/>
  
  <button v-if="$store.state.tabFlg == 0" id="moreBtn" @click="$store.dispatch('getMoreList')">More</button>

  <!-- footer  -->
  <div class="footer">
    <div class="footer-button-store">
      <label for="file" class="label-store"> + </label>
      <input @change="updateImg" accept="image/*" type="file" id="file" class="input-file">
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
  methods: {
    updateImg(e){
      let file = e.target.files;
      let uploadFile = file[0];
      let imgUrl = URL.createObjectURL(uploadFile);
      this.$store.commit('uploadFile', uploadFile);
      this.$store.commit('changeImgUrl', imgUrl);
      this.$store.commit('changeTabFlg', 1);
      e.target.value = '';
    }
  }
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
