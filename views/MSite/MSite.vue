<template>
  <div id="Msite">
    
    <header-top title="首页美食">
      <img src="../../assets/image/搜索.svg" slot="search" alt="">
      <router-link to="/login" slot="login" class="login">登录/注册</router-link>
    </header-top>
    <swiper></swiper>
    MSite
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Swiper from '../../components/Swiper/Swiper'
export default {
  components:{
    HeaderTop,
    Swiper
    
  }
}
</script>
<style scoped>
.login{
  text-decoration-line: none;
  color: aliceblue;
}
</style>
