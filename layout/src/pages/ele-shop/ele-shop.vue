<template>
<div class="wrap-live">
  <div id="flex-wrap">
    <h1 class="iconfont icon-fangzi"></h1>
    <span>值得买</span>
    <h2 class="iconfont icon-sousuo"></h2>
    <h3 class="iconfont icon-gouwuche"></h3>
  </div>
  <div class="itemd" ref="ss">
    <div id="footer-view">
      <img id="header-tops" src="./12.png">
      <header>
        <img src="./13.png" />
        <span>严选购物 用心生活</span>
      </header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" id="border-color">
            <div id="scond" v-for="(item) in date[0]" :key="item.id">
              <img :src="item.picUrl" />
              <span>{{item.mainTitle}}</span>
              <h6>{{item.viceTitle}}</h6>
            </div>
          </div>
          <div class="swiper-slide" id="border-color">
            <div id="scond" v-for="(item) in date[1]" :key="item.id">
              <img :src="item.picUrl" />
              <span>{{item.mainTitle}}</span>
              <h6>{{item.viceTitle}}</h6>
            </div>
          </div>
        </div>
      </div>
        <div id="footer-list">
          <div id="listod" v-for="(item,index) in first" :key="index">
            <div id="itemo" v-for="(img,index) in item.topics" :key="index">
              <img :src="img.newAppBanner?img.newAppBanner:img.picUrl" /><br />
              <sapn class="easy">{{img.title}}</sapn>
              <div id="Noded">
                <img :src="img.avatar" />
                <span>{{img.nickname}}</span>
                <img src="./6.png" />
                <span>{{Math.round(img.readCount/ 100) / 10 + 'K'}}</span>
              </div>
            </div>
          </div>
          </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import Swiper from 'swiper'
import jsonp from 'jsonp'
import BScroll from "better-scroll";
import '../../state/font/iconfont.css'
export default {
  name: 'shop',
  data() {
    return {
      date: [],
      dateNode: [],
      first: []
    }
  },
  async mounted() {
    var body = await axios({
      url: 'http://localhost:8080/3001/getnavWap',
      method: 'GET',
    })
    this.date = body.data.data.navList;
    this.date = _.chunk(this.date, 8)
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        // 垂直切换选项
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true
      })
    })
    var bodys = await axios({
      baseURL: '/api',
      url: '/topic/v1/find/recAuto.json',
      method: 'GET',
      params: {
        page: 1,
        size: 1
      }
    })
    this.dateNode = bodys.data.data;
    var bodyes = await axios({
      baseURL: '/api',
      url: '/topic/v1/find/recManual.json',
      method: 'GET',
    });
    this.first = bodyes.data.data;
    this.$nextTick(() => {
      new BScroll(this.$refs.ss, {
        scrollX: true,
        click: true,
      })
    })
  }
}
</script>

<style>
#footer-view>img {
  position: absolute;
  top: 0px;
  left: 0px
}

.easy {
  width: 375px;
  display: block;
  margin-top: 10px;
  font-size: 30px
}

#listod {
  display: flex;
  flex-wrap: wrap;
  width: 345px;
  float: left;
}

#listod>div {
  width: 375px;
  float: left;
}

#listod>img {
  border-radius: 10px;
  float: left;

}

#listod:nth-child(2) {
  width: 750px;
}

.itemd {
  height: 100%;
  overflow: hidden;
}

#item-type {
  height: 100%;

}

#footer-list {
  float: left;
  margin-top: 30px;
}

.egg {
  float: left;
}

#footer-list img {
  height: 345px;
  width: 345px;
}

.wrap-live {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.itemd {
  position: relative;
}

#border-color {
  height: auto;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-top: 15px;
}

#scond {
  display: flex;
  width: 170px;
  flex-wrap: wrap;
  height: auto;
  margin-top: 30px;
  text-align: center;
  justify-content: center;
  display: inline-block;
  margin-left: 5px
}

#scond>span {
  display: block;
  margin-top: 10px;
  color: #656565;
  font-weight: 700;
  font-size: 30px;
}

#scond>h6 {
  margin-top: 7px;
}

#scond>img {
  height: 120px;
  width: 120px;
}

#footer-view {
  height: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 18px;
  position: absolute;
  top: 0px
}

#header-tops {
  height: 518px;
  width: 750px;
  overflow: hidden;
  display: inline-block;
}

#flex-wrap {
  height: 100px;
  padding: 0px 26px 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between
}

#flex-wrap>h1 {
  font-size: 60px;
  flex: 1;
}

#flex-wrap>span {
  font-size: 40px;
  flex: 1;
}

#flex-wrap>h2 {
  font-size: 50px;
  flex: 0;
}

#flex-wrap>h3 {
  font-size: 50px
}

header {
  margin-top: 50px;
  position: relative;
}

header>img {
  width: 130px;
  height: 70px;
}

header>span {
  font-size: 30px;
  color: white;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
}

#Noded {
  margin-top: 30px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}

#Noded>img:nth-child(1) {
  height: 48px;
  width: 48px;
  border-radius: 50%;
}

#Noded span:nth-of-type(1) {
  display: inline-block;
  margin-left: 10px
}

#Noded>img:nth-of-type(2) {
  height: 32px;
  width: 32px;
  margin-left: 60px
}

#Noded span:nth-of-type(2) {
  display: inline-block;
  margin-left: 10px
}
#van{
  height: 100%;
}
</style>
