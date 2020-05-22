<template>
<div class="header">
  <div class="headerTop">
    <div>购物车</div>
    <div>领券</div>
  </div>
  <div class="nav">
    <div>30天无忧退货</div>
    <div>48小时快速退款</div>
    <div>满99元免邮箱</div>
  </div>
  <div id="footer-views">
  <div @click="change">登录</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'gooing',
  methods:{
    change(){
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
.header {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.header>.headerTop {
  height: 88px;
  width: 100%;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  line-height: 88px
}

.header>.headerTop>div:nth-of-type(1) {
  font-size: 36px;
}

.header>.headerTop>div:nth-of-type(2) {
  font-size: 30px;
  color: red;
  margin-right: 28px
}

.nav {
  display: flex;
  height: 70px;
  line-height: 70px;
 justify-content: space-around;
 padding: 0px 30px;
   background-color: #EEEEEE;
}
.nav>div{
  margin: 0 auto;
  color: #9C9C9C;
}
#footer-views{
  height: 1176px;
  background: #F4F4F4 url('./noCart-d6193bd6e4.webp') no-repeat;
  background-size:248px 248px;
  background-position: center 380px;
    overflow: hidden;
}
#footer-views>div{
  height:92px;
  width: 480px;
  margin: 0 auto;
  color: white;
  line-height: 92px;
  font-size:32px;
  text-align: center;
  background-color:#DD1A21;
  margin-top:670px;
}
</style>
