<template>
<div>
   <div class="flex">
    <div class="center">
      <span class="iconfont icon-sousuo"></span>
      <span>搜索商品，共26219款好物</span>
    </div>
  </div>
    <div id="list-Node" ref="Nodes">
      <ul>
        <li :class="{living:index===inded}" @click="change(index)" v-for="(item,index) in lists" :key="index">
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>
   <div id="list-bottom">
      <img :src="img"/>
    <div id="wrap"  v-for="(item,index) in array" :key="index">
    </div>
    <div ref="jp" id="bog">
    <ul>
      <li v-for="(item,index) in add" :key="index"> 
          <img :src="item.wapBannerUrl"  v-lazy="item.wapBannerUrl"/>
          <span>{{item.name}}</span>
      </li>
    </ul>
    </div>
   </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
import axios from 'axios'
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
export default {
name:'ele-search',
data(){
  return {
    lists:[],
    array:[],
    img:'',
    inded:0
  }
},
methods:{
  async change(index){
     var bodys = await axios({
      baseURL: 'http://localhost:8080/3001',
      url: '/getCateLists',
      method: 'GET'
    })
    this.array=bodys.data[index]
    this.img=bodys.data[index].imgUrls
    this.inded=index
  }
},
computed: {
   add(){
     return this.array.categoryList?this.array.categoryList:this.array.subCateList
   }
},
async mounted () {
     var body = await axios({
      baseURL: 'http://localhost:8080/3001',
      url: '/getCateNavDatas',
      method: 'GET'
    })
   var ss=new BScroll(this.$refs.Nodes, {
        scrollY: true,
        click: true,
      })
      new BScroll(this.$refs.jp, {
        scrollY: true,
        click: true,
      })
    this.lists=body.data.categoryL1List;
      var bodys = await axios({
      baseURL: 'http://localhost:8080/3001',
      url: '/getCateLists',
      method: 'GET'
    })
    this.array=bodys.data[0]
    this.img=bodys.data[0].imgUrls
}
}
</script>

<style>
#bog{
  height: 1036px;
  overflow: hidden;
}
.living::after{
  content:'';
  display: block;
  height:70px;
  width: 4px;
  background-color: red;
  position: absolute;
  left: 0px;
  top:50%;
transform: translateY(-25%);
}
#list-bottom ul{
  display: flex;
  flex-wrap: wrap;
}
#list-bottom ul>li{
  width:144px;
  margin-left:20px;
  text-align:center;
}
#list-bottom ul>li>img{
  height: 144px;
  width: 144px;
}
#list-bottom ul>li>span{
  display: block;
}
.center>span:nth-child(2){
  font-size:26px;
  color: #A3A3A3;
}
#list-Node{
  height: 1148px;
  width: 162px;
  border: 2px solid #EDEDED;
  float: left;
  position: relative;
  overflow: hidden;
}
#list-Node>ul>li{
  height: 80px;
  text-align:center;
  line-height: 120px;
  font-size:30px
}
#list-bottom{
  height: 1148px;
  width: 100%;
  border: 2px solid #EDEDED;
}
#list-Node>ul{
  display: block;
  height: 1300px;
}
#list-Node>ul>li{
  position: relative;
}
#list-bottom>img{
  width:528px;
  height: 192px;
  margin-top:20px;
  margin-left:20px;
}
</style>