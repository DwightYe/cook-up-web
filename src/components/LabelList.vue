<template>
<div class='row body'>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>菜系</div>
    <div class='col-md-10'>
      <div class='food-label' v-for='k in cxList'>{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>菜品</div>
    <div class='col-md-10'>
      <div class='food-label' v-for='k in cpList'>{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>口味</div>
    <div class='col-md-10'>
      <div class='food-label' v-for='k in kwList'>{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>厨具</div>
    <div class='col-md-10'>
      <div class='food-label' v-for='k in cjList'>{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>工艺</div>
    <div class='col-md-10'>
      <div class='food-label' v-for='k in gyList'>{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event)"></span>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cxList: [
        "川菜",
        "湘菜",
        "粤菜",
        "闽菜",
        "浙菜",
        "鲁菜",
        "苏菜",
        "徽菜",
        "京菜",
        "天津菜",
        "上海菜",
        "渝菜",
        "东北菜",
        "清真菜",
        "晋菜",
        "赣菜",
        "湖北菜",
        "云南菜",
        "贵州菜",
        "新疆菜",
        "淮扬菜",
        "潮州菜",
        "客家菜",
        "广西菜",
        "西北菜",
        "香港美食",
        "台湾菜",
        "澳门美食",
        "西餐",
        "日本料理",
        "韩国料理",
        "泰国菜",
        "越南菜",
        "意大利菜",
        "墨西哥菜",
        "西班牙菜",
        "法国菜",
        "美国菜",
        "巴西烧烤",
        "东南亚菜",
        "印度菜",
        "伊朗菜",
        "土耳其菜",
        "澳大利亚菜"
      ],
      cpList: [
        "川菜",
        "湘菜",
        "粤菜",
        "闽菜",
        "浙菜",
        "鲁菜",
        "苏菜",
        "徽菜",
        "京菜",
        "天津菜",
        "上海菜",
        "渝菜",
        "东北菜",
        "清真菜",
        "晋菜",
        "赣菜",
        "湖北菜",
        "云南菜",
        "贵州菜",
        "新疆菜",
        "淮扬菜",
        "潮州菜",
        "客家菜",
        "广西菜",
        "西北菜",
        "香港美食",
        "台湾菜",
        "澳门美食",
        "西餐",
        "日本料理",
        "韩国料理",
        "泰国菜",
        "越南菜",
        "意大利菜",
        "墨西哥菜",
        "西班牙菜",
        "法国菜",
        "美国菜",
        "巴西烧烤",
        "东南亚菜",
        "印度菜",
        "伊朗菜",
        "土耳其菜",
        "澳大利亚菜"
      ],
      kwList: [
        "川菜",
        "湘菜",
        "粤菜",
        "闽菜",
        "浙菜",
        "鲁菜",
        "苏菜",
        "徽菜",
        "京菜",
        "天津菜",
        "上海菜",
        "渝菜",
        "东北菜",
        "清真菜",
        "晋菜",
        "赣菜",
        "湖北菜",
        "云南菜",
        "贵州菜",
        "新疆菜",
        "淮扬菜",
        "潮州菜",
        "客家菜",
        "广西菜",
        "西北菜",
        "香港美食",
        "台湾菜",
        "澳门美食",
        "西餐",
        "日本料理",
        "韩国料理",
        "泰国菜",
        "越南菜",
        "意大利菜",
        "墨西哥菜",
        "西班牙菜",
        "法国菜",
        "美国菜",
        "巴西烧烤",
        "东南亚菜",
        "印度菜",
        "伊朗菜",
        "土耳其菜",
        "澳大利亚菜"
      ],
      cjList: [
        "川菜",
        "湘菜",
        "粤菜",
        "闽菜",
        "浙菜",
        "鲁菜",
        "苏菜",
        "徽菜",
        "京菜",
        "天津菜",
        "上海菜",
        "渝菜",
        "东北菜",
        "清真菜",
        "晋菜",
        "赣菜",
        "湖北菜",
        "云南菜",
        "贵州菜",
        "新疆菜",
        "淮扬菜",
        "潮州菜",
        "客家菜",
        "广西菜",
        "西北菜",
        "香港美食",
        "台湾菜",
        "澳门美食",
        "西餐",
        "日本料理",
        "韩国料理",
        "泰国菜",
        "越南菜",
        "意大利菜",
        "墨西哥菜",
        "西班牙菜",
        "法国菜",
        "美国菜",
        "巴西烧烤",
        "东南亚菜",
        "印度菜",
        "伊朗菜",
        "土耳其菜",
        "澳大利亚菜"
      ],
      gyList: [
        "川菜",
        "湘菜",
        "粤菜",
        "闽菜",
        "浙菜",
        "鲁菜",
        "苏菜",
        "徽菜",
        "京菜",
        "天津菜",
        "上海菜",
        "渝菜",
        "东北菜",
        "清真菜",
        "晋菜",
        "赣菜",
        "湖北菜",
        "云南菜",
        "贵州菜",
        "新疆菜",
        "淮扬菜",
        "潮州菜",
        "客家菜",
        "广西菜",
        "西北菜",
        "香港美食",
        "台湾菜",
        "澳门美食",
        "西餐",
        "日本料理",
        "韩国料理",
        "泰国菜",
        "越南菜",
        "意大利菜",
        "墨西哥菜",
        "西班牙菜",
        "法国菜",
        "美国菜",
        "巴西烧烤",
        "东南亚菜",
        "印度菜",
        "伊朗菜",
        "土耳其菜",
        "澳大利亚菜"
      ]
    };
  },
  methods: {
    showMoreLabel(e) {
      $(e.target).parent().animate({height:'100px'},1000);
    }
  }
};
</script>

<style scoped>
.body {
  width: 90%;
  margin-left: 5%;
}
.food-label {
  color: #222;
  line-height: 36px;
  margin-right: 15px;
  font-size: 15px;
  float: left;
  cursor: pointer;
}
.food-label:hover {
  color: #ff6767;
}
.main-label {
  line-height: 36px;
}
.one-line {
  margin-bottom: 18px;
  border-bottom: 1px solid #ddd;
  height: 48px;
  overflow: hidden;
}
span {
  line-height: 36px;
}
</style>
