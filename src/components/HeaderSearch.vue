<template>
  <div class="row">
    <div class="body">
      <div class="col-md-3 text-center">
        <img class="logo">
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control col-md-7 col-md-offset-1 search-input" placeholder="输入食谱名、作者、食材......">
        <button class="btn btn-default col-md-2 col-md-push-1 search-btn">搜索食谱</button>
        <div class="col-md-11 col-md-offset-1 hot-search">
          <span>热搜1</span>|
          <span>热搜2</span>|
          <span>热搜3</span>
        </div>
      </div>
      <div class="col-md-3">
        <button class="btn btn-default publish-btn col-md-4 col-md-push-4">发布食谱</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row{
  margin-bottom: 30px;
}
.body {
  margin-top: 30px;
}
.search-input {
  width: 60%;
  font-size: 17px;
  height: 45px;
}
.search-btn {
  font-size: 17px;
  height: 45px;
}
.publish-btn {
  font-size: 17px;
  height: 45px;
  color: #fff;
  background-color: #8bad00;
}
.publish-btn:hover {
  background-color: #97bc00;
}
.logo {
  width: 250px;
  height: 80px;
  cursor: pointer;
}
.hot-search {
  margin-top: 7px;
  color: #777;
}
.hot-search span:hover {
  cursor: pointer;
  color: #ff6767;
}
</style>
