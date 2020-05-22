<template>
<div>
  <div class="flex">
    <img src="../../state/images/logo.png" />
    <div class="center">
      <span class="iconfont icon-sousuo"></span>
      <input @click="input" class="textList" type="text" placeholder="搜索商品，共26219款好物"/>
    </div>
    <div class="button">登录</div>
  </div>
  <div ref="itemNode" class="items">
    <div class="scroll">
      <div class="wrap itemss" :class="{wraps:indexList===0}" @click="changed(0)">推荐</div>
      <div class="wrap itemss" :class="{wraps:index+1===indexList}" v-for="(item,index) in list" :key="item.id" @click="changed(index+1)">
        {{item.name}}
      </div>
    </div>
  </div>
  <div ref="scroll" class="borderNode">
    <div class="border-content">
      <swiper class="list" ref="mySwiper" :options="swiperOptions">
        <swiper-slide><img src="https://yanxuan.nosdn.127.net/da161a29b137b7e06f193f861032853b.jpg" /></swiper-slide>
        <swiper-slide><img src="https://yanxuan.nosdn.127.net/b31d102f53aca8590919c4eef56c06d1.jpg" /></swiper-slide>
        <swiper-slide><img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg" /></swiper-slide>
        <swiper-slide><img src="https://yanxuan.nosdn.127.net/a16ac18c02bb26755dbcac1911631aa0.jpg" /></swiper-slide>
        <swiper-slide><img src="https://yanxuan.nosdn.127.net/c3cbd397a24aeb2d55ffe7138bab2065.jpg"></swiper-slide>
        <swiper-slide><img src="http://yanxuan-miaobi.nos-jd.163yun.com/3988954_1_3_wap_a54690d5bf49aad12d2045e02470a901.jpg"></swiper-slide>
        <swiper-slide><img src="https://yanxuan.nosdn.127.net/3f9c98c377ae0470c82f808016144697.jpg"></swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
      <ele-list></ele-list>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
};
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import BScroll from "better-scroll";
import axios from 'axios'
import list from '../../components/ele-list/ele-list.vue'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
export default {
  name: 'ele-host',
  components: {
    "ele-list": list
  },
  methods: {
    changed(item) {
      this.indexList = item
    },
    input(){
     this.$router.replace('/input')
    }
  },
  data() {
    return {
      swiperOptions: {
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        // Some Swiper option/callback...
      },
      indexList: 0,
      styleobj: []
    }
  },
  computed: {
    swiper: {
      get: function () {
        return this.$refs.mySwiper.$swiper
      },
    },
    list: {
      get: function () {
        return this.$store.state.list
      }
    }
  },
  async mounted() {
    var body = await axios({
      baseURL: 'http://localhost:8080/3001',
      url: '/getCateGorysListData',
      method: 'GET'
    })
    this.list = body.data
    this.$nextTick(() => {
      new BScroll(this.$refs.itemNode, {
        scrollX: true,
        click: true,
      })
      new BScroll(this.$refs.scroll, {
        click: true
      })
    });
    this.$store.commit('inc', {
      list: body.data
    })
  }
}
</script>

<style>
.textList{
  background-color:#EEEEEE;
  width: 300px;
}
.listhot {
  height: 80px;
  width: 80px;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;

  font-size: 30px
}

.flex {
  display: flex;
  padding: 15px 30px;
  align-items: center;
}

.flex img {
  width: 138px;
  height: 40px;
}

.flex .center {
  flex: 1;
  height: 56px;
  background-color: #eeeeee;
  border-radius: 10px;
  line-height: 56px;
  text-align: center;
  margin-left: 15px
}

.icon-sousuo {
  font-size: 30px;
  margin-right: 10px;
}

.center:nth-child(2) {
  font-size: 25px;
}

.button {
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  border: 2px solid red;
  line-height: 35px;
  text-align: center;
  margin-left: 15px;
  border-radius: 10px;
  color: red
}

.scroll {
  display: flex;
  padding-left: 35px;
  white-space: nowrap;
  width: 1292px;
  transition-timing-function: none
}

.items {
  display: inline-block;
  width: 750px;
  overflow: hidden;
}

.itemss {
  font-size: 28px;
  padding: 0 15px;
  height: 80px;
  line-height: 80px;
  display: inline-block;
}

.list {
  width: 100%;
  height: 300px;
  display: inline-block;
}

.list img {
  height: 370px;
  width: 750px;
}

.borderNode {
  height: 1168px;
  overflow: hidden;
}

.border-content {
  overflow: hidden;
  height: 5724px;
}

.wraps {
  position: relative;
}

.wraps::after {
  content: '';
  display: block;
  clear: both;
  height: 4px;
  width: 80%;
  background-color: red;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4px;
}
</style>
