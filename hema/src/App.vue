<template>
  <router-view></router-view>
</template>

<script>
  import  Vue from  "vue"
  Vue.directive("bgColor",function(el,binding){
    // console.log(el)
    el.style.backgroundColor=binding.value;

  });
export default {
  name: 'App'
}
</script>

<style>
  @import "/assets/css/reset.css";
  @import "/assets/css/iconfont.css";
</style>
