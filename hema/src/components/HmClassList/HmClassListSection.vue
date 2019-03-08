<template>
  <div class="content">

    <!--左侧列表-->
    <div class="foodClass">
      <ul>
        <li v-for=" (c,index) in littleclassify[2].goodsclass">
          <a href="javascript:;" :class="{changeStyle:styles=== index}" @click="changeStyles(index)">
            <span></span>
            <img v-if="c.tuijian" :src="c.tuijian"/>
            <p>{{c.classlistname}}</p>
          </a>

        </li>

      </ul>
    </div>

    <!--右侧数据-->
    <div class="fruitList">
      <ul class="listTitle">
        <li><a href="javascript:;" :class="{changeBlue:blues=== 0}" @click="changeColor(0)">限时抢</a></li>
        <li><a href="javascript:;" :class="{changeBlue:blues=== 1}" @click="changeColor(1)">畅销榜</a></li>
        <li><a href="javascript:;" :class="{changeBlue:blues=== 2}" @click="changeColor(2)">食当季</a></li>
      </ul>
        <hm-class-section-list :littleclassify="littleclassify"></hm-class-section-list>
    </div>
  </div>
</template>

<script>
    import HmIndexSectionCarts from "../../components/HmIndex/HmIndexSectionCarts";
    import HmClassSectionList from "./HmClassSectionList";
    export default {
        name: "HmClassListSection",
        components: {HmClassSectionList, HmIndexSectionCarts},
        props:["littleclassify","littleclassifyone","littleclassifytwo","littleclassifythree"],
        data(){
          return {
            blues:0,
            styles:0,
            littleclassify:this.littleclassifytone
          }
        },
        methods:{

          changeColor(index){
            this.blues =index
            switch (index) {
              case 0:  this.littleclassify=this.littleclassifyone;break;
              case 1:  this.littleclassify=this.littleclassifytwo;break;
              case 2:  this.littleclassify=this.littleclassifythree;break;
              default: this.littleclassify=this.littleclassifyone;break;
            }

          },
          changeStyles(index){
            this.styles=index

            switch (index) {
              case 0:  this.littleclassify=this.littleclassifyone;break;
              case 1:  this.littleclassify=this.littleclassifytwo;break;
              case 2:  this.littleclassify=this.littleclassifythree;break;
              default: this.littleclassify=this.littleclassifyone;break;
            }
          }

        }
    }
</script>

<style scoped>

  /*content*/
  .content{
    width: 100%;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: flex-end;
  }

  /*foodClass*/
  .foodClass{
    position: relative;
    top:0;
    left: 0;
    width: 24%;
    height: 100%;
    background: #f7f7f7;
    z-index: 0;
  }
  .foodClass ul li a{
    font-size: .18rem;
    color: #434343;
    line-height: 0.68rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  /*.foodClass ul li:first-child{*/
    /*background-color: white;*/
  /*}*/
  .foodClass ul li span{
    /*width: .04rem;*/
    /*height: .27rem;*/
    /*border-radius: .04rem;*/
    /*background-color: #27a2fc;*/
    /*position: absolute;*/
    /*top:.1rem;*/
    /*left: 0;*/
  }
  .foodClass ul li img{
    width: .16rem;
    height: .16rem;
    margin-right: 4px;
  }

  .changeStyle {
    background-color: white!important;
  }
  .foodClass ul li .changeStyle {
    font-size: .18rem;
    color: #434343;
    line-height: 0.68rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .foodClass ul li .changeStyle span{
    width: .04rem;
    height: .27rem;
    border-radius: .04rem;
    background-color: #27a2fc;
    position: absolute;
    top:.21rem;
    left: 0;
  }



  /*fruitList*/
  .fruitList{
    width: 74%;
    margin-left: .1rem;
    display: flex;
    flex-direction: column;
  }

  .listTitle{
    display: flex;
    height: 0.6rem;
  }
  .listTitle li{
    display: flex;
    justify-content: space-between;
    padding:0.16rem 0.3rem;
  }
  .listTitle li a{
    font-size: .18rem;
    color:#3a3a3a;
  }
  .listTitle li:first-child a{

  }

  .changeBlue {
    color: skyblue!important;
  }








</style>
