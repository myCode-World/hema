<template>
<div id="sp">
  <hm-index-header></hm-index-header>
  <hm-index-section
    :banner="banner"
    :link="link"
    :newuser="newuser"
    :lbnh="lbnh"
    :hmtj="hmtj"
    :navlist="navlist"
    :goodslistlike="goodslistlike,goodslistyear,goodslistforyou,goodslistontime,goodslisteating,goodslistbuying"
  ></hm-index-section>
  <hm-index-footer></hm-index-footer>
</div>

</template>

<script>
    import HmIndexHeader from "../components/HmIndex/HmIndexHeader"
    import HmIndexSection from "../components/HmIndex/HmIndexSection";
    import HmIndexFooter from "../components/HmIndex/HmIndexFooter";

    export default {
        name: "HmIndex",
        components:{HmIndexFooter, HmIndexSection, HmIndexHeader},
        data(){
          return {
            banner:[],
            link:[],
            newuser:[],
            lbnh:[],
            hmtj:[],
            navlist:[],
            goodslistlike:[],
            goodslistyear:[],
            goodslistforyou:[],
            goodslistontime:[],
            goodslisteating:[],
            goodslistbuying:[]


          }
        },
        created() {
          this._initdata()
        },
        methods:{
          _initdata(){
            fetch("http://localhost:3000")
              .then(res=>{
                res.json().then(data=>{
                  this.banner=data.banner;

                  this.link=data.link;

                  this.newuser=data.newuser;

                  this.lbnh=data.lbnh;

                  this.hmtj=data.hmtj;

                  this.navlist=data.navlist;

                  this.goodslistlike=data.goodslistlike;

                  this.goodslistyear=data.goodslistyear;

                  this.goodslistforyou=data.goodslistforyou;

                  this.goodslistontime=data.goodslistontime

                  this.goodslisteating=data.goodslisteating

                  this.goodslistbuying=data.goodslistbuying


                })
              })

          }
      }
    }
</script>

<style scoped>
  #sp{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
