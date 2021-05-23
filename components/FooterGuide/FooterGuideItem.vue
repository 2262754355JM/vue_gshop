<template>
  <div id="footer-guide-item" @click="goto">
    <slot v-if="!isActive" name="no-active"></slot>
    <slot v-else name="is-active"></slot>
    <slot name="text"></slot>
  </div>
</template>
<script>
export default {
  props:{
    path:String
  },
  methods: {
    goto(){
      this.$router.push(this.path);
      // console.log(!this.$route.path.indexOf(this.path)==-1);
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
    }
  }
}
</script>
<style scoped>
#footer-guide-item{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  font-size: 14PX;
  background-color: rgb(250, 250, 250);
}
#footer-guide-item img{
  width: 24px;
  height: 24px;
    vertical-align: middle;
    margin-top: 3px;
}
</style>