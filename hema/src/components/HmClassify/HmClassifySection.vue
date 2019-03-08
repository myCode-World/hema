<template>
  <section>
    <slot></slot>
    <div class="classlist_box">
      <router-link :to="{name:'classlist',params:{id:idx,nid:c}}" class="classlist" :key="idx" v-for="(c,idx) in classify">
        <img :src="c.imgsrc" alt=""/>
        <p>{{c.claname}}</p>
      </router-link>

    </div>
  </section>
</template>

<script>
    export default {
        name: "HmClassifySection",
        props:["classify","idx"]
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow-y: auto;
  }
.classlist_box{
  display: flex;
  justify-content: space-between;
  margin:0 0.5rem;
  flex-wrap: wrap;
}
.classlist {
  width: 1.2rem;
}
.classlist img{
  width: 100%;
}
.classlist p{
  font-size: 0.21rem;
  color: #333333;
  text-align: center;
}

</style>
