<template>
<div class='top-bar row text-center'>
    <a class='col-md-2' @click="trunToIndex">首页</a>
    <div class='col-md-5'>
        <a class='col-md-2'>菜谱</a>
        <a class='col-md-2'>专题</a>
        <a class='col-md-2'>新闻</a>
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
}
a:hover {
  background-color: #eee;
}
</style>

