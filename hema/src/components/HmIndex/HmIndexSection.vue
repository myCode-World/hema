<template>
  <section>
    <hm-index-section-banner :banner="banner"></hm-index-section-banner>
    <hm-index-section-links :link="link">
      <img slot="titPic" :src="link[0].titPic" alt=""/>
    </hm-index-section-links>
    <hm-index-section-new-user :newuser="newuser"></hm-index-section-new-user>
    <hm-index-section-active :lbnh="lbnh"><img slot="titPic" :src="lbnh[0].lbnhpic" style="width: 100%;"></hm-index-section-active>
    <hm-index-section-suggest :hmtj="hmtj"></hm-index-section-suggest>
    <hm-index-section-nav :navlist="navlist" :goodslistlike="goodslistlike,goodslistyear,goodslistforyou,goodslistontime,goodslisteating,goodslistbuying"></hm-index-section-nav>
  </section>
</template>

<script>

  import HmIndexSectionBanner from "@/components/HmIndex/HmIndexSectionBanner";
  import HmIndexSectionLinks from "@/components/HmIndex/HmIndexSectionLinks";
  import HmIndexSectionActive from "@/components/HmIndex/HmIndexSectionActive";
  import HmIndexSectionSuggest from "@/components/HmIndex/HmIndexSectionSuggest";
  import HmIndexSectionNewUser from "@/components/HmIndex/HmIndexSectionNewUser";
  import HmIndexSectionNav from "@/components/HmIndex/HmIndexSectionNav";
  import HmIndexGoodsList from "./HmIndexGoodsList";
    export default {
        name: "HmIndexSection",
        components: {
          HmIndexGoodsList,
          HmIndexSectionNav,
          HmIndexSectionNewUser,
          HmIndexSectionSuggest,
          HmIndexSectionActive,
          HmIndexSectionLinks,
          HmIndexSectionBanner,
        },
      props:["banner","link","newuser","lbnh","hmtj","navlist","goodslistlike",
        "goodslistyear","goodslistforyou","goodslistontime","goodslisteating","goodslistbuying"],
    }
</script>

<style scoped>


  section{
    flex: 1;
    overflow-y: auto;
  }




</style>
