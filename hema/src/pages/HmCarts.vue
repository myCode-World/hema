<template>
  <div class="Carts">
    <header>
      <h3>购物车<p>删除</p></h3>
    </header>
    <section>
      <hm-carts-shops :singleChecked="singleChecked"  :cartInfo="cartInfo" @addEvent="receiveAdd" @minusEvent="receiveMinus" @checkedChangeEvent="productCheckedChange"></hm-carts-shops>
      <hm-carts-computed v-if="cartInfo" :data="cartInfo" @checkAllEvent="checkAll"></hm-carts-computed>
    </section>
    <hm-index-footer></hm-index-footer>
  </div>
</template>

<script>
    import HmIndexFooter from "../components/HmIndex/HmIndexFooter";
    import HmCartsShops from "../components/HmCarts/HmCartsShops";
    import HmCartsComputed from "../components/HmCarts/HmCartsComputed";
    export default {
        name: "HmCarts",
        components: {HmCartsComputed, HmCartsShops, HmIndexFooter},
        data(){
          return {
            cartInfo:[],
          }
        },
        created(){
          this._initdata()
        },
        methods:{
        _initdata(){
          fetch("http://localhost:3000/carts")
            .then(res=>{
              res.json().then(data=>{
                this.cartInfo=data
                this._counteCart(data)
              })
            });

        },
          /**
           * 根据商铺的编号和商品的编号来修改商品数量
           * @param pid 商品编号
           * @param sid 商铺编号
           */
        receiveAdd(pid,sid){
          this.cartInfo.shops[sid].products[pid].goodsqal++
          this._counteCart(this.cartInfo)
        },
        receiveMinus(pid,sid){
          if(this.cartInfo.shops[sid].products[pid].goodsqal <=1){
            this.cartInfo.shops[sid].products[pid].goodsqal=1
          }else{
            this.cartInfo.shops[sid].products[pid].goodsqal--
          }
          this._counteCart(this.cartInfo)
      },


          /**
           * 统计总价
           */

          _counteCart(carts){
            let totalPrice = 0;
            carts.shops.forEach((shop,sid)=>{
              shop.products.forEach((product,pid)=>{
                if (product.checked) {
                  totalPrice += product.goodsprice * product.goodsqal
                }
              })
            })
            this.cartInfo.totalPrice=totalPrice
          },
          productCheckedChange(sid){
            let checked = this.cartInfo.shops[sid].checked
            this.cartInfo.shops[sid].products.forEach((p,i)=>{
              p.checked= checked
            })
            this._counteCart(this.cartInfo)
          },
          singleChecked(sid,pid){
            let checked = this.cartInfo.shops[sid].products[pid].checked
            this.cartInfo.shops[sid].checked=checked
            this.cartInfo.checked = checked

            this._counteCart(this.cartInfo)
          },
          checkAll(){
            let checked = this.cartInfo.checked
            this.cartInfo.shops.forEach((shop,sid)=>{
              shop.checked = checked
              shop.products.forEach((product,pid)=>{
                product.checked = checked
              })
            });
            this._counteCart(this.cartInfo)
          }

        },
      // 监听
        watch:{
          cartInfo:{
            handler(n,o){
              console.log(n)
            },
            deep:true
          }
        }

    }
</script>

<style scoped>
  .Carts{
    height: 100%;
    display:flex;
    flex-direction: column;
  }
  header{
    height: 0.75rem;
    width:100%;
    background: #d60f0a;
  }
  header h3{
    height: 0.75rem;
    line-height: 0.75rem;
    color:#f5f5f5;
    font-size: 0.36rem;
    font-weight: 100;
    text-align: center;
    vertical-align: middle;
    position: relative;
  }
  header h3 p{
    font-size: 0.24rem;
    position: absolute;
    right: 0.3rem;
    top: 0;
  }

  section{
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

</style>
