<template>
  <div class="row">
    <div class="body">
      <div class="col-md-3 text-center">
        <img class="logo">
      </div>
      <div class="col-md-6">
        <input type="text" class="col-md-7 col-md-offset-1 search-input" placeholder="输入食谱名、作者、食材......" v-model="searchKey" @keypress="pressEnter">
        <button class="btn btn-default col-md-2 col-md-push-1 search-btn" @click="turnToRecipes(searchKey)">搜索食谱</button>
        <div class="col-md-11 col-md-offset-1 hot-search">
          <span @click="turnToRecipes(hotSearch[0])">{{hotSearch[0]}}</span>|
          <span @click="turnToRecipes(hotSearch[1])">{{hotSearch[1]}}</span>|
          <span @click="turnToRecipes(hotSearch[2])">{{hotSearch[2]}}</span>
        </div>
      </div>
      <div class="col-md-3">
        <button class="btn btn-default publish-btn col-md-4 col-md-push-4">发布食谱</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKey: " ",
      hotSearch: ["咖喱炒榴莲", "肥肉炖鸡皮", "青菜煮福建人"]
    };
  },
  methods: {
    //跳转到食谱列表页面
    turnToRecipes(k) {
      this.$router.push("/recipes/食谱搜索/" + k);
    },
    //检测回车
    pressEnter() {
      if (event.keyCode == 13) {
        this.turnToRecipes(this.searchKey);
      }
    }
  }
};
</script>

<style scoped>
.row {
  margin-bottom: 30px;
}
.body {
  margin-top: 30px;
}
.search-input {

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
