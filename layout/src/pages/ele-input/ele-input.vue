<template>
<div class="item-Nodes">
  <div id="item-self">
    <div id="header-self">
      <div id="center">
        <span class="iconfont icon-sousuo"></span>
        <van-field v-model="detail" @keyup="keydown" class="textList" center clearable :placeholder="arr.keyword" />
      </div>
      <div @click="checked">取消</div>
    </div>
  </div>
  <div v-show="detail==='' " id="pig">
    <h5>热门搜索</h5>
    <ul>
      <li v-for="(item,index) in Node" :key="index">
        <div>{{item.keyword}}</div>
      </li>
    </ul>
  </div>
  <div id="olderList" v-show="!(detail==='')">
   <div id="oldermap" v-for="(item,index) in NodeList.data" :key="index">
     <div>
       {{item}}
     </div>
     <span> > </span>
   </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue';
import {
  Field
} from 'vant';
Vue.use(Field);
export default {
  name: 'ele-input',
  data() {
    return {
      list: [],
      arr: [],
      Node: [],
      detail: '',
      NodeList: []
    }
  },
  methods: {
    async keydown() {
      var dataNode = await axios({
        baseURL: '/api',
        url: '/xhr/search/searchAutoComplete.json',
        method: "POST",
        params: {
          keywordPrefix: this.detail
        }
      })
      this.NodeList = dataNode.data
    },
    checked(){
      this.$router.replace('/host')
    }
  },
  async mounted() {
    const body = await axios({
      baseURL: '/api',
      url: '/xhr/search/init.json',
      method: "POST"
    })
    this.list = await body.data.data;
    var count = Math.floor(Math.random() * this.list.defaultKeywords.length)
    this.arr = this.list.defaultKeywords[count]
    this.Node = body.data.data.hotKeywordVOList;
  }
}
</script>

<style scoped>
#olderList>#oldermap{
  height: 90px;
  width: 100%;
  background: white;
  display: flex;
  line-height: 100px;
  font-size:28px;
  border-bottom: 2px solid #eeeeee;
  padding-left:25px;
  justify-content:space-between;
  box-sizing: border-box;
  padding-right:25px;
}
#olderList>#oldermap>span{
  display: block;
  font-weight: 700;
  font-size:35px;
}
#pig {
  overflow: hidden;
}

#pig>h5 {
  margin-top: 20px;
  font-size: 30px;
  color: #999999;
}

#pig>ul {
  display: flex;
  flex-wrap: wrap;
  line-height: 15px;
}

#pig>ul>li {
  border: 2px solid rebeccapurple;
  padding: 10px;
  margin: 20px;

}

#center {
  display: flex;
  font-size: 30px;
  background-color: #eeeeee;
  box-sizing: border-box;
  align-items: center;
  padding-left: 20px;
  flex: 1;
  border-radius: 10px;
}

#center>span {
  font-size: 40px;
}

#center>input {
  height: 50px;
}

.item-Nodes {
  background-color: #EEEEEE;
  height: 100%;
  overflow: hidden;
}

#item-self {
  padding: 0px 20px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}

#header-self {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header-self>div:nth-of-type(2) {
  width: 100px;
  text-align: center;
  font-size: 28px;
}

.item-Nodes #pig {
  height: 327px;
  width: 690px;
  padding: 0px 30px 30px 30px;
  background-color: white;
}

.van-icon-clear {
  font-size: 50px !important
}

.van-cell {
  width: 90%;
  font-size: 30px
}

.van-field__control {
  width: 500px !important;
}
</style>
