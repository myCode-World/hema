<template>
  <div class="classify">
      <header><p>分类<i class="iconfont icon-Group-" id="search"></i></p></header>
      <hm-classify-section :classify="classify">
        <div class="ban">
          <slot><img src="../assets/img/class-ban.png" alt=""/></slot>
        </div>
      </hm-classify-section>
      <hm-index-footer></hm-index-footer>
  </div>

</template>

<script>
    import HmIndexFooter from "../components/HmIndex/HmIndexFooter";
    import HmClassifySection from "@/components/HmClassify/HmClassifySection";
    export default {
        name: "HmClassify",
        components: {HmClassifySection, HmIndexFooter},
        data(){
          return {
            classify:[]
          }
        },
        created() {
        this._initdata()
      },
        methods:{
        _initdata(){
          fetch("http://localhost:3000/classify")
            .then(res=>{
              res.json().then(data=>{
                this.classify=data.classify
              })
            })
        }
      }
    }
</script>

<style scoped>
  .classify{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

}
  .ban{
  margin: 10px;
}
  header{
    background: #d60f0b;
    height: 0.65rem;
  }
  header p{
    text-align: center;
    font-size: 0.3rem;
    color: #fff;
    position:relative;
    line-height: 0.65rem;
    vertical-align: middle;
  }
  #search{
    font-size: 0.32rem;
    position: absolute;
    right: 0.2rem;
  }
  .classify img{
    width: 100%;
  }

</style>
