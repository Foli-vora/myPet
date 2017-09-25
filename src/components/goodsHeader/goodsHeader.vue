<template>
  <div class="goodsHeader">
    <div class="goodsWrap">
      <div id="1" class="leftItem" :class="{on: isRed}">
        <router-link to="/goods/classify">
          <span @click="showItem(true)">分类</span>
        </router-link>
      </div>
      <div id="2" class="rightItem" :class="{on: !isRed}">
        <router-link to="/goods/brand">
          <span @click="showItem(false)">品牌</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isRed: true
      }
    },
    methods: {
      showItem (isRed) {
        this.isRed = isRed
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goodsHeader
    width 100%
    .goodsWrap
      position fixed
      top 0
      left 0
      right 0
      height 40px
      padding 0 15px
      border-bottom 1px solid #cbcbcb
      z-index 11
      background #fff
      display flex
      .leftItem
        /*
          text-align right
        */
        text-align right
        padding-right 20px
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700
      .rightItem
        text-align left
        padding-left 20px
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700
        &>span
          display inline-block
          height 40px
          padding 0 4px
          cursor pointer
      .on
        span
          color #ed4044
          border-bottom 2px solid #ed4044
  /*#1,#2
        padding-right 5px
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700
        &>span
          display inline-block
          height 40px
          padding 0 4px
          cursor pointer
      .on
        text-align right
        span
          color #ed4044
          border-bottom 2px solid #ed4044*/

</style>
