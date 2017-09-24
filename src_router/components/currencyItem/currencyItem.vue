<template>
  <div class="wrapper">
    <div class="title">
      <img src="https://img2.epetbar.com/nowater/2017-03/09/18/ca98c516add7611e3d0d810d58c087bf.jpg">
    </div>
    <div class="content">
      <div class="leftImg">
        <img src="https://img2.epetbar.com/nowater/2017-09/21/09/03f51eb78add57a87f2619517758cbf4.jpg@!water">
      </div>
      <div class="rightImg">
        <div class="rightTopImg">
          <img src="https://img2.epetbar.com/nowater/2017-09/21/09/042df360a733282ab3544ce261e0a75d.jpg@!water">
        </div>
        <div class="rightBottomImg">
          <img src="https://img2.epetbar.com/nowater/2017-09/21/10/fcb76da8467e018d480207720f0bd74a.jpg@!water">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapper
  width 100%
  .title
    width 100%
    height 40px
    img
      width 100%
      height 100%
      vertical-align middle
  .content
    width 100%
    border-top 1px solid #e7e7e7
    display flex
    .leftImg
      width 42.67%
      height 188px
      img
        width 100%
        height 100%
        border-right 1px solid #e7e7e7
        vertical-align middle
    .rightImg
      width 57.33%
      .rightTopImg
      .rightBottomImg
        &>img
          vertical-align middle
</style>
