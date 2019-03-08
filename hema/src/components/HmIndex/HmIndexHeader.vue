<template>
    <header>
      <a href="javascript:;" class="posi"><img src="../../assets/img/posi.png" alt=""></a>
      <a href="javascript:;" class="search">
        <img src="../../assets/img/search.png" alt="">
        <p>面包</p>
      </a>
      <div class="header_rigth">
        <a href="javascript:;"><img src="../../assets/img/user.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/img/msg.png" alt=""></a>
      </div>
    </header>
</template>

<script>
    export default {
        name: "HmIndexHeader"
    }
</script>

<style scoped>

  header {
    height:0.54rem;
    background: #d60f0b;
    /*padding: 10px;*/
    display:flex;
    justify-content: space-around;
    align-items: center;
  }
  .posi img{
    width: 0.36rem;
    height: 0.36rem;
  }
  .search {
    width:3.4rem;
    height: 0.32rem;
    background: #fff;
    margin: 0 0.15rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
  }
  .search img{
    width: .2rem;
    height: .2rem;
    margin:0 0.15rem;
  }
  .search p{
    color: #c9c9c9;
    font-size: 0.18rem;
    line-height: 0.62rem;
  }

  .header_rigth {
    display: -webkit-flex;
    justify-content: space-around;
  }
  .header_rigth img{
    width: 0.36rem;
    height: 0.36rem;
    margin: 0 0.03rem;
  }



</style>
