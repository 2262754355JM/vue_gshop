<template>
  <div id="profile">
    <header-top title="个人"></header-top>

    <router-link to="/Login">登录/注册</router-link>
    <span> Profile</span>
   
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components:{
    HeaderTop
  }
}
</script>
<style scoped>

</style>