<template>
    <div class="section">
      <div  v-for="(d,index) in datalist">
        <div class="topic" v-if="d.topic" >
          <h3>{{d.title}}</h3><p>{{d.topic}}</p>
        </div>
        <div class="listbox" v-if="d.imgsrc">
          <p class="comTitle">
            <img src="../../assets/img/pao.png" alt="">
            <!--【抢先试吃】西州蜜25号，试吃报名啦!-->
            {{d.title}}
          </p>
          <img :src="d.imgsrc" alt="">
        </div>
      </div>
      </div>

</template>

<script>
    export default {
        name: "HmCommunity",
        props:["datalist"]
    }
</script>

<style scoped>

  .section{
    background: #f5f5f5;
    padding-top: 0.1rem;
    flex: 1;
    overflow-y: auto;
  }
  .topic {
    display: flex;
    align-items: center;
  }
  .topic h3{
    font-size: 0.24rem;
    color: #2f2e2e;
    padding:0 0.15rem;
    border-right: 2px solid #ccc;
  }
  .topic p{
    font-size: 0.14rem;
    color:skyblue;
    padding-left: 0.1rem;
  }


  .comTitle{
    color:#2f2e2e;
    font-size: 0.18rem;
    display: flex;
    margin-bottom: 0.18rem;
  }
  .listbox .comTitle img{
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.15rem;
  }
  .listbox{
    width: 90%;
    margin: 0.15rem auto;
    padding: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
  }
  .listbox img{
    width: 100%;
  }

</style>
