<template>
    <div class="carts">
      <p>{{goodslist.goodsprice}}<span>{{goodslist.goodsqal}}</span></p>
      <router-link :to="{name:'HmGoodsDetails',params:{goods:goodslist}}" >
        <i class="iconfont icon-gouwuche" @click="addCrat(goodslist)"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "HmIndexSectionCarts",
        props:["goodslist"],
        methods:{
          addCrat(goodslist){
            console.log(goodslist)
          }
        }
    }
</script>

<style scoped>
i{
  font-size: 0.3rem;
  color: #fff;
  display:block;
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 50%;
  background: #25abff;
  margin-right: 0.2rem;
}
.carts {
  display: flex;
  justify-content: space-between;
  /*padding-right: 0.2rem;*/
}
.carts p{
  color: #ff5050;
  font-size: 0.16rem;
}
.carts span{
  color: #999999;
  font-size: 0.16rem;
}


</style>
