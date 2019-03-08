<template>
  <div class="detailspage">
    <header>
      <div class="header">
        <i class="iconfont icon-left" @click="goback"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </header>
    <section>
      <hm-goods-banner :banner="goods"></hm-goods-banner>
      <div class="cartInfo">
        <h5>{{goods.goodsname}}</h5>
        <p class="goodstitle">{{goods.goodstitle}}</p>
        <p class="goodsprice">{{goods.goodsprice}}<span>{{goods.goodsqal}}</span></p>
        <p class="arrive"><img src="../assets/img/detail-01.png" alt="">现在下单，最快今日11:15-11:45送达(免运费)</p>
        <p class="quan"><img src="../assets/img/detail-02.png" alt="">已领取5元券</p>
      </div>
      <div class="details">
        <h3>·详情··<span>Detail</span>·</h3>
        <ul class="proinfo">
          <li>品牌：<span>帝皇鲜</span></li>
          <li>产地：<span>澳洲 安格斯</span></li>
          <li>净含量：<span>500g</span></li>
          <li>储存条件：<span>冷藏</span></li>

        </ul>
      </div>
    </section>
  </div>
</template>

<script>
    import HmGoodsBanner from "../components/HmGoodsDetails/HmGoodsBanner";
    export default {
      name: "HmGoodsDetails",
      components: {HmGoodsBanner},
      data(){
          return {
            goods:[]
          }
      },
      created(){
          this.getgoods()
      },
      methods:{
        goback(){
          // this.$router.push("/HmIndex")
          this.$router.go(-1)
        },
          getgoods(){
            //获取url参数
            let  goods = this.$route.params.goods;
            // console.log(goods.goodsimg)
            this.goods= goods
          }
      }
    }
</script>

<style scoped>
  .detailspage{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  section{
    flex: 1;
    overflow-y: auto;
  }

  .header{
    height: 0.75rem;
    display: flex;
    padding: 0  0.2rem;
    margin-top: 0.15rem;
    justify-content: space-between;
    align-items: center;
    background:transparent;
  }
  .header .iconfont{
    font-size: .36rem;
    color: white;
    padding: 0.16rem 0.16rem;
    background: #b2b2b2;
    border-radius:50%;
  }


  .cartInfo {
    margin: 0.3rem 0.2rem;
    background: #fafafa;
    padding: 0.2rem 0.1rem;
  }
  .cartInfo h5{
    font-size: 0.32rem;
    font-weight: 400;
    color: #000;
  }
  .goodstitle {
    font-size: 0.24rem;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .goodsprice {
    color: #d60f0a;
    font-size: 0.24rem;
    margin-top: 0.15rem;
  }
  .goodsprice span {
    color:#999;
  }

  .arrive,.quan{
    display: flex;
    color: #333;
    font-size:0.18rem;
    padding: 0.2rem 0.1rem;
    margin: 0.1rem;
    background: #fff0f0;
  }
  .arrive img, .quan img{
    width: 0.32rem;
    height: 0.24rem;
    margin-right:0.1rem;
  }
  .details {
    text-align: center;
    color: #666666;
    font-size: 0.2rem;
  }
  .details span {
    color: #09afff;
  }
  .proinfo {
    background: #fafafa;
    width: 90%;
    margin: 0.2rem auto;
    border-radius:0.1rem;
  }
  .proinfo li{
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.2rem;
  }

</style>
