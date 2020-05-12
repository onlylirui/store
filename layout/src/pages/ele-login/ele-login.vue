<template>
<div>
  <div id="header-bottom">
    <h4 class="iconfont icon-fangzi " @click="changed"></h4>
    <img src="../../state/images/logo.png" />
    <div class="iconfont icon-sousuo"></div>
    <div class="iconfont icon-gouwuche"></div>
  </div>
  <div v-show="!(item===1)" id="footer-bottoms">
    <img src="./10.png" />
    <div class="red">
      <i class="iconfont icon-login_shouji"></i>
      <span @click="changes">手机号快捷登录</span>
    </div>
    <div id="border-left">
      <i class="iconfont icon-xinxi"></i>
      <span>邮箱账号登录</span>
    </div>
    <div id="footer-items">
      <i class="iconfont icon-icon">微信</i>
      <span></span>
      <i class="iconfont icon-qq">QQ</i>
      <span></span>
      <i class="iconfont icon-weibo">微博</i>
    </div>
  </div>
  <div id="showItem" v-show="item===1">
    <img src="./10.png" />
    <van-form @submit="onSubmit">
      <van-field :rules="[{ required: true,pattern, message: '请填写手机号' }]" v-model="text" placeholder="请输入手机号" class="inputNode" />
      <van-field :rules="[{ required: true, message: '请填写密码' }]" class="inputNode put" v-model="sms" clearable center placeholder="请输入短信验证码">
        <template #button>
          <van-button id="buttoned" :rules="[{ required: true, message: '请填写密码' }]" size="small" type="primary">获取验证码</van-button>
        </template>
      </van-field>
      <div id="textNode"></div>
      <div id="old">
        <span>遇到问题?</span>
        <span>使用密码验证登录</span>
      </div>
      <van-button id="tops" round block type="info" native-type="submit">
        登录
      </van-button>
      <div id="flex-Node">
        <div id="dist" @click="add">
          <h1 v-show="adds" class="iconfont icon-duihao"></h1>
        </div>
        <div>我同意<a href="##"> &lt;&lt;服务条款>></a>和网易<a href="##"> &lt;&lt;隐私政策>></a></div>
      </div>
    </van-form>
    <div @click="itemed">其他方式登录 ></div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import '../../state/font/iconfont.css'
export default {
  name: 'ele-login',
  data() {
    return {
      item: 0,
      text: '',
      sms: '',
      adds: true,
      pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    }
  },
  methods: {
    changed() {
      this.$router.replace('/host')
    },
    changes() {
      this.item = 1
    },
    add() {
      this.adds = !this.adds
    },
    onSubmit(values) {
      console.log('submit', values);
    },
    itemed() {
      this.item = 0
    }
  },

}
</script>

<style scoped>
#showItem>div:last-child {
  margin-top: 60px;
  font-size: 28px
}

#dist {
  height: 30px;
  width: 30px;
  border: 2px solid #969799;
  line-height: 34px;
  text-align: center;
}

.icon-duihao {
  font-size: 28px;
}

#flex-Node {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#old {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  color: #969799;
  margin-top: 40px;
  padding: 0px 10px;
  box-sizing: border-box;
}

#tops {
  width: 100%;
  background: #DD1A21;
  border-radius: 0px;
  border: 0px;
  height: 100px;
  font-size: 30px;
  font-weight: 700;
  margin-top: 30px
}

#buttoned {
  height: 50px;
}

.put {
  margin-top: 50px !important
}

#header-bottom {
  display: flex;
  height: 88px;
  line-height: 88px;
  align-items: center;
  padding: 0px 24px;
  justify-content: center;
  position: relative;
  background-color: #FAFAFA;
  border-bottom: 2px solid #E5E5E5;
}

#header-bottom>img {
  height: 54px;
  width: 172px;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto
}

#header-bottom>.iconfont {
  font-size: 55px;
}

#header-bottom>.iconfont:nth-of-type(1) {
  float: left;
  display: block;
  flex: 1;
}

#header-bottom>.icon-sousuo {
  position: absolute;
  right: 100px
}

#footer-bottoms {
  height: 1248px;
  width: 100%;
  background-color: #F2F5F4;
  text-align: center;
}

#footer-bottoms>img {
  height: 90px;
  width: 268px;
  margin-top: 150px
}

.red {
  height: 94px;
  width: 670px;
  background-color: #DD1A21;
  margin: 0 auto;
  line-height: 94px;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 240px;
  font-size: 28px
}

.icon-login_shouji {
  color: white;
}

.red>span {
  margin-left: 10px
}

#border-left {
  height: 94px;
  width: 668px;
  border: 2px solid#DD1A21;
  margin: 30px auto;
  line-height: 94px;
  color: #DD1A21;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 28px
}

#border-left>span {
  margin-left: 10px
}

#footer-items>i {
  font-size: 30px;
  margin-right: 60px
}

#footer-items {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #878787;
  margin-left: 80px;
  margin-top: 400px
}

#footer-items>span {
  display: block;
  height: 40px;
  width: 4px;
  background-color: #878787;
  margin-right: 50px;
}

#showItem {
  text-align: center;
  padding: 0px 40px;
}

#showItem>img {
  height: 90px;
  width: 268px;
  margin-top: 50px;
}

.borders {
  border-bottom: 2px solid #eeeeee;
  width: 95%;
  height: 60px;
  font-size: 28px;
  margin-top: 80px
}

#showItem .inputNode {
  width: 100%;
  border-bottom: 2px solid #eeeeee;
  font-size: 30px;
  margin-top: 100px
}

#inputNodes {
  width: 100%;
  font-size: 30px;
  margin-top: 10px;
}

#flex-Node>div:nth-child(2) {
  font-size: 26px;
  margin-left: 20px
}
</style>
