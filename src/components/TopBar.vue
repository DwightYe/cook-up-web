<template>
<div class='top-bar row text-center'>
    <a class='col-md-2' @click="trunToIndex">首页</a>
    <div class='col-md-5'>
        <a class='col-md-2' @click="turnToAllRecipes">菜谱</a>
        <a class='col-md-2'>搜索</a>
        <a class='col-md-2'>发布</a>
    </div>
    <div class='col-md-3 col-md-push-2'>
        <a class='col-md-6'>注册</a>
        <a class='col-md-6' @click='login'>登录</a>
    </div>
    <login-model ref='loginModel'></login-model>
</div>
</template>

<script>
import LoginModel from "@/components/LoginModel";
export default {
  components: {
    LoginModel
  },
  methods: {
    login() {
      this.$refs.loginModel.showModel();
    },
    trunToIndex() {
      this.$router.push("/");
    },
    turnToAllRecipes() {
      this.$router.push("/recipes/食谱/全部食谱");
    }
  }
};
</script>

<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  z-index: 9999;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

a {
  line-height: 40px;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  white-space: nowrap;
}
a:hover {
  background-color: #ccc;
}
div {
  white-space: nowrap;
}
</style>

