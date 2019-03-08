<template>
  <div class="active">
    <slot name="titPic"></slot>
    <div class="section_active">
      <div class="active_list" v-for="l in lbnh[1].nhlist">
        <img :src="l.listimg" alt=""/>
        <div class="list_tit" v-bgColor="l.bgColor">
          <h3>{{l.listtitle}}</h3>
          <p>{{l.listcount}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HmIndexSectionActive",
        props:["lbnh"]
    }
</script>

<style scoped>
  .active{
    background: linear-gradient( #fdd2ce 50%,#f6f8fa 50%);
  }
  .section_active{
    width: 95%;
    margin: 0.1rem auto;
    display: flex;
    justify-content: space-around;
  }
  .active_list{
    text-align: center;
    width: 1.25rem;
  }
  .active_list img{
    width: 90%;
    margin: 0 auto;
    border-radius: 8px 8px 0 0;
  }
  .list_tit{
    background: #fc6161;
    border-radius:0 0 8px 8px;
  }
  .list_tit h3{
    color: #fefbf6;
    font-size: 0.16rem;
    font-weight: 800;
    padding-top: 0.1rem;
  }
  .list_tit p{
    color: #fefbf6;
    font-size: 0.06rem;
    padding: 0.1rem 0;
  }

</style>
