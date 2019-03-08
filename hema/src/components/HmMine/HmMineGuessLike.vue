<template>
    <ul class="fruitInfo">
      <li class="fruitBox">
        <img src="img/page2/1.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <div>
              <span class="price">￥69.9</span>
              <span>/500g</span>
            </div>
            <span class="car"><i class="iconfont icon-gouwuche"></i></span>
          </li>
        </ul>
      </li>
      <li class="fruitBox">
        <img src="img/page2/2.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <div>
              <span class="price">￥69.9</span>
              <span>/500g</span>
            </div>
            <span class="car"><i class="iconfont icon-gouwuche"></i></span>
          </li>
        </ul>
      </li>
      <li class="fruitBox">
        <img src="img/page2/3.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <div>
              <span class="price">￥69.9</span>
              <span>/500g</span>
            </div>
            <span class="car"><i class="iconfont icon-gouwuche"></i></span>
          </li>
        </ul>
      </li>
      <li class="fruitBox">
        <img src="img/page2/4.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <div>
              <span class="price">￥69.9</span>
              <span>/500g</span>
            </div>
            <span class="car"><i class="iconfont icon-gouwuche"></i></span>
          </li>
        </ul>
      </li>
      <li class="fruitBox">
        <img src="img/page2/5.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <div>
              <span class="price">￥69.9</span>
              <span>/500g</span>
            </div>
            <span class="car"><i class="iconfont icon-gouwuche"></i></span>
          </li>
        </ul>
      </li>
      <li class="fruitBox">
        <img src="img/page2/5.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <div>
              <span class="price">￥69.9</span>
              <span>/500g</span>
            </div>
            <span class="car"><i class="iconfont icon-gouwuche"></i></span>
          </li>
        </ul>
      </li>
      <li class="fruitBox">
        <img src="img/page2/5.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <div>
              <span class="price">￥69.9</span>
              <span>/500g</span>
            </div>
            <span class="car"><i class="iconfont icon-gouwuche"></i></span>
          </li>
        </ul>
      </li>
      <li class="fruitBox">
        <img src="img/page2/5.jpg"/>
        <ul>
          <li>红丝绒蛋糕</li>
          <li>最近浏览</li>
          <li class="special"></li>
          <li class="oriCost"></li>
          <li>
            <!--<div>-->
              <!--<span class="price">￥69.9</span>-->
              <!--<span>/500g</span>-->
            <!--</div>-->
            <!--<span class="car"><i class="iconfont icon-gouwuche"></i></span>-->
            <hm-index-section-carts></hm-index-section-carts>
          </li>
        </ul>
      </li>
    </ul>
</template>

<script>
    import HmIndexSectionCarts from "../HmIndex/HmIndexSectionCarts";
    export default {
        name: "HmMineGuessLike",
        components: {HmIndexSectionCarts},
        data(){
          return {
            goodlist:[
              {}
            ]
          }
        }
    }
</script>

<style scoped>

  /*fruitInfo*/
  .fruitInfo{
    width: 90%;
    margin: 0 auto;
  }
  .fruitInfo .fruitBox{
    width: 100%;
    height: 1.01rem;
    display: flex;
    justify-content: space-between;
  }
  .fruitInfo li img{
    width: 1rem;
    margin: .14rem;
  }
  .fruitInfo li ul{
    width: 100%;
    height: .96rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ededed;
    padding: .1rem  .1rem 0;
    margin-left: .08rem;
  }
  .fruitInfo li ul li{
    height: .2rem;
    font-size: .12rem;
    line-height: .18rem;
    color: #979797;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .fruitInfo li ul li:first-child{
    font-size: .15rem;
    color: #121212;
  }
  .price{
    color: #eb1335;
  }
  .fruitInfo li ul li:last-child{
    display: flex;
    justify-content: space-between;
    height: .34rem;
    margin-bottom: .05rem;
  }
  .fruitInfo li ul li:last-child .car{
    display: inline-block;
    width: .27rem;
    height: .27rem;
    background: #25abff;
    border-radius: 50%;
    text-align: center;
  }
  .fruitInfo li ul li:last-child .car i{
    font-size: .16rem;
    line-height: .27rem;
    color: white;
  }
  .fruitInfo li ul .special span{
    border:2px solid #e3b7c3;
    border-radius: .04rem;
    height: .13rem;
    line-height: .13rem;
    font-size: .1rem;
    color: #f03441;
    text-align: center;
    margin-top: .03rem;
    padding: 0 .02rem;
  }
  .fruitInfo li ul .oriCost{
    font-size: .09rem;
    text-decoration: line-through;
  }

</style>
