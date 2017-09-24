<template>
  <div class="customTitle">
    <div class="titleWrap">
      <div class="imgTitle">
        <img :src=customTitles[index].imgTitle>
      </div>
      <div class="moreTitle" v-show="customTitles[index].moreTitle">
        <img :src=customTitles[index].moreTitle>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        customTitles: [
          {
            imgTitle: "https://img2.epetbar.com/nowater/2017-07/06/8/7b40d88fc2263cf593bf07559e71cec0.png",
            moreTitle: "https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png"
          },
          {
            imgTitle: "https://img2.epetbar.com/nowater/2017-04/19/18/9cfe1253127a6fa47de6e711e216d1ee.png",
            moreTitle: "https://img2.epetbar.com/nowater/2017-04/19/18/8e1b9b24894c1d32c809e2a387d4e425.png"
          },
          {
            imgTitle: "https://img2.epetbar.com/nowater/2017-04/19/20/7f62736d64ad9222875ff3f36d094997.png",
            moreTitle: ""
          },
          {
            imgTitle: "https://img2.epetbar.com/nowater/2017-01/13/20/a1225213b3d2bc9067676102e629bf1e.png",
            moreTitle: "https://static.epetbar.com/static_web/wap/dist/images/background/index_icon_comment_sanjiao.png"
          }
        ]
      }
    },
    props: {
      index: Number
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.customTitle
  position relative
  width 100%
  height 53px
  .titleWrap
    display flex
    position relative
    width 100%
    height 100%
    .imgTitle
      background yellow
      height 100%
      img
        position absolute
        top 0
        left 94px
        display block
        width 187px
        height 100%
        margin 0 auto
        vertical-align middle
    .moreTitle
      position absolute
      top 3px
      right 0
      width 120px
      height 48px
      margin auto 0 auto -60px
      img
        position absolute
        top 0
        right 0
        display block
        width 60px
        height 100%

</style>
