<template>
  <div class="shopsbox">
    <div class="shops" v-for="(c,sid) in cartInfo.shops">
      <label class="shopselect" v-if="cartInfo">
        <input type="checkbox" v-model="c.checked" @change="shopCheckedChange(c.checked,sid)"><h3>{{c.shopName}}</h3></label>
      <hm-carts-goods :singleChecked="singleChecked" :cartInfo="c" @addEvent="receiveAdd" @minusEvent="receiveMinus" :sid="sid"></hm-carts-goods>
    </div>
  </div>

</template>

<script>
    import HmCartsGoods from "./HmCartsGoods";
    export default {
        name: "HmCartsShops",
        components: {HmCartsGoods},
        props:["cartInfo","data","sid","pid","singleChecked"],
        methods:{
          gohome(){
            this.$router.push("/Hmindex");
          },

          receiveAdd(pid,sid){
            console.log(pid,sid)
            this.$emit("addEvent",pid,sid)
          },
          receiveMinus(pid,sid){
            console.log(pid,sid)
            this.$emit("minusEvent",pid,sid)
          },
          /**
           * 向上传递选中状态事件
           */
          shopCheckedChange(checked,sid){
            this.$emit("checkedChangeEvent",sid)
          }
        }
    }
</script>

<style scoped>
  .shopsbox{
    flex: 1;
    overflow-y: auto;
  }
  .empty{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 0.32rem;
  }
  .empty a{
    color: #25abff;
    font-size: 0.2rem;
  }
  .shopselect{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:0.1rem 0.25rem;
    height: 0.5rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .shopselect h3{
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
  .shopselect input[type='checkbox']:checked{
    background:red url(../../assets/img/duigou02.png)no-repeat center;
    background-size:50%;
  }

</style>
