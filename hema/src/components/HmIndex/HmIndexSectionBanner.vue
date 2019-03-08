<template>
  <div class="swiper-container">
    <div class="swiper-wrapper banner">
      <a href="##" class="swiper-slide" v-for="i in banner"><img :src="i.pic"  alt=""/></a>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "HmIndexSectionBanner",
        mounted() {
          setTimeout(()=>{
            new Swiper('.swiper-container', {
              direction: 'horizontal', //vertical 垂直切换选项    horizontal水平切换
              // loop: true, // 循环模式选项
              autoplay:true,
              effect: 'coverflow',
              centeredSlides: true,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            });
          },20);

      },
        props:["banner"]
    }
</script>

<style scoped>
  @import "../../../node_modules/swiper/dist/css/swiper.css";
  .swiper-container{
    background: linear-gradient( #d60f0b 50%,#fdd2ce 50%);
  }

  .swiper-slide img{
    width: 90%;
    margin: 0 auto;
  }
</style>
