<template>
    <div class="Footer row text-center">
        <div class="col-md-7">
            <a class="col-md-4 linkUs">关于我们</a>
            <a class="col-md-4 linkUs">联系我们</a>
            <a class="col-md-4 linkUs">使用帮助</a>
            <span class="col-md-12 msg-1">本站信息由网络收集及网友提供，CookUp不负责信息内容的准确性和完整性，对此亦不承担任何保证责任。</span>
            <span class="col-md-12 msg-2">Copyright © 2014 - 2018 COOKUP Inc. All Rights Never Reserved</span>
        </div>
        <div class="col-md-3 col-md-push-2">
            <div class="col-md-5">
                <img class="QR-pic"/>
            </div>
            <div class="col-md-5 col-md-push-1">
                <img class="QR-pic"/>
            </div>
            <a class="col-md-5 scanText">分享到微信</a>
            <a class="col-md-5 col-md-push-1 scanText">分享到微博</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Footer {
  height: 150px;
  background-color: #222;
}
a {
  line-height: 40px;
  text-decoration: none;
  color: #fff;
}
.QR-pic {
  margin-top: 15px;
  width: 90px;
  height: 90px;
  background: rgb(94, 94, 94);
}
.linkUs {
  font-size: 17px;
  margin-bottom: 30px;
  margin-top: 13px;
  cursor: pointer;
}
.linkUs:hover {
  color: #f00;
}
.msg-1 {
  color: #888;
  font-size: 8px;
}
.msg-2 {
  color: #575757;
  font-size: 8px;
}
.scanText {
  color: #aaa;
  font-size: 11px;
}
</style>

