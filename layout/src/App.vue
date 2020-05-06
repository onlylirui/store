<template>
  <div id="app">
    <router-view></router-view>
<van-tabbar v-model="active" class="active" active-color="red">
  <van-tabbar-item class="iconfont icon-fangzi " replace to="/host">
    <div class="text">首页</div>
  </van-tabbar-item>
  <van-tabbar-item class="iconfont icon-fenlei"  replace to="/search">
    <div class="text">分类</div>
  </van-tabbar-item>
  <van-tabbar-item class="iconfont icon-zhaopian"  replace to="/shop">
     <div class="text">值得买</div>
  </van-tabbar-item>
  <van-tabbar-item class="iconfont icon-gouwuche"  replace to="/gooing">
    <div class="text">购物车</div>
  </van-tabbar-item>
   <van-tabbar-item class="iconfont icon-ren" replace to="/person">
    <div class="text">个人</div>
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
import './state/font/iconfont.css'
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
   name:'App',
   data(){
     return {
       active:0,
     }
   }
}
</script>
<style>
	/*每个页面公共css */
  #app{
    height:100%;
    width:100%;
     overflow: hidden;
  }
.iconfont{
  font-size:40px;
}
.text{
  font-size: 12px;
}
.active{
  position: absolute;
  bottom: 20px;
}
</style>