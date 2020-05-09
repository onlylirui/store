<template>
<lazy-component>
<div class="ele-footer">
  <span class="bottom">-新人专享好礼-</span>
  <div class="flexs">
    <div class="left">
        <div class="left-nav">新人专享礼包</div>
       <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"/>
    </div>
    <div class="right">
        <div class="right-top togger">
            <span>福利社</span>
            <span>今日特价</span>
            <img src="./1.png"/>
            <div>
                <span>￥89</span>￥69
            </div>
        </div>
        <div class="right-bottom togger">
            <span>新人拼团</span>
            <span>1元起包邮</span>
           <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png"/>
            <div>
                <span>￥89</span>￥69
            </div>
        </div>
    </div>
  </div>
  <div class="line-Node"></div>
  <div class="category">类目热销榜</div>
  <ele-button></ele-button>
</div>
</lazy-component>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
import buttom from '../ele-bottom/ele-bottom.vue'
export default {
  name: 'ele-footer',
  components: {
      "ele-button":buttom
  }
}
</script>

<style>
.ele-footer>.bottom {

  font-size: 35px;
  top: 1150px;
  height: 40px;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 80px;
}
.flexs{
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 35px;
}
.flexs>.left {
  height: 434px;
  width: 343px;
  background: #F9E9CF;
  margin-top:30px;
  border-radius: 10px;
  padding-top: 30px;
  padding-left:30px;
  box-sizing: border-box;
  position: relative;
}
.flexs>.left>.left-nav{
   font-size: 32px;
}
.flexs>.left>img{
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    width: 258px;
    height: 257px;
    vertical-align: middle;
    text-align: center;
}
.right-top{
    width: 343px;
    height: 215px;
    background-color:#F9E9CF;
    margin-top:30px;
    border-radius: 10px;
    margin-left: 2px;
    padding-top:20px;
    padding-left: 30px;
    box-sizing: border-box;
    position: relative;
}
.togger>span:nth-of-type(1){
    display: block;
    font-size: 32px;
    margin-top:10px
}
.togger>span:nth-of-type(2){
    font-size:24px;
    display: block;
    margin-top: 10px;
    color:#7F7F7F
}
.togger>img{
    height:200px;
    width: 200px;
    position: absolute;
    right: 0px;
    top: 0px;
}
.togger>div{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background: orange;
    opacity: 0.7;
    color: white;
    text-align: center;
    padding-top: 5px;
    box-sizing: border-box;
    position: absolute;
    right: 30px;
    top: 10px;
}
.togger>div>span{
    margin-top:10px;
    display: block;
}

.right-bottom{
      width: 343px;
    height: 215px;
     padding-top:20px;
    padding-left: 30px;
    background-color:#FFECC2;
    border-radius: 10px;
    margin-left: 2px;
    margin-top: 2px;
    position: relative;
    box-sizing: border-box;
}
.right-bottom>span:nth-of-type(2){
    display: block;
    height: 32px;
    width: 120px;
    background-color:#D2BD99;
    color: white;
    font-size: 20px;
    text-align:center;
    line-height: 32px;
}
.line-Node{
    height: 20px;
    width: 750px;
    background-color: #EEEEEE;
    margin-top:30px
}
.category{
    font-size: 34px;
    height: 100px;
    width:100%;
    line-height: 100px;
    margin-left: 35px;
}
</style>
