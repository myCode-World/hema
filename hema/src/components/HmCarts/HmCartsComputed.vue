<template>
    <div class="computed">
      <label class="allselect"><input type="checkbox" @change="checkAll" v-model="data.checked"><h3>全选</h3></label>
      <div class="apply">
        <h3>总计:<span>￥{{data.totalPrice}}</span></h3>
        <a href="##">结算</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HmCartsComputed",
        props:["data"],
        methods:{
          checkAll(){
            this.$emit("checkAllEvent")
          }
        }
    }
</script>

<style scoped>
  .computed{
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .allselect{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:0.1rem 0.25rem;
    height: 0.5rem;
  }
  .allselect h3{
    color: #333;
    font-size: 0.24rem;
    margin-left: 0.1rem;
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
  .allselect input[type='checkbox']:checked{
    background:red url(../../assets/img/duigou02.png)no-repeat center;
    background-size:50%;
  }

  .apply {
    display: flex;
    justify-content: space-between;
  }
  .apply h3{
    color: #333;
    font-size: 0.24rem;
    line-height: 0.8rem;
    margin-right: 0.2rem;
  }
  .apply a{
    display: block;
    color: #fff;
    font-size: 0.3rem;
    height:0.8rem;
    line-height: 0.8rem;
    width: 1.65rem;
    text-align: center;
    background: #25abff;
  }
</style>
