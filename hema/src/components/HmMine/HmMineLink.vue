<template>
  <div>
    <div class="mineLink" v-for="m in mine">
      <h3 v-if="m.title">{{m.title}}<p>查看更多 ></p></h3>
      <div class="linkbox">
        <div  v-for="n in m.titlelist">
          <img :src="n.imgsrc" alt="">
          <p>{{n.imgtitle}}</p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "HmMineLink",
        props:["mine"]
    }
</script>

<style scoped>
  .mineLink {
    width: 90%;
    margin: 0 auto;
    background: #fff;
    padding: 0.1rem;
    border-radius: 0.1rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .mineLink h3{
    color: #333;
    font-size: 0.21rem;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #999;
  }
  .mineLink h3 p{
    color: #999999;
    font-size: 0.18rem;
  }

  .linkbox {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0.2rem 0.1rem;
  }
  .linkbox>div{
    width: 25%;
    margin: 0.15rem 0;
  }
  .linkbox img{
    width: 0.4rem;
    height: 0.4rem;
    margin: 0 auto;
  }
  .linkbox p{
    color: #999;
    font-size: 0.2rem;
    text-align: center;
  }


</style>
