<template>
  <div>
    <div class="goods" v-for=" (g,pid) in cartInfo.products">
      <label class="single"><input type="checkbox" v-model="g.checked" @change="singleChecked(sid,pid)"></label>
      <div class="imgbox"><img :src="g.goodsimg" alt=""></div>
      <div class="goodsInfo">
        <h4>{{g.goodsname}}</h4>
        <p class="goodspro">{{g.goodstitle}}</p>
        <span class="time">最快19：00到达</span>
        <div class="goodsPrice">
          <p>{{g.goodsprice}} <span>{{g.goodscount}}</span></p>
          <div class="btn">
            <a href="javascript:;" class="minus" @click="minus(pid,sid)">-</a>
            <input type="text" readonly="readonly" value="1" v-model="g.goodsqal">
            <a href="javascript:;" class="add" @click="add(pid,sid)">+</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HmCartsGoods",
        props:["cartInfo","data","sid","singleChecked"],
        methods:{
        add(pid,sid){
          this.$emit("addEvent",pid,sid)
        },
        minus(pid){
          this.$emit("minusEvent",pid,sid)
        }
      }
    }
</script>

<style scoped>
  .goods {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0.1rem 0.5rem 0.1rem 0.25rem ;
  }
  .single {
    display: flex;
    width: 10%;
  }
  .imgbox {
    width: 30%;
  }
  .imgbox img{
    width: 0.9rem;
    height: 0.9rem;
    margin: 0 auto;
  }
  .goodsInfo {
    width: 60%;
  }
  .goodsInfo h4 {
    color: #333;
    font-size: 0.2rem;
    margin-bottom: 0.15rem;
  }
  .goodspro{
    color: #7e7e7e;
    font-size: 0.18rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .time {
    display: table-cell;
    padding: 0.05rem;
    color: #25abff;
    font-size: 0.18rem;
    border: 1px solid #25abff;
    border-radius: 5px;
  }
  .goodsPrice{
    display: flex;
    justify-content: space-between;
    margin-top: 0.15rem;
  }
  .goodsPrice p{
    font-size: 0.21rem;
    color: #d60f0a;
  }
  .goodsPrice span{
    font-size: 0.21rem;
    color: #999999;
  }
  .btn {
    display: flex;
    justify-content: center;
  }
  .btn a{
    display: block;
    width: 0.15rem;
    color: #333;
    font-size: 0.14rem;
    text-align: center;
    padding: 0.05rem;
    border: 1px solid #9D9D9D;
  }
  .btn input{
    width: 0.5rem;
    text-align: center;
    border: 1px solid #9D9D9D;
  }

  input[type='checkbox']{
    width:30px;
    height:30px;
    background-color: #ca1420;
    appearance:none;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    outline: none;
    overflow: hidden;
  }
  .single input[type='checkbox']:checked{
    background:red url(../../assets/img/duigou02.png)no-repeat center;
    background-size:50%;
  }


</style>
