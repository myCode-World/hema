<template>
  <div class="classpage">
    <hm-class-list-header @back="goBack" :nid="nid"></hm-class-list-header>
    <hm-class-list-section :littleclassify="littleclassifyone,littleclassifytwo,littleclassifythree"></hm-class-list-section>
  </div>

</template>

<script>
    import HmClassListHeader from "../components/HmClassList/HmClassListHeader";
    import HmClassListSection from "../components/HmClassList/HmClassListSection";

    export default {
        name: "ClassList",
        components: {HmClassListSection, HmClassListHeader},
      data(){
          return {
            nid:[],
            newsInfo:0,
            classdata:false,
            littleclassify:[],
            littleclassifyone:[],
            littleclassifytwo:[],
            littleclassifythree:[]
          }
        },
      created(){
          //获取url参数 ?id=xxx /:id
          let  newsId = this.$route.params.id;
          let nid = this.$route.params.nid.claname;
          this.nid=nid
          this.newsInfo = newsId;
          this.fenlei()
          this._initdata()
        },
      methods:{
        _initdata(){
          fetch("http://localhost:3000/classify")
            .then(res=>{
              res.json().then(data=>{
                this.littleclassifyone=data.littleclassifyone
                this.littleclassifytwo=data.littleclassifytwo
                this.littleclassifythree=data.littleclassifythree
              })
            })
        },
          fenlei(){
            if(this.newsInfo==0){
                this.classdata=true
            }
          },
          goBack(){
            // this.$router.push("/HmClassify")
            this.$router.go(-1);
          }

      }

    }
</script>

<style scoped>
  .classpage{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
