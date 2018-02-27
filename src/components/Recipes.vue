<template>
<div class="row body">

  <div class="col-md-12">位置
    <span class="glyphicon glyphicon-chevron-right"></span>
    {{foundBy}} - {{key}}
  </div>

  <div class="col-md-12">
    <div class="col-md-8 recipeNumber">
      <span>{{recipeNumber}}</span>个菜谱
    </div>
    <div class="col-md-4 text-right orderBy">排序方式：
      <span>分享次数</span>丨
      <span>最新发布</span>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      foundBy: "",
      key: "",
      recipeNumber: 79
    };
  },
  mounted() {
    this.foundBy = this.$route.params.foundBy;
    this.key = this.$route.params.key;
  },
  methods: {}
};
</script>

<style scoped>
.body {
  width: 90%;
  margin-left: 5%;
}

.recipeNumber span {
  font-size: 30px;
  color: #f64040;
}

.recipeNumber,.orderBy {
  line-height: 50px;
}
</style>
