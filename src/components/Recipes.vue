<template>
<div class="row">

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

  <div class="col-md-10 col-md-push-1">
    <div v-for="rec in recipes" class="recipeRow">
      <div class="oneRecipe">
        <div class="img col-md-2" v-bind:style="{backgroundImage:'url(' + rec.pic_url + ')'}"></div>
        <div class="col-md-10">
          <div class="col-md-12 recipeName">{{rec.recipe_name}}</div>
          <div class="col-md-12">创建用户：{{rec.user_id}}</div>
          <div class="col-md-12 profile">简介：{{rec.profile}}</div>
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
      foundBy: "",
      key: "",
      recipeNumber: 79,
      recipes: ""
    };
  },
  mounted() {
    this.foundBy = this.$route.params.foundBy;
    this.key = this.$route.params.key;
    this.recipes = this.getRecipes();
  },
  methods: {
    getRecipes() {
      return [
        {
          user_id: "小熊猫",
          recipe_name: "熊猫吃屎",
          pic_url:
            "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2747386591,3280025565&fm=85&s=DA383EC7C4824FF30EB6A4330300006B",
          profile: "今天我熊某人要为这道菜正名！"
        },
        {
          user_id: "筑厨梦",
          recipe_name: "私家红烧肉",
          pic_url:
            "http://image.zhms.cn/2017-07/28d921a43576492c8b4387ea244917ca.jpg?x-oss-process=image/format,jpg/interlace,1/resize,m_fill,h_200,w_200/watermark,image_RGVmYXVsdC9iLnBuZw==,t_35,g_se,x_10,y_10",
          profile:
            "以五花肉为主料，肥瘦相间，肉质细腻鲜嫩，含有丰富的蛋白质和微量元素，适合多数人食用。美食美在公众号更多精彩。红肉做好之后吃起来肥而不腻。"
        },
        {
          user_id: "Tommas",
          recipe_name: "酒香蜜汁烤翅",
          pic_url:
            "http://image.zhms.cn/2018-02/1252af978a8a40f68601a0cfc3d688a4.JPG?x-oss-process=image/format,jpg/interlace,1/resize,m_fill,h_270,w_270/watermark,image_RGVmYXVsdC9iLnBuZw==,t_35,g_se,x_10,y_10",
          profile:
            "我的家人吃鸡都喜欢吃肉比较多的部位，那种鸡肉块还有鸡腿。然而我就比较喜欢吃鸡爪鸡翅。其实这种肉少的部位啊，也别有它的一番风味。酒香蜜汁烤翅，多种调料混合起来，鸡翅入味就特别好吃。又香又嫩，入口就是给人的感觉特别香、特别酥。"
        }
      ];
    }
  }
};
</script>

<style scoped>
.recipeNumber span {
  font-size: 30px;
  color: #f64040;
}

.recipeNumber,
.orderBy {
  line-height: 50px;
}

.img {
  width: 150px;
  height: 100px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.recipeName {
  font-size: 28px;
  font-weight: 500;
  line-height: 50px;
}

.recipeRow {
  height: 120px;
  border-style: solid;
  border-width: 1px;
  border-color: #aaa;
  margin-bottom: 15px;
}

.oneRecipe {
  margin-top: 10px;
  margin-bottom: 10px;
}

.recipeRow:hover {
  cursor: pointer;
  background-color: #ffe7c6;
}

.profile {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
