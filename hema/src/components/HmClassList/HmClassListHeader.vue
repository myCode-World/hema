<template>
  <div>
    <header>
      <ul>
        <li><i class="iconfont icon-left" @click="goBack"></i></li>
        <li @click="showlist">
          <div class="classnav">
            <p>{{showname}}</p>
          </div>
          <span ></span>
        </li>
        <li>
          <i class="iconfont icon-Group-" id="search"></i>
          <i class="iconfont icon-gouwuche"></i>
        </li>
      </ul>
      <div class="showbox" v-if="flag">
        <router-link tag="li" :to="i.path" :key="index" v-for="(i,index) in datalist"  @click.native="select(index)" >{{i.listname}}</router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "HmClassListHeader",
        props:["nid"],
        data(){
          return {
            flag:false,
            showname:this.nid,
            datalist:[
              {"listname":"新鲜水果","path":"/Classlist/ClassFruits"},
              {"listname":"时令蔬菜","path":"/Classlist/ClassVeg"},
              {"listname":"肉腐蛋品","path":"/Classlist/ClassMeat"},
              {"listname":"海鲜水产","path":"/Classlist/ClassFruits"},
              {"listname":"面点速食","path":"/Classlist/ClassFruits"},
              {"listname":"乳品烘焙","path":"/Classlist/ClassFruits"},
              {"listname":"餐饮熟食","path":"/Classlist/ClassFruits"},
              {"listname":"净菜半成品","path":"/Classlist/ClassFruits"},
              {"listname":"粮油调味","path":"/Classlist/ClassFruits"},
              {"listname":"休闲零食","path":"/Classlist/ClassFruits"},
              {"listname":"酒水饮料","path":"/Classlist/ClassFruits"},
              {"listname":"美护百货","path":"/Classlist/ClassFruits"}

            ]
          }
        },
        methods: {
          goBack() {
            this.$emit("back");
          },
          showlist() {
            if (!this.flag) {
              this.flag = true
            } else {
              this.flag = false
            }
          },
          select(i){
            this.showname=this.datalist[i].listname
            this.showlist()
          }
        },
    }
</script>

<style scoped>
  /*header*/
  header{
    height: .6rem;
    border-bottom: 2px solid #f7f7f7;
  }
  header ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: .51rem;
    font-size: .18rem;
  }
  header ul li{
    display: flex;
    align-items: center;
    margin: 0 0.3rem;
  }

  .classnav{
    overflow: hidden;
    width:1rem;
    height: 0.6rem;
  }
  .classnav p{
    font-size: 0.24rem;
  }

  header span{
    width: 0;
    height: 0;
    border: .05rem solid transparent;
    border-top-color: #333333;
    margin-left: .05rem;
  }
  header .iconfont{
    font-size: .3rem;
  }
  #search{
    margin-right: .31rem;
  }


  .showbox{
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height:3rem;
    background: #fff;
    position: relative;
    z-index: 10;
  }
  .showbox li{
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    width: 100%;
    font-size: 0.2rem;
    display: flex;
    justify-content: center;
  }
</style>
