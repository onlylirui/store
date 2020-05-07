<template>
<div>
  <ul class="listNode">
    <li v-for="(item,index) in list.policyDescList" :key="index">
      <img :src="item.icon"/>
      <span>{{item.desc}}</span>
      </li>
  </ul>
   <ul class="ulNode">
     <li :v-if="add.kingKongList" v-for="(item,index) in add.kingKongList" :key="index">
       <img :src="item.picUrl">
       <span>{{item.text}}</span>
     </li>
   </ul>
   <div class="footer">
   <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif"/>
   </div>
    <ele-footer></ele-footer>
</div>
</template>

<script>
import footer from '../ele-footer/ele-footer.vue'
import axios from 'axios'
export default {
name:'ele-list',
data(){
return {
  list:[]
}
},
computed: {
  add(){
   return this.$store.state.listNode
  }
},
components: {
   "ele-footer":footer
},
async mounted () {
  var body=await axios({
    baseURL:'http://localhost:8081/3001',
    url:'/getIndexData',
    method:'GET'
  })
  this.list=body.data
  this.$store.commit('add',{listNode:body.data.kingKongModule})

}
}
</script>

<style>
.listNode{
  display: flex;
 padding: 0px 40px;
}
.listNode>li{
  display: inline-block;
  height: 68px;
   flex: 1;
   line-height: 68px;
   align-items: center;
}
.listNode>li>img{
  height: 32px;
  width: 32px;
  vertical-align: middle;
}
.listNode>li>span{
  vertical-align: middle;
}
.ulNode{
  display: flex;
  flex-wrap: wrap;
}
.ulNode>li{
  	width: 20%;
	height:160px;

	display: flex;
	flex-direction: column;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-webkit-box-align: center;
	-webkit-align-items: center;
    align-items: center;
	 font-size: 24upx;
}
.ulNode>li>img{
 width: 110px;
height: 110px;
padding-bottom: 10px;
}  
.footer{
  margin-top: 10px;
}
.footer>img{
  width: 750px;
  height: 240px;
}
</style>