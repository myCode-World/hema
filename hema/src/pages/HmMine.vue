<template>
  <div class="mypages">
    <section>
      <header>
        <div class="header">
          <i class="iconfont icon-shezhi"></i>
          <i class="iconfont icon-kefu"></i>
        </div>
      </header>
      <div class="userbox">
        <div class="userhead">
          <div class="user">
            <img src="../assets/img/mine.png" alt="">
            <p>柒少</p>
          </div>
          <div class="tool">
            <img src="../assets/img/sao.png" alt="">
            <img src="../assets/img/code.png" alt="">
          </div>
        </div>
        <ul class="userinfo">
          <li>
            <h5>6</h5>
            <p>优惠券/赠品券</p>
          </li>
          <li>
            <h5>0.00</h5>
            <p>礼品卡/提货券</p>
          </li>
          <li>
            <h5>0</h5>
            <p>电子券</p>
          </li>
        </ul>
      </div>
      <hm-mine-link :mine="mine"></hm-mine-link>
      <hm-class-section-list :littleclassify="littleclassify" class="like"></hm-class-section-list>
    </section>
    <hm-index-footer></hm-index-footer>
  </div>

</template>

<script>
    import HmIndexFooter from "../components/HmIndex/HmIndexFooter";
    import HmMineLink from "../components/HmMine/HmMineLink";
    import HmMineGuessLike from "../components/HmMine/HmMineGuessLike";
    import HmClassSectionList from "../components/HmClassList/HmClassSectionList";
    export default {
      name: "HmMine",
      components: {HmClassSectionList, HmMineGuessLike, HmMineLink, HmIndexFooter},
      data(){
        return {
          mine:[],
          littleclassify:[]
        }
      },
      created() {
        this._initdata()
      },
      methods:{
        _initdata(){
          fetch("http://localhost:3000/mine")
            .then(res=>{
              res.json().then(data=>{
                this.mine=data.mine;
                this.littleclassify=data.littleclassify;

              })
            })

        }
      }
    }
</script>

<style scoped>
  .mypages{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  /*header*/
  header{
    height:1.8rem;
    width: 100%;
    background: url("../../static/img/myban.png")no-repeat top center;
    align-items: center;
  }
  .header{
    width: 100%;
    height: 0.75rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #d60f0a;
  }
  .header .iconfont{
    font-size: .36rem;
    color: white;
    padding: 0 0.18rem;
  }

  section{
    flex: 1;
    overflow-y: auto;
    background: #f5f5f5;
  }

  .userbox{
    width: 90%;
    height: 1.75rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    top: -0.3rem;
    left: 0;
    background: linear-gradient( #fff 90%,#0acaff 10%);
  }
  .userhead{
    display: flex;
    justify-content: space-between;
  }
  .user {
    display: flex;
  }
  .user img{
    width: 0.9rem;
    height: 0.9rem;
    position: relative;
    top: -0.2rem;
    left: 0.2rem;
  }
  .user p{
    font-size: 0.18rem;
    color: #0acaff;
    padding-top: 0.2rem;
    margin-left: 0.35rem;
  }
  .tool{
    display: flex;
  }
  .tool img{
    width: 0.36rem;
    height: 0.36rem;
    margin: 0.2rem;
  }

  .userinfo{
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .userinfo h5{
    color: #333;
    font-size: 0.12rem;
    margin: 0.1rem 0;
  }
  .userinfo p{
    color: #999999;
    font-size: 0.16rem;
  }

  .like{
    width: 90%;
    margin: 0 auto;
    background: #fff;
  }

</style>
