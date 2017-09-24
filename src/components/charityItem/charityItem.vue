<template>
  <div class="charity">
    <div class="charityTitle">
      <div class="charityImg">
        <img :src=images.imgTitle>
      </div>
      <div class="smallTitle" v-show="images.moreTitle">
        <img :src=images.moreTitle>
      </div>
    </div>
    <div class="charityContent">
      <div class="textWrap">
        <p>截止今日，TA公益已联合E宠商城和
          <b class="whiteBtn">15</b>
          家品牌</p>
        <p>累积捐赠
          <b class="cred">1,073,093.10</b>
          元</p>
        <p>已合作
          <b class="smallText">7</b>
          家公益组织，举办参与
          <b class="whiteBtn">2</b>
          场公益活动，助养
          <b class="whiteBtn">34</b>
          位领养人</p>
      </div>
    </div>
    <div class="charityBottom">
      <div class="charityBottomLeft">
        <img :src=images.leftImg>
      </div>
      <div class="charityBottomRight" ref="slideWrap">
        <ul>
          <li v-for="(image,index) in imgArr" :key="index">
            <div class="slideImg">
              <img :src="image.src">
            </div>
            <div class="slideText">已捐助￥{{image.describe}}人民币</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {

    props: {
      index: Number
    },
    data () {
      return {
        images: {
          imgTitle: "https://img2.epetbar.com/nowater/2016-12/02/12/617e8ae8c72da60d562a30170c26c118.jpg",
          moreTitle: "https://img2.epetbar.com/nowater/2016-12/02/16/0d2acd3b4d742a510dfa0142d493e145.png",
          leftImg: 'https://img2.epetbar.com/nowater/2016-12/02/12/c31f5c121481db47aaf92f04d6be2d6e.png'
        },
        imgArr: [
          {
            src:'https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png',
            describe: 258520.46
          },
          {
            src:'https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg',
            describe: 637282.22
          },
          {
            src:'https://img2.epetbar.com/nowater/brand_logo/2017-07/14/10/86414673b92fb227bbd0d006949814ab.jpg',
            describe: 937382.44
          },
          {
            src:'https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg',
            describe: 284930.44
          },
          {
            src:'https://img2.epetbar.com/nowater/2016-08/18/16/92371ab34de0ea12b67028d6625c5180.jpg',
            describe: 274638.33
          },
          {
            src:'https://img2.epetbar.com/nowater/2016-08/18/16/c997f3ae79a7568cf7b6dde5c7b7f8b1.jpg',
            describe: 482728.33
          },
          {
            src:'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/276527f25e9151ef48b0b8d2dba79d29.jpg',
            describe: 489201.88
          }
        ]
      }
    },

    mounted () {
      this.$nextTick(() => {
        /*if(!this.scroll) {
          this.scroll = new BScroll(this.$refs.slideWrap,{
            click: true
          })
        } else {
          this.scroll.refresh()
        }*/
        new BScroll(this.$refs.slideWrap,{
          scrollX: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.charity
  width 100%
  .charityTitle
    position relative
    width 100%
    height 45px
    .charityImg
      width 100%
      height 100%
      img
        width 159px
        height 100%
        position absolute
        top 0
        left 108px
    .smallTitle
      width 80px
      height 21px
      position absolute
      top 12px
      right 0
      img
        width 75px
        height 11px
        margin 10px 5px 0 0


  .charityContent
    background url("https://img2.epetbar.com/nowater/2016-12/02/12/20c6bcc947e062dae210b391e2fa6a98.jpg") no-repeat
    width 100%
    height 140px
    position relative
    .textWrap
      position absolute
      top 20%
      left 0
      width 100%
      color #fff
      font-size 14px
      text-align center
      line-height 1.6em
      p
        margin-top 5px
        font-weight 700
        .whiteBtn
          border-radius 5px
          background #fff
          color red
          margin 0 5px
          padding 0 5px
          font-weight 400
        .cred
          color red
          font-weight 400
        .smallText
          margin 0 5px
          font-weight 400


  .charityBottom
    padding-left 10px
    .charityBottomLeft
      z-index 20
      width 60px
      padding-top 10px
      float left
    .charityBottomRight
      box-sizing border-box
      margin-left 70px
      padding 5px 0 0 5px
      overflow hidden
      ul
        white-space nowrap
        width 560px
        li
          border-left 1px solid #e7e7e7
          display inline-block
          .slideImg
            img
              display block
              height 40px
              width 80px
              margin 0 auto
              vertical-align middle
          .slideText
            width 80px
            border-top 1px solid #e7e7e7
            margin-top 5px
            padding 3px 0
            font-size 12px
            /*省略号*/
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
</style>
