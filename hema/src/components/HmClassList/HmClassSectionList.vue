<template>
  <div class="section">
    <div class="aboutTitle" v-if="littleclassify[0]">{{littleclassify[0]}}</div>
    <div class="fruitInfo">
      <div class="fruitInfoList" v-for=" g in littleclassify[1].goodslist">
        <div class="goodsImg"><img :src="g.goodsimg"/></div>
        <div class="goodsInfo">
          <div class="goodsname">{{g.goodsname}}</div>
          <div class="goodspro">{{g.goodstitle}}</div>
          <div class="special"><p>特价</p></div>
          <div class="oriCost">￥80.0</div>
          <hm-index-section-carts :goodslist="g"></hm-index-section-carts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HmIndexSectionCarts from "../../components/HmIndex/HmIndexSectionCarts";
    export default {
        name: "HmClassSectionList",
        components:{HmIndexSectionCarts},
        props:["littleclassify"]
    }
</script>

<style scoped>
  .section{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  /*aboutTitle*/
  .aboutTitle{
    width: 100%;
    height: .36rem;
    line-height: .36rem;
    border-radius: .1rem;
    font-size: .16rem;
    color: #8a8a8a;
    background-color: #f5f5f5;
    padding: 0 .13rem;
  }

  .fruitInfoList{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .goodsInfo {
    width: 100%;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #eee;
  }

  .goodsImg {
    width: 20%;
  }
  .goodsImg img{
    width:0.75rem;
    height: 0.6rem;
  }

  .goodsname{
    width: 80%;
    font-size:0.2rem;
    color: #333333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 0.1rem;

  }
  .goodspro{
    width: 80%;
    font-size: 0.18rem;
    color: #999999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 0.1rem;
  }
  .special,.oriCost{
    height: 0.2rem;
    display: table;
  }
  .special p{
    border:2px solid #e3b7c3;
    border-radius: .06rem;
    height: .13rem;
    line-height: .13rem;
    font-size: .1rem;
    color: #f03441;
    text-align: center;
    margin-top: .03rem;
    padding: 0 .02rem;
  }
  .oriCost{
    font-size: .09rem;
    text-decoration: line-through;
  }
</style>
