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
          <input type="text" class="col-md-10 col-md-push-1 loginInput" placeholder="手机/邮箱/用户名">
          <input type="text" class="col-md-10 col-md-push-1 loginInput" placeholder="密码">
          <button class="col-md-10 col-md-push-1 btn btn-primary loginBtn">登录</button>
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
  methods: {
    showModel() {
      $("#myModal").modal("show");
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
  margin-left: 20%;
  width: 60%;
  border-radius: 0px;
}
.modal-title {
  line-height: 40px;
}
.modal-footer span {
  color: rgb(46, 130, 255);
  cursor: pointer;
}
.loginInput {
  padding: 10px 8px;
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
}
.modal-footer {
  background-color: #f0f6ff;
}
</style>
