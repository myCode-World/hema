<template>
  <div class="nav">
    <ul class="nav_list">
      <li v-for="(n,index) in navlist" :class="{ red:changeRed === index}" @click="reds(index)">
        <a href="javascript:;" @click="hit(index)" >{{n.navname}}</a>
        <span>{{n.navtitle}}</span>
      </li>
    </ul>
    <hm-index-goods-list :goodslist="goodlist"></hm-index-goods-list>
  </div>
</template>

<script>
    import  HmIndexGoodsList from "../../components/HmIndex/HmIndexGoodsList"
    export default {
      name: "HmIndexSectionNav",
      components: {HmIndexGoodsList},
      props:["navlist","goodslistlike","goodslistyear","goodslistforyou","goodslistontime","goodslisteating","goodslistbuying"],
      data(){
        return {
          goodlist:this.goodslistlike,
          changeRed:0
        }
      },
      methods: {
        hit(i) {
          switch(i){
            case 0:this.goodlist = this.goodslistlike;break;
            case 1:this.goodlist = this.goodslistyear;break;
            case 2:this.goodlist = this.goodslistforyou;break;
            case 3:this.goodlist = this.goodslistontime;break;
            case 4:this.goodlist = this.goodslisteating;break;
            case 5:this.goodlist = this.goodslistbuying;break;
            default: this.goodlist= this.goodslistlike
          }
        },
        reds:function(index){
          this.changeRed = index;
          console.log(this.changeRed)
        }

      }
    }
</script>

<style scoped>
  .nav{
    width: 90%;
    margin:0 auto;
  }
  .nav_list{
    display: flex;
    justify-content: space-between;
    overflow-x:auto;
    margin-top: 0.3rem;
    margin-bottom: 0.18rem;
    /*box-shadow: -20px -2px 15px -13px #ddd inset;*/
  }
  .nav_list::-webkit-scrollbar{
    display: none;
  }
  .nav_list li{
    display: block;
    text-align: center;
  }
  .nav_list a{
    display: block;
    width: 1rem;
    border-right:2px solid #efeff0;
    color: #353535;
    font-size:0.14rem;
  }
  .nav_list span {
  display: block;
  margin: 0.1rem auto 0;
  color: #8c8c8b;
  font-size: 0.1rem;
  border-radius: 0.1rem;
}
  .nav_list .red a{
    color: red;
  }
  .nav_list .red span{
    color: #fff;
    background: #ff4444;
  }


</style>
