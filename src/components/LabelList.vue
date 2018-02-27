<template>
<div class='row body'>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>菜系</div>
    <div class='col-md-10'>
      <div class='food-label col-md-1' v-for='k in cxList' @click="turnToRecipes(k)">{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event,cxList)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>菜品</div>
    <div class='col-md-10'>
      <div class='food-label col-md-1' v-for='k in cpList' @click="turnToRecipes(k)">{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event,cpList)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>口味</div>
    <div class='col-md-10'>
      <div class='food-label col-md-1' v-for='k in kwList'  @click="turnToRecipes(k)">{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event,kwList)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>厨具</div>
    <div class='col-md-10'>
      <div class='food-label col-md-1' v-for='k in cjList'  @click="turnToRecipes(k)">{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event,cjList)"></span>
  </div>
  <div class='col-md-12 one-line'>
    <div class='main-label col-md-1'>工艺</div>
    <div class='col-md-10'>
      <div class='food-label col-md-1' v-for='k in gyList'  @click="turnToRecipes(k)">{{k}}</div>
    </div>
    <span class='col-md-1 glyphicon glyphicon-chevron-down' @click="showMoreLabel($event,gyList)"></span>
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
        "家常菜",
        "私房菜",
        "快手菜",
        "热菜",
        "凉菜",
        "蒸菜",
        "创意菜",
        "下饭菜",
        "下酒菜",
        "海鲜",
        "药膳",
        "斋菜",
        "腌菜",
        "农家菜",
        "宫廷菜",
        "婴儿辅食",
        "饭",
        "炒饭",
        "盖浇饭",
        "煲仔饭",
        "粥",
        "面食",
        "面",
        "炒面",
        "粉",
        "饼",
        "油酥类面点",
        "糕点",
        "汤圆",
        "馄饨",
        "馒头",
        "饺子",
        "包子",
        "卷子",
        "烘焙",
        "蛋糕",
        "面包",
        "饼干",
        "披萨",
        "派类",
        "挞类",
        "果冻",
        "布丁",
        "冰淇淋",
        "糖果",
        "点心",
        "零食",
        "汤",
        "羹",
        "炖品",
        "甜品",
        "饮品",
        "冰品",
        "糖水",
        "沙拉",
        "茶饮",
        "酒水",
        "花草茶",
        "果汁",
        "小吃",
        "便当",
        "烧烤",
        "串烧",
        "寿司",
        "拼盘",
        "杂烩",
        "酱汁",
        "果酱",
        "火锅",
        "干锅",
        "香锅",
        "佐料",
        "自制调味料",
        "懒人食谱",
        "包子馅",
        "馄饨馅",
        "饺子馅",
        "水饺馅",
        "粽子",
        "月饼",
        "月饼馅",
        "果茶",
        "石锅拌饭",
        "谭家菜",
        "官府菜",
        "孔府菜"
      ],
      kwList: [
        "酸",
        "甜",
        "苦",
        "辣",
        "咸",
        "爽口",
        "清淡",
        "酸甜",
        "咸甜",
        "香甜",
        "微辣",
        "中辣",
        "超辣",
        "麻辣",
        "酸辣",
        "鲜辣",
        "香辣",
        "咸鲜",
        "椒盐",
        "咸香",
        "原味",
        "奶香",
        "葱香",
        "韭香",
        "蒜香",
        "酱香",
        "糟香",
        "五香",
        "蚝香",
        "鱼香",
        "果味",
        "草莓味",
        "香草味",
        "薄荷味",
        "橘子味",
        "番茄味",
        "柠檬味",
        "苹果味",
        "蓝莓味",
        "咖喱味",
        "孜然味",
        "芥末味",
        "黑椒味",
        "姜汁味",
        "茄汁味",
        "烧烤味",
        "红油味",
        "蛋黄味",
        "蟹黄味",
        "糖醋味",
        "泡椒味",
        "怪味",
        "芝士味",
        "抹茶味",
        "芝麻味",
        "巧克力味",
        "糊辣",
        "芒果味",
        "西瓜味",
        "西柚味",
        "水蜜桃味"
      ],
      cjList: [
        "炒锅",
        "平底锅",
        "煎锅",
        "蒸锅",
        "汤锅",
        "奶锅",
        "砂锅",
        "炖锅",
        "电火锅",
        "塔吉锅",
        "高压锅",
        "电压力锅",
        "空气炸锅",
        "电饭煲",
        "炖盅",
        "烤箱",
        "冰箱",
        "微波炉",
        "烧烤炉",
        "多士炉",
        "电饼铛",
        "面包机",
        "面条机",
        "榨汁机",
        "料理机",
        "豆浆机",
        "酸奶机",
        "冰淇淋机",
        "咖啡机",
        "刨冰机",
        "厨师机",
        "爆米花机",
        "华夫饼机",
        "保鲜盒",
        "打蛋器",
        "模具"
      ],
      gyList: [
        "炒",
        "爆",
        "蒸",
        "烩",
        "涮",
        "炖",
        "熬",
        "煨",
        "煎",
        "焖",
        "烧",
        "溜",
        "熏",
        "腌",
        "炸",
        "烤",
        "拌",
        "汆",
        "煮",
        "烹",
        "煸",
        "烫",
        "酿",
        "酱",
        "卤",
        "泡",
        "冻",
        "贴",
        "卷",
        "扒",
        "焗",
        "烙",
        "灼",
        "炝",
        "滚",
        "浸",
        "干煸",
        "干炒",
        "清炒",
        "滑炒",
        "爆炒",
        "酱爆",
        "葱爆",
        "干煎",
        "红焖",
        "黄焖",
        "葱焖",
        "红烧",
        "酱烧",
        "干烧",
        "葱烧",
        "醋溜",
        "滑溜",
        "铁板",
        "捞汁",
        "拔丝",
        "挂霜",
        "糖渍",
        "压榨",
        "微波",
        "焙",
        "烘",
        "扣",
        "拼",
        "淋",
        "醉",
        "塌"
      ]
    };
  },
  methods: {
    //显示更多标签
    showMoreLabel(e, list) {
      var str = $(e.target)
        .parent()
        .css("height")
        .replace("px", "");
      var h = parseInt(list.length / 12) * 36;
      if (list.length % 12 != 0) h = h + 48 + "px";
      else h = h + 12 + "px";
      if (parseInt(str) < 70) {
        $(e.target).toggleClass("glyphicon-chevron-up");
        $(e.target).toggleClass("glyphicon-chevron-down");
        $(e.target)
          .parent()
          .animate({ height: h }, 300);
      } else {
        $(e.target).toggleClass("glyphicon-chevron-up");
        $(e.target).toggleClass("glyphicon-chevron-down");
        $(e.target)
          .parent()
          .animate({ height: "48px" }, 300);
      }
    },
    //标签跳转
    turnToRecipes(k) {
      this.$router.push("/recipes/食谱标签/" + k);
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
  font-size: 15px;
  white-space: nowrap;
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
  cursor: pointer;
}
</style>
