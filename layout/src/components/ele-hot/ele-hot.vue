<template>
  <div class="news">
   <div class="header-list">
   <span>新品首发</span>
   <span>更多></span>
   </div>
   <div class="border-Left">
    <div class="live" v-for="(item,index) in listNode" :key="index">
      <img :src="item.url"  v-lazy="item.url"/>
      <span>{{item.text}}</span>
      <h6>{{item.price}}</h6>
    </div>
    <span class="min">明星商品日</span>
     <span class="min" id="mins">新品尝鲜价</span>
   </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
export default {
name:'ELE-HOT',
data(){
  return {
    listNode:[
      {
        url:'https://yanxuan-item.nosdn.127.net/eff3560baa193699b282f8e06d2d94dd.png',
        text:'高钙高蛋白，蟹酥酥30克',
        price:'￥19'
      },
      {
        url:'https://yanxuan-item.nosdn.127.net/7bf27c095ad20cc1676173f9e96c15e9.png',
        text:'网易智造无烟便携艾灸盒(APP智能版)',
        price:'￥289'
      },
      {
        url:'https://yanxuan-item.nosdn.127.net/4161e643444ff671f522cf7e857c6a81.png',
        text:'男式吸湿速干运动基础T恤',
        price:'￥49'
      },
      {
        url:'https://yanxuan-item.nosdn.127.net/c8596bd789e89cc8c84313bd444904bd.png',
        text:'甜过初恋的荔量,荔枝红茶12袋',
        price:'￥39'
      },
      {
        url:'https://yanxuan-item.nosdn.127.net/b9b963cf75da818a97451a556136ea07.png',
        text:'遇水发泡自动清洁日本马桶清洁泡腾...',
        price:'￥10.9'
      },
       {
        url:'https://yanxuan-item.nosdn.127.net/c71b2b8c36c7ce4fcd3779f69bbb4b82.png',
        text:'空气清新持久芳香日本消臭元芳香剂...',
        price:'￥38'
      },
    ]
  }
}
}
</script>

<style>
.news{
  padding: 0px 30px;
}
.news>.header-list{
  height: 100px;
  line-height:100px;
}
.news>.header-list>span:nth-child(1){
  display: inline-block;
  font-size: 34px;
}
.news>.header-list>span:nth-child(2){
  float: right;
  font-size: 30px;
}
.border-Left{
  display: flex;
  flex-wrap: wrap;
}
.live{
  width: 216px;
  margin-right:20px;
}
.live:nth-child(3){
   margin-right:0px;
}
.live:nth-child(6){
   margin-right:0px;
}
.live>img{
  height: 216px;
  width: 216px;
}
.live>span{
  display: block;
  margin-top:20px;
  line-height: 36px;
}
.live>h6{
  margin-top:5px;
  color: red;
  font-size:30px;
}
.border-Left{
  position: relative;
}
.min{
  color: red;
  display: block;
  border: 2px solid red;
  border-radius: 20px;
  padding: 5px;
  position: absolute;
  top:350px;
  left:50%;
  transform: translateX(-80%);
}
.live:nth-child(4){
  margin-top:60px
}
.live:nth-child(5){
  margin-top:60px
}
.live:nth-child(6){
  margin-top:60px
}
#mins{
  top:765px;
  padding-top:3px;
}
</style>