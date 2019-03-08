<template>
  <div class="section_xr">
    <img :src="newuser[0].newpic" alt=""/>
    <div class="section_xr_count">
      <div class="count" v-for="n in newuser[1].newcount">
        <img :src="n.countimg" alt="">
        <p>{{n.countgoods}}</p>
        <span>{{n.countprice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HmIndexsectionNewUser",
        props:["newuser"]
    }
</script>

<style scoped>
  .section_xr{
    width: 100%;
    padding-bottom: 10px;
    position: relative;
    background: #f8f9fb;
  }
  .section_xr img{
    width: 90%;
    margin: 0 auto;
  }
  .section_xr_count{
    position: absolute;
    right:0.3rem;
    top: 0.1rem;
    display: flex;
  }
  .count{
    width:1.8rem;
    height: 1.5rem;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    position:relative;
  }
  .count:after{
    content: "直降";
    font-size: 0.08rem;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0.1rem;
    display: block;
    padding:3px;
    border-radius: 0 0 5px 5px;
    background: #fb6569;
  }
  .count img{
    width: 0.9rem;
    height: 0.7rem;
    margin-top: 0.1rem;
  }
  .count p{
    color: #363636;
    font-size:0.16rem;
    margin:0.1rem 0;
  }
  .count span{
    display: block;
    color: #f85356;
    font-size:0.12rem;
  }
</style>
