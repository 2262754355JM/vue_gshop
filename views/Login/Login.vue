<template>
  <div id="Login">
    <header-top class="header-top">
 <img src="./images/返回.svg" slot="search" alt="" @click="back">
    </header-top>
   
    <span>鹏哥外卖</span>
    <login-verify></login-verify>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import LoginVerify from './LoginVerify'
export default {
  mounted() {
    // this.$refs.header.
  },
  components:{
    HeaderTop,
    LoginVerify
  },
  methods: {
    back(){
      this.$router.back();
    }
  },
}
</script>
<style scoped>
.Login{
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  width: 30px;
  height: 30px;
  margin-left: 3px;
}
.header-top{
  background-color: rgb(236, 236, 236);
}
span{
  display: block;
  margin-top:30px ;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(0, 158, 105);
}
</style>