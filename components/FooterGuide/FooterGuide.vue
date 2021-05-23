<template>
  <div class="footer-guide">
    <footer-guide-item path="/MSite">
    <img src="../../assets/image/首页-选中.svg" slot="no-active" alt="">
     <img src="../../assets/image/首页-选中 (1).svg" slot="is-active" alt="">
      <span slot="text">首页</span>
    </footer-guide-item>

    <footer-guide-item path="/Order">
        <img src="../../assets/image/订单.svg" slot="no-active" alt="">
     <img src="../../assets/image/订单 (1).svg" slot="is-active" alt="">
      <span slot="text">订单</span>
    </footer-guide-item>

    <footer-guide-item path="/Search">
        <img src="../../assets/image/搜索.svg" slot="no-active" alt="">
     <img src="../../assets/image/搜索 (1).svg" slot="is-active" alt="">
      <span slot="text">搜索</span>
    </footer-guide-item>

    <footer-guide-item path="/Profile">
        <img src="../../assets/image/个人 (4).svg" slot="no-active" alt="">
     <img src="../../assets/image/个人 (4) (1).svg" slot="is-active" alt="">
      <span slot="text">个人</span>
    </footer-guide-item>
  </div>
</template>
<script>
import FooterGuideItem from "../FooterGuide/FooterGuideItem";
export default {
  components: {
    FooterGuideItem,
  },
};
</script>
<style scoped>
.footer-guide {
  width: 100%;
  height: 50px;
  background-color: rgb(235, 235, 235);

  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>