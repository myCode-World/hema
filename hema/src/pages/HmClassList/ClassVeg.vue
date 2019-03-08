<template>
  <div>
    <hm-class-section-list :littleclassifythree="littleclassifythree"></hm-class-section-list>
  </div>

</template>

<script>
    import HmClassSectionList from "../../components/HmClassList/HmClassSectionList";
    export default {
        name: "ClassVeg",
        components: {HmClassSectionList},
        data(){
          return{
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
          },
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
</style>
