<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
// import 'swiper/swiper.scss'
export default {
  mounted() {
      new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    // 禁止鼠标滑动 否则会导致移动端模拟无法正常滑动
     simulateTouch:false,
      allowTouchMove: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
  },
    components: {
    
    },
    methods: {
   
    },
}
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 200px;
    background-color: rgb(255, 214, 214);
   
}
/* .swiper-slide{
 background-color: rgb(255, 214, 214);
    width: 100%;
    height: 300px;
} */
</style>