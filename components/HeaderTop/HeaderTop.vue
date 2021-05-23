<template>
  <div class="header-top">
    <slot name="search"></slot>
    <span class="title">{{title}}</span>
    <slot name="login"></slot>
  </div>
</template>
<script>
export default {
  props:{
    title:String
  }
}
</script>

<style scoped>
.header-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: rgb(15, 155, 2);
  font-size: 19px;
}

.header-top img{
  width: 24px;
  height: 24px;
  flex: 1;
}
.title{
  flex: 2;
  color: aliceblue;
}
.header-top .login{
  flex: 1;
}
</style>
