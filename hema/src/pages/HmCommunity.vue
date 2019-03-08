<template>
  <div class="communityPages">
    <header><h3>社交广场</h3></header>
    <hm-community-section :datalist="datalist"></hm-community-section>
    <hm-index-footer></hm-index-footer>
  </div>

</template>

<script>
    import HmIndexFooter from "../components/HmIndex/HmIndexFooter"
    import HmCommunitySection from "../components/HmCommunity/HmCommunitySection"
    export default {
      name: "HmCommunity",
      components: {HmIndexFooter,HmCommunitySection},
      data(){
        return {
          datalist:[]
        }
      },
      created() {
        this._initdata()
      },
      methods:{
        _initdata(){
          fetch("http://localhost:3000/community")
            .then(res=>{
              res.json().then(data=>{
                this.datalist=data.community
              })
            })

        }
      }
    }
</script>

<style scoped>
  .communityPages{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  header{
    height: 0.7rem;
    background: #d60f0b;
    color: #fff;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.7rem;
  }
  header h3{
    font-weight:100;
  }

</style>
