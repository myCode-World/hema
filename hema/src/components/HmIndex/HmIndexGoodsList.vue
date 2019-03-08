<template>
  <div class="goodsBox">
    <div class="goods_list">
      <div class="goods_item" v-for="g in goodslist">
        <img :src="g.goodsimg" alt="">
        <h3 v-if="g.goodsname">{{g.goodsname}}</h3>
        <p v-if="g.goodstitle">{{g.goodstitle}}</p>
        <hm-index-section-carts v-if="g.goodsprice" :goodslist="g"></hm-index-section-carts>
      </div>

    </div>
  </div>
</template>

<script>
    import HmIndexSectionCarts from "../../components/HmIndex/HmIndexSectionCarts";
    export default {
        name: "HmIndexGoodsList",
        components: {HmIndexSectionCarts},
        props:["goodslist"]
    }
</script>

<style scoped>
  .goods_list{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  .goods_item{
    width: 48%;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 0.15rem;
    box-shadow:1px 1px 2px 1px #eee,-1px -1px 2px 1px #eee;
  }
  .goods_item img{
    width:100%;
    border-radius: 5px;
  }
  .goods_item h3{
    color:#333333;
    font-size: 0.18rem;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-bottom: 0.12rem;
  }
  .goods_item p{
    color:#999999;
    font-size: 0.16rem;
    /*text-align: center;*/
    width: 100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-bottom: 0.12rem;
  }

</style>
