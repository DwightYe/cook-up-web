<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view class="web-body"/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import BottomBar from "@/components/BottomBar.vue";
export default {
  name: "App",
  components: {
    TopBar,
    BottomBar
  }
};
</script>

<style>
#app {
  font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
}
.row {
    margin-right: 0px;
    margin-left: 0px;
}
.web-body{
  margin-top: 40px;
}
</style>
