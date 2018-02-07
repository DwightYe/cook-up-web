<template>
  <div class="row">
    <div class="body">
      <div class="col-md-3">
        <img class="logo">
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control col-md-7 search-input" placeholder="输入食谱名、作者、食材......">
        <button class="btn btn-default col-md-2 search-btn">搜索食谱</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-default publish-btn">发布食谱</button>
      </div>
      <div v-for="n in 30" class="col-md-12">&nbsp</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body{
  margin-top: 30px;
}
.search-input{
  margin-left: 5%;
  width: 60%;
  font-size: 17px;
  height: 45px;
}
.search-btn{
  margin-left: 5%;
  font-size: 17px;
  height: 45px;
}
.publish-btn{
  margin-left: 25%;
  font-size: 17px;
  height: 45px;
  color: #fff;
  background-color: #8bad00;
}
.publish-btn:hover{
  background-color: #97bc00;
}
.logo{
  width: 200px;
  height: 250px;
}
</style>
