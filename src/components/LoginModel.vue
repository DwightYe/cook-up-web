<template>
<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>

        <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>
          &times;
        </button>
        <br>
        <div class="row">
          <img class="logo logo col-md-1 col-md-push-1">
          <h5 class='modal-title'>
            用户名密码登录
          </h5>
        </div>
      </div>
      <div class='modal-body'>
        <div class="row">
          <input type="text" class="col-md-10 col-md-push-1 loginInput" placeholder="手机/邮箱/用户名" v-model="username" @keypress="pressEnter">
          <input type="password" class="col-md-10 col-md-push-1 loginInput" placeholder="密码" v-model="password" @keypress="pressEnter">
          <button class="col-md-10 col-md-push-1 btn btn-primary loginBtn" @click="login">登录</button>
          <div class="col-md-10 col-md-push-1 loginFail" v-show="loginFailMes">账号密码错误，登录失败</div>
        </div>
      </div>
      <div class='modal-footer'>
        <div class="row">
          <span class="col-md-6 text-left">忘记密码？</span>
          <span class="col-md-6 text-right">新账号注册</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loginFailMes: false
    };
  },
  methods: {
    //弹出登录模态框
    showModel() {
      $("#myModal").modal("show");
    },
    //发送登录请求
    login() {
      let fd = new FormData();
      fd.append("username", this.username);
      fd.append("password", this.password);
      fetch("/login", {
        method: "post",
        body: fd
      })
        .then(response => {
          return response.json();
        })
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    //登录成功
    loginSuccess() {
      $("#myModal").modal("hide");
    },
    //登录失败
    loginFail() {
      this.loginFailMes = true;
    },
    //回车登录
    pressEnter(){
      if (event.keyCode == 13) {
        this.login();
      }
    }
  }
};
</script>

<style scoped>
.logo {
  width: 125px;
  height: 40px;
  cursor: pointer;
}
.modal-content {
  border-radius: 0px;
}
.modal-title {
  line-height: 40px;
}
.modal-footer span {
  color: #ff6e6e;
  cursor: pointer;
}
.loginInput {
  border: 1px solid #ddd;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}
.loginBtn {
  padding: 10px 8px;
  border: 1px solid #ddd;
  border-radius: 0px;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 30px;
  background-color: #f64040;
}
.modal-footer {
  background-color: #ffeded;
}
.loginFail {
  color: #f00;
}
</style>
