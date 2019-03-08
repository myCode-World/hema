<template>
  <div class="section_lb">
    <slot name="titPic"></slot>
    <div class="link_box" :link="link">
      <a href="javascript:;" v-for="m in link[1].linksList"><img :src="m.linksPic" alt=""><p>{{m.links}}</p></a>
      <!--<a href="javascript:;"><img src="../../assets/img/hm-02.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-03.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-04.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-05.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-06.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-07.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-08.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-09.png" alt=""><p>新鲜水果</p></a>-->
      <!--<a href="javascript:;"><img src="../../assets/img/hm-10.png" alt=""><p>新鲜水果</p></a>-->
    </div>
  </div>

</template>

<script>
    export default {
        name: "HmIndexSectionLinks",
        props:["link"]
    }
</script>

<style scoped>

  .section_lb{
    width: 100%;
    padding-bottom: 10px;
    background:#fdd2ce;
  }
  .section_lb img{
    width: 100%;
  }

  .link_box{
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    text-align: center;
    width: 90%;
    margin: 0 auto ;
    padding:0.1rem 0.15rem;
    flex-wrap: wrap;
    background:#fff;
    border-radius: 10px;
  }
  .link_box img{
    width: 0.68rem;
    height:0.68rem;
    margin:0.05rem;
  }
  .link_box p{
    font-size:0.16rem;
    padding-top: 5px;
  }

</style>
