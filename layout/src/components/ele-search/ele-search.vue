<template>
<div id="appNode">
  <div id="border">
    <div id="flex" v-for="(item,index) in imgNode" :key="index">
      <span>{{item.text}}</span>
      <span>{{item.span}}</span>
      <img :src="item.url"  v-lazy="item.url"/>
      <img :src="item.urlNode"  v-lazy="item.urlNode"/>
    </div>
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
  name: 'ele-search',
  data() {

    return {
      imgNode: [{
        url:'https://yanxuan-item.nosdn.127.net/5191271233a26fb5b30708cb27625816.png',
        urlNode:'https://yanxuan-item.nosdn.127.net/758b098102d7b82ccabcfd95b25b02c3.png',
        text:'严选超市',
        span:'10元凑好物'
     },
     {
       url:'https://yanxuan-item.nosdn.127.net/967cc4d8140d27299cc1bc4d20294df7.png',
       urlNode:'https://yanxuan-item.nosdn.127.net/aa436fa42dc09938c7f985c071503569.png',
        text:'口罩购买',
        span:'保供1.4/只'
     },
     {
       url:'https://yanxuan-item.nosdn.127.net/3c201fe2257a7b3b8951e66bf3b1430f.png',
      urlNode:'https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png',
      text:'员工精选',
      span:'天天内部价'
    },
    {
      url:'https://yanxuan-item.nosdn.127.net/cfd0fec5e70ca09d4c0b7492dba26f2e.png',
      urlNode:'https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png',
      text:'回购榜单',
      span:'天天内部价'
    }
     ]
    }
  }
}
</script>

<style>
#appNode {
  padding: 0px 30px
}

#border {
  display: block;
  margin-top: 20px;
    display: flex;
  flex-wrap: wrap;
}

#flex {
  width: 323px;
  height: 244px;
  background-color: #F6F6F6;
  padding-top:20px;
  padding-left:20px;
    margin-right:2px;
    margin-bottom:10px;
}
#flex:nth-child(2){
  margin-right: 0px;
}
#flex>span:nth-child(1){
  font-size:32px;
  display: block;
  margin-top:10px;
}
#flex>span:nth-child(2){
  font-size:12px;
  display: block;
  margin-top:10px;
  color: #7F7F7F;
}
#flex>img{
height: 150px;
width: 150px;
}
</style>
