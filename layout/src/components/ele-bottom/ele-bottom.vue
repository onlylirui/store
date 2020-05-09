<template>
<div>
  <div class="footer-item">
    <div class="item-first">
      <span>热销榜</span>
      <img src="https://yanxuan-item.nosdn.127.net/15f7d8d9535f72d91d8a9230432f784b.png" />
    </div>
    <div class="item-first scond">
      <span>好评榜</span>
      <img src="https://yanxuan-item.nosdn.127.net/20660d42a6dc483d91b90664f3b7f6ce.png">
    </div>
    <div class="box" v-for="(item,index) in list" :key="index">
      <div>{{item.text}}</div>
      <img :src="item.url" v-lazy="item.url" />
    </div>
  </div>
  <div class="line-Nodes"></div>
  <div class="footer-router">
    <div class="gory">
      人气推荐
      <span>更多></span>
    </div>
    <div class="left-color">
      <img src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png" />
      <div class="L-right">
        <span>母亲节特惠</span>
        <span>15分钟快速救脸，射频多...</span>
        <span>掌心里的'美容院'</span>
        <span>￥759</span>
      </div>
    </div>
    <div class="layout">
      <div class="flex-layout">
        <img src="https://yanxuan-item.nosdn.127.net/093cc020e9b5e1bd6736f7bc72bf9227.png" />
        <span>[浙江专供]一次性日常防护...</span>
        <div>￥80</div>
      </div>
      <div class="flex-layout second">
        <img src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png" />
        <h6>2<br />个<br />口<br />味<br /></h6>
        <span>告别啃食尴尬，秘制无骨凤爪...</span>
        <div>￥22</div>
      </div>
      <div class="flex-layout">
        <h6>4<br />色<br />可<br />选<br /></h6>
        <img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png" />
        <span>轻弹云朵家拖鞋</span>
        <div>￥9.9</div>
      </div>
    </div>
  </div>
  <div class="line-Node" id="code"></div>
  <ele-line></ele-line>
  <div class="line-Node" id="codes"></div>
  <ele-hot></ele-hot>
  <div class="line-Node" id="coded"></div>
  <ele-search></ele-search>
  <div class="line-Node" id="codesdd"></div>
  <div id="footer">
    <span>下载APP</span>
    <span>电脑版</span>
    <div class="fx">网易公司版权所有 @1997-2020</div>
    <div class="fx">视频经营许可证:JY13301080111719</div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import {
  Lazyload
} from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
import search from '../ele-search/ele-search.vue'
import line from '../ele-line/ele-line.vue'
import hot from '../ele-hot/ele-hot.vue'
export default {
  name: 'ele-bottom',
  components: {
    "ele-line": line,
    "ele-hot": hot,
    "ele-search": search
  },
  data() {
    return {
      list: [{
          text: '居家生活榜',
          url: 'https://yanxuan-item.nosdn.127.net/91a264d84fed57f97c48dc107370e941.png'
        },
        {
          text: '美食酒水榜',
          url: 'https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png'
        },
        {
          text: '个人清洁榜',
          url: 'https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png'
        },
        {
          text: '服饰鞋包榜',
          url: 'https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png'
        },
        {
          text: '数码家电榜',
          url: 'https://yanxuan-item.nosdn.127.net/51348ec7731f5ed5c4bb9e0bed88717c.png'
        },
        {
          text: '严选全球榜',
          url: 'https://yanxuan-item.nosdn.127.net/7bb60cd94cb436726b8db296fda698fc.png'
        },
        {
          text: '母婴新亲子榜',
          url: 'https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png'
        },
        {
          text: '运动旅行榜',
          url: 'https://yanxuan-item.nosdn.127.net/797a29814fea9f623efb204d96fd3e3e.png'
        }
      ],
    }
  }
}
</script>

<style>
#footer {
  height: 162px;
  width: 710px;
  padding: 54px 20px 28px 20px;
  background-color: #414141;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#footer>span {
  display: inline-block;
  height: 60px;
  width: 170px;
  border: 2px solid #eeeeee;
  text-align: center;
  line-height: 60px;
  color: white;
}

#footer>span:nth-child(2) {
  margin-left: 50px;
}

.fx {
  color: #919191;
}

#codesdd {
  margin-top: 20px;
}

#code {
  margin-top: 50px
}

#codes {
  margin-top: 30px
}

#coded {
  margin-top: 100px;
}

.footer-item {
  margin-left: 35px;
  display: flex;
  flex-wrap: wrap;
}

.item-first {
  width: 340px;
  height: 200px;
  background-color: #F9F3E4;
  margin-right: 4px;
  position: relative;
}

.scond {
  background-color: #EBEFF6;
}

.box {
  width: 165px;
  height: 180px;
  background-color: #F5F5F5;
  margin-right: 7.5px;
  position: relative;
  margin-bottom: 10px;
}

.box>div {
  text-align: center;
  padding-top: 20px;
  box-sizing: border-box;
}

.box img {
  height: 120px;
  width: 120px;
  vertical-align: middle;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.line-Nodes {
  height: 20px;
  width: 750px;
  background-color: #EEEEEE;
  margin-top: 10px
}

.gory {
  font-size: 34px;
  height: 100px;
  line-height: 100px;
}

.gory>span {
  float: right;
  font-size: 30px
}

.footer-router {
  padding: 0px 35px;
  height: auto;
}

.item-first>span {
  display: block;
  margin-top: 60px;
  font-size: 30px;
  margin-left: 30px;
  position: relative;
}

.item-first>span::after {
  content: "";
  display: block;
  height: 4px;
  width: 48px;
  background-color: #A29E96;
  position: absolute;
  top: 50px;
}

.item-first>img {
  height: 200px;
  width: 200px;
  position: absolute;
  right: 0px;
  top: 0px;
}

.left-color {
  width: 690px;
  height: 280px;
  background-color: #FEF5E9;
  display: flex;
}

.left-color>img {
  height: 280px;
  width: 280px;
}

.left-color>.L-right>span {
  display: block;
}

.left-color>.L-right {
  margin-top: 60px;
}

.left-color>.L-right>span:nth-child(1) {
  height: 30px;
  width: 120px;
  border: 1px solid red;
  border-radius: 25px;
  padding: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 30px;
  color: red;
}

.left-color>.L-right>span:nth-child(2) {
  font-size: 30px;
  margin-top: 15px
}

.left-color>.L-right>span:nth-child(3) {
  color: #BFB8B0;
  margin-top: 10px
}

.left-color>.L-right>span:nth-child(4) {
  color: red;
  margin-top: 10px
}

.layout {
  display: flex;
  margin-top: 20px;
  width: 216px;
}

.layout>.flex-layout>img {
  height: 216px;
  width: 216px;
  background-color: #F5F5F5;
}

.flex-layout {
  margin-right: 20px;
  position: relative;
}

.flex-layout>span {
  margin-top: 10px;
  display: block;
  line-height: 40px;
  text-indent: 0.6em
}

.flex-layout>div {
  color: red;
  font-size: 30px;
  margin-top: 10px
}

.flex-layout>h6 {
  border: 2px solid #D5CCB9;
  color: #D5CCB9;
  width: 30px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  position: absolute;
  top: 15px;
  left: 10px;
}
</style>
