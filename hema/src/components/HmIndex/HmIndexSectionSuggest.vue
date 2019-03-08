<template>
  <div class="suggest_box">
    <div class="suggest" v-for=" h in hmtj">
      <h3>{{h.suggestname}}</h3>
      <p>{{h.tjtitle}}</p>
      <div class="tj">
        <img :src="h.tjpicone" alt="">
        <img :src="h.tjpictwo" alt="">
      </div>
    </div>
    <!--<div class="suggest">-->
      <!--<h3>超盒算</h3>-->
      <!--<p>舟山带鱼 买一赠一</p>-->
      <!--<div class="tj">-->
        <!--<img src="../../assets/img/tj-01.png" alt="">-->
        <!--<img src="../../assets/img/tj-02.png" alt="">-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="suggest">-->
      <!--<h3>超盒算</h3>-->
      <!--<p>舟山带鱼 买一赠一</p>-->
      <!--<div class="tj">-->
        <!--<img src="../../assets/img/tj-01.png" alt="">-->
        <!--<img src="../../assets/img/tj-02.png" alt="">-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="suggest">-->
      <!--<h3>超盒算</h3>-->
      <!--<p>舟山带鱼 买一赠一</p>-->
      <!--<div class="tj">-->
        <!--<img src="../../assets/img/tj-01.png" alt="">-->
        <!--<img src="../../assets/img/tj-02.png" alt="">-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
        name: "HmIndexSectionSuggest",
        props:["hmtj"]
    }
</script>

<style scoped>
  .suggest_box{
    width:90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 5px;
    padding: 0.1rem;
    box-sizing: border-box;
  }
  .suggest{
    width: 50%;
  }
  .suggest h3{
    color: #ff4343;
    font-size:0.18rem;
  }
  .suggest p{
    color: #9b9b9b;
    font-size:0.16rem;
  }
  .tj{
    display: flex;
    width: 100%;
  }
  .tj img{
    width:1.2rem;
    height: 0.9rem;
  }

</style>
