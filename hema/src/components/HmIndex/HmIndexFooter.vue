<template>
  <footer>
    <ul>
      <router-link tag="li" to="/HmIndex" active-class='active'>
        <i class="iconfont icon-dongwutubiao-xianxing-xiong" id="bare"></i>
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/HmClassify" active-class='active'>
        <i class="iconfont icon-fenlei"></i>
        <p>分类</p>
      </router-link>
      <router-link tag="li" to="/HmCommunity" active-class='active'>
        <i class="iconfont icon-huanyingyu"></i>
        <p>盒社群</p>
      </router-link>
      <router-link tag="li" to="/HmCarts" active-class="active">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
      </router-link>
      <router-link tag="li" to="/HmMine" active-class='active'>
        <i class="iconfont icon-personal-copy"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
    export default {
        name: "HmIndexFooter",
        mounted(){
          this.nav();
        },
      methods:{
          nav(){

          }
      }
    }
</script>

<style scoped>

  /*footer*/
  footer{
    height: 0.77rem;
    width: 100%;
  }
  footer ul{
    height: .77rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  footer ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  footer .iconfont{
    font-size:.36rem;
    color: #272727;
  }
  #bare{
    font-size: .36rem;
    font-weight: 700;
  }
  footer p{
    /*display: inline;*/
    font-size: .16rem;
    color: #888888;
    text-align: center;
  }
  .active i,.active p{
    color: deepskyblue;
  }

</style>
