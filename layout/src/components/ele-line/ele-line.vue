<template>
<div class="lay">
  <div class="headers">
    <span>限时购</span>
    <van-count-down :time="time">
      <template v-slot="timeData" id="border">
        <span class="block item">{{ timeData.hours }}</span>
        <span class="colon">:</span>
        <span class="block item">{{ timeData.minutes }}</span>
        <span class="colon">:</span>
        <span class="block item">{{ timeData.seconds }}</span>
      </template>
    </van-count-down>
    <span class="rights">更多></span>
  </div>
  <div class="flex-wraps">
    <div class="flexo" v-for="(item,index) in imageList" :key="index">

      <img :src="item.url" v-lazy="item.url" error /><br />

      <span>{{item.text}}</span>
      <s>{{item.span}}</s>
    </div>
  </div>
</div>
</template>
<script>
import Vue from 'vue';
import {
  Lazyload
} from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true,
});
import {
  CountDown
} from 'vant';

Vue.use(CountDown);
export default {
  name: 'ele-line',
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      imageList: [{
          url: "https://yanxuan-item.nosdn.127.net/d6424e3a512ca39b3c4461bfd59c5af3.png",
          text: '￥88',
          span: '￥108'
        },
        {
          url: "https://yanxuan-item.nosdn.127.net/c35240dc88a30c7fb569bbca843f5e1a.png",
          text: '￥129',
          span: '￥169.9'
        },
        {
          url: "https://yanxuan-item.nosdn.127.net/57103d892fa09deae9ef9e56c301f14a.png",
          text: '￥51.4',
          span: '￥79'
        },
        {
          url: "https://yanxuan-item.nosdn.127.net/e7bf3908e9a09f94993d620c433ae2d2.png",
          text: '￥101',
          span: '￥119'
        },
        {
          url: "https://yanxuan-item.nosdn.127.net/db4cb4e5ce83361510d769d380e8b90c.png",
          text: '￥99',
          span: '￥118'
        },
        {
          url: 'https://yanxuan-item.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png',
          text: '￥70',
          span: '￥108'
        }
      ]
    };
  },
}
</script>

<style>
.colon {
  display: inline-block;
  margin: 0 4px;

}

.item {
  display: inline-block;
  width: 44px;
  height: 36px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 36px;
  background-color: #333333;
  margin-left: 10px;
  margin-right: 5px;
  border-radius: 5px;
}

.lay {
  padding: 0px 30px;
}

.headers {
  position: relative;
}

.lay>.headers {
  display: flex;
  height: 100px;
  line-height: 100px;
  align-items: center;
}

.lay>.headers>span:nth-child(1) {
  font-size: 34px;
  margin-right: 10px
}

.rights {
  position: absolute;
  right: 0;
  font-size: 30px;
}

.flex-wraps {
  display: flex;
  flex-wrap: wrap;
}

.flexo {
  margin-right: 20px;
  margin-bottom: 20px;
}

.flexo:nth-child(3) {
  margin-right: 0px
}

.flexo:nth-child(6) {
  margin-right: 0px
}

.flexo img {
  height: 216px;
  width: 216px;
  background-color: #F5F5F5;
  margin-bottom: 10px
}

.flexo span {
  display: inline-block;
  color: red;
  margin-top: 10px;
  text-indent: 0.7em;
}

.flexo s {
  color: #A4A4A4;
  margin-left: 10px;
}
</style>
